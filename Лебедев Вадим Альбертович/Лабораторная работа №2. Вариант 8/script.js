var places = {
    places: [
        { x: 90, y: 130, isBusy: false },
        { x: 90, y: 170, isBusy: false },
        { x: 90, y: 210, isBusy: false },
        { x: 140, y: 130, isBusy: false },
        { x: 140, y: 170, isBusy: false },
        { x: 140, y: 210, isBusy: false },
        { x: 195, y: 130, isBusy: false },
        { x: 195, y: 170, isBusy: false },
        { x: 195, y: 210, isBusy: false },
        { x: 245, y: 130, isBusy: false },
        { x: 245, y: 170, isBusy: false },
        { x: 245, y: 210, isBusy: false }
    ]
}

window.onclick = function (e) {

    var places = this.places.places;
    var zal = this.document.getElementById("Zal");
    var names = this.document.getElementById("Names");

    for (var i = 0; i < places.length; i++) {
        if (e.pageX >= places[i].x - 10 &&
            e.pageX <= places[i].x + 10 &&
            e.pageY >= places[i].y - 10 &&
            e.pageY <= places[i].y + 10) {
            var name = this.prompt();
            if (name != null) {
                var p = this.document.createElement("p");
                p.innerHTML = i + 1 + ". " + name;
                var btn = document.createElement("button");
                btn.appendChild(this.document.createTextNode("X"));
                btn.setAttribute("onclick", "deleteGuest("+ i +")");
                p.appendChild(btn);
                p.setAttribute("id", "Name" + i);
                names.appendChild(p);
                var circle = this.setCircle(places[i].x - 8, places[i].y, i, zal);
                zal.appendChild(circle);
                places[i].isBusy = true;
            }
            break;
        }
    }
}

function deleteGuest(p) {
    document.getElementById("Name" + p).remove();
    document.getElementById("Zal" + p).remove();
}

function setCircle(x, y, index, zal) {
    var circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.borderRadius = "100%";
    circle.style.width = "20px";
    circle.style.height = "20px";
    circle.style.backgroundColor = "green";
    circle.style.textAlign = "center";
    circle.textContent = index + 1;
    circle.setAttribute("id", "Zal" + index);
    return circle;
}