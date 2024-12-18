"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = void 0;
const fs_1 = __importDefault(require("fs"));
const readJSON = (fileName) => {
    try {
        return JSON.parse(fs_1.default.readFileSync(`data/${fileName}.json`, "utf8"));
    }
    catch (e) {
        return [];
    }
};
exports.readJSON = readJSON;
const readFile = (fileName) => {
    try {
        return fs_1.default.readFileSync(`data/${fileName}`, "utf8");
    }
    catch (e) {
        return "";
    }
};
