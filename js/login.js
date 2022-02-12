document.getElementById('loginSubmit').addEventListener('click', function () {

    // get user email
    const emailField = document.getElementById('userEmail');
    const userEmail = emailField.value;
    // const userEmail = document.getElementById('userEmail').value;


    // get user password
    const passField = document.getElementById('userPassword');
    const userPassword = passField.value;


    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('invalid user');
    }

})

