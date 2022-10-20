 function UsernameChecker() {
    var match = /(?!.*[A-Z].*[A-Z].*[A-Z])^[^a-z][a-zA-z]*[^A-Z]$/; //Your Regex goes between the forward slashes
   
    var username = window.prompt("Enter the username: ");
   
    if (match.test(username)) {
        alert("username"+ username +"looks fine");
        return true;
    }
    else {
  
        alert("username is invalid");
        return false;
    }
 

