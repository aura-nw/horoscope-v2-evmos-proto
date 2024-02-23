import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEventEthereumTx() {
    return {
        amount: "",
        ethHash: "",
        index: "",
        gasUsed: "",
        hash: "",
        recipient: "",
        ethTxFailed: ""
    };
}
export const EventEthereumTx = {
    typeUrl: "/ethermint.evm.v1.EventEthereumTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.ethHash !== "") {
            writer.uint32(18).string(message.ethHash);
        }
        if (message.index !== "") {
            writer.uint32(26).string(message.index);
        }
        if (message.gasUsed !== "") {
            writer.uint32(34).string(message.gasUsed);
        }
        if (message.hash !== "") {
            writer.uint32(42).string(message.hash);
        }
        if (message.recipient !== "") {
            writer.uint32(50).string(message.recipient);
        }
        if (message.ethTxFailed !== "") {
            writer.uint32(58).string(message.ethTxFailed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.ethHash = reader.string();
                    break;
                case 3:
                    message.index = reader.string();
                    break;
                case 4:
                    message.gasUsed = reader.string();
                    break;
                case 5:
                    message.hash = reader.string();
                    break;
                case 6:
                    message.recipient = reader.string();
                    break;
                case 7:
                    message.ethTxFailed = reader.string();
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
            amount: isSet(object.amount) ? String(object.amount) : "",
            ethHash: isSet(object.ethHash) ? String(object.ethHash) : "",
            index: isSet(object.index) ? String(object.index) : "",
            gasUsed: isSet(object.gasUsed) ? String(object.gasUsed) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            ethTxFailed: isSet(object.ethTxFailed) ? String(object.ethTxFailed) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.ethHash !== undefined && (obj.ethHash = message.ethHash);
        message.index !== undefined && (obj.index = message.index);
        message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
        message.hash !== undefined && (obj.hash = message.hash);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.ethTxFailed !== undefined && (obj.ethTxFailed = message.ethTxFailed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventEthereumTx();
        message.amount = object.amount ?? "";
        message.ethHash = object.ethHash ?? "";
        message.index = object.index ?? "";
        message.gasUsed = object.gasUsed ?? "";
        message.hash = object.hash ?? "";
        message.recipient = object.recipient ?? "";
        message.ethTxFailed = object.ethTxFailed ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventEthereumTx();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.eth_hash !== undefined && object.eth_hash !== null) {
            message.ethHash = object.eth_hash;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = object.gas_used;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.eth_tx_failed !== undefined && object.eth_tx_failed !== null) {
            message.ethTxFailed = object.eth_tx_failed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount;
        obj.eth_hash = message.ethHash;
        obj.index = message.index;
        obj.gas_used = message.gasUsed;
        obj.hash = message.hash;
        obj.recipient = message.recipient;
        obj.eth_tx_failed = message.ethTxFailed;
        return obj;
    },
    fromAminoMsg(object) {
        return EventEthereumTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventEthereumTx.decode(message.value);
    },
    toProto(message) {
        return EventEthereumTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventEthereumTx",
            value: EventEthereumTx.encode(message).finish()
        };
    }
};
function createBaseEventTxLog() {
    return {
        txLogs: []
    };
}
export const EventTxLog = {
    typeUrl: "/ethermint.evm.v1.EventTxLog",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txLogs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTxLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txLogs.push(reader.string());
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
            txLogs: Array.isArray(object?.txLogs) ? object.txLogs.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txLogs) {
            obj.txLogs = message.txLogs.map(e => e);
        }
        else {
            obj.txLogs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventTxLog();
        message.txLogs = object.txLogs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTxLog();
        message.txLogs = object.tx_logs?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txLogs) {
            obj.tx_logs = message.txLogs.map(e => e);
        }
        else {
            obj.tx_logs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventTxLog.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTxLog.decode(message.value);
    },
    toProto(message) {
        return EventTxLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventTxLog",
            value: EventTxLog.encode(message).finish()
        };
    }
};
function createBaseEventMessage() {
    return {
        module: "",
        sender: "",
        txType: ""
    };
}
export const EventMessage = {
    typeUrl: "/ethermint.evm.v1.EventMessage",
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.txType !== "") {
            writer.uint32(26).string(message.txType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.txType = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            txType: isSet(object.txType) ? String(object.txType) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.sender !== undefined && (obj.sender = message.sender);
        message.txType !== undefined && (obj.txType = message.txType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventMessage();
        message.module = object.module ?? "";
        message.sender = object.sender ?? "";
        message.txType = object.txType ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMessage();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.tx_type !== undefined && object.tx_type !== null) {
            message.txType = object.tx_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.sender = message.sender;
        obj.tx_type = message.txType;
        return obj;
    },
    fromAminoMsg(object) {
        return EventMessage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventMessage.decode(message.value);
    },
    toProto(message) {
        return EventMessage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventMessage",
            value: EventMessage.encode(message).finish()
        };
    }
};
function createBaseEventBlockBloom() {
    return {
        bloom: ""
    };
}
export const EventBlockBloom = {
    typeUrl: "/ethermint.evm.v1.EventBlockBloom",
    encode(message, writer = _m0.Writer.create()) {
        if (message.bloom !== "") {
            writer.uint32(10).string(message.bloom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBlockBloom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bloom = reader.string();
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
            bloom: isSet(object.bloom) ? String(object.bloom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bloom !== undefined && (obj.bloom = message.bloom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventBlockBloom();
        message.bloom = object.bloom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBlockBloom();
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = object.bloom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bloom = message.bloom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBlockBloom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBlockBloom.decode(message.value);
    },
    toProto(message) {
        return EventBlockBloom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventBlockBloom",
            value: EventBlockBloom.encode(message).finish()
        };
    }
};
