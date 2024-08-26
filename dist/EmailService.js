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
exports.EmailService = void 0;
class EmailService {
    constructor(providers) {
        this.providers = providers;
        this.requestLimit = 10; // Example rate limit
        this.requestCount = 0;
    }
    sendWithProvider(provider, to, subject, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield provider.sendEmail(to, subject, body);
                if (result) {
                    this.requestCount++;
                    return true;
                }
                return false;
            }
            catch (error) {
                return false;
            }
        });
    }
    sendEmail(to, subject, body) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const provider of this.providers) {
                const success = yield this.sendWithProvider(provider, to, subject, body);
                if (success) {
                    return true;
                }
            }
            return false;
        });
    }
}
exports.EmailService = EmailService;
