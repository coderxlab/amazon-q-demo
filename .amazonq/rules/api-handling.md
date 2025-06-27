# API Handling Guidelines

## Core API Principles

1. Use TypeScript for all API-related code with proper type definitions.
2. Follow RESTful API design principles for consistent endpoints.
3. Implement proper error handling and status code responses.
4. Use async/await for all asynchronous operations.
5. Centralize API client configuration and request handling.
6. Implement proper request validation and sanitization.
7. Use environment variables for API endpoints and credentials.
8. Follow consistent naming conventions for API functions and endpoints.

## File Structure and Naming

1. API-related server files must be placed in the `./server` directory.
2. API routes must be defined in the `./server/routes.ts` file.
3. API service files must be named with kebab-case and `.ts` extension.
4. Group API functions by resource or domain.
5. Create index files for API directories to simplify imports.
6. Separate API types into dedicated type definition files in the `./shared` directory.

## Request and Response Handling

1. Define TypeScript interfaces for all request and response objects.
2. Use Zod schemas for request validation.
3. Use proper HTTP methods for different operations (GET, POST, PUT, DELETE).
4. Handle pagination, filtering, and sorting parameters consistently.
5. Implement proper response parsing and type checking.
6. Use query parameters for filtering and pagination.
7. Use request bodies for complex data submission.

## Authentication and Authorization

1. Use Express session-based authentication.
2. Implement `req.isAuthenticated()` checks for protected routes.
3. Return appropriate 401 status codes for unauthenticated requests.
4. Implement proper authorization checks for protected resources.
5. Handle authentication errors gracefully.
6. Use secure headers for all API requests.
7. Implement proper logout and session invalidation.

## Error Handling

1. Implement centralized error handling for API requests.
2. Use proper error types and status codes.
3. Provide meaningful error messages for debugging.
4. Implement try-catch blocks around async operations.
5. Log API errors appropriately.
6. Handle network errors gracefully.
7. Implement proper timeout handling.

## Performance Optimization

1. Implement request caching for frequently accessed data.
2. Use connection pooling for database connections.
3. Implement proper request cancellation for abandoned requests.
4. Optimize payload size for better performance.
5. Use compression for large responses.
6. Implement proper connection pooling.

## Security Best Practices

1. Validate and sanitize all input data using schema validation.
2. Implement proper CSRF protection.
3. Use HTTPS for all API requests.
4. Implement proper rate limiting.
5. Avoid exposing sensitive information in URLs.
6. Implement proper content security policies.
7. Follow OWASP security guidelines.