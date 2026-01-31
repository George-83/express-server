# Simple Node.js + Express Server

This is a project that demonstrates how to build a **custom web server** using **Node.js** and **Express**.

The server handles multiple HTML pages and a simple form submission.

---

## 🚀 Features

- Run your own custom Express server
- Multiple routes (`/`, `/about`, `/contacts`, `/form`)
- Static HTML files where you can put your own html code
- Simple POST request handling
- Custom middleware for request logging
- Real-time reload during development with **nodemon**

---

## 🛠 Technologies Used

- **TypeScript**
- **Node.js**
- **Express**
- **nodemon** (for real-time server reload during development)

---

## 📁 Project Structure

<pre>
project-root/
│
├── src/
│   ├── index.html               # Main page
│   ├── about.html               # About page
│   ├── contacts.html            # Contacts page
│   ├── form.html                # Simple contact form
│   └── index.ts                 # Express server
│
├── package.json
├── .gitignore
├── tsconfig.json
└── README.md
</pre>

---

## Installation
1. First clone the repository
2. Then execute in the command line from project root:
* ```npm install```

---

## ▶️ How to Run the Server
1. Start the server:
* ```npm run nodemon```
2. Open in browser:
* ```http://localhost:3000/```
3. To stop the server:
* ```CTRL + C in the command line```

---

## 🔄 Available URL Routes
```/``` Home page

```/about```About page

```/contacts```Contacts page

```/form```Form page

---

## 🧩 Notes

* The server runs on port 3000 by default
* Cache is disabled for the main page
* All requests are logged using a custom middleware

---

## License
This project is for educational purposes and personal use.

