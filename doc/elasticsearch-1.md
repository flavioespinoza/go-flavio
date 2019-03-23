# Elasticsearch instance deployed on Kubernetes Cluster on Google Cloud

## Install
> **All installs are to be done in the Google Cloud Shell.**

In Cloud Shell, cd into your root directory.
```bash {.copy-clip}
cd ~
```

### [Helm](https://github.com/helm/helm)
In Cloud Shell, download and install the `helm` binary:
```bash {.copy-clip}
wget https://storage.googleapis.com/kubernetes-helm/helm-v2.13.1-linux-amd64.tar.gz
```
Unpack
```bash {.copy-clip}
tar zxfv helm-v2.13.1-linux-amd64.tar.gz
```
Copy to temp directory.
```bash {.copy-clip}
cp linux-amd64/helm .
```

Using `sudo`, move `helm` executable to the bin path.
```bash {.copy-clip}
sudo mv linux-amd64/helm /usr/local/bin/helm
```

Initialize `helm` and upgrade.
```bash {.copy-clip}
helm init --upgrade
```

Check `helm` is installed correctly.
```bash {.copy-clip}
helm version
```

### [Docker](https://docs.docker.com/install/)
Configure `gcloud` as a `docker` credential helper:
```bash {.copy-clip}
gcloud auth configure-docker
```

### Install Application

//TODO: Add install instructions

```bash {.copy-clip}
IMAGE_ELASTICSEARCH=marketplace.gcr.io/google/elasticsearch@sha256:d98e0b6b2567775552dbc22a8c56e258051699b88d1e090175bd88caecbc1d91

IMAGE_INIT=marketplace.gcr.io/google/elasticsearch/ubuntu16_04@sha256:281e570b1c254121ef9db4698554084a809d120aebfe14486c1014d0b6d4d3f5
```

### Expand manifest
```bash {.copy-clip}
helm template chart/elasticsearch \
  --name $APP_INSTANCE_NAME \
  --namespace $NAMESPACE \
  --set elasticsearch.initImage=$IMAGE_INIT \
  --set elasticsearch.image=$IMAGE_ELASTICSEARCH \
  --set elasticsearch.replicas=$REPLICAS > "${APP_INSTANCE_NAME}_manifest.yaml"
```