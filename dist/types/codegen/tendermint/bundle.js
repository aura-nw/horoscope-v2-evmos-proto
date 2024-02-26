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
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._188
    };
    tendermint.crypto = {
        ..._189,
        ..._190
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._191
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._192
    };
    tendermint.types = {
        ..._193,
        ..._194,
        ..._195,
        ..._196,
        ..._197
    };
    tendermint.version = {
        ..._198
    };
})(tendermint || (tendermint = {}));
