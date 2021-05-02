let carArr = [];
let memArr = [];

onload = () => {
    fetch("../json/users.json").then(res => {
        return res.json();
    }).then(arr => {
        for (i in arr) {
            for (j of arr[i]) {
                if (j.name) {
                    document.getElementById(i).innerHTML +=
                        `<li class="rectangle" name="myParkingLots[]" id="${j.name == 'lital' ? 'selected' : j.name}">
                            <button onclick="${i == 'my' ? 'my' : j.name}Parking()">
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
                    document.getElementById(i).innerHTML += `<li id = "none" >NONE</li>`;
            }
            if (i != "friends")
                document.getElementById(i).innerHTML += `<hr class="line">`;
        }
        document.getElementById("selected").style.backgroundColor = "#222222"
        document.getElementById("titleAside").innerHTML += "<span>My parking</span>"
    });
}

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
        if (arr == "cars[]") {
            carArr[carArr.length] = document.getElementById(arr).value;
            document.getElementById(arr).value = "";
        }
        viewCars();
    }
}

addMember = () => {
    if (document.getElementById("memb").value) {
        memArr[memArr.length] = [document.getElementById("memb").value, document.getElementById("op").value];
        document.getElementById("memb").value = "";
        document.getElementById("addedMem").innerHTML = `< h6 > ${memArr}</h6 > `;
    }
}

viewCars = () => {
    document.getElementById("addedCars").innerHTML = "";
    for (i in carArr)
        document.getElementById("addedCars").innerHTML += `< article class="carCube" > ${carArr[i]} <img id="car${i}" src="images/trash.svg" onclick="removeCar(this.id)"></article>`;
}

removeCar = (index) => {
    carArr.splice(index.split('car')[1], 1);
    viewCars();
}