# AI Personal Finance Coach: Code Structure Guide

This guide provides an overview of the codebase organization and key files to help new developers quickly understand where to find specific functionality.

## Directory Structure Overview

```
AI-personal-finance-coach/
├── .amazonq/                  # Amazon Q configuration
│   ├── project-intelligence/  # Project documentation
│   └── rules/                 # Development guidelines
├── client/                    # Frontend React application
│   ├── public/                # Static assets
│   └── src/                   # React source code
│       ├── components/        # Reusable UI components
│       ├── hooks/             # Custom React hooks
│       ├── lib/               # Utility functions
│       └── pages/             # Page components
├── server/                    # Backend Express server
│   ├── agent.ts              # AI agent implementation
│   ├── auth.ts               # Authentication logic
│   ├── db.ts                 # Database connection
│   ├── index.ts              # Server entry point
│   ├── llm.ts                # LLM integration
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Database operations
│   ├── utils.ts              # Utility functions
│   └── vite.ts               # Vite server integration
└── shared/                    # Shared code between client and server
    └── schema.ts             # Database schema and types
```

## Key Files and Their Purpose

### Frontend (Client)

| File | Purpose |
|------|---------|
| `client/src/App.tsx` | Main application component, routing setup |
| `client/src/main.tsx` | Application entry point |
| `client/src/pages/dashboard.tsx` | Main dashboard interface |
| `client/src/pages/auth-page.tsx` | Authentication page (login/register) |
| `client/src/components/ChatBot.tsx` | AI chat assistant interface |
| `client/src/components/ui/*.tsx` | Reusable UI components |
| `client/src/hooks/use-auth.tsx` | Authentication state management |
| `client/src/lib/queryClient.ts` | React Query configuration |
| `client/src/lib/protected-route.tsx` | Route protection for authenticated users |

### Backend (Server)

| File | Purpose |
|------|---------|
| `server/index.ts` | Server initialization and middleware setup |
| `server/routes.ts` | API endpoint definitions |
| `server/auth.ts` | Authentication configuration (Passport.js) |
| `server/db.ts` | Database connection setup |
| `server/storage.ts` | Database operations abstraction |
| `server/llm.ts` | LLM service integration |
| `server/agent.ts` | AI agent for chat functionality |
| `server/utils.ts` | Utility functions for the server |

### Shared

| File | Purpose |
|------|---------|
| `shared/schema.ts` | Database schema definitions, TypeScript types, and Zod validation schemas |

### Configuration

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `.env` | Environment variables (not in repository) |
| `.env.example` | Example environment variables |
| `docker-compose.yml` | Docker configuration for development |
| `drizzle.config.ts` | Drizzle ORM configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `vite.config.ts` | Vite bundler configuration |

## Core Functionality Locations

### Authentication

- **Login/Registration UI**: `client/src/pages/auth-page.tsx`
- **Auth State Management**: `client/src/hooks/use-auth.tsx`
- **Server Auth Logic**: `server/auth.ts`
- **Protected Routes**: `client/src/lib/protected-route.tsx`

### Budget Management

- **Budget UI**: `client/src/pages/dashboard.tsx` (Budget section)
- **Budget API Routes**: `server/routes.ts` (budget endpoints)
- **Budget Storage**: `server/storage.ts` (budget operations)
- **Budget Schema**: `shared/schema.ts` (budgets table)

### Expense Tracking

- **Expense UI**: `client/src/pages/dashboard.tsx` (Expense section)
- **Expense API Routes**: `server/routes.ts` (expense endpoints)
- **Expense Storage**: `server/storage.ts` (expense operations)
- **Expense Schema**: `shared/schema.ts` (expenses table)
- **Receipt Processing**: `server/llm.ts` (vision functions)

### AI Integration

- **LLM Configuration**: `server/llm.ts`
- **AI Agent**: `server/agent.ts`
- **Chat Interface**: `client/src/components/ChatBot.tsx`
- **Financial Analysis**: `server/routes.ts` (analysis endpoint)

### Data Visualization

- **Charts**: `client/src/pages/dashboard.tsx` (chart components)
- **Data Formatting**: `client/src/pages/dashboard.tsx` (formatting functions)

## Common Development Tasks

### Adding a New API Endpoint

1. Define the endpoint in `server/routes.ts`
2. Implement storage operations in `server/storage.ts` if needed
3. Add TypeScript types in `shared/schema.ts` if needed
4. Create API client function in `client/src/lib/queryClient.ts`

### Creating a New Component

1. Create component file in `client/src/components/`
2. Define TypeScript interfaces for props
3. Implement the component using existing UI components
4. Export the component

### Adding a New Database Table

1. Define the table schema in `shared/schema.ts`
2. Create insert/select schemas using Zod
3. Export TypeScript types
4. Implement storage operations in `server/storage.ts`

### Implementing a New AI Feature

1. Add new LLM function in `server/llm.ts`
2. Create API endpoint in `server/routes.ts`
3. Implement UI in appropriate component

## Development Workflow

1. Start the database: `docker-compose up -d`
2. Run the development server: `npm run dev`
3. Access the application at `http://localhost:5000`

## Testing

- Test files should be placed in `__tests__` directory
- Follow the testing guidelines in `.amazonq/rules/unit-testing.md`
- Run tests with `npm test`

## Deployment

1. Build the application: `npm run build`
2. Start the production server: `npm start`

## Additional Resources

- React documentation: https://react.dev/
- Express documentation: https://expressjs.com/
- Drizzle ORM documentation: https://orm.drizzle.team/
- LangChain documentation: https://js.langchain.com/
- Tailwind CSS documentation: https://tailwindcss.com/