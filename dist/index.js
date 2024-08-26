"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = require("./EmailService");
const MockProvider_1 = require("./MockProvider");
const emailService = new EmailService_1.EmailService([new MockProvider_1.MockProvider()]);
emailService.sendEmail('test@example.com', 'Test Subject', 'Test Body')
    .then(result => {
    console.log('Email sent:', result);
})
    .catch(error => {
    console.error('Error sending email:', error);
});
