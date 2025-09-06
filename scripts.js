

 //no method cleaning

// let username = window.prompt("Enter your name");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extra =username.slice(1);
// extra = extra.toLowerCase();

// username = letter + extra;
// console.log(username);


// //method cleaning

let username = window.prompt("Enter your name");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
document.getElementById("res").textContent = username;
