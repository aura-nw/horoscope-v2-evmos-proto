import { MsgCreateClawbackVestingAccount, MsgFundVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export const registry = [["/evmos.vesting.v2.MsgCreateClawbackVestingAccount", MsgCreateClawbackVestingAccount], ["/evmos.vesting.v2.MsgFundVestingAccount", MsgFundVestingAccount], ["/evmos.vesting.v2.MsgClawback", MsgClawback], ["/evmos.vesting.v2.MsgUpdateVestingFunder", MsgUpdateVestingFunder], ["/evmos.vesting.v2.MsgConvertVestingAccount", MsgConvertVestingAccount]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createClawbackVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
                value: MsgCreateClawbackVestingAccount.encode(value).finish()
            };
        },
        fundVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
                value: MsgFundVestingAccount.encode(value).finish()
            };
        },
        clawback(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgClawback",
                value: MsgClawback.encode(value).finish()
            };
        },
        updateVestingFunder(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
                value: MsgUpdateVestingFunder.encode(value).finish()
            };
        },
        convertVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
                value: MsgConvertVestingAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClawbackVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
                value
            };
        },
        fundVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
                value
            };
        },
        clawback(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgClawback",
                value
            };
        },
        updateVestingFunder(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
                value
            };
        },
        convertVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
                value
            };
        }
    },
    toJSON: {
        createClawbackVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
                value: MsgCreateClawbackVestingAccount.toJSON(value)
            };
        },
        fundVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
                value: MsgFundVestingAccount.toJSON(value)
            };
        },
        clawback(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgClawback",
                value: MsgClawback.toJSON(value)
            };
        },
        updateVestingFunder(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
                value: MsgUpdateVestingFunder.toJSON(value)
            };
        },
        convertVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
                value: MsgConvertVestingAccount.toJSON(value)
            };
        }
    },
    fromJSON: {
        createClawbackVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
                value: MsgCreateClawbackVestingAccount.fromJSON(value)
            };
        },
        fundVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
                value: MsgFundVestingAccount.fromJSON(value)
            };
        },
        clawback(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgClawback",
                value: MsgClawback.fromJSON(value)
            };
        },
        updateVestingFunder(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
                value: MsgUpdateVestingFunder.fromJSON(value)
            };
        },
        convertVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
                value: MsgConvertVestingAccount.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createClawbackVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
                value: MsgCreateClawbackVestingAccount.fromPartial(value)
            };
        },
        fundVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
                value: MsgFundVestingAccount.fromPartial(value)
            };
        },
        clawback(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgClawback",
                value: MsgClawback.fromPartial(value)
            };
        },
        updateVestingFunder(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
                value: MsgUpdateVestingFunder.fromPartial(value)
            };
        },
        convertVestingAccount(value) {
            return {
                typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
                value: MsgConvertVestingAccount.fromPartial(value)
            };
        }
    }
};
