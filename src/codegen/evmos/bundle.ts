import * as _117 from "./epochs/v1/genesis";
import * as _118 from "./epochs/v1/query";
import * as _119 from "./erc20/v1/erc20";
import * as _120 from "./erc20/v1/events";
import * as _121 from "./erc20/v1/genesis";
import * as _122 from "./erc20/v1/query";
import * as _123 from "./erc20/v1/tx";
import * as _124 from "./incentives/v1/genesis";
import * as _125 from "./incentives/v1/incentives";
import * as _126 from "./inflation/v1/genesis";
import * as _127 from "./inflation/v1/inflation";
import * as _128 from "./inflation/v1/query";
import * as _129 from "./inflation/v1/tx";
import * as _130 from "./revenue/v1/events";
import * as _131 from "./revenue/v1/genesis";
import * as _132 from "./revenue/v1/query";
import * as _133 from "./revenue/v1/revenue";
import * as _134 from "./revenue/v1/tx";
import * as _135 from "./vesting/v1/vesting";
import * as _136 from "./vesting/v2/events";
import * as _137 from "./vesting/v2/query";
import * as _138 from "./vesting/v2/tx";
import * as _139 from "./vesting/v2/vesting";
import * as _251 from "./erc20/v1/tx.amino";
import * as _252 from "./inflation/v1/tx.amino";
import * as _253 from "./revenue/v1/tx.amino";
import * as _254 from "./vesting/v2/tx.amino";
import * as _255 from "./erc20/v1/tx.registry";
import * as _256 from "./inflation/v1/tx.registry";
import * as _257 from "./revenue/v1/tx.registry";
import * as _258 from "./vesting/v2/tx.registry";
import * as _259 from "./epochs/v1/query.lcd";
import * as _260 from "./erc20/v1/query.lcd";
import * as _261 from "./inflation/v1/query.lcd";
import * as _262 from "./revenue/v1/query.lcd";
import * as _263 from "./vesting/v2/query.lcd";
import * as _264 from "./epochs/v1/query.rpc.Query";
import * as _265 from "./erc20/v1/query.rpc.Query";
import * as _266 from "./inflation/v1/query.rpc.Query";
import * as _267 from "./revenue/v1/query.rpc.Query";
import * as _268 from "./vesting/v2/query.rpc.Query";
import * as _269 from "./erc20/v1/tx.rpc.msg";
import * as _270 from "./inflation/v1/tx.rpc.msg";
import * as _271 from "./revenue/v1/tx.rpc.msg";
import * as _272 from "./vesting/v2/tx.rpc.msg";
import * as _279 from "./lcd";
import * as _280 from "./rpc.query";
import * as _281 from "./rpc.tx";
export namespace evmos {
  export namespace epochs {
    export const v1 = {
      ..._117,
      ..._118,
      ..._259,
      ..._264
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._251,
      ..._255,
      ..._260,
      ..._265,
      ..._269
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._124,
      ..._125
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._252,
      ..._256,
      ..._261,
      ..._266,
      ..._270
    };
  }
  export namespace revenue {
    export const v1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._253,
      ..._257,
      ..._262,
      ..._267,
      ..._271
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._135
    };
    export const v2 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._254,
      ..._258,
      ..._263,
      ..._268,
      ..._272
    };
  }
  export const ClientFactory = {
    ..._279,
    ..._280,
    ..._281
  };
}