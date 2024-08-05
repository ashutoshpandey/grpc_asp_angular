﻿using System.Threading.Tasks;
using Grpc.Core;

namespace GrpcTest
{
    public class GrpcService: Greeter.GreeterBase
    {
            private readonly ILogger<GrpcService> _logger;

            public GrpcService(ILogger<GrpcService> logger)
            {
                _logger = logger;
            }

            public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
            {
                return Task.FromResult(new HelloReply
                {
                    Message = "Hello " + request.Name
                });
            }
    }
}
