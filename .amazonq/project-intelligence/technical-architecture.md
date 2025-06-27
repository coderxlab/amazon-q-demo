# AI Personal Finance Coach: Technical Architecture Documentation

## System Architecture Overview

The AI Personal Finance Coach is built using a modern web application architecture with a clear separation between frontend and backend components.

```mermaid
flowchart TD
    A[Client Browser] <--> B[Express Server]
    B <--> C[PostgreSQL Database]
    B <--> D[AI Services]
    D <--> E[OpenRouter API]
    
    subgraph "Frontend (React)"
        F[React Components]
        G[React Query]
        H[Tailwind CSS]
        I[Wouter Router]
    end
    
    subgraph "Backend (Express)"
        J[API Routes]
        K[Authentication]
        L[Storage Service]
        M[LLM Integration]
        N[Agent System]
    end
    
    A <--> F
```

## Technology Stack

### Frontend
- **Framework**: React with TypeScript
- **State Management**: React Query for server state, React Context for global state
- **Routing**: Wouter
- **Styling**: Tailwind CSS with Radix UI components
- **Build Tool**: Vite

### Backend
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with session-based auth
- **AI Integration**: LangChain, OpenAI, Llama
- **API Gateway**: OpenRouter

### Development Tools
- **Package Manager**: npm
- **Containerization**: Docker and Docker Compose
- **Type Checking**: TypeScript
- **Testing**: Jest and React Testing Library

## Key Components and Their Interactions

### 1. Authentication System

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant AuthRoutes
    participant Passport
    participant Database
    
    User->>Frontend: Login with credentials
    Frontend->>AuthRoutes: POST /api/auth/login
    AuthRoutes->>Passport: Authenticate
    Passport->>Database: Verify credentials
    Database-->>Passport: User exists
    Passport-->>AuthRoutes: Create session
    AuthRoutes-->>Frontend: Return user data
    Frontend-->>User: Redirect to dashboard
```

- Implemented in `server/auth.ts`
- Uses Express sessions with PostgreSQL session store
- Protected routes check `req.isAuthenticated()` before processing

### 2. Database Schema and ORM

```mermaid
erDiagram
    USERS {
        int id PK
        string username
        string password
    }
    BUDGETS {
        int id PK
        int user_id FK
        float total_amount
        float remaining_amount
        string month
    }
    EXPENSES {
        int id PK
        int user_id FK
        float amount
        string category
        string description
        string receipt_url
        datetime date
    }
    NOTIFICATIONS {
        int id PK
        int user_id FK
        string message
        boolean read
        datetime date
    }
    
    USERS ||--o{ BUDGETS : has
    USERS ||--o{ EXPENSES : tracks
    USERS ||--o{ NOTIFICATIONS : receives
```

- Schema defined in `shared/schema.ts`
- Uses Drizzle ORM for type-safe database operations
- Database connection managed in `server/db.ts`
- Storage operations abstracted in `server/storage.ts`

### 3. AI Integration Architecture

```mermaid
flowchart TD
    A[User Input] --> B[Express API]
    B --> C[LLM Service]
    C --> D{Request Type}
    D -->|Text Analysis| E[Text LLM]
    D -->|Image Analysis| F[Vision LLM]
    D -->|Chat| G[Agent System]
    E --> H[OpenRouter API]
    F --> H
    G --> H
    H --> I[AI Response]
    I --> J[Response Processing]
    J --> K[Client]
```

- LLM services configured in `server/llm.ts`
- Uses OpenRouter API to access various AI models
- Supports text analysis, image processing, and conversational AI
- Agent system for maintaining chat context in `server/agent.ts`

### 4. Frontend Component Architecture

```mermaid
flowchart TD
    A[App] --> B[Router]
    B --> C[AuthProvider]
    B --> D[Protected Routes]
    D --> E[Dashboard]
    E --> F[Budget Display]
    E --> G[Expense List]
    E --> H[Expense Charts]
    E --> I[AI Suggestions]
    A --> J[ChatBot]
    
    subgraph "UI Components"
        K[Button]
        L[Card]
        M[Dialog]
        N[Input]
        O[Select]
    end
    
    F --> UI
    G --> UI
    H --> UI
    I --> UI
    J --> UI
```

- Main application structure in `client/src/App.tsx`
- Dashboard implementation in `client/src/pages/dashboard.tsx`
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`

## API Endpoints

| Endpoint | Method | Description | Authentication |
|----------|--------|-------------|----------------|
| `/api/auth/login` | POST | User login | No |
| `/api/auth/register` | POST | User registration | No |
| `/api/auth/logout` | POST | User logout | Yes |
| `/api/budget/:month` | GET | Get budget for month | Yes |
| `/api/budget` | POST | Create budget | Yes |
| `/api/expenses/:period` | GET | Get expenses for period | Yes |
| `/api/expenses` | POST | Create expense | Yes |
| `/api/expenses/analysis/:month` | GET | Get expense analysis | Yes |
| `/api/notifications` | GET | Get notifications | Yes |
| `/api/notifications/:id/read` | POST | Mark notification as read | Yes |
| `/api/chat` | POST | Send message to AI assistant | Yes |
| `/api/weather` | GET | Get weather information | Yes |

## Data Flow Diagrams

### 1. Expense Creation Flow

```mermaid
sequenceDiagram
    participant User
    participant Dashboard
    participant API
    participant Storage
    participant Database
    participant AI
    
    User->>Dashboard: Add expense (manual/receipt)
    alt Receipt Upload
        Dashboard->>API: POST /api/test-ai with image
        API->>AI: Process receipt image
        AI-->>API: Return extracted data
        API-->>Dashboard: Display extracted data
        User->>Dashboard: Confirm/edit data
    end
    Dashboard->>API: POST /api/expenses
    API->>Storage: createExpense()
    Storage->>Database: Insert expense
    API->>Storage: getBudget()
    Storage->>Database: Query budget
    API->>Storage: updateBudget()
    Storage->>Database: Update remaining amount
    alt Budget < 20%
        API->>Storage: createNotification()
        Storage->>Database: Insert notification
    end
    API-->>Dashboard: Return expense data
    Dashboard-->>User: Show success message
```

### 2. AI Analysis Flow

```mermaid
sequenceDiagram
    participant User
    participant Dashboard
    participant API
    participant Storage
    participant Database
    participant LLM
    
    User->>Dashboard: View suggestions tab
    Dashboard->>API: GET /api/expenses/analysis/:month
    API->>Storage: getExpenses(thisMonth)
    Storage->>Database: Query expenses
    API->>Storage: getExpenses(lastMonth)
    Storage->>Database: Query expenses
    API->>LLM: Generate cost-cutting advice
    LLM-->>API: Return financial advice
    API-->>Dashboard: Return analysis data
    Dashboard-->>User: Display financial advice
```

## Environment Configuration

The application uses environment variables for configuration:

```
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/finance_coach

# Authentication
SESSION_SECRET=your_session_secret_here

# AI Services
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

- Environment variables loaded using dotenv
- Example configuration in `.env.example`
- Database connection configured in `server/db.ts`

## Deployment Architecture

```mermaid
flowchart TD
    A[Client Browser] --> B[Web Server]
    B --> C[Express Application]
    C --> D[PostgreSQL Database]
    C --> E[OpenRouter API]
    
    subgraph "Docker Environment"
        C
        D
    end
```

- Application containerized using Docker
- PostgreSQL database runs in Docker container
- Configuration in `docker-compose.yml`
- Production build created with `npm run build`

## Testing Strategy

- Unit tests for components using Jest and React Testing Library
- Tests located in `__tests__` directory
- Mock external dependencies for isolated testing
- Test both component rendering and user interactions
- Test async operations with proper waiting mechanisms

## Security Considerations

1. **Authentication**: Session-based authentication with secure cookies
2. **Data Validation**: Input validation using Zod schemas
3. **SQL Injection Prevention**: Parameterized queries via Drizzle ORM
4. **API Security**: Authentication checks on all protected routes
5. **Environment Variables**: Sensitive configuration stored in environment variables
6. **HTTPS**: Production deployment should use HTTPS

## Performance Considerations

1. **Database Indexing**: Proper indexes on frequently queried fields
2. **Query Optimization**: Efficient queries with proper joins
3. **Connection Pooling**: Database connection pooling for better performance
4. **React Optimization**: Proper dependency arrays in hooks, memoization
5. **Bundle Size**: Code splitting for optimized loading

## Future Technical Enhancements

1. **Real-time Updates**: WebSocket integration for real-time notifications
2. **Offline Support**: Service workers for offline functionality
3. **Mobile App**: React Native version for mobile platforms
4. **Advanced Analytics**: Enhanced AI analysis with predictive capabilities
5. **Integration**: Connect with banking APIs for automatic expense tracking