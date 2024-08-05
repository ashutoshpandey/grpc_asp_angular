import { Injectable } from '@angular/core';
import { GreeterClient } from '../protos/greet_grpc_pb';
import { HelloReply, HelloRequest } from '../protos/greet_pb';

@Injectable({
  providedIn: 'root',
})
export class GrpcClientService {
  private client: GreeterClient;

  constructor() {
    this.client = new GreeterClient('http://localhost:5000', null);
  }

  sayHello(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new HelloRequest();
      request.setName(name);

      this.client.sayHello(request, {}, (err, response: HelloReply) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.getMessage());
        }
      });
    });
  }
}
