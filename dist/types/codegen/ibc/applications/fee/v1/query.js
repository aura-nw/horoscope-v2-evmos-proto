import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel } from "./genesis";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryIncentivizedPacketsRequest() {
    return {
        pagination: undefined,
        queryHeight: Long.UZERO
    };
}
export const QueryIncentivizedPacketsRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryHeight = reader.uint64();
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            queryHeight: isSet(object.queryHeight) ? Long.fromValue(object.queryHeight) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? Long.fromValue(object.queryHeight) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPacketsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.query_height !== undefined && object.query_height !== null) {
            message.queryHeight = Long.fromString(object.query_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPacketsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryIncentivizedPacketsRequest",
            value: QueryIncentivizedPacketsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPacketsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPacketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
            value: QueryIncentivizedPacketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPacketsResponse() {
    return {
        incentivizedPackets: []
    };
}
export const QueryIncentivizedPacketsResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.incentivizedPackets) {
            IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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
            incentivizedPackets: Array.isArray(object?.incentivizedPackets) ? object.incentivizedPackets.map((e) => IdentifiedPacketFees.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPackets) {
            obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.incentivizedPackets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsResponse();
        message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPacketsResponse();
        message.incentivizedPackets = object.incentivized_packets?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivizedPackets) {
            obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_packets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPacketsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryIncentivizedPacketsResponse",
            value: QueryIncentivizedPacketsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPacketsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPacketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
            value: QueryIncentivizedPacketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPacketRequest() {
    return {
        packetId: PacketId.fromPartial({}),
        queryHeight: Long.UZERO
    };
}
export const QueryIncentivizedPacketRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryHeight = reader.uint64();
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
            packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
            queryHeight: isSet(object.queryHeight) ? Long.fromValue(object.queryHeight) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
        message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketRequest();
        message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
        message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? Long.fromValue(object.queryHeight) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPacketRequest();
        if (object.packet_id !== undefined && object.packet_id !== null) {
            message.packetId = PacketId.fromAmino(object.packet_id);
        }
        if (object.query_height !== undefined && object.query_height !== null) {
            message.queryHeight = Long.fromString(object.query_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
        obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPacketRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryIncentivizedPacketRequest",
            value: QueryIncentivizedPacketRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPacketRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPacketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
            value: QueryIncentivizedPacketRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPacketResponse() {
    return {
        incentivizedPacket: IdentifiedPacketFees.fromPartial({})
    };
}
export const QueryIncentivizedPacketResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.incentivizedPacket !== undefined) {
            IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
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
            incentivizedPacket: isSet(object.incentivizedPacket) ? IdentifiedPacketFees.fromJSON(object.incentivizedPacket) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.incentivizedPacket !== undefined && (obj.incentivizedPacket = message.incentivizedPacket ? IdentifiedPacketFees.toJSON(message.incentivizedPacket) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketResponse();
        message.incentivizedPacket = object.incentivizedPacket !== undefined && object.incentivizedPacket !== null ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPacketResponse();
        if (object.incentivized_packet !== undefined && object.incentivized_packet !== null) {
            message.incentivizedPacket = IdentifiedPacketFees.fromAmino(object.incentivized_packet);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toAmino(message.incentivizedPacket) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryIncentivizedPacketResponse",
            value: QueryIncentivizedPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPacketResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
            value: QueryIncentivizedPacketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPacketsForChannelRequest() {
    return {
        pagination: undefined,
        portId: "",
        channelId: "",
        queryHeight: Long.UZERO
    };
}
export const QueryIncentivizedPacketsForChannelRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(32).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
                    break;
                case 4:
                    message.queryHeight = reader.uint64();
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            queryHeight: isSet(object.queryHeight) ? Long.fromValue(object.queryHeight) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? Long.fromValue(object.queryHeight) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.query_height !== undefined && object.query_height !== null) {
            message.queryHeight = Long.fromString(object.query_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPacketsForChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
            value: QueryIncentivizedPacketsForChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPacketsForChannelRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPacketsForChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
            value: QueryIncentivizedPacketsForChannelRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPacketsForChannelResponse() {
    return {
        incentivizedPackets: []
    };
}
export const QueryIncentivizedPacketsForChannelResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.incentivizedPackets) {
            IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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
            incentivizedPackets: Array.isArray(object?.incentivizedPackets) ? object.incentivizedPackets.map((e) => IdentifiedPacketFees.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPackets) {
            obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.incentivizedPackets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        message.incentivizedPackets = object.incentivized_packets?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivizedPackets) {
            obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_packets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPacketsForChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
            value: QueryIncentivizedPacketsForChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPacketsForChannelResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPacketsForChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
            value: QueryIncentivizedPacketsForChannelResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalRecvFeesRequest() {
    return {
        packetId: PacketId.fromPartial({})
    };
}
export const QueryTotalRecvFeesRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = PacketId.decode(reader, reader.uint32());
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
            packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalRecvFeesRequest();
        message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalRecvFeesRequest();
        if (object.packet_id !== undefined && object.packet_id !== null) {
            message.packetId = PacketId.fromAmino(object.packet_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalRecvFeesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalRecvFeesRequest",
            value: QueryTotalRecvFeesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalRecvFeesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalRecvFeesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
            value: QueryTotalRecvFeesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalRecvFeesResponse() {
    return {
        recvFees: []
    };
}
export const QueryTotalRecvFeesResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recvFees) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recvFees.push(Coin.decode(reader, reader.uint32()));
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
            recvFees: Array.isArray(object?.recvFees) ? object.recvFees.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.recvFees) {
            obj.recvFees = message.recvFees.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.recvFees = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalRecvFeesResponse();
        message.recvFees = object.recvFees?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalRecvFeesResponse();
        message.recvFees = object.recv_fees?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.recvFees) {
            obj.recv_fees = message.recvFees.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.recv_fees = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalRecvFeesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalRecvFeesResponse",
            value: QueryTotalRecvFeesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalRecvFeesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalRecvFeesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
            value: QueryTotalRecvFeesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalAckFeesRequest() {
    return {
        packetId: PacketId.fromPartial({})
    };
}
export const QueryTotalAckFeesRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = PacketId.decode(reader, reader.uint32());
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
            packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalAckFeesRequest();
        message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalAckFeesRequest();
        if (object.packet_id !== undefined && object.packet_id !== null) {
            message.packetId = PacketId.fromAmino(object.packet_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalAckFeesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalAckFeesRequest",
            value: QueryTotalAckFeesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalAckFeesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalAckFeesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
            value: QueryTotalAckFeesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalAckFeesResponse() {
    return {
        ackFees: []
    };
}
export const QueryTotalAckFeesResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ackFees) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ackFees.push(Coin.decode(reader, reader.uint32()));
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
            ackFees: Array.isArray(object?.ackFees) ? object.ackFees.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ackFees) {
            obj.ackFees = message.ackFees.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.ackFees = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalAckFeesResponse();
        message.ackFees = object.ackFees?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalAckFeesResponse();
        message.ackFees = object.ack_fees?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ackFees) {
            obj.ack_fees = message.ackFees.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.ack_fees = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalAckFeesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalAckFeesResponse",
            value: QueryTotalAckFeesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalAckFeesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalAckFeesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
            value: QueryTotalAckFeesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalTimeoutFeesRequest() {
    return {
        packetId: PacketId.fromPartial({})
    };
}
export const QueryTotalTimeoutFeesRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = PacketId.decode(reader, reader.uint32());
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
            packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTimeoutFeesRequest();
        message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalTimeoutFeesRequest();
        if (object.packet_id !== undefined && object.packet_id !== null) {
            message.packetId = PacketId.fromAmino(object.packet_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalTimeoutFeesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
            value: QueryTotalTimeoutFeesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalTimeoutFeesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalTimeoutFeesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
            value: QueryTotalTimeoutFeesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalTimeoutFeesResponse() {
    return {
        timeoutFees: []
    };
}
export const QueryTotalTimeoutFeesResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.timeoutFees) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
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
            timeoutFees: Array.isArray(object?.timeoutFees) ? object.timeoutFees.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.timeoutFees) {
            obj.timeoutFees = message.timeoutFees.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.timeoutFees = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTimeoutFeesResponse();
        message.timeoutFees = object.timeoutFees?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalTimeoutFeesResponse();
        message.timeoutFees = object.timeout_fees?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.timeoutFees) {
            obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.timeout_fees = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalTimeoutFeesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
            value: QueryTotalTimeoutFeesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalTimeoutFeesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalTimeoutFeesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
            value: QueryTotalTimeoutFeesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPayeeRequest() {
    return {
        channelId: "",
        relayer: ""
    };
}
export const QueryPayeeRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPayeeRequest();
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPayeeRequest();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId;
        obj.relayer = message.relayer;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPayeeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPayeeRequest",
            value: QueryPayeeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPayeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPayeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
            value: QueryPayeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPayeeResponse() {
    return {
        payeeAddress: ""
    };
}
export const QueryPayeeResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.payeeAddress !== "") {
            writer.uint32(10).string(message.payeeAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payeeAddress = reader.string();
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
            payeeAddress: isSet(object.payeeAddress) ? String(object.payeeAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.payeeAddress !== undefined && (obj.payeeAddress = message.payeeAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPayeeResponse();
        message.payeeAddress = object.payeeAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPayeeResponse();
        if (object.payee_address !== undefined && object.payee_address !== null) {
            message.payeeAddress = object.payee_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.payee_address = message.payeeAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPayeeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPayeeResponse",
            value: QueryPayeeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPayeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPayeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
            value: QueryPayeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCounterpartyPayeeRequest() {
    return {
        channelId: "",
        relayer: ""
    };
}
export const QueryCounterpartyPayeeRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCounterpartyPayeeRequest();
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCounterpartyPayeeRequest();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId;
        obj.relayer = message.relayer;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCounterpartyPayeeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCounterpartyPayeeRequest",
            value: QueryCounterpartyPayeeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCounterpartyPayeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCounterpartyPayeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
            value: QueryCounterpartyPayeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCounterpartyPayeeResponse() {
    return {
        counterpartyPayee: ""
    };
}
export const QueryCounterpartyPayeeResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.counterpartyPayee !== "") {
            writer.uint32(10).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.counterpartyPayee = reader.string();
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
            counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCounterpartyPayeeResponse();
        message.counterpartyPayee = object.counterpartyPayee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCounterpartyPayeeResponse();
        if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
            message.counterpartyPayee = object.counterparty_payee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.counterparty_payee = message.counterpartyPayee;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCounterpartyPayeeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCounterpartyPayeeResponse",
            value: QueryCounterpartyPayeeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCounterpartyPayeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCounterpartyPayeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
            value: QueryCounterpartyPayeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeEnabledChannelsRequest() {
    return {
        pagination: undefined,
        queryHeight: Long.UZERO
    };
}
export const QueryFeeEnabledChannelsRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryHeight = reader.uint64();
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            queryHeight: isSet(object.queryHeight) ? Long.fromValue(object.queryHeight) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? Long.fromValue(object.queryHeight) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeEnabledChannelsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.query_height !== undefined && object.query_height !== null) {
            message.queryHeight = Long.fromString(object.query_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeEnabledChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
            value: QueryFeeEnabledChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryFeeEnabledChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeeEnabledChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
            value: QueryFeeEnabledChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeEnabledChannelsResponse() {
    return {
        feeEnabledChannels: []
    };
}
export const QueryFeeEnabledChannelsResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.feeEnabledChannels) {
            FeeEnabledChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
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
            feeEnabledChannels: Array.isArray(object?.feeEnabledChannels) ? object.feeEnabledChannels.map((e) => FeeEnabledChannel.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.feeEnabledChannels) {
            obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
        }
        else {
            obj.feeEnabledChannels = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelsResponse();
        message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeEnabledChannelsResponse();
        message.feeEnabledChannels = object.fee_enabled_channels?.map(e => FeeEnabledChannel.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.feeEnabledChannels) {
            obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
        }
        else {
            obj.fee_enabled_channels = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeEnabledChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
            value: QueryFeeEnabledChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryFeeEnabledChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeeEnabledChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
            value: QueryFeeEnabledChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeEnabledChannelRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
export const QueryFeeEnabledChannelRequest = {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeEnabledChannelRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeEnabledChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryFeeEnabledChannelRequest",
            value: QueryFeeEnabledChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryFeeEnabledChannelRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeeEnabledChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
            value: QueryFeeEnabledChannelRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeEnabledChannelResponse() {
    return {
        feeEnabled: false
    };
}
export const QueryFeeEnabledChannelResponse = {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeEnabled === true) {
            writer.uint32(8).bool(message.feeEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeEnabled = reader.bool();
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
            feeEnabled: isSet(object.feeEnabled) ? Boolean(object.feeEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelResponse();
        message.feeEnabled = object.feeEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeEnabledChannelResponse();
        if (object.fee_enabled !== undefined && object.fee_enabled !== null) {
            message.feeEnabled = object.fee_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_enabled = message.feeEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeEnabledChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryFeeEnabledChannelResponse",
            value: QueryFeeEnabledChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryFeeEnabledChannelResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeeEnabledChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
            value: QueryFeeEnabledChannelResponse.encode(message).finish()
        };
    }
};
