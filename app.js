"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as grpc from 'grpc';
const public_client_1 = require("./gen/massa/api/v1/public.client");
console.log('Hello World');
const transport = {};
// let client_streaming = transport.clientStreaming();
// const client2 = new grpc.Client('http://149.202.84.7:33037', grpc.credentials.createInsecure());
// client.makeClientStreamRequest()
let client = new public_client_1.PublicServiceClient(transport);
client.getStatus({}).then((res) => {
    console.log(res);
});
