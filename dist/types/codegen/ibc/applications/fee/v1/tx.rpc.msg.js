import * as _m0 from "protobufjs/minimal";
import { MsgRegisterPayee, MsgRegisterPayeeResponse, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeResponse, MsgPayPacketFee, MsgPayPacketFeeResponse, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.registerPayee = this.registerPayee.bind(this);
        this.registerCounterpartyPayee = this.registerCounterpartyPayee.bind(this);
        this.payPacketFee = this.payPacketFee.bind(this);
        this.payPacketFeeAsync = this.payPacketFeeAsync.bind(this);
    }
    registerPayee(request) {
        const data = MsgRegisterPayee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
        return promise.then(data => MsgRegisterPayeeResponse.decode(new _m0.Reader(data)));
    }
    registerCounterpartyPayee(request) {
        const data = MsgRegisterCounterpartyPayee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
        return promise.then(data => MsgRegisterCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
    }
    payPacketFee(request) {
        const data = MsgPayPacketFee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
        return promise.then(data => MsgPayPacketFeeResponse.decode(new _m0.Reader(data)));
    }
    payPacketFeeAsync(request) {
        const data = MsgPayPacketFeeAsync.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
        return promise.then(data => MsgPayPacketFeeAsyncResponse.decode(new _m0.Reader(data)));
    }
}
