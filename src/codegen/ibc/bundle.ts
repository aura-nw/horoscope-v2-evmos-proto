import * as _229 from "./applications/transfer/v1/genesis";
import * as _230 from "./applications/transfer/v1/query";
import * as _231 from "./applications/transfer/v1/transfer";
import * as _232 from "./applications/transfer/v1/tx";
import * as _233 from "./applications/transfer/v2/packet";
import * as _234 from "./core/channel/v1/channel";
import * as _235 from "./core/channel/v1/genesis";
import * as _236 from "./core/channel/v1/query";
import * as _237 from "./core/channel/v1/tx";
import * as _238 from "./core/client/v1/client";
import * as _239 from "./core/client/v1/genesis";
import * as _240 from "./core/client/v1/query";
import * as _241 from "./core/client/v1/tx";
import * as _242 from "./core/commitment/v1/commitment";
import * as _243 from "./core/connection/v1/connection";
import * as _244 from "./core/connection/v1/genesis";
import * as _245 from "./core/connection/v1/query";
import * as _246 from "./core/connection/v1/tx";
import * as _247 from "./core/port/v1/query";
import * as _248 from "./core/types/v1/genesis";
import * as _249 from "./lightclients/localhost/v1/localhost";
import * as _250 from "./lightclients/solomachine/v1/solomachine";
import * as _251 from "./lightclients/solomachine/v2/solomachine";
import * as _252 from "./lightclients/tendermint/v1/tendermint";
import * as _421 from "./applications/transfer/v1/tx.amino";
import * as _422 from "./core/channel/v1/tx.amino";
import * as _423 from "./core/client/v1/tx.amino";
import * as _424 from "./core/connection/v1/tx.amino";
import * as _425 from "./applications/transfer/v1/tx.registry";
import * as _426 from "./core/channel/v1/tx.registry";
import * as _427 from "./core/client/v1/tx.registry";
import * as _428 from "./core/connection/v1/tx.registry";
import * as _429 from "./applications/transfer/v1/query.lcd";
import * as _430 from "./core/channel/v1/query.lcd";
import * as _431 from "./core/client/v1/query.lcd";
import * as _432 from "./core/connection/v1/query.lcd";
import * as _433 from "./applications/transfer/v1/query.rpc.Query";
import * as _434 from "./core/channel/v1/query.rpc.Query";
import * as _435 from "./core/client/v1/query.rpc.Query";
import * as _436 from "./core/connection/v1/query.rpc.Query";
import * as _437 from "./core/port/v1/query.rpc.Query";
import * as _438 from "./applications/transfer/v1/tx.rpc.msg";
import * as _439 from "./core/channel/v1/tx.rpc.msg";
import * as _440 from "./core/client/v1/tx.rpc.msg";
import * as _441 from "./core/connection/v1/tx.rpc.msg";
import * as _457 from "./lcd";
import * as _458 from "./rpc.query";
import * as _459 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._229,
        ..._230,
        ..._231,
        ..._232,
        ..._421,
        ..._425,
        ..._429,
        ..._433,
        ..._438
      };
      export const v2 = {
        ..._233
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._234,
        ..._235,
        ..._236,
        ..._237,
        ..._422,
        ..._426,
        ..._430,
        ..._434,
        ..._439
      };
    }
    export namespace client {
      export const v1 = {
        ..._238,
        ..._239,
        ..._240,
        ..._241,
        ..._423,
        ..._427,
        ..._431,
        ..._435,
        ..._440
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._242
      };
    }
    export namespace connection {
      export const v1 = {
        ..._243,
        ..._244,
        ..._245,
        ..._246,
        ..._424,
        ..._428,
        ..._432,
        ..._436,
        ..._441
      };
    }
    export namespace port {
      export const v1 = {
        ..._247,
        ..._437
      };
    }
    export namespace types {
      export const v1 = {
        ..._248
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._249
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._250
      };
      export const v2 = {
        ..._251
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._252
      };
    }
  }
  export const ClientFactory = {
    ..._457,
    ..._458,
    ..._459
  };
}