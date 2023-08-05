"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require('dotenv').config();
const index_1 = require("./index");
const AniList = new index_1.Client(process.env.token);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const media = yield AniList.getMedia(1);
    console.log(media.favourite());
}))();