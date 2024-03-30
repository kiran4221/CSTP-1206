const API_URL = "https://reqres.in/api/users";
const userContainer = document.getElementById("user-container");
const userDetailsDiv = document.getElementById("user-clicked-info");

async function getUserInfo() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        generateAllCards(data.data);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

function generateAllCards(userData = []) {
    userData.forEach(user => {
        createCardUI(user);
    });
}

function createCardUI(user) {
    const card = document.createElement("div");
    card.classList.add("card", "m-4");
    card.style.width = "18rem";

    const image = document.createElement("img");
    image.src = user.avatar;
    image.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const userName = document.createElement("h1");
    userName.textContent = `${user.first_name} ${user.last_name}`;

    const userEmail = document.createElement("p");
    userEmail.classList.add("card-text");
    userEmail.textContent = user.email;

    const getDetailsButton = document.createElement("button");
    getDetailsButton.classList.add("btn", "btn-primary");
    getDetailsButton.textContent = "Get Details";
    getDetailsButton.addEventListener("click", () => {
        fetchUserDetails(user.id);
    });

    cardBody.appendChild(userName);
    cardBody.appendChild(userEmail);
    cardBody.appendChild(getDetailsButton);

    card.appendChild(image);
    card.appendChild(cardBody);

    userContainer.appendChild(card);
}

async function fetchUserDetails(userId) {
    try {
        const response = await fetch(`${API_URL}/${userId}`);
        const userData = await response.json();
        displayUserDetails(userData.data);
    } catch (error) {
        console.error("Error fetching user details:", error);
    }
}

function displayUserDetails(user) {
    userDetailsDiv.innerHTML = `
        <h2>User Details:</h2>
        <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <!-- Add more details as needed -->
    `;
}

getUserInfo();
