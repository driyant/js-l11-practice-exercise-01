const randomFolks = document.querySelector(".random-peeps");
const url = "https://randomuser.me/api?results=10";

const getData = async () => {
    const userReq = await fetch(url);
    const data = await userReq.json();
    const userResults = data.results;
    //console.log( userResults);
    displayUsers(userResults);
}

const displayUsers = (userResults) => {
    randomFolks.innerHTML = "";
    for (let item of userResults) {
        console.log(item);
        const country = item.location.country;
        const name = item.name.first;
        const picture = item.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = 
        `<h3>${name}</h3>
        <p>${country}</p>
        <img src=${picture} alt="Avatar"/>`
        randomFolks.appendChild(userDiv);
    }
}

getData();