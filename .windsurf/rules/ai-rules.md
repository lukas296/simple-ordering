---
trigger: always_on
description: 
globs: 
---

Techstack:
- Backend: Express.js, TypeScript
- Database: MongoDB, Mongoose (ORM)
- Frontend: Vue.js, TypeScript
- Version Control: Git

Files:
- Exlude .build directories
- Exlude .env files from analyzing and modifying

Code Quality:
- Focus on best practices like SOLID, DRY but also performance and security
- Ensure proper usage of TypeScript
- Ensure comments shortly describe purpose and effect when necessary
- Ensure following RESTful API best practices
- Ensure proper error handling and input validation

Key Features:
Simplified order management system for a B2B platform:
   - Create orders and view them
   - Update order status (simulating external payment or fulfillment systems)