"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_1 = require("../holp/files");
const cloudService = (0, express_1.Router)();
cloudService.get("/allClouds", (req, res) => {
    const addType = (objList, type) => objList.map((obj) => (Object.assign(Object.assign({}, obj), { "type": type })));
    const games = addType((0, files_1.readJSON)("games"), "game");
    const maintenance = addType((0, files_1.readJSON)("maintenance"), "maintenance");
    const clouds = games.concat(maintenance);
    res.json(clouds);
});
exports.default = cloudService;
