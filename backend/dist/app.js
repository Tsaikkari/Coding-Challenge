"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const apiErrorHandler_1 = __importDefault(require("./middlewares/apiErrorHandler"));
const apiContentType_1 = __importDefault(require("./middlewares/apiContentType"));
const user_1 = __importDefault(require("./routers/user"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    allowedHeaders: 'X-Requested-With, content-type',
    methods: 'GET, POST, OPTIONS',
    credentials: true,
}));
app.use('/api', user_1.default);
// custom API error handler
app.use(apiErrorHandler_1.default);
app.use(apiContentType_1.default);
exports.default = app;
