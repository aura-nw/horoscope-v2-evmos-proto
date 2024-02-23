import * as _m0 from "protobufjs/minimal";
import { MsgEthereumTx, MsgEthereumTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ethereumTx = this.ethereumTx.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    ethereumTx(request) {
        const data = MsgEthereumTx.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Msg", "EthereumTx", data);
        return promise.then(data => MsgEthereumTxResponse.decode(new _m0.Reader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
}
