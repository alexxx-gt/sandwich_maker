// package: 
// file: sandwich.proto
/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Sandwich extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearIngredientsList(): void;
  getIngredientsList(): Array<IngredientMap[keyof IngredientMap]>;
  setIngredientsList(value: Array<IngredientMap[keyof IngredientMap]>): void;
  addIngredients(value: IngredientMap[keyof IngredientMap], index?: number): IngredientMap[keyof IngredientMap];

  getImageUrl(): string;
  setImageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sandwich.AsObject;
  static toObject(includeInstance: boolean, msg: Sandwich): Sandwich.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sandwich, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sandwich;
  static deserializeBinaryFromReader(message: Sandwich, reader: jspb.BinaryReader): Sandwich;
}

export namespace Sandwich {
  export type AsObject = {
    id: string,
    name: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ingredientsList: Array<IngredientMap[keyof IngredientMap]>,
    imageUrl: string,
  }
}

export class ListRequest extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    search: string,
  }
}

export class ListResponse extends jspb.Message {
  clearSandwichesList(): void;
  getSandwichesList(): Array<Sandwich>;
  setSandwichesList(value: Array<Sandwich>): void;
  addSandwiches(value?: Sandwich, index?: number): Sandwich;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    sandwichesList: Array<Sandwich.AsObject>,
  }
}

export class CreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearIngredientsList(): void;
  getIngredientsList(): Array<IngredientMap[keyof IngredientMap]>;
  setIngredientsList(value: Array<IngredientMap[keyof IngredientMap]>): void;
  addIngredients(value: IngredientMap[keyof IngredientMap], index?: number): IngredientMap[keyof IngredientMap];

  getImageUrl(): string;
  setImageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    name: string,
    ingredientsList: Array<IngredientMap[keyof IngredientMap]>,
    imageUrl: string,
  }
}

export class DisposeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisposeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisposeRequest): DisposeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisposeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisposeRequest;
  static deserializeBinaryFromReader(message: DisposeRequest, reader: jspb.BinaryReader): DisposeRequest;
}

export namespace DisposeRequest {
  export type AsObject = {
    id: string,
  }
}

export class StdResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StdResponse): StdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StdResponse;
  static deserializeBinaryFromReader(message: StdResponse, reader: jspb.BinaryReader): StdResponse;
}

export namespace StdResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export interface IngredientMap {
  INVALID: 0;
  EGG: 1;
  HAM: 2;
  CHEESE: 3;
  LETTUCE: 4;
  TOMATO: 5;
}

export const Ingredient: IngredientMap;

