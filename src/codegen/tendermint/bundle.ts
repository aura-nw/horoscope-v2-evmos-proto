import * as _188 from "./abci/types";
import * as _189 from "./crypto/keys";
import * as _190 from "./crypto/proof";
import * as _191 from "./libs/bits/types";
import * as _192 from "./p2p/types";
import * as _193 from "./types/block";
import * as _194 from "./types/evidence";
import * as _195 from "./types/params";
import * as _196 from "./types/types";
import * as _197 from "./types/validator";
import * as _198 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._188
  };
  export const crypto = {
    ..._189,
    ..._190
  };
  export namespace libs {
    export const bits = {
      ..._191
    };
  }
  export const p2p = {
    ..._192
  };
  export const types = {
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197
  };
  export const version = {
    ..._198
  };
}