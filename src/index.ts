import { EmailService } from './EmailService';
import { MockProvider } from './MockProvider';

const emailService = new EmailService([new MockProvider()]);

emailService.sendEmail('test@example.com', 'Test Subject', 'Test Body')
  .then(result => {
    console.log('Email sent:', result);
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });