package services

import (
	"context"

	pb "core.wcloud.io/generated/grpcgen"
)

type ServerServices struct {
	pb.ServerServiceServer
}

func (s *ServerServices) ListServers(context.Context, *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	return &pb.ListServersResponse{
		Servers: []*pb.Server{
			{
				Name: "s1",
			},
			{
				Name: "s2",
			},
		},
	}, nil
}
