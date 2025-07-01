package main

import (
  "context"
  "log"
  "strconv"

  service "github.com/wundergraph/cosmo/plugin/generated"

  routerplugin "github.com/wundergraph/cosmo/router-plugin"
  "google.golang.org/grpc"
)

func main() {
  pl, err := routerplugin.NewRouterPlugin(func(s *grpc.Server) {
    s.RegisterService(&service.MyGrpcPluginService_ServiceDesc, &MyGrpcPluginService{
      nextID: 1,
    })
  })

  if err != nil {
    log.Fatalf("failed to create router plugin: %v", err)
  }

  pl.Serve()
}

type MyGrpcPluginService struct {
  service.UnimplementedMyGrpcPluginServiceServer
  nextID int
}

func (s *MyGrpcPluginService) QueryHello(ctx context.Context, req *service.QueryHelloRequest) (*service.QueryHelloResponse, error) {
  response := &service.QueryHelloResponse{
    Hello: &service.World{
      Id:   strconv.Itoa(s.nextID),
      Name: req.Name,
    },
  }
  s.nextID++
  return response, nil
}
