import { Any } from "../../../google/protobuf/any";
import { Params, AccessTuple, Log } from "./evm";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgEthereumTx() {
    return {
        data: undefined,
        size: 0,
        hash: "",
        from: ""
    };
}
export const MsgEthereumTx = {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(17).double(message.size);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.from !== "") {
            writer.uint32(34).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.size = reader.double();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.from = reader.string();
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
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            size: isSet(object.size) ? Number(object.size) : 0,
            hash: isSet(object.hash) ? String(object.hash) : "",
            from: isSet(object.from) ? String(object.from) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        message.size !== undefined && (obj.size = message.size);
        message.hash !== undefined && (obj.hash = message.hash);
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEthereumTx();
        message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
        message.size = object.size ?? 0;
        message.hash = object.hash ?? "";
        message.from = object.from ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEthereumTx();
        if (object.data !== undefined && object.data !== null) {
            message.data = Any.fromAmino(object.data);
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? Any.toAmino(message.data) : undefined;
        obj.size = message.size;
        obj.hash = message.hash;
        obj.from = message.from;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEthereumTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgEthereumTx.decode(message.value);
    },
    toProto(message) {
        return MsgEthereumTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
            value: MsgEthereumTx.encode(message).finish()
        };
    }
};
function createBaseLegacyTx() {
    return {
        nonce: Long.UZERO,
        gasPrice: "",
        gas: Long.UZERO,
        to: "",
        value: "",
        data: new Uint8Array(),
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array()
    };
}
export const LegacyTx = {
    typeUrl: "/ethermint.evm.v1.LegacyTx",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.gasPrice !== "") {
            writer.uint32(18).string(message.gasPrice);
        }
        if (!message.gas.isZero()) {
            writer.uint32(24).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(34).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(42).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.v.length !== 0) {
            writer.uint32(58).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(66).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(74).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.gasPrice = reader.string();
                    break;
                case 3:
                    message.gas = reader.uint64();
                    break;
                case 4:
                    message.to = reader.string();
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.v = reader.bytes();
                    break;
                case 8:
                    message.r = reader.bytes();
                    break;
                case 9:
                    message.s = reader.bytes();
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
            nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
            gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
            gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
            to: isSet(object.to) ? String(object.to) : "",
            value: isSet(object.value) ? String(object.value) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
            r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
            s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
        message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
        message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLegacyTx();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.gasPrice = object.gasPrice ?? "";
        message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseLegacyTx();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Long.fromString(object.nonce);
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gasPrice = object.gas_price;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Long.fromString(object.gas);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = bytesFromBase64(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = bytesFromBase64(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = bytesFromBase64(object.s);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.gas_price = message.gasPrice;
        obj.gas = message.gas ? message.gas.toString() : undefined;
        obj.to = message.to;
        obj.value = message.value;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.v = message.v ? base64FromBytes(message.v) : undefined;
        obj.r = message.r ? base64FromBytes(message.r) : undefined;
        obj.s = message.s ? base64FromBytes(message.s) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LegacyTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LegacyTx.decode(message.value);
    },
    toProto(message) {
        return LegacyTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.LegacyTx",
            value: LegacyTx.encode(message).finish()
        };
    }
};
function createBaseAccessListTx() {
    return {
        chainId: "",
        nonce: Long.UZERO,
        gasPrice: "",
        gas: Long.UZERO,
        to: "",
        value: "",
        data: new Uint8Array(),
        accesses: [],
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array()
    };
}
export const AccessListTx = {
    typeUrl: "/ethermint.evm.v1.AccessListTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (!message.nonce.isZero()) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gasPrice !== "") {
            writer.uint32(26).string(message.gasPrice);
        }
        if (!message.gas.isZero()) {
            writer.uint32(32).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(42).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(58).bytes(message.data);
        }
        for (const v of message.accesses) {
            AccessTuple.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(74).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(82).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(90).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessListTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.gasPrice = reader.string();
                    break;
                case 4:
                    message.gas = reader.uint64();
                    break;
                case 5:
                    message.to = reader.string();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.data = reader.bytes();
                    break;
                case 8:
                    message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.v = reader.bytes();
                    break;
                case 10:
                    message.r = reader.bytes();
                    break;
                case 11:
                    message.s = reader.bytes();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
            gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
            gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
            to: isSet(object.to) ? String(object.to) : "",
            value: isSet(object.value) ? String(object.value) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            accesses: Array.isArray(object?.accesses) ? object.accesses.map((e) => AccessTuple.fromJSON(e)) : [],
            v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
            r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
            s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
        message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
        message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        if (message.accesses) {
            obj.accesses = message.accesses.map(e => e ? AccessTuple.toJSON(e) : undefined);
        }
        else {
            obj.accesses = [];
        }
        message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessListTx();
        message.chainId = object.chainId ?? "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.gasPrice = object.gasPrice ?? "";
        message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessListTx();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Long.fromString(object.nonce);
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gasPrice = object.gas_price;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Long.fromString(object.gas);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        message.accesses = object.accesses?.map(e => AccessTuple.fromAmino(e)) || [];
        if (object.v !== undefined && object.v !== null) {
            message.v = bytesFromBase64(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = bytesFromBase64(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = bytesFromBase64(object.s);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.gas_price = message.gasPrice;
        obj.gas = message.gas ? message.gas.toString() : undefined;
        obj.to = message.to;
        obj.value = message.value;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        if (message.accesses) {
            obj.accesses = message.accesses.map(e => e ? AccessTuple.toAmino(e) : undefined);
        }
        else {
            obj.accesses = [];
        }
        obj.v = message.v ? base64FromBytes(message.v) : undefined;
        obj.r = message.r ? base64FromBytes(message.r) : undefined;
        obj.s = message.s ? base64FromBytes(message.s) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccessListTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AccessListTx.decode(message.value);
    },
    toProto(message) {
        return AccessListTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.AccessListTx",
            value: AccessListTx.encode(message).finish()
        };
    }
};
function createBaseDynamicFeeTx() {
    return {
        chainId: "",
        nonce: Long.UZERO,
        gasTipCap: "",
        gasFeeCap: "",
        gas: Long.UZERO,
        to: "",
        value: "",
        data: new Uint8Array(),
        accesses: [],
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array()
    };
}
export const DynamicFeeTx = {
    typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (!message.nonce.isZero()) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gasTipCap !== "") {
            writer.uint32(26).string(message.gasTipCap);
        }
        if (message.gasFeeCap !== "") {
            writer.uint32(34).string(message.gasFeeCap);
        }
        if (!message.gas.isZero()) {
            writer.uint32(40).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(50).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(58).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(66).bytes(message.data);
        }
        for (const v of message.accesses) {
            AccessTuple.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(82).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(90).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(98).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDynamicFeeTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.gasTipCap = reader.string();
                    break;
                case 4:
                    message.gasFeeCap = reader.string();
                    break;
                case 5:
                    message.gas = reader.uint64();
                    break;
                case 6:
                    message.to = reader.string();
                    break;
                case 7:
                    message.value = reader.string();
                    break;
                case 8:
                    message.data = reader.bytes();
                    break;
                case 9:
                    message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.v = reader.bytes();
                    break;
                case 11:
                    message.r = reader.bytes();
                    break;
                case 12:
                    message.s = reader.bytes();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
            gasTipCap: isSet(object.gasTipCap) ? String(object.gasTipCap) : "",
            gasFeeCap: isSet(object.gasFeeCap) ? String(object.gasFeeCap) : "",
            gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
            to: isSet(object.to) ? String(object.to) : "",
            value: isSet(object.value) ? String(object.value) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            accesses: Array.isArray(object?.accesses) ? object.accesses.map((e) => AccessTuple.fromJSON(e)) : [],
            v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
            r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
            s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
        message.gasTipCap !== undefined && (obj.gasTipCap = message.gasTipCap);
        message.gasFeeCap !== undefined && (obj.gasFeeCap = message.gasFeeCap);
        message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        if (message.accesses) {
            obj.accesses = message.accesses.map(e => e ? AccessTuple.toJSON(e) : undefined);
        }
        else {
            obj.accesses = [];
        }
        message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDynamicFeeTx();
        message.chainId = object.chainId ?? "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.gasTipCap = object.gasTipCap ?? "";
        message.gasFeeCap = object.gasFeeCap ?? "";
        message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseDynamicFeeTx();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Long.fromString(object.nonce);
        }
        if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
            message.gasTipCap = object.gas_tip_cap;
        }
        if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
            message.gasFeeCap = object.gas_fee_cap;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Long.fromString(object.gas);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        message.accesses = object.accesses?.map(e => AccessTuple.fromAmino(e)) || [];
        if (object.v !== undefined && object.v !== null) {
            message.v = bytesFromBase64(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = bytesFromBase64(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = bytesFromBase64(object.s);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.gas_tip_cap = message.gasTipCap;
        obj.gas_fee_cap = message.gasFeeCap;
        obj.gas = message.gas ? message.gas.toString() : undefined;
        obj.to = message.to;
        obj.value = message.value;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        if (message.accesses) {
            obj.accesses = message.accesses.map(e => e ? AccessTuple.toAmino(e) : undefined);
        }
        else {
            obj.accesses = [];
        }
        obj.v = message.v ? base64FromBytes(message.v) : undefined;
        obj.r = message.r ? base64FromBytes(message.r) : undefined;
        obj.s = message.s ? base64FromBytes(message.s) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DynamicFeeTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DynamicFeeTx.decode(message.value);
    },
    toProto(message) {
        return DynamicFeeTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
            value: DynamicFeeTx.encode(message).finish()
        };
    }
};
function createBaseExtensionOptionsEthereumTx() {
    return {};
}
export const ExtensionOptionsEthereumTx = {
    typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsEthereumTx();
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
        const message = createBaseExtensionOptionsEthereumTx();
        return message;
    },
    fromAmino(_) {
        const message = createBaseExtensionOptionsEthereumTx();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ExtensionOptionsEthereumTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtensionOptionsEthereumTx.decode(message.value);
    },
    toProto(message) {
        return ExtensionOptionsEthereumTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
            value: ExtensionOptionsEthereumTx.encode(message).finish()
        };
    }
};
function createBaseMsgEthereumTxResponse() {
    return {
        hash: "",
        logs: [],
        ret: new Uint8Array(),
        vmError: "",
        gasUsed: Long.UZERO
    };
}
export const MsgEthereumTxResponse = {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(26).bytes(message.ret);
        }
        if (message.vmError !== "") {
            writer.uint32(34).string(message.vmError);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(40).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEthereumTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(Log.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ret = reader.bytes();
                    break;
                case 4:
                    message.vmError = reader.string();
                    break;
                case 5:
                    message.gasUsed = reader.uint64();
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
            hash: isSet(object.hash) ? String(object.hash) : "",
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => Log.fromJSON(e)) : [],
            ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(),
            vmError: isSet(object.vmError) ? String(object.vmError) : "",
            gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? Log.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.ret !== undefined && (obj.ret = base64FromBytes(message.ret !== undefined ? message.ret : new Uint8Array()));
        message.vmError !== undefined && (obj.vmError = message.vmError);
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEthereumTxResponse();
        message.hash = object.hash ?? "";
        message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
        message.ret = object.ret ?? new Uint8Array();
        message.vmError = object.vmError ?? "";
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEthereumTxResponse();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = bytesFromBase64(object.ret);
        }
        if (object.vm_error !== undefined && object.vm_error !== null) {
            message.vmError = object.vm_error;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = Long.fromString(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
        obj.vm_error = message.vmError;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEthereumTxResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgEthereumTxResponse.decode(message.value);
    },
    toProto(message) {
        return MsgEthereumTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
            value: MsgEthereumTxResponse.encode(message).finish()
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
    typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
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
            typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
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
            typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
