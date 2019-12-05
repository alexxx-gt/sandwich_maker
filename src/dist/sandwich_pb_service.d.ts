// package: 
// file: sandwich.proto
/* tslint:disable */

import * as sandwich_pb from "./sandwich_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SandwichServiceList = {
  readonly methodName: string;
  readonly service: typeof SandwichService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sandwich_pb.ListRequest;
  readonly responseType: typeof sandwich_pb.ListResponse;
};

type SandwichServiceCreate = {
  readonly methodName: string;
  readonly service: typeof SandwichService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sandwich_pb.CreateRequest;
  readonly responseType: typeof sandwich_pb.StdResponse;
};

type SandwichServiceDispose = {
  readonly methodName: string;
  readonly service: typeof SandwichService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sandwich_pb.DisposeRequest;
  readonly responseType: typeof sandwich_pb.StdResponse;
};

export class SandwichService {
  static readonly serviceName: string;
  static readonly List: SandwichServiceList;
  static readonly Create: SandwichServiceCreate;
  static readonly Dispose: SandwichServiceDispose;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class SandwichServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  list(
    requestMessage: sandwich_pb.ListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sandwich_pb.ListResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: sandwich_pb.ListRequest,
    callback: (error: ServiceError|null, responseMessage: sandwich_pb.ListResponse|null) => void
  ): UnaryResponse;
  create(
    requestMessage: sandwich_pb.CreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sandwich_pb.StdResponse|null) => void
  ): UnaryResponse;
  create(
    requestMessage: sandwich_pb.CreateRequest,
    callback: (error: ServiceError|null, responseMessage: sandwich_pb.StdResponse|null) => void
  ): UnaryResponse;
  dispose(
    requestMessage: sandwich_pb.DisposeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sandwich_pb.StdResponse|null) => void
  ): UnaryResponse;
  dispose(
    requestMessage: sandwich_pb.DisposeRequest,
    callback: (error: ServiceError|null, responseMessage: sandwich_pb.StdResponse|null) => void
  ): UnaryResponse;
}

