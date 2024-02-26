import { IdentifiedPacketFees } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseGenesisState() {
    return {
        identifiedFees: [],
        feeEnabledChannels: [],
        registeredPayees: [],
        registeredCounterpartyPayees: [],
        forwardRelayers: []
    };
}
export const GenesisState = {
    typeUrl: "/ibc.applications.fee.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.identifiedFees) {
            IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeEnabledChannels) {
            FeeEnabledChannel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.registeredPayees) {
            RegisteredPayee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.registeredCounterpartyPayees) {
            RegisteredCounterpartyPayee.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.forwardRelayers) {
            ForwardRelayerAddress.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.registeredCounterpartyPayees.push(RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
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
            identifiedFees: Array.isArray(object?.identifiedFees) ? object.identifiedFees.map((e) => IdentifiedPacketFees.fromJSON(e)) : [],
            feeEnabledChannels: Array.isArray(object?.feeEnabledChannels) ? object.feeEnabledChannels.map((e) => FeeEnabledChannel.fromJSON(e)) : [],
            registeredPayees: Array.isArray(object?.registeredPayees) ? object.registeredPayees.map((e) => RegisteredPayee.fromJSON(e)) : [],
            registeredCounterpartyPayees: Array.isArray(object?.registeredCounterpartyPayees) ? object.registeredCounterpartyPayees.map((e) => RegisteredCounterpartyPayee.fromJSON(e)) : [],
            forwardRelayers: Array.isArray(object?.forwardRelayers) ? object.forwardRelayers.map((e) => ForwardRelayerAddress.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.identifiedFees) {
            obj.identifiedFees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.identifiedFees = [];
        }
        if (message.feeEnabledChannels) {
            obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
        }
        else {
            obj.feeEnabledChannels = [];
        }
        if (message.registeredPayees) {
            obj.registeredPayees = message.registeredPayees.map(e => e ? RegisteredPayee.toJSON(e) : undefined);
        }
        else {
            obj.registeredPayees = [];
        }
        if (message.registeredCounterpartyPayees) {
            obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toJSON(e) : undefined);
        }
        else {
            obj.registeredCounterpartyPayees = [];
        }
        if (message.forwardRelayers) {
            obj.forwardRelayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toJSON(e) : undefined);
        }
        else {
            obj.forwardRelayers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.identifiedFees = object.identifiedFees?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
        message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
        message.registeredPayees = object.registeredPayees?.map(e => RegisteredPayee.fromPartial(e)) || [];
        message.registeredCounterpartyPayees = object.registeredCounterpartyPayees?.map(e => RegisteredCounterpartyPayee.fromPartial(e)) || [];
        message.forwardRelayers = object.forwardRelayers?.map(e => ForwardRelayerAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.identifiedFees = object.identified_fees?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
        message.feeEnabledChannels = object.fee_enabled_channels?.map(e => FeeEnabledChannel.fromAmino(e)) || [];
        message.registeredPayees = object.registered_payees?.map(e => RegisteredPayee.fromAmino(e)) || [];
        message.registeredCounterpartyPayees = object.registered_counterparty_payees?.map(e => RegisteredCounterpartyPayee.fromAmino(e)) || [];
        message.forwardRelayers = object.forward_relayers?.map(e => ForwardRelayerAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.identifiedFees) {
            obj.identified_fees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
        }
        else {
            obj.identified_fees = [];
        }
        if (message.feeEnabledChannels) {
            obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
        }
        else {
            obj.fee_enabled_channels = [];
        }
        if (message.registeredPayees) {
            obj.registered_payees = message.registeredPayees.map(e => e ? RegisteredPayee.toAmino(e) : undefined);
        }
        else {
            obj.registered_payees = [];
        }
        if (message.registeredCounterpartyPayees) {
            obj.registered_counterparty_payees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toAmino(e) : undefined);
        }
        else {
            obj.registered_counterparty_payees = [];
        }
        if (message.forwardRelayers) {
            obj.forward_relayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toAmino(e) : undefined);
        }
        else {
            obj.forward_relayers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeeEnabledChannel() {
    return {
        portId: "",
        channelId: ""
    };
}
export const FeeEnabledChannel = {
    typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
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
        const message = createBaseFeeEnabledChannel();
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
        const message = createBaseFeeEnabledChannel();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeEnabledChannel();
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
        return FeeEnabledChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeeEnabledChannel",
            value: FeeEnabledChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FeeEnabledChannel.decode(message.value);
    },
    toProto(message) {
        return FeeEnabledChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
            value: FeeEnabledChannel.encode(message).finish()
        };
    }
};
function createBaseRegisteredPayee() {
    return {
        channelId: "",
        relayer: "",
        payee: ""
    };
}
export const RegisteredPayee = {
    typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(26).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
                    message.payee = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            payee: isSet(object.payee) ? String(object.payee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.payee !== undefined && (obj.payee = message.payee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisteredPayee();
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        message.payee = object.payee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisteredPayee();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        if (object.payee !== undefined && object.payee !== null) {
            message.payee = object.payee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId;
        obj.relayer = message.relayer;
        obj.payee = message.payee;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisteredPayee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RegisteredPayee",
            value: RegisteredPayee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RegisteredPayee.decode(message.value);
    },
    toProto(message) {
        return RegisteredPayee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
            value: RegisteredPayee.encode(message).finish()
        };
    }
};
function createBaseRegisteredCounterpartyPayee() {
    return {
        channelId: "",
        relayer: "",
        counterpartyPayee: ""
    };
}
export const RegisteredCounterpartyPayee = {
    typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.counterpartyPayee !== "") {
            writer.uint32(26).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisteredCounterpartyPayee();
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        message.counterpartyPayee = object.counterpartyPayee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisteredCounterpartyPayee();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
            message.counterpartyPayee = object.counterparty_payee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId;
        obj.relayer = message.relayer;
        obj.counterparty_payee = message.counterpartyPayee;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisteredCounterpartyPayee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RegisteredCounterpartyPayee",
            value: RegisteredCounterpartyPayee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RegisteredCounterpartyPayee.decode(message.value);
    },
    toProto(message) {
        return RegisteredCounterpartyPayee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
            value: RegisteredCounterpartyPayee.encode(message).finish()
        };
    }
};
function createBaseForwardRelayerAddress() {
    return {
        address: "",
        packetId: PacketId.fromPartial({})
    };
}
export const ForwardRelayerAddress = {
    typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.packetId !== undefined) {
            PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForwardRelayerAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: isSet(object.address) ? String(object.address) : "",
            packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseForwardRelayerAddress();
        message.address = object.address ?? "";
        message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseForwardRelayerAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.packet_id !== undefined && object.packet_id !== null) {
            message.packetId = PacketId.fromAmino(object.packet_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ForwardRelayerAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ForwardRelayerAddress",
            value: ForwardRelayerAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ForwardRelayerAddress.decode(message.value);
    },
    toProto(message) {
        return ForwardRelayerAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
            value: ForwardRelayerAddress.encode(message).finish()
        };
    }
};
