"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
const db_1 = __importDefault(require("./config/db"));
const errorHandller_1 = require("./middleware/errorHandller");
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
// app.use(express.urlencoded({extended: false}))
app.use("/api/todo", todoRoute_1.default);
app.use(errorHandller_1.handleError);
app.listen(PORT, () => console.log(`⚡Server running on port ${PORT}`));
/***  TODO: FIX CLIENT ERROR MESSAGE */
