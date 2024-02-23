import { MsgEthereumTx } from "./tx";
import { TraceConfig, Log, Params } from "./evm";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long, isSet, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
export const QueryAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
            value: QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountResponse() {
    return {
        balance: "",
        codeHash: "",
        nonce: Long.UZERO
    };
}
export const QueryAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        if (message.codeHash !== "") {
            writer.uint32(18).string(message.codeHash);
        }
        if (!message.nonce.isZero()) {
            writer.uint32(24).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                case 2:
                    message.codeHash = reader.string();
                    break;
                case 3:
                    message.nonce = reader.uint64();
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
            balance: isSet(object.balance) ? String(object.balance) : "",
            codeHash: isSet(object.codeHash) ? String(object.codeHash) : "",
            nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.codeHash !== undefined && (obj.codeHash = message.codeHash);
        message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.balance = object.balance ?? "";
        message.codeHash = object.codeHash ?? "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = object.code_hash;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Long.fromString(object.nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance;
        obj.code_hash = message.codeHash;
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
            value: QueryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCosmosAccountRequest() {
    return {
        address: ""
    };
}
export const QueryCosmosAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCosmosAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCosmosAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCosmosAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCosmosAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCosmosAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCosmosAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
            value: QueryCosmosAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCosmosAccountResponse() {
    return {
        cosmosAddress: "",
        sequence: Long.UZERO,
        accountNumber: Long.UZERO
    };
}
export const QueryCosmosAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.cosmosAddress !== "") {
            writer.uint32(10).string(message.cosmosAddress);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCosmosAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosAddress = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
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
            cosmosAddress: isSet(object.cosmosAddress) ? String(object.cosmosAddress) : "",
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.cosmosAddress !== undefined && (obj.cosmosAddress = message.cosmosAddress);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCosmosAccountResponse();
        message.cosmosAddress = object.cosmosAddress ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCosmosAccountResponse();
        if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
            message.cosmosAddress = object.cosmos_address;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = Long.fromString(object.sequence);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = Long.fromString(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cosmos_address = message.cosmosAddress;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCosmosAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCosmosAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCosmosAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
            value: QueryCosmosAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorAccountRequest() {
    return {
        consAddress: ""
    };
}
export const QueryValidatorAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consAddress = reader.string();
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
            consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.consAddress !== undefined && (obj.consAddress = message.consAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorAccountRequest();
        message.consAddress = object.consAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorAccountRequest();
        if (object.cons_address !== undefined && object.cons_address !== null) {
            message.consAddress = object.cons_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cons_address = message.consAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValidatorAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
            value: QueryValidatorAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorAccountResponse() {
    return {
        accountAddress: "",
        sequence: Long.UZERO,
        accountNumber: Long.UZERO
    };
}
export const QueryValidatorAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
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
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorAccountResponse();
        message.accountAddress = object.accountAddress ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorAccountResponse();
        if (object.account_address !== undefined && object.account_address !== null) {
            message.accountAddress = object.account_address;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = Long.fromString(object.sequence);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = Long.fromString(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account_address = message.accountAddress;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValidatorAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
            value: QueryValidatorAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceRequest() {
    return {
        address: ""
    };
}
export const QueryBalanceRequest = {
    typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
            value: QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        balance: ""
    };
}
export const QueryBalanceResponse = {
    typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
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
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
            value: QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryStorageRequest() {
    return {
        address: "",
        key: ""
    };
}
export const QueryStorageRequest = {
    typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
            key: isSet(object.key) ? String(object.key) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageRequest();
        message.address = object.address ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStorageRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStorageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStorageRequest.decode(message.value);
    },
    toProto(message) {
        return QueryStorageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
            value: QueryStorageRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStorageResponse() {
    return {
        value: ""
    };
}
export const QueryStorageResponse = {
    typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
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
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageResponse();
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStorageResponse();
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStorageResponse.decode(message.value);
    },
    toProto(message) {
        return QueryStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
            value: QueryStorageResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodeRequest() {
    return {
        address: ""
    };
}
export const QueryCodeRequest = {
    typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCodeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCodeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
            value: QueryCodeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCodeResponse() {
    return {
        code: new Uint8Array()
    };
}
export const QueryCodeResponse = {
    typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code.length !== 0) {
            writer.uint32(10).bytes(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.bytes();
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
            code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.code = object.code ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeResponse();
        if (object.code !== undefined && object.code !== null) {
            message.code = bytesFromBase64(object.code);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code ? base64FromBytes(message.code) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCodeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCodeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
            value: QueryCodeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTxLogsRequest() {
    return {
        hash: "",
        pagination: undefined
    };
}
export const QueryTxLogsRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxLogsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxLogsRequest();
        message.hash = object.hash ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTxLogsRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTxLogsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTxLogsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTxLogsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
            value: QueryTxLogsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTxLogsResponse() {
    return {
        logs: [],
        pagination: undefined
    };
}
export const QueryTxLogsResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.logs) {
            Log.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxLogsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(Log.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => Log.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? Log.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxLogsResponse();
        message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTxLogsResponse();
        message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTxLogsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTxLogsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTxLogsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
            value: QueryTxLogsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseEthCallRequest() {
    return {
        args: new Uint8Array(),
        gasCap: Long.UZERO,
        proposerAddress: new Uint8Array(),
        chainId: Long.ZERO
    };
}
export const EthCallRequest = {
    typeUrl: "/ethermint.evm.v1.EthCallRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.args.length !== 0) {
            writer.uint32(10).bytes(message.args);
        }
        if (!message.gasCap.isZero()) {
            writer.uint32(16).uint64(message.gasCap);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(26).bytes(message.proposerAddress);
        }
        if (!message.chainId.isZero()) {
            writer.uint32(32).int64(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthCallRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args = reader.bytes();
                    break;
                case 2:
                    message.gasCap = reader.uint64();
                    break;
                case 3:
                    message.proposerAddress = reader.bytes();
                    break;
                case 4:
                    message.chainId = reader.int64();
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
            args: isSet(object.args) ? bytesFromBase64(object.args) : new Uint8Array(),
            gasCap: isSet(object.gasCap) ? Long.fromValue(object.gasCap) : Long.UZERO,
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
            chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.args !== undefined && (obj.args = base64FromBytes(message.args !== undefined ? message.args : new Uint8Array()));
        message.gasCap !== undefined && (obj.gasCap = (message.gasCap || Long.UZERO).toString());
        message.proposerAddress !== undefined && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = (message.chainId || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEthCallRequest();
        message.args = object.args ?? new Uint8Array();
        message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? Long.fromValue(object.gasCap) : Long.UZERO;
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        message.chainId = object.chainId !== undefined && object.chainId !== null ? Long.fromValue(object.chainId) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEthCallRequest();
        if (object.args !== undefined && object.args !== null) {
            message.args = bytesFromBase64(object.args);
        }
        if (object.gas_cap !== undefined && object.gas_cap !== null) {
            message.gasCap = Long.fromString(object.gas_cap);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = bytesFromBase64(object.proposer_address);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = Long.fromString(object.chain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.args = message.args ? base64FromBytes(message.args) : undefined;
        obj.gas_cap = message.gasCap ? message.gasCap.toString() : undefined;
        obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
        obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EthCallRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EthCallRequest.decode(message.value);
    },
    toProto(message) {
        return EthCallRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EthCallRequest",
            value: EthCallRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateGasResponse() {
    return {
        gas: Long.UZERO
    };
}
export const EstimateGasResponse = {
    typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.gas.isZero()) {
            writer.uint32(8).uint64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateGasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = reader.uint64();
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
            gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateGasResponse();
        message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateGasResponse();
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Long.fromString(object.gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas = message.gas ? message.gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateGasResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EstimateGasResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateGasResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
            value: EstimateGasResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraceTxRequest() {
    return {
        msg: undefined,
        traceConfig: undefined,
        predecessors: [],
        blockNumber: Long.ZERO,
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: Long.ZERO,
        blockMaxGas: Long.ZERO
    };
}
export const QueryTraceTxRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== undefined) {
            MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.traceConfig !== undefined) {
            TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.predecessors) {
            MsgEthereumTx.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (!message.blockNumber.isZero()) {
            writer.uint32(40).int64(message.blockNumber);
        }
        if (message.blockHash !== "") {
            writer.uint32(50).string(message.blockHash);
        }
        if (message.blockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        if (!message.chainId.isZero()) {
            writer.uint32(72).int64(message.chainId);
        }
        if (!message.blockMaxGas.isZero()) {
            writer.uint32(80).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = MsgEthereumTx.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.traceConfig = TraceConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.predecessors.push(MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.blockNumber = reader.int64();
                    break;
                case 6:
                    message.blockHash = reader.string();
                    break;
                case 7:
                    message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                case 9:
                    message.chainId = reader.int64();
                    break;
                case 10:
                    message.blockMaxGas = reader.int64();
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
            msg: isSet(object.msg) ? MsgEthereumTx.fromJSON(object.msg) : undefined,
            traceConfig: isSet(object.traceConfig) ? TraceConfig.fromJSON(object.traceConfig) : undefined,
            predecessors: Array.isArray(object?.predecessors) ? object.predecessors.map((e) => MsgEthereumTx.fromJSON(e)) : [],
            blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
            blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
            chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.ZERO,
            blockMaxGas: isSet(object.blockMaxGas) ? Long.fromValue(object.blockMaxGas) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? MsgEthereumTx.toJSON(message.msg) : undefined);
        message.traceConfig !== undefined && (obj.traceConfig = message.traceConfig ? TraceConfig.toJSON(message.traceConfig) : undefined);
        if (message.predecessors) {
            obj.predecessors = message.predecessors.map(e => e ? MsgEthereumTx.toJSON(e) : undefined);
        }
        else {
            obj.predecessors = [];
        }
        message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.proposerAddress !== undefined && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = (message.chainId || Long.ZERO).toString());
        message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceTxRequest();
        message.msg = object.msg !== undefined && object.msg !== null ? MsgEthereumTx.fromPartial(object.msg) : undefined;
        message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
        message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromPartial(e)) || [];
        message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
        message.blockHash = object.blockHash ?? "";
        message.blockTime = object.blockTime ?? undefined;
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        message.chainId = object.chainId !== undefined && object.chainId !== null ? Long.fromValue(object.chainId) : Long.ZERO;
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? Long.fromValue(object.blockMaxGas) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceTxRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = MsgEthereumTx.fromAmino(object.msg);
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.traceConfig = TraceConfig.fromAmino(object.trace_config);
        }
        message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromAmino(e)) || [];
        if (object.block_number !== undefined && object.block_number !== null) {
            message.blockNumber = Long.fromString(object.block_number);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = bytesFromBase64(object.proposer_address);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = Long.fromString(object.chain_id);
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.blockMaxGas = Long.fromString(object.block_max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg ? MsgEthereumTx.toAmino(message.msg) : undefined;
        obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
        if (message.predecessors) {
            obj.predecessors = message.predecessors.map(e => e ? MsgEthereumTx.toAmino(e) : undefined);
        }
        else {
            obj.predecessors = [];
        }
        obj.block_number = message.blockNumber ? message.blockNumber.toString() : undefined;
        obj.block_hash = message.blockHash;
        obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
        obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
        obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
        obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraceTxRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraceTxRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraceTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
            value: QueryTraceTxRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTraceTxResponse() {
    return {
        data: new Uint8Array()
    };
}
export const QueryTraceTxResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceTxResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceTxResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraceTxResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraceTxResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTraceTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
            value: QueryTraceTxResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraceBlockRequest() {
    return {
        txs: [],
        traceConfig: undefined,
        blockNumber: Long.ZERO,
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: Long.ZERO,
        blockMaxGas: Long.ZERO
    };
}
export const QueryTraceBlockRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            MsgEthereumTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.traceConfig !== undefined) {
            TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
        }
        if (!message.blockNumber.isZero()) {
            writer.uint32(40).int64(message.blockNumber);
        }
        if (message.blockHash !== "") {
            writer.uint32(50).string(message.blockHash);
        }
        if (message.blockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        if (!message.chainId.isZero()) {
            writer.uint32(72).int64(message.chainId);
        }
        if (!message.blockMaxGas.isZero()) {
            writer.uint32(80).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.traceConfig = TraceConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.blockNumber = reader.int64();
                    break;
                case 6:
                    message.blockHash = reader.string();
                    break;
                case 7:
                    message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                case 9:
                    message.chainId = reader.int64();
                    break;
                case 10:
                    message.blockMaxGas = reader.int64();
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => MsgEthereumTx.fromJSON(e)) : [],
            traceConfig: isSet(object.traceConfig) ? TraceConfig.fromJSON(object.traceConfig) : undefined,
            blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
            blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
            chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.ZERO,
            blockMaxGas: isSet(object.blockMaxGas) ? Long.fromValue(object.blockMaxGas) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? MsgEthereumTx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.traceConfig !== undefined && (obj.traceConfig = message.traceConfig ? TraceConfig.toJSON(message.traceConfig) : undefined);
        message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.proposerAddress !== undefined && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = (message.chainId || Long.ZERO).toString());
        message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceBlockRequest();
        message.txs = object.txs?.map(e => MsgEthereumTx.fromPartial(e)) || [];
        message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
        message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
        message.blockHash = object.blockHash ?? "";
        message.blockTime = object.blockTime ?? undefined;
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        message.chainId = object.chainId !== undefined && object.chainId !== null ? Long.fromValue(object.chainId) : Long.ZERO;
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? Long.fromValue(object.blockMaxGas) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceBlockRequest();
        message.txs = object.txs?.map(e => MsgEthereumTx.fromAmino(e)) || [];
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.traceConfig = TraceConfig.fromAmino(object.trace_config);
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.blockNumber = Long.fromString(object.block_number);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = bytesFromBase64(object.proposer_address);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = Long.fromString(object.chain_id);
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.blockMaxGas = Long.fromString(object.block_max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? MsgEthereumTx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
        obj.block_number = message.blockNumber ? message.blockNumber.toString() : undefined;
        obj.block_hash = message.blockHash;
        obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
        obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
        obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
        obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraceBlockRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraceBlockRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraceBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
            value: QueryTraceBlockRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTraceBlockResponse() {
    return {
        data: new Uint8Array()
    };
}
export const QueryTraceBlockResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceBlockResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceBlockResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraceBlockResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraceBlockResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTraceBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
            value: QueryTraceBlockResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBaseFeeRequest() {
    return {};
}
export const QueryBaseFeeRequest = {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeRequest();
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
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBaseFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBaseFeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBaseFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
            value: QueryBaseFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBaseFeeResponse() {
    return {
        baseFee: ""
    };
}
export const QueryBaseFeeResponse = {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
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
            baseFee: isSet(object.baseFee) ? String(object.baseFee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseFeeResponse();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBaseFeeResponse();
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.baseFee = object.base_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_fee = message.baseFee;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBaseFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBaseFeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBaseFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
            value: QueryBaseFeeResponse.encode(message).finish()
        };
    }
};
