"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePlugin = void 0;
const path_1 = require("path");
function resolvePlugin({ fs, resolve }, pluginName, cwd) {
    const localPluginPath = path_1.join(cwd, "ts-gen-plugins", pluginName);
    const doesLocalPluginExist = fs.existsSync(localPluginPath);
    if (doesLocalPluginExist) {
        return localPluginPath;
    }
    return resolve(pluginName, { basedir: cwd });
}
exports.resolvePlugin = resolvePlugin;
