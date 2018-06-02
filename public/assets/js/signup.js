$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var firstNameInput = $("input#firstName-input");
    var lastNameInput = $("input#lastName-input");
    var usernameInput = $("input#username-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
      
        if (!userData.firstName || !userData.lastName || !userData.username || !userData.email || !userData.password) {
            return;
        }
        // if form is filled, then the signupUser function will run
        signUpUser(userData.firstName, userData.lastName, userData.username, userData.email, userData.password);
        firstNameInput.val("");
        lastNameInput.val("");
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstname, lastname, username, email, password) {
        $.post("/api/signup", {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
