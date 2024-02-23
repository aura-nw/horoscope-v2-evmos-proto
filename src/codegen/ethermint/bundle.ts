import * as _183 from "./crypto/v1/ethsecp256k1/keys";
import * as _184 from "./evm/v1/events";
import * as _185 from "./evm/v1/evm";
import * as _186 from "./evm/v1/genesis";
import * as _187 from "./evm/v1/query";
import * as _188 from "./evm/v1/tx";
import * as _189 from "./feemarket/v1/events";
import * as _190 from "./feemarket/v1/feemarket";
import * as _191 from "./feemarket/v1/genesis";
import * as _192 from "./feemarket/v1/query";
import * as _193 from "./feemarket/v1/tx";
import * as _194 from "./types/v1/account";
import * as _195 from "./types/v1/dynamic_fee";
import * as _196 from "./types/v1/indexer";
import * as _197 from "./types/v1/web3";
import * as _389 from "./evm/v1/tx.amino";
import * as _390 from "./feemarket/v1/tx.amino";
import * as _391 from "./evm/v1/tx.registry";
import * as _392 from "./feemarket/v1/tx.registry";
import * as _393 from "./evm/v1/query.lcd";
import * as _394 from "./feemarket/v1/query.lcd";
import * as _395 from "./evm/v1/query.rpc.Query";
import * as _396 from "./feemarket/v1/query.rpc.Query";
import * as _397 from "./evm/v1/tx.rpc.msg";
import * as _398 from "./feemarket/v1/tx.rpc.msg";
import * as _451 from "./lcd";
import * as _452 from "./rpc.query";
import * as _453 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._183
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._389,
      ..._391,
      ..._393,
      ..._395,
      ..._397
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._390,
      ..._392,
      ..._394,
      ..._396,
      ..._398
    };
  }
  export namespace types {
    export const v1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._197
    };
  }
  export const ClientFactory = {
    ..._451,
    ..._452,
    ..._453
  };
}