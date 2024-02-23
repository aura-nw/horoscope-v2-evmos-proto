import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.period = this.period.bind(this);
        this.epochMintProvision = this.epochMintProvision.bind(this);
        this.skippedEpochs = this.skippedEpochs.bind(this);
        this.circulatingSupply = this.circulatingSupply.bind(this);
        this.inflationRate = this.inflationRate.bind(this);
        this.params = this.params.bind(this);
    }
    period(request = {}) {
        const data = QueryPeriodRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "Period", data);
        return promise.then(data => QueryPeriodResponse.decode(new _m0.Reader(data)));
    }
    epochMintProvision(request = {}) {
        const data = QueryEpochMintProvisionRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "EpochMintProvision", data);
        return promise.then(data => QueryEpochMintProvisionResponse.decode(new _m0.Reader(data)));
    }
    skippedEpochs(request = {}) {
        const data = QuerySkippedEpochsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "SkippedEpochs", data);
        return promise.then(data => QuerySkippedEpochsResponse.decode(new _m0.Reader(data)));
    }
    circulatingSupply(request = {}) {
        const data = QueryCirculatingSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "CirculatingSupply", data);
        return promise.then(data => QueryCirculatingSupplyResponse.decode(new _m0.Reader(data)));
    }
    inflationRate(request = {}) {
        const data = QueryInflationRateRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "InflationRate", data);
        return promise.then(data => QueryInflationRateResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        period(request) {
            return queryService.period(request);
        },
        epochMintProvision(request) {
            return queryService.epochMintProvision(request);
        },
        skippedEpochs(request) {
            return queryService.skippedEpochs(request);
        },
        circulatingSupply(request) {
            return queryService.circulatingSupply(request);
        },
        inflationRate(request) {
            return queryService.inflationRate(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
