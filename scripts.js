document.addEventListener("DOMContentLoaded", function() {
    var form = document.forms['contactform'];
    
    form.addEventListener('submit', function(event) {
        var name = form['name'].value;
        var email = form['email'].value;
        var message = form['message'].value;
        var errors = '';

        if (!name) {
            errors += "Please provide your name.\n";
        }
        if (!email) {
            errors += "Please provide your email.\n";
        } else if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            errors += "Please enter a valid email address.\n";
        }
        if (!message) {
            errors += "Please provide a message.\n";
        }

        if (errors) {
            alert(errors);
            event.preventDefault();
        }
    });
});
