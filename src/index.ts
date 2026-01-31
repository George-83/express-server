import express from "express";
import { fileURLToPath } from 'url'
import path from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express();

// Choose on which port you want to run your server (by default it is 3000 port)
const port: string | number = process.env.PORT || 3000;


// Runs the server
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});


// Custom middleware
function logger(req: any, res: any, next: any) {
    console.log(`Request method: "${req.method}" - Request URL: "${req.url}"`);
    next();
}


app.use(logger);
// The middleware code executes before all requests (get/post)


// When you open the main page, the index.html file content is being returned to the browser
app.get("/", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// When you open 'about' page, about.html file content is being returned to the browser
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// When you open 'contacts' page, contacts.html file content is being returned to the browser
app.get("/contacts", (req, res) => {
    res.sendFile(path.join(__dirname, 'contacts.html'));
});

// When you open 'form' page, form.html file content is being returned to the browser
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// When you submit the form, the code inside is being executed
app.post("/submit", (req, res) => {
    res.send("<h1>Form sent successful!</h1>")
});
