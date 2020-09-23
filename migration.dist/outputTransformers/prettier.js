"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettierOutputTransformer = void 0;
exports.prettierOutputTransformer = (output, { prettier }, cfg) => {
    const prettierCfg = Object.assign(Object.assign({}, (cfg.prettier || {})), { parser: "typescript" });
    return prettier.format(output, prettierCfg);
};
