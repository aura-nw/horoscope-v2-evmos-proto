import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export const registry = [["/ibc.applications.fee.v1.MsgRegisterPayee", MsgRegisterPayee], ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", MsgRegisterCounterpartyPayee], ["/ibc.applications.fee.v1.MsgPayPacketFee", MsgPayPacketFee], ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", MsgPayPacketFeeAsync]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        registerPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value: MsgRegisterPayee.encode(value).finish()
            };
        },
        registerCounterpartyPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value: MsgRegisterCounterpartyPayee.encode(value).finish()
            };
        },
        payPacketFee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value: MsgPayPacketFee.encode(value).finish()
            };
        },
        payPacketFeeAsync(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value: MsgPayPacketFeeAsync.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value
            };
        },
        registerCounterpartyPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value
            };
        },
        payPacketFee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value
            };
        },
        payPacketFeeAsync(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value
            };
        }
    },
    toJSON: {
        registerPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value: MsgRegisterPayee.toJSON(value)
            };
        },
        registerCounterpartyPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value: MsgRegisterCounterpartyPayee.toJSON(value)
            };
        },
        payPacketFee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value: MsgPayPacketFee.toJSON(value)
            };
        },
        payPacketFeeAsync(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value: MsgPayPacketFeeAsync.toJSON(value)
            };
        }
    },
    fromJSON: {
        registerPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value: MsgRegisterPayee.fromJSON(value)
            };
        },
        registerCounterpartyPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value: MsgRegisterCounterpartyPayee.fromJSON(value)
            };
        },
        payPacketFee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value: MsgPayPacketFee.fromJSON(value)
            };
        },
        payPacketFeeAsync(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value: MsgPayPacketFeeAsync.fromJSON(value)
            };
        }
    },
    fromPartial: {
        registerPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value: MsgRegisterPayee.fromPartial(value)
            };
        },
        registerCounterpartyPayee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value: MsgRegisterCounterpartyPayee.fromPartial(value)
            };
        },
        payPacketFee(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value: MsgPayPacketFee.fromPartial(value)
            };
        },
        payPacketFeeAsync(value) {
            return {
                typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value: MsgPayPacketFeeAsync.fromPartial(value)
            };
        }
    }
};
