# Job Tracker

A simple web application to organize and track your job applications in one place. Built with **React**, **Vite**, **Tailwind CSS**, and **Firebase** for authentication and data storage.

![screenshot](![image](https://github.com/user-attachments/assets/4d831a93-d060-4a9e-986b-4bb9e3f98475)
) <!-- Add a screenshot if available -->

---

## Features

- Add, edit, and delete job applications
- Track status (Applied, Interview, Offer, Rejected)
- Store notes and application dates
- User authentication (register/login/logout)
- Responsive, mobile-friendly interface
- Secure data storage with Firebase Firestore
- Protected routes for authenticated users

---


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```sh
git clone https://github.com/Zack-Bowling/Job-Tracker.git
cd Job-Tracker
```

### Install Dependencies

```sh
npm install
# or
yarn install
```

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password).
3. Create a **Firestore** database.
4. Obtain your Firebase project configuration and add it to a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Note**: Never commit your `.env` file or secrets.

### Start the Development Server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## Usage

- Register for an account or log in.
- Add new job applications with company, position, status, date, and notes.
- Edit or delete applications as needed.
- View all your applications in a list.

---

## Folder Structure

```
src/
  components/    # Reusable React components
  pages/         # Page components (Add, Edit, List, etc.)
  firebase.js    # Firebase configuration
  App.jsx        # App entry point and routes
  index.css      # Tailwind and global styles
public/
  index.html
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## License

MIT

---

## Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
