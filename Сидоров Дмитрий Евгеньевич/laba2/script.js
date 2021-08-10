let dropZone = document.querySelector("#upload-container");
let fulimg = document.getElementById("fullimg");
let binar = document.getElementById('binary-level');
//debugger;

dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropZone.addEventListener('dragenter', function(e) {
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', function() {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener("drop", function(e) {
    e.preventDefault();
    let fr = new FileReader();
    let dt = e.dataTransfer;
    let files = dt.files;
    let file = files[0];
    console.log(file.name + " " + file.size);
    //fr.readAsDataUrl(file);
    let urll = URL.createObjectURL(file);
    console.log(urll);
    fulimg.src = urll;
    //dropZone.style.backgroundImage = urll;

    /*if (this.file) {
        let fr = new FileReader();

        fr.addEventListener("load", function() {
            dropZone.style.backgroundImage = "url(" + fr.result + ")";
        }, false);

        fr.readAsDataURL(this.file);
    }*/
}, false);
let h_img;
let w_img;
fulimg.onload = function() {
  h_img = this.height;
  w_img = this.width;
  console.log(w_img);
  console.log(h_img);
}


let opt1 = document.querySelector("#op1");
let X1 = document.querySelector("#X1");
X1.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    fulimg.style.filter = 'grayscale(0%)';
})
opt1.addEventListener('dblclick', (e) => {
    opt1.style.display = 'none';
    fulimg.style.filter = 'grayscale(0%)';
})

let opt2 = document.querySelector("#op2");
let X2 = document.querySelector("#X2");
X2.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    fulimg.style.transform = 'scaleY(1)';
})
opt2.addEventListener('dblclick', (e) => {
    opt2.style.display = 'none';
    fulimg.style.transform = 'scaleY(1)';
})

let opt3 = document.querySelector("#op3");
let X3 = document.querySelector("#X3");
X3.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    fulimg.style.transform = 'scaleX(1)';
})
opt3.addEventListener('dblclick', (e) => {
    opt3.style.display = 'none';
    fulimg.style.transform = 'scaleX(1)';
})

let opt4 = document.querySelector("#op4");
let X4 = document.querySelector("#X4");
X4.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    fulimg.style.marginTop=0;
    fulimg.style.transform = 'rotate(0deg)';

})
opt4.addEventListener('dblclick', (e) => {
    opt4.style.display = 'none';
    fulimg.style.transform = 'rotate(0deg)';
    fulimg.style.marginTop=0;

})

let opt5 = document.querySelector("#op5");
let X5 = document.querySelector("#X5");
X5.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    fulimg.style.transform = 'rotate(0deg)';
    fulimg.style.marginTop=0;
})
opt5.addEventListener('dblclick', (e) => {
    opt5.style.display = 'none';
    fulimg.style.transform = 'rotate(0deg)';
    fulimg.style.marginTop=0;
})

let opt6 = document.querySelector("#op6");
let X6 = document.querySelector("#X6");
X6.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    fulimg.style.filter = 'grayscale(0%)';
})
opt6.addEventListener('dblclick', (e) => {
    opt6.style.display = 'none';
})

list1 = document.querySelector("#list1");
list1.addEventListener('change', (e) => {
        switch (e.target.value) {
            case '1':
                opt1.style.display = 'inline-block';
                fulimg.style.filter = 'grayscale(100%)';
                break;
            case '2':
                opt2.style.display = 'inline-block';
                fulimg.style.transform = 'scaleY(-1)';
                break;
            case '3':
                opt3.style.display = 'inline-block';
                fulimg.style.transform = 'scaleX(-1)';
                break;
            case '4':
                opt4.style.display = 'inline-block';
                fulimg.style.marginTop = Math.abs(w_img-h_img)/2 +'px';
                fulimg.style.transform = 'rotate(270deg)';
                break;
            case '5':
                opt5.style.display = 'inline-block';
                fulimg.style.marginTop = Math.abs(w_img-h_img)/2 +'px';
                fulimg.style.transform = 'rotate(90deg)';
                break;
            case '6':
                opt6.style.display = 'inline-block';
                binar.addEventListener('change',
                  function() {
                    fulimg.style.filter= 'grayscale('+this.value+'%)';
                  });
                break;
            default:
        }
        list1.value = 0;
    })
    /*if (e.target.value == 1) {
        opt1.style.display = 'block';
        list1.value = 0;
    } else if (e.target.value == 2) opt2.style.display = 'block';
    else if (e.target.value == 3) opt3.style.display = 'block';
    else if (e.target.value == 4) opt4.style.display = 'block';
    else if (e.target.value == 5) opt5.style.display = 'block';
    else if (e.target.value == 6) opt6.style.display = 'block';*/



/*dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function() {
    return false;
});
dropZone.on('dragover dragenter', function() {
    dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
    dropZone.removeClass('dragover');
});

dropZone.on('dragleave', function(e) {
    let dx = e.pageX - dropZone.offset().left;
    let dy = e.pageY - dropZone.offset().top;
    if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
        dropZone.removeClass('dragover');
    };
});*/
