import { EmailService } from '../src/EmailService';
import { MockProvider } from '../src/MockProvider';

describe('EmailService', () => {
  it('should send an email using the first provider', async () => {
    const provider = new MockProvider();
    const emailService = new EmailService([provider]);

    const result = await emailService.sendEmail('test@example.com', 'Test Subject', 'Test Body');
    expect(result).toBe(true);
  });
});