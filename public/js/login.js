import { login } from "./api.js";

//Listen for form submission

document.querySelector('form').addEventListener('submit', async (e) =>{
    e.preventDefault(); //stop form behaving with default behaviour and let code below run instead
    console.log('hello');

    //grab the credentials entered
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    try {
        await login(username, password);
        window.location.href = '/admin/dashboard';
    } catch (error) {
        document.getElementById('error-msg').classList.remove('hidden');
    }

   
} );