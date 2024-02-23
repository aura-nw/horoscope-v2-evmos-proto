import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.updateParams = this.updateParams.bind(this);
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
}
