export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.baseFee = this.baseFee.bind(this);
        this.blockGas = this.blockGas.bind(this);
    }
    /* Params queries the parameters of x/feemarket module. */
    async params(_params = {}) {
        const endpoint = `evmos/feemarket/v1/params`;
        return await this.req.get(endpoint);
    }
    /* BaseFee queries the base fee of the parent block of the current block. */
    async baseFee(_params = {}) {
        const endpoint = `evmos/feemarket/v1/base_fee`;
        return await this.req.get(endpoint);
    }
    /* BlockGas queries the gas used at a given block height */
    async blockGas(_params = {}) {
        const endpoint = `evmos/feemarket/v1/block_gas`;
        return await this.req.get(endpoint);
    }
}
