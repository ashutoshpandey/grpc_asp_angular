import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloRequest } from '../protos/generated/hello_pb';
import { GreeterClient } from '../protos/generated/hello_pb_service';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gRPC.Angular.Client';

  grpcClient!: Request;

  messages: string[] = [];

  constructor(private greeterClient: GreeterClient) { }

  ngOnInit() {
    const request: HelloRequest = new HelloRequest();
    request.setName("Ashutosh");

    this.greeterClient.sayHello(request, (response: any) => {
      console.log(response.message);
    });
  }

  stopStream() {
    this.grpcClient.close();
  }
}
