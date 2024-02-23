export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.period = this.period.bind(this);
        this.epochMintProvision = this.epochMintProvision.bind(this);
        this.skippedEpochs = this.skippedEpochs.bind(this);
        this.circulatingSupply = this.circulatingSupply.bind(this);
        this.inflationRate = this.inflationRate.bind(this);
        this.params = this.params.bind(this);
    }
    /* Period retrieves current period. */
    async period(_params = {}) {
        const endpoint = `evmos/inflation/v1/period`;
        return await this.req.get(endpoint);
    }
    /* EpochMintProvision retrieves current minting epoch provision value. */
    async epochMintProvision(_params = {}) {
        const endpoint = `evmos/inflation/v1/epoch_mint_provision`;
        return await this.req.get(endpoint);
    }
    /* SkippedEpochs retrieves the total number of skipped epochs. */
    async skippedEpochs(_params = {}) {
        const endpoint = `evmos/inflation/v1/skipped_epochs`;
        return await this.req.get(endpoint);
    }
    /* CirculatingSupply retrieves the total number of tokens that are in
     circulation (i.e. excluding unvested tokens). */
    async circulatingSupply(_params = {}) {
        const endpoint = `evmos/inflation/v1/circulating_supply`;
        return await this.req.get(endpoint);
    }
    /* InflationRate retrieves the inflation rate of the current period. */
    async inflationRate(_params = {}) {
        const endpoint = `evmos/inflation/v1/inflation_rate`;
        return await this.req.get(endpoint);
    }
    /* Params retrieves the total set of minting parameters. */
    async params(_params = {}) {
        const endpoint = `evmos/inflation/v1/params`;
        return await this.req.get(endpoint);
    }
}
