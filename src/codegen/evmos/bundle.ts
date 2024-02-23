import * as _198 from "./epochs/v1/genesis";
import * as _199 from "./epochs/v1/query";
import * as _200 from "./erc20/v1/erc20";
import * as _201 from "./erc20/v1/events";
import * as _202 from "./erc20/v1/genesis";
import * as _203 from "./erc20/v1/query";
import * as _204 from "./erc20/v1/tx";
import * as _205 from "./incentives/v1/genesis";
import * as _206 from "./incentives/v1/incentives";
import * as _207 from "./inflation/v1/genesis";
import * as _208 from "./inflation/v1/inflation";
import * as _209 from "./inflation/v1/query";
import * as _210 from "./inflation/v1/tx";
import * as _211 from "./revenue/v1/events";
import * as _212 from "./revenue/v1/genesis";
import * as _213 from "./revenue/v1/query";
import * as _214 from "./revenue/v1/revenue";
import * as _215 from "./revenue/v1/tx";
import * as _216 from "./vesting/v1/vesting";
import * as _217 from "./vesting/v2/events";
import * as _218 from "./vesting/v2/query";
import * as _219 from "./vesting/v2/tx";
import * as _220 from "./vesting/v2/vesting";
import * as _399 from "./erc20/v1/tx.amino";
import * as _400 from "./inflation/v1/tx.amino";
import * as _401 from "./revenue/v1/tx.amino";
import * as _402 from "./vesting/v2/tx.amino";
import * as _403 from "./erc20/v1/tx.registry";
import * as _404 from "./inflation/v1/tx.registry";
import * as _405 from "./revenue/v1/tx.registry";
import * as _406 from "./vesting/v2/tx.registry";
import * as _407 from "./epochs/v1/query.lcd";
import * as _408 from "./erc20/v1/query.lcd";
import * as _409 from "./inflation/v1/query.lcd";
import * as _410 from "./revenue/v1/query.lcd";
import * as _411 from "./vesting/v2/query.lcd";
import * as _412 from "./epochs/v1/query.rpc.Query";
import * as _413 from "./erc20/v1/query.rpc.Query";
import * as _414 from "./inflation/v1/query.rpc.Query";
import * as _415 from "./revenue/v1/query.rpc.Query";
import * as _416 from "./vesting/v2/query.rpc.Query";
import * as _417 from "./erc20/v1/tx.rpc.msg";
import * as _418 from "./inflation/v1/tx.rpc.msg";
import * as _419 from "./revenue/v1/tx.rpc.msg";
import * as _420 from "./vesting/v2/tx.rpc.msg";
import * as _454 from "./lcd";
import * as _455 from "./rpc.query";
import * as _456 from "./rpc.tx";
export namespace evmos {
  export namespace epochs {
    export const v1 = {
      ..._198,
      ..._199,
      ..._407,
      ..._412
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._399,
      ..._403,
      ..._408,
      ..._413,
      ..._417
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._205,
      ..._206
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._400,
      ..._404,
      ..._409,
      ..._414,
      ..._418
    };
  }
  export namespace revenue {
    export const v1 = {
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._401,
      ..._405,
      ..._410,
      ..._415,
      ..._419
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._216
    };
    export const v2 = {
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._402,
      ..._406,
      ..._411,
      ..._416,
      ..._420
    };
  }
  export const ClientFactory = {
    ..._454,
    ..._455,
    ..._456
  };
}