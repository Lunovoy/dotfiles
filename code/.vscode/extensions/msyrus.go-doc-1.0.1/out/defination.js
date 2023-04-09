"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDefination = void 0;
const vscode_1 = require("vscode");
const cp = require("child_process");
const path = require("path");
const util_1 = require("./util");
const outputChannel_1 = require("./outputChannel");
function printDefination() {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        vscode_1.window.showInformationMessage('No editor is active');
        return;
    }
    if (editor.document.languageId !== 'go') {
        vscode_1.window.showInformationMessage('File in the active editor is not a Go file');
        return;
    }
    outputChannel_1.showOutput('Generating documentation...', true);
    getDefinition(editor.document, editor.selection.active).then(def => {
        if (!def) {
            return;
        }
        outputChannel_1.showOutput(def, true, true);
    }, (err) => {
        vscode_1.window.showErrorMessage(err);
    });
}
exports.printDefination = printDefination;
function getDefinition(doc, pos) {
    return __awaiter(this, void 0, void 0, function* () {
        let gogetdoc = util_1.getBinPath('gogetdoc');
        if (!path.isAbsolute(gogetdoc)) {
            try {
                yield util_1.installTools();
                gogetdoc = util_1.getBinPath('gogetdoc');
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
        const fileArch = util_1.getFileArchive(doc);
        const offset = Buffer.byteLength(doc.getText().substr(0, doc.offsetAt(pos)));
        return new Promise((resolve, reject) => {
            var _a, _b;
            const opts = {
                cwd: path.dirname(doc.fileName),
            };
            const p = cp.execFile(gogetdoc, ['-json', '-modified', '-u', '-pos', doc.fileName + ':#' + offset.toString()], opts, (err, _, stderr) => {
                if (err && err.code === 'ENOENT') {
                    return reject('gogetdoc is missing');
                }
                if (err) {
                    return reject(stderr);
                }
            });
            (_a = p.stdin) === null || _a === void 0 ? void 0 : _a.end(fileArch);
            (_b = p.stdout) === null || _b === void 0 ? void 0 : _b.on('data', data => {
                try {
                    const def = JSON.parse(data);
                    let out = '';
                    if (def.import) {
                        out = def.import + '\n';
                    }
                    if (def.decl) {
                        out += (out ? '\n' : '') + def.decl + '\n';
                    }
                    if (def.doc) {
                        out += (out ? '\n' : '') + def.doc;
                    }
                    return resolve(out);
                }
                catch (e) {
                    return resolve(e);
                }
            });
        });
    });
}
//# sourceMappingURL=defination.js.map