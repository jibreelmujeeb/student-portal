//Sign Up Page

let allInformation = []
let allInfo = JSON.parse(localStorage.getItem("student")) || []
allInformation = allInfo
console.log(allInformation);
const result = () => {
  let info = {
    email: email.value,
    userName: user.value,
    password: password.value,
  };

  if (email.value == "" || user.value == "" || password.value == "") {
    alert("Please enter valid information");
  } else {
    allInfo.push(info);
    localStorage.setItem("student", JSON.stringify(allInfo)); 
    window.location.assign("login.html");
  }

  console.log(allInfo);
};


//Login Page

const show = () => {
    let enteredUserName = loginUser.value;
    let enteredPassword = loginPassword.value;
    
    let me = JSON.parse(localStorage.getItem("student"));
    let userExists = me.some(user => user.userName === enteredUserName && user.password === enteredPassword);
  
    if (userExists) {
      alert("Login successful!");
      localStorage.setItem("userName", enteredUserName);
      window.location.assign("home.html");
    } else {
      alert("Invalid username or password");
    }
};


//Result Page

const showUser = () => {
  let userName = localStorage.getItem("userName");
  let loggedUsers = allInfo.find(user => user.userName === userName);
  console.log(loggedUsers);
  for (let index = 0; index < allInformation.length; index++) {
   console.log(allInformation[index]);  
   document.getElementById("userInfo").innerHTML += `
   <p>${allInformation[index].userName}</p>
   <p>${allInformation[index].email}</p>
 
   `
  }
}