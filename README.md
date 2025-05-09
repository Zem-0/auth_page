# 🔐 SuperTokens App with Next.js App Directory

This is a simple application protected by **[SuperTokens](https://supertokens.com/)** using the **Next.js App Directory**. It demonstrates authentication flows such as email/password login, social login, session management, and more, using SuperTokens’ powerful authentication toolkit.

---

## 📝 Description

This project showcases how to integrate SuperTokens with a Next.js app using the app directory structure. The purpose is to provide a secure and easy-to-customize template for user authentication with a modern, scalable setup.

---

## ✅ Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or later recommended)
- npm (comes bundled with Node.js)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env.local file at the root level and populate it with the required variables. You can refer to the .env.example file for guidance.

4. Run the Development Server
bash
Copy
Edit
npm run dev
5. Open the App
Navigate to:

arduino
Copy
Edit
http://localhost:3000
📜 Available Scripts
Script	Description
npm run dev	Start the development server
npm run build	Build the application for production
npm run start	Start the production server after build
🛠️ How to Use
Option 1: Using create-next-app
Bootstrap this example using one of the following commands:

bash
Copy
Edit
npx create-next-app --example with-supertokens with-supertokens-app
# or
yarn create next-app --example with-supertokens with-supertokens-app
# or
pnpm create next-app --example with-supertokens with-supertokens-app
Then:

bash
Copy
Edit
cd with-supertokens-app
npm install
npm run dev
Option 2: Using create-supertokens-app
bash
Copy
Edit
npx create-supertokens-app@latest --frontend=next
Choose the option to use the app directory

Follow the instructions in the terminal

📝 Notes
To learn more and customize this app to your use case, refer to the SuperTokens Documentation.

OAuth keys for various third-party providers are included in /app/config/backend.ts for development purposes. For production, create your own secure keys.

🤝 Contributing
We welcome contributions! To get started:

Fork the repo

Create a new branch:

bash
Copy
Edit
git checkout -b feature/YourFeature
Make your changes and commit:

bash
Copy
Edit
git commit -m "Add some feature"
Push to your fork:

bash
Copy
Edit
git push origin feature/YourFeature