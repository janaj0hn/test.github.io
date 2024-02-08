const firebaseConfig = {
    apiKey: "AIzaSyBWYAJAU-KsZPq_EJh7KUo1l-qMJPydODA",

    authDomain: "mywebapp-c4df3.firebaseapp.com",
  
    projectId: "mywebapp-c4df3",
  
    storageBucket: "mywebapp-c4df3.appspot.com",
  
    messagingSenderId: "908534769958",
  
    appId: "1:908534769958:web:cb8d50fb4431f8f17a39e7"
  
};

const submitBtn = document.getElementById("submit")
const getUsersBtn = document.getElementById("getUsers")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const nameTable = document.getElementById("name-table")
const emailTable = document.getElementById("email-table")

submitBtn.addEventListener('click', async () => {
    try {
        await fetch(
            "https://mywebapp-c4df3-default-rtdb.firebaseio.com/name.json",
            {
                body: JSON.stringify({ "name": nameInput.value },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        nameInput.value = ""
    } catch (error) {
        console.log(error)
    }
})

getUsersBtn.addEventListener('click', async () => {
    const response = await fetch("https://mywebapp-c4df3-default-rtdb.firebaseio.com/name.json");
    const data = await response.json()
    const namesKey = Object.keys(data)
    namesKey.map((key) => {
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td>${data[key].name}</td>`
        nameTable.append(tableRow)
    })
})