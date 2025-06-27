# Database Handling Guidelines

## Core Database Principles

1. Use TypeScript for all database-related code with proper type definitions.
2. Use Drizzle ORM for database operations.
3. Implement proper error handling for database operations.
4. Use transactions for operations that modify multiple records.
5. Implement proper data validation before database operations.
6. Use environment variables for database connection strings.
7. Follow consistent naming conventions for database functions and models.
8. Implement proper logging for database operations.

## File Structure and Naming

1. Database-related files must be placed in the `./server` directory.
2. Database connection setup must be in the `./server/db.ts` file.
3. Schema definitions must be placed in the `./shared/schema.ts` file.
4. Database operations should be abstracted in a storage service.
5. Group database functions by entity or domain.
6. Create index files for database directories to simplify imports.
7. Separate database types into dedicated type definition files.

## Data Modeling

1. Define database schema using Drizzle ORM's schema builders.
2. Use Zod for schema validation with `createInsertSchema`.
3. Export TypeScript types using Drizzle's `$inferSelect` utility.
4. Use proper naming conventions for database tables and columns.
5. Implement proper relationships between models.
6. Use proper data types for database columns.
7. Implement proper timestamps for created and updated fields.

## Query Construction

1. Use Drizzle ORM's query builders for type-safe queries.
2. Use parameterized queries to prevent SQL injection.
3. Implement proper pagination for large result sets.
4. Implement proper sorting and filtering.
5. Use proper joins for related data.
6. Optimize queries for performance.
7. Use proper indexing for frequently queried fields.

## Error Handling

1. Implement centralized error handling for database operations.
2. Use proper error types and codes.
3. Provide meaningful error messages for debugging.
4. Implement retry logic for transient failures.
5. Log database errors appropriately.
6. Handle connection errors gracefully.
7. Implement proper timeout handling.

## Performance Optimization

1. Use connection pooling for better performance.
2. Implement proper indexing for frequently queried fields.
3. Use query caching when appropriate.
4. Optimize query performance with proper joins and filters.
5. Use batch operations for bulk updates.
6. Implement proper pagination for large result sets.
7. Monitor and optimize slow queries.

## Security Best Practices

1. Use parameterized queries to prevent SQL injection.
2. Implement proper access control for database operations.
3. Encrypt sensitive data in the database.
4. Use least privilege principle for database users.
5. Implement proper audit logging for sensitive operations.
6. Regularly backup database data.
7. Implement proper data sanitization before storage.