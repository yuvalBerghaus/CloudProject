let carArr = [];
let memArr = [];

list = () => fetch("../json/users.json").then(res => {
    return res.json();
}).then(arr => {
    try {
        for (i in arr) {
            for (j of arr[i]) {
                if (j.name) {
                    document.getElementById(i).innerHTML +=
                        `<li class="rectangle" name="myParkingLots[]">
                            <button class="parkingList" onclick="${i == 'my' ? 'my' : j.name}Parking()">
                            <article>
                                <img class="user" src="${j.img}">
                            </article>
                            <h2>${i == 'my' ? 'My' : j.name + '\'s'} Parking</h2>
                            <section class="statusBox">
                                <article class="trafficLight" id="${j.status}"></article>
                                <span>${j.status == 'Attention' ? j.status + '!' : j.status}</span>
                            </section>
                            </button>
                        </li>`;
                }
                else
                    document.getElementById(i).innerHTML += `<li id="none">NONE</li>`;
            }
            if (i != "friends")
                document.getElementById(i).innerHTML += `<hr class="line">`;
        }
    }
    catch (err) { }
});

carInfo = () => fetch("../json/CarInfo.json").then(info => {
    return info.json();
}).then(carInfo => {
    try {
        document.getElementById('contentOne').innerHTML =
            `<div class="close-btn" onclick="togglePopup()">&times;</div>
            <h1>Car info</h1>
            <br>
            <ul id="carInfoPopUp">
                <li>Car owner: ${carInfo.unknownCar[0].carOwner}</li>
                <li>Car model: ${carInfo.unknownCar[0].carModel}</li>
                <li>Color: ${carInfo.unknownCar[0].color}</li>
                <li>Plate No: ${carInfo.unknownCar[0].plate}</li>
            </ul>`
    }
    catch (err) { }
});

myParking = () => {
    location.href = "parkingPage.html";
}

TomParking = () => {
    location.href = "#";
}

YoniParking = () => {
    location.href = "#";
}

openForm = () => {
    document.getElementById("formOverlay").style.display = "block";
}

closeForm = () => {
    document.getElementById("formOverlay").style.display = "none";
}

addElement = (arr) => {
    if (document.getElementById(arr).value) {
        if (arr == "car") {
            carArr[carArr.length] = document.getElementById(arr).value;
            viewElements("Cars");
        }
        else {
            memArr[memArr.length] = [document.getElementById(arr).value, document.getElementById("op").value];
            document.getElementById("addedMem").innerHTML = `<h6>${memArr}</h6>`;
            viewElements("Mem");
        }
        document.getElementById(arr).value = "";
    }
}

viewElements = (data) => {
    if (data == "Cars") {
        document.getElementById("addedCars").innerHTML = "";
        for (i in carArr)
            document.getElementById("addedCars").innerHTML += `<article class="cube">${carArr[i]}<img class="clickAble" id="car${i}" src="images/trash.svg" onclick="removeElement(this.id)"></article>`;
    }
    else {
        document.getElementById("addedMem").innerHTML = "";
        for (i in memArr)
            document.getElementById("addedMem").innerHTML += `<article class="cube">${memArr[i]}<img  class="clickAble" id="memb${i}" src="images/trash.svg" onclick="removeElement(this.id)"></article><br>`;
    }
}

removeElement = (index) => {
    if (!index.split('car')[0]) {
        carArr.splice(index.split('car')[1], 1);
        index = "Cars";
    }
    else
        memArr.splice(index.split('memb')[1], 1);
    viewElements(index);
}