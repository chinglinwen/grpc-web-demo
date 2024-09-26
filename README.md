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

## install

```bash
wget https://github.com/protocolbuffers/protobuf/releases/download/v26.1/protoc-26.1-linux-x86_64.zip

	#https://grpc.io/docs/protoc-installation/
	unzip protoc-26.1-linux-x86_64.zip -d $HOME/.local
	echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
	source ~/.bashrc
	protoc --version

git clone --depth=1 https://github.com/googleapis/googleapis.git ~/.local/googleapis

#https://grpc.io/docs/languages/go/quickstart/
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
export PATH="$PATH:$(go env GOPATH)/bin"

wget https://nodejs.org/dist/v22.5.1/node-v22.5.1-linux-x64.tar.xz
unxz node-v22.5.1-linux-x64.tar.xz
mkdir -p $HOME/soft/node
tar -xf node-v22.5.1-linux-x64.tar -C $HOME/soft/node
export PATH=$PATH:$HOME/soft/node/node-v22.5.1-linux-x64/bin
npm install -g protoc-gen-js

wget https://github.com/grpc/grpc-web/releases/download/1.5.0/protoc-gen-grpc-web-1.5.0-linux-x86_64
sudo mv protoc-gen-grpc-web-1.5.0-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
sudo chmod +x /usr/local/bin/protoc-gen-grpc-web

go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
```