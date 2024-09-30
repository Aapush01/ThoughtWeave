
# ThoughtWeave

**ThoughtWeave** is a Medium-like blogging platform built with a modern tech stack, including React, Cloudflare Workers, Prisma, TypeScript, and Postgres. This platform allows users to write, publish, and share their thoughts seamlessly.

This project is open to contributions as part of **Hacktoberfest 2024**! We welcome anyone interested in helping to improve the platform.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [How to Contribute](#how-to-contribute)
- [Issues and Bugs](#issues-and-bugs)
- [License](#license)

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Cloudflare Workers, Prisma, Zod
- **Database:** Postgres
- **Authentication:** JWT

## Features

- User authentication (JWT-based)
- Blog post creation and editing
- Commenting and interaction system
- Responsive design using Tailwind CSS

## Getting Started

### Prerequisites

To set up the project locally, ensure you have the following installed:

- Node.js
- Yarn (preferred)
- Cloudflare Workers CLI (Wrangler)
- Postgres

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/Aapush01/ThoughtWeave.git
   cd ThoughtWeave
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   yarn install
   \`\`\`

3. Set up the environment variables:

   Create a `.env` file in the root directory with the following variables:

   \`\`\`bash
   DATABASE_URL=your_postgres_database_url
   JWT_SECRET=your_jwt_secret
   \`\`\`

4. Run database migrations:

   \`\`\`bash
   yarn prisma migrate dev
   \`\`\`

5. Start the development server:

   \`\`\`bash
   yarn dev
   \`\`\`

6. You can now visit the app at `http://localhost:3000`!

## Contribution Guidelines

We are excited to have you contribute to ThoughtWeave! Please follow these guidelines to ensure a smooth collaboration:

- Follow the [Code of Conduct](#).
- Fork the repository and clone it to your local machine.
- Create a new branch (`git checkout -b your-feature-branch`).
- Make your changes and test thoroughly.
- Submit a pull request (PR) to the `main` branch, describing the changes you've made.
- Ensure your PR addresses an open issue or include details in the PR.

### Code Style

- Follow standard TypeScript and JavaScript best practices.
- Use Tailwind CSS for styling.
- Make sure code is well-documented.

### Testing

Please make sure to test your changes before submitting a pull request.

## How to Contribute

1. **Find an Issue**: Check the [Issues](https://github.com/Aapush01/ThoughtWeave/issues) tab for bugs or features you can work on.
2. **Open a Pull Request**: Once you've made your changes, open a PR, and describe your work.
3. **Label Your PR for Hacktoberfest**: Add the `hacktoberfest` label to your PR.

If you're new to open-source or Hacktoberfest, feel free to ask questions! We're happy to help you get started.

## Issues and Bugs

We track issues in the [GitHub Issues](https://github.com/Aapush01/ThoughtWeave/issues) section. If you find a bug or have a feature request, please create a new issue with as much detail as possible.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
