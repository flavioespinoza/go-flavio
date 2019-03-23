# Redis deployment on Kubernetes cluster

---

## Setup

**Clone GitHub repository**

```bash {.copy-clip}
git clone https://github.com/kubernetes/examples
```
```bash {.copy-clip}
cd examples/guestbook
```

**Setup gcloud and kubectl credentials**
```bash {.copy-clip}
gcloud container clusters \
    get-credentials `<your-cluster-name>` \
    --zone `<your-cluster-zone>`
```

## Master Deployment
> redis-master-deployment.yaml

```yaml {.copy-clip}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis-master
spec:
  selector:
    matchLabels:
      app: redis
      role: master
      tier: backend
  replicas: 1
  template:
    metadata:
      labels:
        app: redis
        role: master
        tier: backend
    spec:
      containers:
      - name: master
        image: k8s.gcr.io/redis:e2e  # or just image: redis
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        ports:
        - containerPort: 6379
```
> This is the `Master Controller` and contains configurations to deploy a `Redis master app`. 

> The `spec field` defines the `Pod specification` which the` Replication Controller` will use to create the `Redis pod`. 

> The  `image tag` refers to a `Docker image` to be pulled from a `Docker Hub` registry.

**Deploy Master Controller**

```bash {.copy-clip}
kubectl create -f \
    redis-master-deployment.yaml
```

**View running pods**
```bash {.copy-clip}
kubectl get pods
```
Console output:
```bash {.copy-clip}
NAME                            READY     STATUS    RESTARTS   AGE
redis-master-6b464554c8-v7dgn   1/1       Running   0          2m
```

## Master Service
> redis-master-service.yaml

```yaml {.copy-clip}
apiVersion: v1
kind: Service
metadata:
  name: redis-master
  labels:
    app: redis
    role: master
    tier: backend
spec:
  ports:
  - port: 6379
    targetPort: 6379
  selector:
    app: redis
    role: master
    tier: backend
```

> This `Service` acts as a `Proxy` and a `Manifest`.

> The `Proxy` directs traffic to the `Redis master Pod`.

> The `Manifest` creates a `Service` named `redis-master` with a set of `label` selectors: `app`, `role`, and `tier`.

> These `labels` match the set of `labels` that were deployed in the previous step.

**Deploy Master Service**

```bash {.copy-clip}
kubectl create -f \
    redis-master-service.yaml
```

**Verify that the service `redis-master` was created**
```bash {.copy-clip}
kubectl get service
```

Console output: 
```bash {.copy-clip}
NAME           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
kubernetes     ClusterIP   10.3.240.1     <none>        443/TCP    41m
redis-master   ClusterIP   10.3.249.213   <none>        6379/TCP   5m
```

## Replica Workers

> redis-slave-deployment.yaml

```yaml {.copy-clip}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis-slave
spec:
  selector:
    matchLabels:
      app: redis
      role: slave
      tier: backend
  replicas: 2
  template:
    metadata:
      labels:
        app: redis
        role: slave
        tier: backend
    spec:
      containers:
      - name: slave
        image: gcr.io/google_samples/gb-redisslave:v1
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        env:
        - name: GET_HOSTS_FROM
          value: dns
          # If your cluster config does not include a dns service, then to
          # instead access an environment variable to find the master
          # service's host, comment out the 'value: dns' line above, and
          # uncomment the line below:
          # value: env
        ports:
        - containerPort: 6379
```
> This `Manifest` defines `2 Replicas` for the Redis workers.

**Deploy Replicas**

```bash {.copy-clip}
kubectl create -f \
    redis-slave-deployment.yaml
```

**Verify `Replicas` are deployed by querying the list of `Pods`.**

```bash {.copy-clip}
kubectl get pods
```

Console output:
```bash {.copy-clip}
redis-master-6b464554c8-v7dgn   1/1       Running   0          31m
redis-slave-b58dc4644-bs9rq     1/1       Running   0          25s
redis-slave-b58dc4644-rqfrc     1/1       Running   0          25s
```

## Replica Workers Service

> redis-slave-service.yaml

```yaml {.copy-clip}
apiVersion: v1
kind: Service
metadata:
  name: redis-slave
  labels:
    app: redis
    role: slave
    tier: backend
spec:
  ports:
  - port: 6379
  selector:
    app: redis
    role: slave
    tier: backend
```

> The `App` needs to communicate to `Replica Workers` to read data. 

> To make the `Replica Workers` discoverable, we need to set up a `Service`. 

> This `Service` provides `Load Balancing` to the set of `Pods`.

**Deploy Replica Workers Service**

```bash {.copy-clip}
kubectl create -f \
    redis-slave-service.yaml
```

> This file defines a `Service` named `redis-slave` running on `PORT:6379`. 

> Note that the `label` selector fields matches the `Redis Worker Pod`s created in the previous step.

**Verify that the Service is created**

```bash {.copy-clip}
kubectl get service
```

Console output: 

```bash {.copy-clip}
NAME           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
kubernetes     ClusterIP   10.3.240.1     <none>        443/TCP    1h
redis-master   ClusterIP   10.3.249.213   <none>        6379/TCP   27m
redis-slave    ClusterIP   10.3.252.98    <none>        6379/TCP   3m
```

# Frontend Deployment

> frontend-deployment.yaml

```yaml {.copy-clip}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  selector:
    matchLabels:
      app: guestbook
      tier: frontend
  replicas: 3
  template:
    metadata:
      labels:
        app: guestbook
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: gcr.io/google-samples/gb-frontend:v4
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        env:
        - name: GET_HOSTS_FROM
          value: dns
          # If your cluster config does not include a dns service, then to
          # instead access environment variables to find service host
          # info, comment out the 'value: dns' line above, and uncomment the
          # line below:
          # value: env
        ports:
        - containerPort: 80
```

**Create Frontend Controller**

```bash {.copy-clip}
kubectl create -f \
    frontend-deployment.yaml
```

**Expose Frontend on an external IP address**

```bash {.copy-clip}
sed -i -e 's/NodePort/LoadBalancer/g' \
    frontend-service.yaml
```

**Create Frontend Service**

```bash {.copy-clip}
kubectl create -f \
    frontend-service.yaml
```

## Visit App

**Find your external IP for service named `Frontend`**

```bash {.copy-clip}
kubectl get services --watch
```
Console output: 

```bash {.copy-clip}
NAME           TYPE           CLUSTER-IP      EXTERNAL-IP        PORT(S)        AGE
frontend       LoadBalancer   10.3.255.80    `104.198.213.117`   80:30440/TCP   7m
kubernetes     ClusterIP      10.3.240.1      <none>             443/TCP        1h
redis-master   ClusterIP      10.3.249.213    <none>             6379/TCP       56m
redis-slave    ClusterIP      10.3.252.98     <none>             6379/TCP       32m
```

**Open browser and paste in `EXTERNAL-IP` and hit `Enter`**

http://104.198.213.117/


---
 - Note: External IP may take a few minutes to show up