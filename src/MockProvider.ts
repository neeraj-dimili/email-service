import { EmailProvider } from './EmailService';

class MockProvider implements EmailProvider {
  async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
    console.log(`Sending email to ${to} with subject "${subject}" via MockProvider`);
    return true; // Simulate success
  }
}

export { MockProvider };