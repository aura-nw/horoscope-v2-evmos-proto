import { setPaginationParams } from "../../../../helpers";
export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.denomTraces = this.denomTraces.bind(this);
        this.denomTrace = this.denomTrace.bind(this);
        this.params = this.params.bind(this);
        this.denomHash = this.denomHash.bind(this);
        this.escrowAddress = this.escrowAddress.bind(this);
        this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
    }
    /* DenomTraces queries all denomination traces. */
    async denomTraces(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `ibc/apps/transfer/v1/denom_traces`;
        return await this.req.get(endpoint, options);
    }
    /* DenomTrace queries a denomination trace information. */
    async denomTrace(params) {
        const options = {
            params: {}
        };
        if (typeof params?.hash !== "undefined") {
            options.params.hash = params.hash;
        }
        const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
        return await this.req.get(endpoint, options);
    }
    /* Params queries all parameters of the ibc-transfer module. */
    async params(_params = {}) {
        const endpoint = `ibc/apps/transfer/v1/params`;
        return await this.req.get(endpoint);
    }
    /* DenomHash queries a denomination hash information. */
    async denomHash(params) {
        const options = {
            params: {}
        };
        if (typeof params?.trace !== "undefined") {
            options.params.trace = params.trace;
        }
        const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
        return await this.req.get(endpoint, options);
    }
    /* EscrowAddress returns the escrow address for a particular port and channel id. */
    async escrowAddress(params) {
        const endpoint = `ibc/apps/transfer/v1/channels/${params.channelId}/ports/${params.portId}/escrow_address`;
        return await this.req.get(endpoint);
    }
    /* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    async totalEscrowForDenom(params) {
        const options = {
            params: {}
        };
        if (typeof params?.denom !== "undefined") {
            options.params.denom = params.denom;
        }
        const endpoint = `ibc/apps/transfer/v1/denoms/${params.denom}/total_escrow`;
        return await this.req.get(endpoint, options);
    }
}
