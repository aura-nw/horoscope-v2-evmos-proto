import { MsgRegisterRevenue, MsgUpdateRevenue, MsgCancelRevenue, MsgUpdateParams } from "./tx";
export const registry = [["/evmos.revenue.v1.MsgRegisterRevenue", MsgRegisterRevenue], ["/evmos.revenue.v1.MsgUpdateRevenue", MsgUpdateRevenue], ["/evmos.revenue.v1.MsgCancelRevenue", MsgCancelRevenue], ["/evmos.revenue.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        registerRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
                value: MsgRegisterRevenue.encode(value).finish()
            };
        },
        updateRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
                value: MsgUpdateRevenue.encode(value).finish()
            };
        },
        cancelRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
                value: MsgCancelRevenue.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
                value
            };
        },
        updateRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
                value
            };
        },
        cancelRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
                value
            };
        }
    },
    toJSON: {
        registerRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
                value: MsgRegisterRevenue.toJSON(value)
            };
        },
        updateRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
                value: MsgUpdateRevenue.toJSON(value)
            };
        },
        cancelRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
                value: MsgCancelRevenue.toJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        registerRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
                value: MsgRegisterRevenue.fromJSON(value)
            };
        },
        updateRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
                value: MsgUpdateRevenue.fromJSON(value)
            };
        },
        cancelRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
                value: MsgCancelRevenue.fromJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        registerRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
                value: MsgRegisterRevenue.fromPartial(value)
            };
        },
        updateRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
                value: MsgUpdateRevenue.fromPartial(value)
            };
        },
        cancelRevenue(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
                value: MsgCancelRevenue.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
