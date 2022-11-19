"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = __importDefault(require("@myno_21/time"));
const currentTime = time_1.default.getCurrentFormattedTime();
console.log(currentTime);
