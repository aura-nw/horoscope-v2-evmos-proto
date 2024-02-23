import { TokenPair } from "./erc20";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        tokenPairs: []
    };
}
export const GenesisState = {
    typeUrl: "/evmos.erc20.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokenPairs) {
            TokenPair.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e) => TokenPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.tokenPairs) {
            obj.tokenPairs = message.tokenPairs.map(e => e ? TokenPair.toJSON(e) : undefined);
        }
        else {
            obj.tokenPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.tokenPairs) {
            obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
        }
        else {
            obj.token_pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        enableErc20: false,
        enableEvmHook: false
    };
}
export const Params = {
    typeUrl: "/evmos.erc20.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.enableErc20 === true) {
            writer.uint32(8).bool(message.enableErc20);
        }
        if (message.enableEvmHook === true) {
            writer.uint32(16).bool(message.enableEvmHook);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableErc20 = reader.bool();
                    break;
                case 2:
                    message.enableEvmHook = reader.bool();
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
            enableErc20: isSet(object.enableErc20) ? Boolean(object.enableErc20) : false,
            enableEvmHook: isSet(object.enableEvmHook) ? Boolean(object.enableEvmHook) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.enableErc20 !== undefined && (obj.enableErc20 = message.enableErc20);
        message.enableEvmHook !== undefined && (obj.enableEvmHook = message.enableEvmHook);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.enableErc20 = object.enableErc20 ?? false;
        message.enableEvmHook = object.enableEvmHook ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.enable_erc20 !== undefined && object.enable_erc20 !== null) {
            message.enableErc20 = object.enable_erc20;
        }
        if (object.enable_evm_hook !== undefined && object.enable_evm_hook !== null) {
            message.enableEvmHook = object.enable_evm_hook;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.enable_erc20 = message.enableErc20;
        obj.enable_evm_hook = message.enableEvmHook;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
