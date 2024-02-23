import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.epochInfos = this.epochInfos.bind(this);
        this.currentEpoch = this.currentEpoch.bind(this);
    }
    epochInfos(request = {
        pagination: undefined
    }) {
        const data = QueryEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.epochs.v1.Query", "EpochInfos", data);
        return promise.then(data => QueryEpochsInfoResponse.decode(new _m0.Reader(data)));
    }
    currentEpoch(request) {
        const data = QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.epochs.v1.Query", "CurrentEpoch", data);
        return promise.then(data => QueryCurrentEpochResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        epochInfos(request) {
            return queryService.epochInfos(request);
        },
        currentEpoch(request) {
            return queryService.currentEpoch(request);
        }
    };
};
