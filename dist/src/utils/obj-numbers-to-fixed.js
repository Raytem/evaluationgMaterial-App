"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objNumbersToFixed = void 0;
function objNumbersToFixed(obj, cntOfNumbersAfterPoint) {
    if (obj !== null && typeof obj !== 'object') {
        throw new Error(`This is not an object: ${obj}`);
    }
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = +obj[key].toFixed(cntOfNumbersAfterPoint);
        }
    }
    return obj;
}
exports.objNumbersToFixed = objNumbersToFixed;
//# sourceMappingURL=obj-numbers-to-fixed.js.map