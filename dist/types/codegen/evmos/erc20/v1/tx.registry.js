import { MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export const registry = [["/evmos.erc20.v1.MsgConvertCoin", MsgConvertCoin], ["/evmos.erc20.v1.MsgConvertERC20", MsgConvertERC20], ["/evmos.erc20.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        convertCoin(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
                value: MsgConvertCoin.encode(value).finish()
            };
        },
        convertERC20(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
                value: MsgConvertERC20.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        convertCoin(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
                value
            };
        },
        convertERC20(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
                value
            };
        }
    },
    toJSON: {
        convertCoin(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
                value: MsgConvertCoin.toJSON(value)
            };
        },
        convertERC20(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
                value: MsgConvertERC20.toJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        convertCoin(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
                value: MsgConvertCoin.fromJSON(value)
            };
        },
        convertERC20(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
                value: MsgConvertERC20.fromJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        convertCoin(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
                value: MsgConvertCoin.fromPartial(value)
            };
        },
        convertERC20(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
                value: MsgConvertERC20.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
