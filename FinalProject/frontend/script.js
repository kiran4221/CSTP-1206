async function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = {
        name,
        email,
        password
    };

    try {
        const createdUser = await fetch('/api/expense-tracker/v1/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const createdUserJSON = await createdUser.json();

        if (createdUserJSON) {
            alert(createdUserJSON.message);
        }
    } catch(error) {
        alert('There was an error!')
    }
}

async function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userSigninData = {
        email,
        password
    };

    try {
        const loggedInUser = await fetch('/api/expense-tracker/v1/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userSigninData)
        });

        const loggedInUserJSON = await loggedInUser.json();

        if (loggedInUserJSON) {
            localStorage.setItem('token', loggedInUserJSON.data.token);
            alert(loggedInUserJSON.message);
            window.location.href = 'https://your-expense-tracker-app.com/home.html'; // Replace with your actual URL

        }
    } catch(error) {
        alert('There was an error!')
    }
}
