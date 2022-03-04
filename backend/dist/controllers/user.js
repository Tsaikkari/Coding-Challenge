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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const https_1 = __importDefault(require("https"));
const apiError_1 = require("../helpers/apiError");
// GET /users/:username
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    const username = req.query.username;
    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}`,
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        },
        OAuth: process.env.GITHUB_ACCESS_TOKEN,
    };
    https_1.default
        .get(options, function (response) {
        response.pipe(res);
    })
        .on('error', (err) => {
        next(new apiError_1.InternalServerError(err.message));
        res.status(500);
    });
    // } catch (err) {
    //   next(new NotFoundError('User not found'))
    // }
});
exports.getUser = getUser;
