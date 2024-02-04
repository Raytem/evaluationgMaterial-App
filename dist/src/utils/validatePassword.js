"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = void 0;
const validatePassword = (password) => {
    const regex = /^[0-9a-zA-Z!@#$%^&*]*$/g;
    return regex.test(password);
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=validatePassword.js.map