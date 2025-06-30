# 🏗️ Architecture: AI Personal Finance Coach

**Status**: 🟢 ACTIVE  
**Last Updated**: 2025-06-29  
**Author(s)**: Amazon Q Developer

---

## 📚 Technical Summary

- Full-stack web application for AI-powered personal finance management
- Built using React, Express.js, PostgreSQL, and AI integration with LangChain/OpenAI
- Monolithic architecture with clear separation between client and server
- Features expense tracking, budget management, AI-powered financial advice, and receipt analysis
- Designed for personal use with session-based authentication and real-time updates

---

## 🧰 Technology Stack

| Layer         | Technology         | Purpose              | Version/Notes            |
|---------------|--------------------|-----------------------|---------------------------|
| **Frontend**  | React              | Web UI                | v18.3.1                  |
|               | TypeScript         | Type Safety           | v5.6.3                   |
|               | Wouter             | Client-side Routing   | v3.3.5                   |
|               | Tailwind CSS       | Styling Framework     | v3.4.14                  |
|               | Radix UI           | Component Library     | Various versions         |
|               | Tanstack Query     | Data Fetching         | v5.60.5                  |
| **Backend**   | Node.js            | Server Runtime        | v20.16.11                |
|               | Express.js         | Web Framework         | v4.21.2                  |
|               | TypeScript         | Type Safety           | v5.6.3                   |
|               | Drizzle ORM        | Database ORM          | v0.39.3                  |
| **Database**  | PostgreSQL         | Relational Database   | v15+ (Docker)            |
| **AI/ML**     | LangChain          | AI Framework          | v0.3.19                  |
|               | OpenAI             | LLM Provider          | v4.85.3                  |
|               | OpenRouter         | AI API Gateway        | Custom integration       |
| **Build**     | Vite               | Build Tool            | v5.4.14                  |
|               | ESBuild            | Bundler               | v0.25.0                  |
| **Testing**   | Playwright         | E2E Testing           | v1.53.1                  |
| **DevOps**    | Docker Compose     | Local Development     | Latest                   |

---

## 🌐 High-Level System Architecture

```mermaid
flowchart LR
  User[User] --> Frontend[React Frontend]
  Frontend --> Express[Express.js Server]
  Express --> DB[(PostgreSQL)]
  Express --> AI[AI Services]
  AI --> OpenAI[OpenAI API]
  AI --> OpenRouter[OpenRouter API]
  Express --> Storage[File Storage]
```

---

## 🧩 Core Business Flow: Expense Management

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Express
    participant AI
    participant DB

    User->>Frontend: Add Expense/Upload Receipt
    Frontend->>Express: POST /api/expenses
    Express->>AI: Analyze Receipt (if uploaded)
    AI-->>Express: Extracted expense data
    Express->>DB: Save expense record
    Express->>AI: Generate financial insights
    AI-->>Express: Personalized advice
    Express-->>Frontend: Response with insights
    Frontend-->>User: Updated dashboard
```

---

## 🧱 Detailed Module Architecture

```mermaid
graph TD
  Frontend[React Frontend] -->|HTTP/REST| Express[Express Server]
  Express --> Auth[Authentication]
  Express --> Routes[API Routes]
  Routes --> Services[Business Logic]
  Services --> DB[(PostgreSQL)]
  Services --> AI[AI Agent]
  AI --> LLM[Language Models]
  
  subgraph "Frontend Modules"
    Pages[Pages]
    Components[UI Components]
    Hooks[Custom Hooks]
    Utils[Utilities]
  end
  
  subgraph "Backend Modules"
    AuthModule[auth.ts]
    RoutesModule[routes.ts]
    DBModule[db.ts]
    AgentModule[agent.ts]
    LLMModule[llm.ts]
    StorageModule[storage.ts]
  end
```

---

## 🗃️ Data Models

```mermaid
erDiagram
    users ||--o{ budgets : has
    users ||--o{ expenses : tracks
    users ||--o{ notifications : receives
    
    users {
        serial id PK
        text username UK
        text password
    }
    
    budgets {
        serial id PK
        integer userId FK
        double totalAmount
        double remainingAmount
        text month
    }
    
    expenses {
        serial id PK
        integer userId FK
        double amount
        text category
        text description
        text receiptUrl
        timestamp date
    }
    
    notifications {
        serial id PK
        integer userId FK
        text message
        boolean read
        timestamp date
    }
```

---

## 🔐 Security Architecture

```mermaid
flowchart TD
  User --> Login[Login Form]
  Login --> Auth[Passport.js Authentication]
  Auth --> Session[Express Session]
  Session --> Store[Memory Store]
  Auth --> DB[(User Database)]
  
  subgraph "Session Management"
    SessionSecret[Session Secret]
    SessionStore[Session Storage]
  end
```

* **Authentication**: Passport.js with local strategy
* **Session Management**: Express sessions with memory store
* **Password Security**: Hashed passwords (implementation in auth.ts)
* **API Protection**: Session-based route protection

---

## 🚀 Deployment Architecture

```mermaid
graph TD
  Dev[Development] --> Docker[Docker Compose]
  Docker --> PostgresContainer[PostgreSQL Container]
  Docker --> AppContainer[Application Container]
  
  Prod[Production] --> Build[npm run build]
  Build --> Static[Static Files]
  Build --> Server[Node.js Server]
  Server --> ProdDB[(Production Database)]
```

### Environments

1. **Development** – Docker Compose with hot reload, Vite dev server
2. **Production** – Built static files served by Express, optimized bundles

---

## 🔁 CI/CD Pipeline

* **Development Workflow**
  * Hot reload with Vite
  * TypeScript compilation
  * Automatic database migrations with Drizzle

* **Build Process**
  * Frontend: Vite build → Static assets
  * Backend: ESBuild → Optimized Node.js bundle
  * Database: Drizzle migrations

* **Testing Strategy**
  * E2E tests with Playwright
  * Type checking with TypeScript
  * Manual testing in development

---

## 📈 Monitoring & Observability

### Logging
* Request/response logging middleware
* Performance timing for API calls
* Error tracking and stack traces

### Key Metrics to Monitor
* API response times
* Database query performance
* AI service response times
* User session duration
* Expense processing accuracy

### Health Checks
* Database connectivity
* AI service availability
* File storage accessibility

---

## 📐 Development Guidelines

### Folder Structure

```plaintext
/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and helpers
│   └── public/             # Static assets
├── server/                 # Express backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── auth.ts             # Authentication logic
│   ├── db.ts               # Database connection
│   ├── agent.ts            # AI agent integration
│   ├── llm.ts              # Language model services
│   └── storage.ts          # File storage handling
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema definitions
├── tests/                  # Test files
└── docs/                   # Documentation
```

---

### Request Lifecycle

```mermaid
sequenceDiagram
  Client->>Express: HTTP Request
  Express->>Middleware: Authentication Check
  Middleware->>Routes: Route Handler
  Routes->>Services: Business Logic
  Services->>DB: Database Query
  DB-->>Services: Query Result
  Services->>AI: AI Processing (if needed)
  AI-->>Services: AI Response
  Services-->>Routes: Processed Data
  Routes-->>Express: JSON Response
  Express-->>Client: HTTP Response
```

---

## 🧪 Testing Strategy

### Frameworks

| Type        | Tool                    | Location           |
| ----------- | ----------------------- | ------------------ |
| E2E Tests   | Playwright              | `/tests/`          |
| Type Safety | TypeScript              | Throughout         |
| Manual      | Browser Testing         | Development        |

### Test Structure

```plaintext
/tests/
├── set-income-expense-popup.spec.ts    # E2E test for expense popup
└── playwright.config.ts                # Playwright configuration
```

### Testing Best Practices

1. **E2E Tests**
   * Test critical user journeys
   * Verify UI interactions and data flow
   * Run against local development server

2. **Type Safety**
   * Shared schemas between client/server
   * Strict TypeScript configuration
   * Runtime validation with Zod

3. **Manual Testing**
   * User experience validation
   * Cross-browser compatibility
   * Mobile responsiveness

---

## 🔧 Key Features

### Expense Management
- Manual expense entry with categorization
- Receipt upload and AI-powered analysis
- Expense history and filtering
- Budget tracking and alerts

### AI Integration
- Personalized financial advice
- Receipt text extraction and processing
- Spending pattern analysis
- Smart categorization suggestions

### User Experience
- Responsive design with Tailwind CSS
- Real-time updates with React Query
- Interactive charts and visualizations
- Toast notifications for user feedback

### Data Management
- PostgreSQL for reliable data storage
- Drizzle ORM for type-safe database operations
- Session-based user management
- File storage for receipt images

---

## 📌 Appendix

### Environment Variables
```env
SESSION_SECRET=your_session_secret_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
PORT=5000
NODE_ENV=development
```

### API Endpoints
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout
- `GET /api/expenses` - Get user expenses
- `POST /api/expenses` - Create new expense
- `GET /api/budgets` - Get user budgets
- `POST /api/budgets` - Create/update budget
- `POST /api/ai/analyze-receipt` - AI receipt analysis

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run check        # TypeScript type checking
npm run db:push      # Push database schema changes
npx playwright test  # Run E2E tests
```