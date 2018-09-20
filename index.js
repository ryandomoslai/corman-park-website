var people = [
    // Vets
    {
        "name": "Harvey",
        "image": "./img/Staff/Harvey.jpg",
        "position": "Veterinarian & Owner",
        "bio": "Harvey is from Whitewood, SK but currently lives in Saskatoon, SK (?? Not a farm near Saskatoon). He attended the Western College of Veterinary Medicine, Saskatoon, SK and graduated in 1996. He is a Husband (Lisa) and father ( Kyla & Ryan).<br>" 
        + "He was raised on a farm and was around both large and small animals all his life. Although he feels becoming a Veterinarian was a natural progression for him, he joined the Navy and spent 10 yrs as an Officer before deciding on veterinary schooling.Once he graduated, he worked in Watrus, SK, Prince Albert, SK and finally Saskatoon, SK before practising at Corman Park Veterinary Services. In 2003, Harvey purchased the clinic from CPVS founder Wally Kononof, becoming both Veterinarian and owner. His favorite part of the job is the variety as every day is different.<br>" 
        + "Other hobbies –<br>"
        + "There are three four - legged furbabies in Dr.Harvey’s family, Chester a Pug, Max a Shit zu and Marley a cat. There are also cows and horses."
    },
    {
        "name": "Inoka",
        "image": "./img/Staff/Inoka.jpg",
        "position": "Veterinarian",
        "bio": "Graduated in 2002 from University of Peradeniya in Sri Lanka. Moved to Saskatoon in 2009 and completed an MSc in Ruminant Nutrition in 2012. Attended the Veterinary Skill Training Enhancement Program at  Ontario Veterinary College in 2016. Currently lives in Saskatoon with her husband, two sons, two cats and one dog."
    },
    {
        "name": "Blair",
        "image": "./img/Staff/Generic.jpg",
        "position": "Veterinarian",
        "bio": "Grew up in Outlook, Saskatchewan and graduated WCVM with Dr. Domoslai in 1996. He is an independent veterinary contractor who specializes in bovine reproduction including semen and embryo collections, as well as helping out with the day to day mixed animal practice at CPVS."
    },
    {
        "name": "Amanda",
        "image": "./img/Staff/Generic.jpg",
        "position": "Veterinarian",
        "bio": "Graduated WCVM and worked in Swift Current until she moved north of Saskatoon where she specializes in dairy medicine. She is presently raising two young children on her farm with her husband Greg."
    },
    {
        "name": "Dawalla",
        "image": "./img/Staff/Dawalla.jpg",
        "position": "Veterinarian",
        "bio": "Born in Sri Lanka. Moved to Canada at the age of 15. He has been in Saskatoon ever since. Attended Centennial Collegiate in Saskatoon for high school. After that, completed two years of an Animal Bioscience degree prior to entering WCVM. He very much enjoys the variety of cases that mixed animal practice has to offer. Hobbies include travelling, scuba diving and cricket."
    },
    {
        "name": "Allison Sprout",
        "image": "./img/Staff/Generic.jpg",
        "position": "Veterinarian",
        "bio": "Graduated WCVM and recently completed a one year internship in equine surgery and medicine. She returned to Saskatoon this spring and is a key member of the CPVS team of Veterinarians, working with all animals large and small."
    },
    {
        "name": "Lisa Weyman",
        "image": "./img/Staff/Generic.jpg",
        "position": "Veterinarian",
        "bio": "Graduated WCVM with Dr. Domoslai in 1996. She operated a mobile equine practice for many years in the Saskatoon area before joining CPVS as an equine veterinarian. She recently took a position at the Canadian Food Inspection Agency and now works part time with CPVS."
    },
    // Techs
    {
        "name": "Jodie",
        "image": "./img/Staff/Jobie.jpg",
        "position": "Technician",
        "bio": ""
    },
    {
        "name": "Aspen",
        "image": "./img/Staff/Aspen.jpg",
        "position": "Technician",
        "bio": "Graduate of the Saskatchewan Polytechnic Veterinary Technology program. Provides assistance in all scopes of practice with strengths in bovine and equine."
    },
    {
        "name": "Keana",
        "image": "./img/Staff/Generic.jpg",
        "position": "Technician",
        "bio": "Graduate of the Saskatchewan Polytechnic Veterinary Technology program. Worked in a number of small animal practices in Saskatoon before joining CPVS."
    },
    // Management
    {
        "name": "Dorrie",
        "image": "./img/Staff/Dorrie.jpg",
        "position": "Management",
        "bio": "Was born and raised on a mixed farm by Strasbourg. After graduating high school I obtained diplomas in professional cooking, animal science, vet tech and interior design. In 2007, started working for CPVS and also purchased a house in the town of Asquith. In 2016, purchased an acreage alongside her husband Ryan just outside of Asquith, where they currently reside."
    },
    {
        "name": "Megan H",
        "image": "./img/Staff/Generic.jpg",
        "position": "Management",
        "bio": "Provides accounting and book keeping services to CPVS. Resides north of Saskatoon where she and her husband Kyle raise their family and thoroughbred horses. "
    },
    // Support

]

function moveSection(elementName) {
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
