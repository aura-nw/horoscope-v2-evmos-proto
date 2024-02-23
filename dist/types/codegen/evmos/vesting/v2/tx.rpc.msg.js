import * as _m0 from "protobufjs/minimal";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse, MsgFundVestingAccount, MsgFundVestingAccountResponse, MsgClawback, MsgClawbackResponse, MsgUpdateVestingFunder, MsgUpdateVestingFunderResponse, MsgConvertVestingAccount, MsgConvertVestingAccountResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.createClawbackVestingAccount = this.createClawbackVestingAccount.bind(this);
        this.fundVestingAccount = this.fundVestingAccount.bind(this);
        this.clawback = this.clawback.bind(this);
        this.updateVestingFunder = this.updateVestingFunder.bind(this);
        this.convertVestingAccount = this.convertVestingAccount.bind(this);
    }
    createClawbackVestingAccount(request) {
        const data = MsgCreateClawbackVestingAccount.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "CreateClawbackVestingAccount", data);
        return promise.then(data => MsgCreateClawbackVestingAccountResponse.decode(new _m0.Reader(data)));
    }
    fundVestingAccount(request) {
        const data = MsgFundVestingAccount.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "FundVestingAccount", data);
        return promise.then(data => MsgFundVestingAccountResponse.decode(new _m0.Reader(data)));
    }
    clawback(request) {
        const data = MsgClawback.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "Clawback", data);
        return promise.then(data => MsgClawbackResponse.decode(new _m0.Reader(data)));
    }
    updateVestingFunder(request) {
        const data = MsgUpdateVestingFunder.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "UpdateVestingFunder", data);
        return promise.then(data => MsgUpdateVestingFunderResponse.decode(new _m0.Reader(data)));
    }
    convertVestingAccount(request) {
        const data = MsgConvertVestingAccount.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "ConvertVestingAccount", data);
        return promise.then(data => MsgConvertVestingAccountResponse.decode(new _m0.Reader(data)));
    }
}
