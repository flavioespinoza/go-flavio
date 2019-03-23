# Docker reference

```bash {.copy-clip}
ubuntu image id: f2d318e114cb
```

```bash {.copy-clip}
docker login --username=flavioespinoza --email=flavio.espinoza@gmail.com


docker tag e0cc990ca8f8 flavioespinoza/goflavio:version1
```


```bash {.copy-clip}
docker run --rm -p 9200:9200 -p 9300:9300 --name=es elasticsearch:latest -Des.network.host=0.0.0.
```

```bash {.copy-clip}
docker pull flavioespinoza/goflavio:version1
```