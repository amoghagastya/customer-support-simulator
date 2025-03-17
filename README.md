```markdown
# Customer Service Training Simulator

An interactive training tool for customer service representatives, powered by AI. Practice handling different customer scenarios in a realistic environment.

## Features

- Real-time voice interactions with AI customers
- Multiple customer personas (angry customer, general inquiry)
- Debug view for monitoring interactions
- Natural conversation flow
- Realistic customer behaviors and responses

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v9.9.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amoghagastya/customer-support-simulator.git
 ```
```

2. Install dependencies:
```bash
pnpm install
 ```

3. Start the development server:
```bash
pnpm dev
 ```

The application will be available at http://localhost:3000

## Usage
1. Select a customer persona from the dropdown menu
2. Click "Start Training Call" to begin the simulation
3. Interact with the AI customer as you would in a real support scenario
4. Use the debug view to monitor the conversation flow
5. Click "End Call" when finished
## Tech Stack
- Next.js 14
- React 18
- TailwindCSS
- Ultravox Client SDK
- TypeScript
## Development
To run the development server:

```bash
pnpm dev
 ```

To build for production:

```bash
pnpm build
 ```

To start the production server:


```bash
pnpm start
 ```