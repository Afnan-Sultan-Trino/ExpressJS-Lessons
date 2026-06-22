
// Lesson 1 : (Create Express Server )

// Express.js is an external module/package, so we have to initialize and install it
// for initialize, we use -> npm init -y
// for install, we use -> npm install express
// we can also install nodemon package for browsing reload issues

// usually, this file should be as simple as that, and we create app.js for other task like method (GET,POST), Routing etc



const app=require('./app')   // We need to import the app.js file here


const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})