"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countUpper = exports.isASCIIUpper = exports.camelCasedName = exports.gonicCasedName = void 0;
function gonicCasedName(name) {
    let newStr = [];
    for (let i = 0; i < name.length; i++) {
        let chr = name.charAt(i);
        if (isASCIIUpper(chr) && i > 0) {
            if (!isASCIIUpper(newStr[newStr.length - 1])) {
                newStr.push('_');
            }
        }
        if (!isASCIIUpper(chr) && i > 1) {
            let l = newStr.length;
            if (isASCIIUpper(newStr[l - 1]) && isASCIIUpper(newStr[l - 2])) {
                newStr.push(newStr[l - 1]);
                newStr[l - 1] = '_';
            }
        }
        newStr.push(chr);
    }
    return newStr.join("").toLowerCase();
}
exports.gonicCasedName = gonicCasedName;
function camelCasedName(name) {
    let newStr = [];
    for (let i = 0; i < name.length; i++) {
        let chr = name.charAt(i);
        if (isASCIIUpper(chr) && i === 0) {
            newStr.push(chr.toLowerCase());
            continue;
        }
        newStr.push(chr);
    }
    return newStr.join("");
}
exports.camelCasedName = camelCasedName;
function isASCIIUpper(c) {
    return 'A' <= c && c <= 'Z';
}
exports.isASCIIUpper = isASCIIUpper;
function countUpper(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isASCIIUpper(s[i])) {
            count++;
        }
    }
    return count;
}
exports.countUpper = countUpper;
//# sourceMappingURL=util.js.map