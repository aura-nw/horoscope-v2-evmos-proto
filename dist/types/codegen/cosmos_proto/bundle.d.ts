import * as _0 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _0.ScalarType;
    scalarTypeToJSON(object: _0.ScalarType): string;
    ScalarType: typeof _0.ScalarType;
    ScalarTypeSDKType: typeof _0.ScalarType;
    ScalarTypeAmino: typeof _0.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _0.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InterfaceDescriptor;
        fromJSON(object: any): _0.InterfaceDescriptor;
        toJSON(message: _0.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_0.InterfaceDescriptor>): _0.InterfaceDescriptor;
        fromAmino(object: _0.InterfaceDescriptorAmino): _0.InterfaceDescriptor;
        toAmino(message: _0.InterfaceDescriptor): _0.InterfaceDescriptorAmino;
        fromAminoMsg(object: _0.InterfaceDescriptorAminoMsg): _0.InterfaceDescriptor;
        fromProtoMsg(message: _0.InterfaceDescriptorProtoMsg): _0.InterfaceDescriptor;
        toProto(message: _0.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _0.InterfaceDescriptor): _0.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _0.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ScalarDescriptor;
        fromJSON(object: any): _0.ScalarDescriptor;
        toJSON(message: _0.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_0.ScalarDescriptor>): _0.ScalarDescriptor;
        fromAmino(object: _0.ScalarDescriptorAmino): _0.ScalarDescriptor;
        toAmino(message: _0.ScalarDescriptor): _0.ScalarDescriptorAmino;
        fromAminoMsg(object: _0.ScalarDescriptorAminoMsg): _0.ScalarDescriptor;
        fromProtoMsg(message: _0.ScalarDescriptorProtoMsg): _0.ScalarDescriptor;
        toProto(message: _0.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _0.ScalarDescriptor): _0.ScalarDescriptorProtoMsg;
    };
};
