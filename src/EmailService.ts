interface EmailProvider {
    sendEmail(to: string, subject: string, body: string): Promise<boolean>;
  }
  
  class EmailService {
    private providers: EmailProvider[];
    private requestLimit: number;
    private requestCount: number;
  
    constructor(providers: EmailProvider[]) {
      this.providers = providers;
      this.requestLimit = 10; // Example rate limit
      this.requestCount = 0;
    }
  
    private async sendWithProvider(provider: EmailProvider, to: string, subject: string, body: string): Promise<boolean> {
      try {
        const result = await provider.sendEmail(to, subject, body);
        if (result) {
          this.requestCount++;
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    }
  
    public async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
      for (const provider of this.providers) {
        const success = await this.sendWithProvider(provider, to, subject, body);
        if (success) {
          return true;
        }
      }
      return false;
    }
  }
  
  export { EmailService, EmailProvider };