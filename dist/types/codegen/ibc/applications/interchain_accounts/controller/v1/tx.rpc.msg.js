import * as _m0 from "protobufjs/minimal";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
        this.sendTx = this.sendTx.bind(this);
    }
    registerInterchainAccount(request) {
        const data = MsgRegisterInterchainAccount.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "RegisterInterchainAccount", data);
        return promise.then(data => MsgRegisterInterchainAccountResponse.decode(new _m0.Reader(data)));
    }
    sendTx(request) {
        const data = MsgSendTx.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "SendTx", data);
        return promise.then(data => MsgSendTxResponse.decode(new _m0.Reader(data)));
    }
}
