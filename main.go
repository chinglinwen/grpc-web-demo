package main

import (
	"flag"
	"io/ioutil"
	"net"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/reflection"

	pb "core.wcloud.io/generated/grpcgen" // Update
	"core.wcloud.io/services"             // Update
)

func main() {
	grpcAddr := flag.String("grpc", "0.0.0.0:10001", "grpc addr")
	httpAddr := flag.String("http", "0.0.0.0:10000", "http addr")
	flag.Parse()
	log := grpclog.NewLoggerV2(os.Stdout, ioutil.Discard, ioutil.Discard)
	grpclog.SetLoggerV2(log)

	lis, err := net.Listen("tcp", *grpcAddr)
	if err != nil {
		log.Fatalf("failed to listen, err: %v", err)
	}

	log.Info("Serving gRPC on ", *grpcAddr)
	grpcServer := grpc.NewServer(grpc.Creds(insecure.NewCredentials()))
	s := &services.ServerServices{}
	pb.RegisterServerServiceServer(grpcServer, s)
	reflection.Register(grpcServer)
	go func() {
		log.Fatal(grpcServer.Serve(lis))
	}()

	wrappedGrpc := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool {
		// Allow all origins, DO NOT do this in production
		return true
	}))

	log.Info("Serving HTTP on ", *httpAddr)
	log.Fatal(http.ListenAndServe(*httpAddr, wrappedGrpc))
}
