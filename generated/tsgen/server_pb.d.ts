import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from './google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_client_pb from './google/api/client_pb'; // proto import: "google/api/client.proto"
import * as google_api_field_behavior_pb from './google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_api_resource_pb from './google/api/resource_pb'; // proto import: "google/api/resource.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"


export class Disk extends jspb.Message {
  getName(): string;
  setName(value: string): Disk;

  getAuthor(): string;
  setAuthor(value: string): Disk;

  getTitle(): string;
  setTitle(value: string): Disk;

  getRead(): boolean;
  setRead(value: boolean): Disk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Disk.AsObject;
  static toObject(includeInstance: boolean, msg: Disk): Disk.AsObject;
  static serializeBinaryToWriter(message: Disk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Disk;
  static deserializeBinaryFromReader(message: Disk, reader: jspb.BinaryReader): Disk;
}

export namespace Disk {
  export type AsObject = {
    name: string,
    author: string,
    title: string,
    read: boolean,
  }
}

export class Server extends jspb.Message {
  getName(): string;
  setName(value: string): Server;

  getTheme(): string;
  setTheme(value: string): Server;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Server.AsObject;
  static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
  static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Server;
  static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
}

export namespace Server {
  export type AsObject = {
    name: string,
    theme: string,
  }
}

export class CreateServerRequest extends jspb.Message {
  getServer(): Server | undefined;
  setServer(value?: Server): CreateServerRequest;
  hasServer(): boolean;
  clearServer(): CreateServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRequest): CreateServerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRequest;
  static deserializeBinaryFromReader(message: CreateServerRequest, reader: jspb.BinaryReader): CreateServerRequest;
}

export namespace CreateServerRequest {
  export type AsObject = {
    server?: Server.AsObject,
  }
}

export class UpdateServerRequest extends jspb.Message {
  getServer(): Server | undefined;
  setServer(value?: Server): UpdateServerRequest;
  hasServer(): boolean;
  clearServer(): UpdateServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerRequest): UpdateServerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerRequest;
  static deserializeBinaryFromReader(message: UpdateServerRequest, reader: jspb.BinaryReader): UpdateServerRequest;
}

export namespace UpdateServerRequest {
  export type AsObject = {
    server?: Server.AsObject,
  }
}

export class GetServerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerRequest): GetServerRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerRequest;
  static deserializeBinaryFromReader(message: GetServerRequest, reader: jspb.BinaryReader): GetServerRequest;
}

export namespace GetServerRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListServersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListServersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServersRequest): ListServersRequest.AsObject;
  static serializeBinaryToWriter(message: ListServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServersRequest;
  static deserializeBinaryFromReader(message: ListServersRequest, reader: jspb.BinaryReader): ListServersRequest;
}

export namespace ListServersRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListServersResponse extends jspb.Message {
  getServersList(): Array<Server>;
  setServersList(value: Array<Server>): ListServersResponse;
  clearServersList(): ListServersResponse;
  addServers(value?: Server, index?: number): Server;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServersResponse): ListServersResponse.AsObject;
  static serializeBinaryToWriter(message: ListServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServersResponse;
  static deserializeBinaryFromReader(message: ListServersResponse, reader: jspb.BinaryReader): ListServersResponse;
}

export namespace ListServersResponse {
  export type AsObject = {
    serversList: Array<Server.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteServerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerRequest): DeleteServerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerRequest;
  static deserializeBinaryFromReader(message: DeleteServerRequest, reader: jspb.BinaryReader): DeleteServerRequest;
}

export namespace DeleteServerRequest {
  export type AsObject = {
    name: string,
  }
}

export class MergeserversRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MergeserversRequest;

  getOtherServer(): string;
  setOtherServer(value: string): MergeserversRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeserversRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeserversRequest): MergeserversRequest.AsObject;
  static serializeBinaryToWriter(message: MergeserversRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeserversRequest;
  static deserializeBinaryFromReader(message: MergeserversRequest, reader: jspb.BinaryReader): MergeserversRequest;
}

export namespace MergeserversRequest {
  export type AsObject = {
    name: string,
    otherServer: string,
  }
}

export class CreateDiskRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateDiskRequest;

  getBook(): Disk | undefined;
  setBook(value?: Disk): CreateDiskRequest;
  hasBook(): boolean;
  clearBook(): CreateDiskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDiskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDiskRequest): CreateDiskRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDiskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDiskRequest;
  static deserializeBinaryFromReader(message: CreateDiskRequest, reader: jspb.BinaryReader): CreateDiskRequest;
}

export namespace CreateDiskRequest {
  export type AsObject = {
    parent: string,
    book?: Disk.AsObject,
  }
}

export class GetDiskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetDiskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiskRequest): GetDiskRequest.AsObject;
  static serializeBinaryToWriter(message: GetDiskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDiskRequest;
  static deserializeBinaryFromReader(message: GetDiskRequest, reader: jspb.BinaryReader): GetDiskRequest;
}

export namespace GetDiskRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDisksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListDisksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDisksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDisksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDisksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDisksRequest): ListDisksRequest.AsObject;
  static serializeBinaryToWriter(message: ListDisksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDisksRequest;
  static deserializeBinaryFromReader(message: ListDisksRequest, reader: jspb.BinaryReader): ListDisksRequest;
}

export namespace ListDisksRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDisksResponse extends jspb.Message {
  getDisksList(): Array<Disk>;
  setDisksList(value: Array<Disk>): ListDisksResponse;
  clearDisksList(): ListDisksResponse;
  addDisks(value?: Disk, index?: number): Disk;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDisksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDisksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDisksResponse): ListDisksResponse.AsObject;
  static serializeBinaryToWriter(message: ListDisksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDisksResponse;
  static deserializeBinaryFromReader(message: ListDisksResponse, reader: jspb.BinaryReader): ListDisksResponse;
}

export namespace ListDisksResponse {
  export type AsObject = {
    disksList: Array<Disk.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateDiskRequest extends jspb.Message {
  getBook(): Disk | undefined;
  setBook(value?: Disk): UpdateDiskRequest;
  hasBook(): boolean;
  clearBook(): UpdateDiskRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDiskRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateDiskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDiskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDiskRequest): UpdateDiskRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDiskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDiskRequest;
  static deserializeBinaryFromReader(message: UpdateDiskRequest, reader: jspb.BinaryReader): UpdateDiskRequest;
}

export namespace UpdateDiskRequest {
  export type AsObject = {
    book?: Disk.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDiskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteDiskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDiskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDiskRequest): DeleteDiskRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDiskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDiskRequest;
  static deserializeBinaryFromReader(message: DeleteDiskRequest, reader: jspb.BinaryReader): DeleteDiskRequest;
}

export namespace DeleteDiskRequest {
  export type AsObject = {
    name: string,
  }
}

export class MoveDiskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MoveDiskRequest;

  getOtherServerName(): string;
  setOtherServerName(value: string): MoveDiskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveDiskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveDiskRequest): MoveDiskRequest.AsObject;
  static serializeBinaryToWriter(message: MoveDiskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveDiskRequest;
  static deserializeBinaryFromReader(message: MoveDiskRequest, reader: jspb.BinaryReader): MoveDiskRequest;
}

export namespace MoveDiskRequest {
  export type AsObject = {
    name: string,
    otherServerName: string,
  }
}

