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
const EmailService_1 = require("../src/EmailService");
const MockProvider_1 = require("../src/MockProvider");
describe('EmailService', () => {
    it('should send an email using the first provider', () => __awaiter(void 0, void 0, void 0, function* () {
        const provider = new MockProvider_1.MockProvider();
        const emailService = new EmailService_1.EmailService([provider]);
        const result = yield emailService.sendEmail('test@example.com', 'Test Subject', 'Test Body');
        expect(result).toBe(true);
    }));
});
