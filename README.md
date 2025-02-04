
📱 Gadget Haven
An e-commerce platform specializing in electronic devices, built using ReactJS.

🚀 Live Demo
👉 [Visit Website](https://abir-smart-shop.surge.sh/)

📝 Overview
Gadget Haven is a modern e-commerce website focused on selling electronic gadgets. It is built using ReactJS, providing a smooth and interactive user experience. The project demonstrates essential React fundamentals such as components, routing, hooks, and third-party integrations.


✨ Features
✅ User Authentication (Firebase)
✅ Interactive Product Listings
✅ React Router Navigation (Nested Routing)
✅ Dynamic Charts & Graphs (Recharts)
✅ SEO Optimization (React Helmet Async)
✅ Real-time Notifications (React Toastify)
✅ Responsive UI (Tailwind CSS & DaisyUI)
✅ Product Rating System
✅ Shopping Cart with Local Storage Support

🛠 Technologies Used
The project is built using the following technologies:

Frontend: ReactJS, React Router, React Hooks
UI Frameworks: Tailwind CSS, DaisyUI
State Management: React Context API
Authentication: Firebase
Data Visualization: Recharts
Icons & Modals: FontAwesome, React Icons, React Modal
SEO & Performance: React Helmet Async
Notifications: React Toastify
Build Tool: Vite

📦 Dependencies
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.6.0",
    "firebase": "^11.0.1",
    "localforage": "^1.10.0",
    "match-sorter": "^7.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.3.0",
    "react-modal": "^3.16.1",
    "react-pro-sidebar": "^1.1.0",
    "react-rating-stars-component": "^2.2.0",
    "react-router-dom": "^6.27.0",
    "react-toastify": "^10.0.6",
    "recharts": "^2.13.3",
    "sort-by": "^0.0.2"
  },
"devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.10"
  }
💻 Installation
To set up the project locally, follow these steps:

1️⃣ Clone the repository

sh
Copy
Edit
git clone https://github.com/your-username/gadget-haven.git
cd gadget-haven
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Start the development server

sh
Copy
Edit
npm run dev
4️⃣ Open the app in your browser
Go to http://localhost:5173

🚀 Usage
Browse and explore a wide range of electronic gadgets.
Add items to the cart and manage your purchases.
Authenticate users via Firebase for personalized experiences.
Get notified about actions using React Toastify.
Enjoy an optimized and responsive UI experience.
⚙️ Configuration
Firebase Setup
Create a Firebase project in Firebase Console.
Add a web app and copy the configuration details.
Create a .env file in the project root and add the following:
env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Restart the development server after making these changes.
🛠 Troubleshooting
If the development server fails to start, try deleting node_modules and reinstalling dependencies:
sh
Copy
Edit
rm -rf node_modules package-lock.json
npm install
Ensure you have Node.js v16+ installed.
👥 Contributors
👤 Your Name
🔗 GitHub | LinkedIn

Feel free to contribute! Fork the repo, make changes, and submit a pull request.


