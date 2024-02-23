import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseExtensionOptionsWeb3Tx() {
    return {
        typedDataChainId: Long.UZERO,
        feePayer: "",
        feePayerSig: new Uint8Array()
    };
}
export const ExtensionOptionsWeb3Tx = {
    typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.typedDataChainId.isZero()) {
            writer.uint32(8).uint64(message.typedDataChainId);
        }
        if (message.feePayer !== "") {
            writer.uint32(18).string(message.feePayer);
        }
        if (message.feePayerSig.length !== 0) {
            writer.uint32(26).bytes(message.feePayerSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsWeb3Tx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typedDataChainId = reader.uint64();
                    break;
                case 2:
                    message.feePayer = reader.string();
                    break;
                case 3:
                    message.feePayerSig = reader.bytes();
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
            typedDataChainId: isSet(object.typedDataChainId) ? Long.fromValue(object.typedDataChainId) : Long.UZERO,
            feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
            feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.typedDataChainId !== undefined && (obj.typedDataChainId = (message.typedDataChainId || Long.UZERO).toString());
        message.feePayer !== undefined && (obj.feePayer = message.feePayer);
        message.feePayerSig !== undefined && (obj.feePayerSig = base64FromBytes(message.feePayerSig !== undefined ? message.feePayerSig : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        message.typedDataChainId = object.typedDataChainId !== undefined && object.typedDataChainId !== null ? Long.fromValue(object.typedDataChainId) : Long.UZERO;
        message.feePayer = object.feePayer ?? "";
        message.feePayerSig = object.feePayerSig ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        if (object.typed_data_chain_id !== undefined && object.typed_data_chain_id !== null) {
            message.typedDataChainId = Long.fromString(object.typed_data_chain_id);
        }
        if (object.fee_payer !== undefined && object.fee_payer !== null) {
            message.feePayer = object.fee_payer;
        }
        if (object.fee_payer_sig !== undefined && object.fee_payer_sig !== null) {
            message.feePayerSig = bytesFromBase64(object.fee_payer_sig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.typed_data_chain_id = message.typedDataChainId ? message.typedDataChainId.toString() : undefined;
        obj.fee_payer = message.feePayer;
        obj.fee_payer_sig = message.feePayerSig ? base64FromBytes(message.feePayerSig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ExtensionOptionsWeb3Tx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtensionOptionsWeb3Tx.decode(message.value);
    },
    toProto(message) {
        return ExtensionOptionsWeb3Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
            value: ExtensionOptionsWeb3Tx.encode(message).finish()
        };
    }
};
