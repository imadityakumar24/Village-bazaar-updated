const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

const signup = async (e) => {
    e.preventDefault();
    const user = { name: name.value, email: email.value, password: pass.value };
    console.log(user);
    try {
        const response = await fetch('http://localhost:4000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();

        if(!data.success){
            console.log(data.message);
            return;
        }
        console.log(data);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("mail", user.email);
        const home = document.createElement('a');
        home.href = '../index.html';
        home.click();

    } catch (error) {
        console.log(error.message);
    }

}

const sign_up = document.getElementById("sign");

sign_up.addEventListener('click', signup);