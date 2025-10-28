// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

// pahle use import karke fucntion jaise banavo then use
const authRouter = require("./routes/authRouter");
const { default: mongoose } =require('mongoose');

const db =require("./utils/databaseUtil");


db.execute("SELECT * FROM homes")
.then(([rows, fields]) => {
  console.log(rows);
  console.log(fields);
}).catch((error) => {
  console.log("Error Fetching Homes", error);
});










const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log('Cookie check middleware', req.get('Cookie'));
  req.isLoggedIn = req.get('Cookie')?.split('=')[1] === 'true' || false ;
  next();
})




















app.use(authRouter);





app.use(storeRouter);
app.use("./host", (req, res, next) => {
  if(req.isLoggedIn) {
    next();
  } else{
    res.redirect("/login");
  }

});










app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});