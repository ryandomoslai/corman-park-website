var people = [
    {
        "name": "Harvey",
        "image": "./img/Harvey.jpg",
        "position": "Lead Vet & Owner",
        "bio": "Harvey is from Whitewood, SK but currently lives in Saskatoon, SK (?? Not a farm near Saskatoon). He attended the Western College of Veterinary Medicine, Saskatoon, SK and graduated in 1996. He is a Husband (Lisa) and father ( Kyla & Ryan).<br>" 
        + "He was raised on a farm and was around both large and small animals all his life. Although he feels becoming a Veterinarian was a natural progression for him, he joined the Navy and spent 10 yrs as an Officer before deciding on veterinary schooling.Once he graduated, he worked in Watrus, SK, Prince Albert, SK and finally Saskatoon, SK before practising at Corman Park Veterinary Services. In 2003, Harvey purchased the clinic from CPVS founder Wally Kononof, becoming both Veterinarian and owner. His favorite part of the job is the variety as every day is different.<br>" 
        + "Other hobbies –<br>"
        + "There are three four - legged furbabies in Dr.Harvey’s family, Chester a Pug, Max a Shit zu and Marley a cat. There are also cows and horses."
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
        "position": "Vet Tech",
        "bio": "Jobie is from Warman, SK who currently lives in St. Isidore de Bellevue, SK running a cattle ranch with her boyfriend (Sam). She attended Lakeland Collage in Vermillion, AB and graduated from the Animal Health Technician program in 2011.<br>"
        + "She recalls always wanting to be a Veterinarian but later learned of the Animal Health Technology program and that with it she would be in a positon to have far more interaction and hands-on work with the animals versus as a Veterinarian. It was because she loves to see the human/animal bond, loves to interact with the owners of pets and her passion for animals that made her realize she would rather be an Animal Health Technician.<br>"
        + "Jobie became a part of the Corman Park Veterinary Services family in Sept of 2016.  Her favorite parts of her job are the challenges of collecting blood and placing catheters as well as hearing client stories about their pets.<br>"
        + "She keeps herself busy with many things other than working at the clinic. With a new Cattle Ranch she is learning to manage/run the ranch including learning to rope and treat cattle. She enjoys horse-back riding, reading (if time allows), taking/editing photos and putting them in albums. As well, she has been learning about essential oils and their benefits for both humans and animals.  She shares that knowledge through Youngliving Essential Oils. Although, one of her biggest highlights is “Face-timing” with her niece who lives in Missouri.<br>"
        + "There are many four-legged furbabies that make up Jobie and Sam’s family. Lucy a Red Heeler, Ace a Quarter Horse mare, Buck a Welsh Pony/Quarter Horse. Chuck & Spud - cattle working dogs, as well as 6 other horses. Then there is Polly a cat with a story around how she became a member of Jobie’s home.  Polly had been surrendered to the clinic and Jobie hated to see her sitting in a kennel for days while waiting for a new home. One night Jobie took her home for a break from the clinic kennel and Polly never left Jobie’s home again. Of course, she loves to spend time playing with every one of the pets."
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