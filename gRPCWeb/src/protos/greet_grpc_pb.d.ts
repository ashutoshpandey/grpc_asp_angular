// package: greet
// file: greet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greet_pb from "./greet_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greet_pb.HelloRequest, greet_pb.HelloReply> {
    path: "/greet.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greet_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greet_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<greet_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<greet_pb.HelloRequest, greet_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: greet_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greet_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greet_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greet_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greet_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greet_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
