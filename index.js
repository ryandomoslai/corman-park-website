var people = [
    {
        "name": "Harvey",
        "image": "./img/Harvey.jpg",
        "position": "Lead Vet & Owner",
        "bio": "Owner of Corman Park"
    },
    {
        "name": "Inoka",
        "image": "./img/Inoka.jpg",
        "position": "Veterinarian",
        "bio": "Owner of Corman Park"
    },
    {
        "name": "Bunnie",
        "image": "./img/Bunnie.jpg",
        "position": "Owner / Veterinarian",
        "bio": "Owner of Corman Park"
    },
    {
        "name": "Christina",
        "image": "./img/Christina.jpg",
        "position": "Owner / Veterinarian",
        "bio": "Owner of Corman Park"
    },
    {
        "name": "Dorrie",
        "image": "./img/Dorrie.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Jill",
        "image": "./img/Jill.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Jobie",
        "image": "./img/Jobie.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Mel",
        "image": "./img/Mel.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Pat",
        "image": "./img/Pat.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Roy",
        "image": "./img/Roy.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Steph",
        "image": "./img/Steph.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
    {
        "name": "Tisha",
        "image": "./img/Tisha.jpg",
        "position": "Other vet",
        "bio": "Other vet of Corman Park"
    },
]

function moveSection(elementName) {
    console.log(elementName);
    let element = document.getElementById(elementName);
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 500);
}

function changeButton() {
    let button = document.getElementById("photo-button")
    if (button.innerHTML === "Close") {
        button.innerHTML = "Open";
    } else {
        button.innerHTML = "Close";
    }
}

function photoButtonState(elementName) {
    moveSection(elementName);
    changeButton();
}

function setHoverText(personName) {
    document.getElementById(personName + " Hover").innerHTML = personName
}

function setTeamGallery() {
    console.log("We made it here");
    var teamContainer = document.getElementById("team-photos");
    var row = document.createElement("div");
    row.classList.add("row");
    for (var i = 0; i < people.length; i ++) {
        if (i % 4 === 0) {
            teamContainer.appendChild(row);
            row = document.createElement("div");
            row.classList.add("row");
        }

        var column = document.createElement("div");
        column.classList.add("col-sm-3", "team-photo", "container");
        column.setAttribute("data-toggle", "modal");
        column.setAttribute("data-target", "#myModal");
        row.appendChild(column);
        
        var image = document.createElement("img");
        image.setAttribute("src", people[i].image);
        column.appendChild(image);
        console.log(people[i].image);

        var hoverOverlay = document.createElement("div");
        hoverOverlay.classList.add("overlay");
        hoverOverlay.id = people[i].name;
        hoverOverlay.onclick = function () { setModal(this.id); };
        column.appendChild(hoverOverlay);
        var hoverText = document.createElement("div");
        hoverText.classList.add("text");
        hoverText.innerHTML = people[i].name;
        hoverOverlay.appendChild(hoverText);
        console.log(people[i].name);

        if (i === people.length - 1) {
            teamContainer.appendChild(row);
        }
    }
}

function setModal(id) {
    for (var i = 0; i < people.length; i ++) {
        if (people[i].name == id) {
            var person = people[i];
            var name = document.getElementById("modalName");
            name.innerHTML = person.name;
            var position = document.getElementById("modalPosition");
            position.innerHTML = person.position;
            var image = document.getElementById("modalImage");
            image.setAttribute("src", person.image);
            var bio = document.getElementById("modalBio");
            bio.innerHTML = person.bio;
        }
    }
}