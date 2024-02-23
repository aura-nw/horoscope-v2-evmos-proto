import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.tokenPairs = this.tokenPairs.bind(this);
        this.tokenPair = this.tokenPair.bind(this);
        this.params = this.params.bind(this);
    }
    /* TokenPairs retrieves registered token pairs */
    async tokenPairs(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `evmos/erc20/v1/token_pairs`;
        return await this.req.get(endpoint, options);
    }
    /* TokenPair retrieves a registered token pair */
    async tokenPair(params) {
        const endpoint = `evmos/erc20/v1/token_pairs/${params.token}`;
        return await this.req.get(endpoint);
    }
    /* Params retrieves the erc20 module params */
    async params(_params = {}) {
        const endpoint = `evmos/erc20/v1/params`;
        return await this.req.get(endpoint);
    }
}
