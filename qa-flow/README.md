# AI Personal Financial Coach

This project is an AI-powered personal financial coach application. It leverages modern web technologies and AI to provide users with personalized financial advice and tools.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Personalized financial advice using AI
- Interactive dashboard with financial insights
- Real-time data updates
- Responsive design

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Wouter (for routing)
  - Tailwind CSS
  - Radix UI
  - Tanstack React Query

- **Backend:**
  - Express
  - TypeScript
  - Vite
  - Drizzle ORM

- **AI:**
  - LangChain
  - OpenAI
  - Llama
  - Openrouter

## Installation

### Prerequisites
- Docker and Docker Compose
- Node.js and npm

### Setup Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/AI-personal-financial-coach.git
   cd AI-personal-financial-coach
   ```

2. Start the PostgreSQL database with Docker:

   ```sh
   docker-compose up -d
   ```

3. Set up environment variables:

   Copy the example environment file and update it:

   ```sh
   cp .env.example .env
   ```

   Update the `.env` file with your API keys:

   ```properties
   # Database is already configured for Docker
   SESSION_SECRET=your_session_secret_here
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. Install dependencies:

   ```sh
   npm install
   ```

5. Run the application:

   ```sh
   npm run dev
   ```

### Database Management

- **Stop database:** `docker-compose down`
- **View logs:** `docker-compose logs postgres`
- **Reset database:** `docker-compose down -v && docker-compose up -d`

## Usage

Once the application is running, open your browser and navigate to `http://localhost:5000` to access the AI Personal Financial Coach.

## Folder Structure

The project structure is as follows:

```
AI-personal-financial-coach/
├── client/                 # Frontend code
├── server/                 # Backend code
├── shared/
├── .env                    # Environment variables
├── README.md               # Project documentation
└── package.json            # Project metadata and dependencies
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.# amazon-q-demo
