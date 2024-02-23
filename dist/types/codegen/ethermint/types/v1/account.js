import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: ""
    };
}
export const EthAccount = {
    typeUrl: "/ethermint.types.v1.EthAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash !== "") {
            writer.uint32(18).string(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codeHash = reader.string();
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
            baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
            codeHash: isSet(object.codeHash) ? String(object.codeHash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
        message.codeHash !== undefined && (obj.codeHash = message.codeHash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEthAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.codeHash = object.codeHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEthAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = BaseAccount.fromAmino(object.base_account);
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = object.code_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.code_hash = message.codeHash;
        return obj;
    },
    fromAminoMsg(object) {
        return EthAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EthAccount.decode(message.value);
    },
    toProto(message) {
        return EthAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.EthAccount",
            value: EthAccount.encode(message).finish()
        };
    }
};
