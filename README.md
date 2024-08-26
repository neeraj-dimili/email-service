# Email Service

A resilient email sending service implemented in TypeScript. This project includes features like retry logic, fallback mechanisms, idempotency, rate limiting, and status tracking.

## Features

- **Retry Mechanism:** Implements retry logic with exponential backoff.
- **Fallback Mechanism:** Switches between two mock email providers on failure.
- **Idempotency:** Ensures no duplicate email sends.
- **Rate Limiting:** Basic rate limiting to control request frequency.
- **Status Tracking:** Tracks email sending attempts.

## Key Components

- `EmailService`: Core class that handles email sending, retry logic, and provider fallback.
- `MockProvider`: Mock email providers used for testing.

## Setup Instructions

### Prerequisites

- Node.js (version 14.x or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/email-service.git
   cd email-service


2. Install the dependencies:

 npm install

3. Build the project:

 npm run build

4. Run the application:

 node dist/index.js

5. To run the unit tests, use:

  npm test
