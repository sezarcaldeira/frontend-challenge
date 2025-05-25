# Introduction

This project is a frontend challenge for a Senior Frontend Engineer role, designed to simulate typical day-to-day tasks in the company’s frontend team. The goal was to build a multi-step form using React and Vite (JavaScript, no TypeScript), following a provided base repository without modifying the original structure.

## Approach & Decisions

- **Project Setup:**  
  Started by setting up basic automation with Prettier, ESLint, and lint-staged to maintain code quality and consistency.

- **Simplicity & Structure:**  
  The project was kept simple to match the challenge’s scope. No complex design patterns or architectures were introduced. Instead, I focused on a clear project structure with well-defined and separated responsibilities to facilitate future improvements.

- **Technology Stack:**

  - CSS Modules for scoped styling
  - React Router for route management
  - React Query for server state and form submission handling
  - Axios for HTTP requests
  - React Icons for UI icons
  - React Testing Library and Jest for testing
  - MSW (Mock Service Worker) for API mocking in tests
  - clsx for conditional class names
  - Zod for form validation

- **State Management:**  
  React Context was used to manage the form’s state across multiple routes efficiently without adding unnecessary complexity.

- **Consistency:**  
  Since the base was a plain JavaScript React app, I decided not to introduce TypeScript or any type helpers, maintaining consistency with the original setup.

## Tests

I covered all the core functionalities of the app with automated tests, focusing on a few comprehensive scenarios that simulate real user interactions. This approach ensures meaningful coverage while keeping tests maintainable and realistic.

To mock HTTP requests during testing, I used **MSW (Mock Service Worker)**, which allows for reliable and consistent API mocking without depending on real backend services.

Additionally, I implemented the **Page Object Model (POM)** pattern to organize the test code. This choice facilitates writing, reading, and maintaining tests by encapsulating page-specific logic and selectors, improving the overall test suite quality and scalability.

---

This solution showcases my ability to balance simplicity with maintainability, demonstrating proficiency in the technologies relevant to the team’s workflow.
