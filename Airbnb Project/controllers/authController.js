exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false
  });
};





exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "Signup",
    currentPage: "signup",
  
  });
};




exports.postSignup = (req, res, next) => {
console.log(req.body);

  


  //res.cookie("isLoggedIn", true);
  //req.isLoggedIn = true;
  res.redirect("/");
}














exports.postLogin = (req, res, next) => {
console.log(req.body);

  


  res.cookie("isLoggedIn", true);
  //req.isLoggedIn = true;
  res.redirect("/");
}





exports.postLogout = (req, res, next) => {
  
  res.cookie("isLoggedIn", false);
    res.redirect("/login");
  }





