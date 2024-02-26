import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseInterchainAccount() {
    return {
        baseAccount: undefined,
        accountOwner: ""
    };
}
export const InterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.accountOwner !== "") {
            writer.uint32(18).string(message.accountOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accountOwner = reader.string();
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
            accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
        message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterchainAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.accountOwner = object.accountOwner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterchainAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = BaseAccount.fromAmino(object.base_account);
        }
        if (object.account_owner !== undefined && object.account_owner !== null) {
            message.accountOwner = object.account_owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.account_owner = message.accountOwner;
        return obj;
    },
    fromAminoMsg(object) {
        return InterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterchainAccount",
            value: InterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterchainAccount.decode(message.value);
    },
    toProto(message) {
        return InterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
            value: InterchainAccount.encode(message).finish()
        };
    }
};
