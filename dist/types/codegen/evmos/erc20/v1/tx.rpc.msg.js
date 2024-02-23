import * as _m0 from "protobufjs/minimal";
import { MsgConvertCoin, MsgConvertCoinResponse, MsgConvertERC20, MsgConvertERC20Response, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.convertCoin = this.convertCoin.bind(this);
        this.convertERC20 = this.convertERC20.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    convertCoin(request) {
        const data = MsgConvertCoin.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertCoin", data);
        return promise.then(data => MsgConvertCoinResponse.decode(new _m0.Reader(data)));
    }
    convertERC20(request) {
        const data = MsgConvertERC20.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertERC20", data);
        return promise.then(data => MsgConvertERC20Response.decode(new _m0.Reader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
}
