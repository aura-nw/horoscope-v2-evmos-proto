import { Params } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgRegisterRevenue() {
    return {
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: "",
        nonces: []
    };
}
export const MsgRegisterRevenue = {
    typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.deployerAddress !== "") {
            writer.uint32(18).string(message.deployerAddress);
        }
        if (message.withdrawerAddress !== "") {
            writer.uint32(26).string(message.withdrawerAddress);
        }
        writer.uint32(34).fork();
        for (const v of message.nonces) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.deployerAddress = reader.string();
                    break;
                case 3:
                    message.withdrawerAddress = reader.string();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.nonces.push(reader.uint64());
                        }
                    }
                    else {
                        message.nonces.push(reader.uint64());
                    }
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
            withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
            nonces: Array.isArray(object?.nonces) ? object.nonces.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
        if (message.nonces) {
            obj.nonces = message.nonces.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.nonces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterRevenue();
        message.contractAddress = object.contractAddress ?? "";
        message.deployerAddress = object.deployerAddress ?? "";
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        message.nonces = object.nonces?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterRevenue();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
            message.withdrawerAddress = object.withdrawer_address;
        }
        message.nonces = object.nonces?.map(e => Long.fromString(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.deployer_address = message.deployerAddress;
        obj.withdrawer_address = message.withdrawerAddress;
        if (message.nonces) {
            obj.nonces = message.nonces.map(e => e);
        }
        else {
            obj.nonces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterRevenue.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
            value: MsgRegisterRevenue.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterRevenueResponse() {
    return {};
}
export const MsgRegisterRevenueResponse = {
    typeUrl: "/evmos.revenue.v1.MsgRegisterRevenueResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterRevenueResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterRevenueResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterRevenueResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterRevenueResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterRevenueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgRegisterRevenueResponse",
            value: MsgRegisterRevenueResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateRevenue() {
    return {
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: ""
    };
}
export const MsgUpdateRevenue = {
    typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.deployerAddress !== "") {
            writer.uint32(18).string(message.deployerAddress);
        }
        if (message.withdrawerAddress !== "") {
            writer.uint32(26).string(message.withdrawerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.deployerAddress = reader.string();
                    break;
                case 3:
                    message.withdrawerAddress = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
            withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateRevenue();
        message.contractAddress = object.contractAddress ?? "";
        message.deployerAddress = object.deployerAddress ?? "";
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateRevenue();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
            message.withdrawerAddress = object.withdrawer_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.deployer_address = message.deployerAddress;
        obj.withdrawer_address = message.withdrawerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateRevenue.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
            value: MsgUpdateRevenue.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateRevenueResponse() {
    return {};
}
export const MsgUpdateRevenueResponse = {
    typeUrl: "/evmos.revenue.v1.MsgUpdateRevenueResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateRevenueResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateRevenueResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateRevenueResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateRevenueResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateRevenueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgUpdateRevenueResponse",
            value: MsgUpdateRevenueResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelRevenue() {
    return {
        contractAddress: "",
        deployerAddress: ""
    };
}
export const MsgCancelRevenue = {
    typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.deployerAddress !== "") {
            writer.uint32(18).string(message.deployerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.deployerAddress = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelRevenue();
        message.contractAddress = object.contractAddress ?? "";
        message.deployerAddress = object.deployerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelRevenue();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.deployer_address = message.deployerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelRevenue.decode(message.value);
    },
    toProto(message) {
        return MsgCancelRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
            value: MsgCancelRevenue.encode(message).finish()
        };
    }
};
function createBaseMsgCancelRevenueResponse() {
    return {};
}
export const MsgCancelRevenueResponse = {
    typeUrl: "/evmos.revenue.v1.MsgCancelRevenueResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelRevenueResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelRevenueResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelRevenueResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelRevenueResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelRevenueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgCancelRevenueResponse",
            value: MsgCancelRevenueResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/evmos.revenue.v1.MsgUpdateParamsResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
