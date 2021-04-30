fetch("../users.json").then(res => {
    return res.json();
}).then(arr => {
    for (i in arr)
        for (j of arr[i]) {
            if (j.name) {
                document.getElementById(i).innerHTML +=
                    `<li class="rectangle" name="myParkingLots[]">
            <article>
                <img class="user" src="${j.img}">
            </article>
            <h2>${i == 'my' ? 'My' : j.name + '\'s'} Parking</h2>
            <section class="statusBox">
                <article class="trafficLight" id="${j.status}">
                </article>
                <span>${j.status == 'Attention' ? j.status + '!' : j.status}</span>
            </section>
            </li>
            <hr class="line">`;
            }
            else {
                document.getElementById(i).innerHTML += `<li id="none">NONE</li>`;
            }
        }
});