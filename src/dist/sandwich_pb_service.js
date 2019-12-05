// package: 
// file: sandwich.proto

var sandwich_pb = require("./sandwich_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SandwichService = (function () {
  function SandwichService() {}
  SandwichService.serviceName = "SandwichService";
  return SandwichService;
}());

SandwichService.List = {
  methodName: "List",
  service: SandwichService,
  requestStream: false,
  responseStream: false,
  requestType: sandwich_pb.ListRequest,
  responseType: sandwich_pb.ListResponse
};

SandwichService.Create = {
  methodName: "Create",
  service: SandwichService,
  requestStream: false,
  responseStream: false,
  requestType: sandwich_pb.CreateRequest,
  responseType: sandwich_pb.StdResponse
};

SandwichService.Dispose = {
  methodName: "Dispose",
  service: SandwichService,
  requestStream: false,
  responseStream: false,
  requestType: sandwich_pb.DisposeRequest,
  responseType: sandwich_pb.StdResponse
};

exports.SandwichService = SandwichService;

function SandwichServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SandwichServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SandwichService.List, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SandwichServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SandwichService.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SandwichServiceClient.prototype.dispose = function dispose(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SandwichService.Dispose, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SandwichServiceClient = SandwichServiceClient;

