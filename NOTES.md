# Engineering Notes - Simple Order Management System

## 1. Design Decisions

### Why this structure?
  - I decided to use a traditional component-based structure because the project isn't large enough for a feature-based structure to make sense
  - Due to the Separation of Concerns, I divided the code into different components, each responsible for a specific task: 
    - Controller: Handles HTTP requests and responses, data validation, and calls services to continue the request
    - Service: Manages the actual business logic with data access via models
    - Model: Represents a specific entity and data structure and is used to interact with databases to store and retrieve data to their collections or tables
  - This approach is also modular and good for testing or expanding

### Why this storage approach?
Due to the limited time, I decided to go with a simple in-memory storage approach using a Map<string, Order> to store the orders. 
Therefore, I used an order interface instead of a typical schema or entity provided by ORMs when using persistent databases.
The only problem is the data loss when restarting the server, but for this small assignment project, this approach is still suitable and it's much faster than setting up and configuring a database.
It's also less complex for you guys to set up the project for reviewing.

## 2. Tradeoffs

### What did you intentionally not implement?
- Persistent database storage
- Order-related features like customers or products
- User authentication
- Input validation for request body, path and query params in backend
- Input validation for form input fields in frontend
- Proper error handling with custom errors in backend 
- Proper error feedback for user in frontend
- Integration and unit tests
- State management with Pinia in frontend

### What would break first at scale?
In-memory storage would break first because its not suitable for large traffic due to performance and simultaneously access issues.
Another big issue is the loss of data when scaling the application horizontally and operations would no longer be idempotent.
But also Redis used as only storage approach and not just for caching or other simple persistence storages would break first.
The usage of clusters from complex persistence storages like MongoDB or MySQL are good for horizontally scaling and handling large traffic with high data flow.

## 3. AI Usage

### Where did AI help?
- Structuring the tasks and creating a checklist
- Project Scaffolding: I used AI to generate a basic express project with TypeScript and the folder structure because the output of the official express-generator is javascript and not helpful
- AI Code Generation e.g. for creating basic API routes or view templates or as foundation to work with
- AI Autocompletion
- Refactoring

### What did you change or reject from AI suggestions?
- I rejected unnecessary single files or code parts that AI suggested but were not needed or were too much for this assignment
- When there were more unnecessary or incorrect solutions in the AI response, I rejected all of them and tried to optimize the prompt to get better results
- But in general, I always reviewed the AI responses and often modified them slightly in order to better fit or used them as a foundation to work with

## 4. Next Steps

### What you would improve with more time (max 5 bullets):
- Adding persistent database... probably MongoDB with Mongoose/Typegoose as ORM
- Adding proper validation
- Adding more logic to the endpoints or things like pagination
- Adding proper logging
- Adding better error handling
