import axios from "axios"

const handleGetRandomUser =  async () => {
    const response = await axios.get('https://randomuser.me/api/')
    const username = response.data.login.username
    const generatedUser = {
        gender: response.data.gender,
        firstName: response.data.name.first,
        lastName: response.data.name.last,
        email: response.data.email,
        age: response.data.dob.age,
    }
    //can append text from here
    //using create eleent
    console.log(generatedUser, "gen user")
    return generatedUser
}

export async function populateText(){
    await handleGetRandomUser()
    let ele = document.getElementById('container');
    ele.innerHTML += 'firstName';
}

console.log("working?")
function test(){
    console.log("test");
}
