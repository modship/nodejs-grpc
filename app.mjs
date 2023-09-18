// import * as grpc from 'grpc';
import { PublicServiceClient } from '/Users/urvoy/dev/nodejs-grpc/gen/massa/api/v1/public.client';
import { RpcTransport } from '@protobuf-ts/runtime-rpc';
// import { GetStatusRequest } from '/Users/urvoy/dev/nodejs-grpc/gen/massa/api/v1/public';

console.log('Hello World');
const transport = new RpcTransport({
    host: 'http://149.202.84.7',
    port: 33037,
    credentials: 'insecure',
    timeout: 1000,
    format: 'protobuf',
    // debug: true,
});
// let client_streaming = transport.clientStreaming();

// const client2 = new grpc.Client('http://149.202.84.7:33037', grpc.credentials.createInsecure());

// client.makeClientStreamRequest()
let client = new PublicServiceClient(transport);

client.getStatus({}).then((res) => {
    console.log(res);
});