import * as _m0 from "protobufjs/minimal";
import { MsgRegisterRevenue, MsgRegisterRevenueResponse, MsgUpdateRevenue, MsgUpdateRevenueResponse, MsgCancelRevenue, MsgCancelRevenueResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.registerRevenue = this.registerRevenue.bind(this);
        this.updateRevenue = this.updateRevenue.bind(this);
        this.cancelRevenue = this.cancelRevenue.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    registerRevenue(request) {
        const data = MsgRegisterRevenue.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Msg", "RegisterRevenue", data);
        return promise.then(data => MsgRegisterRevenueResponse.decode(new _m0.Reader(data)));
    }
    updateRevenue(request) {
        const data = MsgUpdateRevenue.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Msg", "UpdateRevenue", data);
        return promise.then(data => MsgUpdateRevenueResponse.decode(new _m0.Reader(data)));
    }
    cancelRevenue(request) {
        const data = MsgCancelRevenue.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Msg", "CancelRevenue", data);
        return promise.then(data => MsgCancelRevenueResponse.decode(new _m0.Reader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
}
