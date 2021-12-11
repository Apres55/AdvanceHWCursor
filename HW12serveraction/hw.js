const baseUrl = "https://swapi.dev/api";

const chars = document.getElementById("charlist");
const getInfoBtn = document.getElementById("getInfo");
const planetList = document.getElementById("planetList");
const page = document.getElementById("page");
const prevBtn = document.getElementById("previousBtn");
const secondBtn = document.getElementById("nextBtn");
let currentPage = 1;


const getPeople = (searchFilm) => {
    chars.innerHTML = "loading...";
    axios
    .get(`${baseUrl}/films/${searchFilm}`)
    .then((response) => {
        let list = "";
        let listElems = response.data.characters;
        listElems.forEach(item => {
            axios
            .get(`${item}`)
            .then((response) => {
                Object.values(response).forEach((data) => {
                    if(data.name !== undefined){
                        list += `
                        <div class="people">  
                            <h3>Full name: ${data.name}</h3>
                            <p>Date of birth: ${data.birth_year}</p>
                            <p>Gender: ${data.gender}</p>
                        </div>
                        `
                    }
                });
                chars.innerHTML = list;
            })
            .catch((err) => {
                console.log("Error:", err);
                chars.innerHTML = "Error occured :" + err.message;
            });
        });
    })
    .catch((err) => {
        console.log("Error:", err);
        chars.innerHTML = "Error occured :" + err.message;
    });
};

const getPlanets = () => {
    planetList.innerHTML = "loading...";
    page.innerHTML = currentPage;
    axios
    .get(`${baseUrl}/planets/?page=${currentPage}`)
    .then((response) => {
        const listElems = response.data.results.map((item) =>  `
            <div class="planet">  
                <h3>Name: ${item.name}</h3>
                <p>The average population: ${item.population}</p>
                <p>Terrain: ${item.terrain}</p>
            </div>
            `
        );
        planetList.innerHTML = listElems.join("");
    })
    .catch((err) => {
        console.log("Error:", err);
        planetList.innerHTML = "Error occured :" + err.message;
    });
};

getInfo.addEventListener("click", () => {
    getPeople(2);
});

nextBtn.addEventListener("click", () => {
    if(currentPage === 6) return;
    currentPage += 1;
    getPlanets();
});

previousBtn.addEventListener("click", () => {
    if(currentPage === 1) return;
    currentPage -= 1;
    getPlanets();
});

getPlanets();
