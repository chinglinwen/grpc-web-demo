# api demo

## run server

```
make build && ./demo 
```

## run grpc client

```
$ go run cmd/client/main.go 
2024/09/22 23:41:56 servers: [name:"s1" name:"s2"]
```

## run http client

```
$ grpcurl -plaintext localhost:10001 core.wcloud.io.v1.ServerService/ListServers
{
  "servers": [
    {
      "name": "s1"
    },
    {
      "name": "s2"
    }
  ]
}
```