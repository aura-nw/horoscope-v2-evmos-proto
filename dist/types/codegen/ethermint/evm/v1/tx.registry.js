import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export const registry = [["/ethermint.evm.v1.MsgEthereumTx", MsgEthereumTx], ["/ethermint.evm.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        ethereumTx(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
                value: MsgEthereumTx.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        ethereumTx(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
                value
            };
        }
    },
    toJSON: {
        ethereumTx(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
                value: MsgEthereumTx.toJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        ethereumTx(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
                value: MsgEthereumTx.fromJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        ethereumTx(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
                value: MsgEthereumTx.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
