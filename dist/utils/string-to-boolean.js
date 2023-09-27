"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToBoolean = void 0;
const stringToBoolean = (value) => {
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    throw new Error('Error when convert: string => boolean');
};
exports.stringToBoolean = stringToBoolean;
//# sourceMappingURL=string-to-boolean.js.map