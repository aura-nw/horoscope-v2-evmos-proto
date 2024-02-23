import * as _103 from "./wasm/v1/genesis";
import * as _104 from "./wasm/v1/ibc";
import * as _105 from "./wasm/v1/proposal";
import * as _106 from "./wasm/v1/query";
import * as _107 from "./wasm/v1/tx";
import * as _108 from "./wasm/v1/types";
import * as _346 from "./wasm/v1/tx.amino";
import * as _347 from "./wasm/v1/tx.registry";
import * as _348 from "./wasm/v1/query.lcd";
import * as _349 from "./wasm/v1/query.rpc.Query";
import * as _350 from "./wasm/v1/tx.rpc.msg";
import * as _445 from "./lcd";
import * as _446 from "./rpc.query";
import * as _447 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._346,
      ..._347,
      ..._348,
      ..._349,
      ..._350
    };
  }
  export const ClientFactory = {
    ..._445,
    ..._446,
    ..._447
  };
}