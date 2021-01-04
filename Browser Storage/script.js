localStorage.setItem("username", "mrakib");
localStorage.setItem("password", "123456");

//localStorage.clear();
console.log(localStorage.getItem("username"));

//Session storage
sessionStorage.setItem("email", "mrakib@gmail.com");
sessionStorage.setItem("role", "admin");

//localStorage.clear();
console.log(sessionStorage.getItem("role"));



let arr = ["rakib", "rofique", "30", 100];
console.log(JSON.stringify(arr));
localStorage.setItem("arr",  JSON.stringify(arr));

let valuearr2 = (localStorage.getItem("arr"))
console.log(JSON.parse(valuearr2));