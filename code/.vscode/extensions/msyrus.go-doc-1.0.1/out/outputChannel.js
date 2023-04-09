"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showOutput = void 0;
const vscode = require("vscode");
let outputChannel = vscode.window.createOutputChannel('Go Doc');
function showOutput(message, clear, focus) {
    if (focus) {
        outputChannel.show();
    }
    if (clear) {
        outputChannel.clear();
    }
    outputChannel.appendLine(message);
}
exports.showOutput = showOutput;
//# sourceMappingURL=outputChannel.js.map