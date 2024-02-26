import { InterchainAccountPacketData } from "../../v1/packet";
import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgRegisterInterchainAccount() {
    return {
        owner: "",
        connectionId: "",
        version: ""
    };
}
export const MsgRegisterInterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connectionId;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterInterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterInterchainAccount",
            value: MsgRegisterInterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRegisterInterchainAccount.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterInterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
            value: MsgRegisterInterchainAccount.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterInterchainAccountResponse() {
    return {
        channelId: "",
        portId: ""
    };
}
export const MsgRegisterInterchainAccountResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            portId: isSet(object.portId) ? String(object.portId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId;
        obj.port_id = message.portId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterInterchainAccountResponse",
            value: MsgRegisterInterchainAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRegisterInterchainAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterInterchainAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
            value: MsgRegisterInterchainAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendTx() {
    return {
        owner: "",
        connectionId: "",
        packetData: InterchainAccountPacketData.fromPartial({}),
        relativeTimeout: Long.UZERO
    };
}
export const MsgSendTx = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.packetData !== undefined) {
            InterchainAccountPacketData.encode(message.packetData, writer.uint32(26).fork()).ldelim();
        }
        if (!message.relativeTimeout.isZero()) {
            writer.uint32(32).uint64(message.relativeTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.packetData = InterchainAccountPacketData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.relativeTimeout = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            packetData: isSet(object.packetData) ? InterchainAccountPacketData.fromJSON(object.packetData) : undefined,
            relativeTimeout: isSet(object.relativeTimeout) ? Long.fromValue(object.relativeTimeout) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.packetData !== undefined && (obj.packetData = message.packetData ? InterchainAccountPacketData.toJSON(message.packetData) : undefined);
        message.relativeTimeout !== undefined && (obj.relativeTimeout = (message.relativeTimeout || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.packetData = object.packetData !== undefined && object.packetData !== null ? InterchainAccountPacketData.fromPartial(object.packetData) : undefined;
        message.relativeTimeout = object.relativeTimeout !== undefined && object.relativeTimeout !== null ? Long.fromValue(object.relativeTimeout) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSendTx();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.packet_data !== undefined && object.packet_data !== null) {
            message.packetData = InterchainAccountPacketData.fromAmino(object.packet_data);
        }
        if (object.relative_timeout !== undefined && object.relative_timeout !== null) {
            message.relativeTimeout = Long.fromString(object.relative_timeout);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connectionId;
        obj.packet_data = message.packetData ? InterchainAccountPacketData.toAmino(message.packetData) : undefined;
        obj.relative_timeout = message.relativeTimeout ? message.relativeTimeout.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendTx",
            value: MsgSendTx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendTx.decode(message.value);
    },
    toProto(message) {
        return MsgSendTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
            value: MsgSendTx.encode(message).finish()
        };
    }
};
function createBaseMsgSendTxResponse() {
    return {
        sequence: Long.UZERO
    };
}
export const MsgSendTxResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTxResponse();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSendTxResponse();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = Long.fromString(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendTxResponse",
            value: MsgSendTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendTxResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
            value: MsgSendTxResponse.encode(message).finish()
        };
    }
};
