const supportedFileTypes = ['.jpeg', '.png'];

bw = (ctx, width, height) => {
    let imageData, px, length, i = 0, grey;

    imageData = ctx.getImageData(0, 0, width, height);
    px = imageData.data;
    length = px.length;
    for (; i < length; i+= 4) {
        grey = px[i] * .3 + px[i+1] * .59 + px[i+2] * .11;
        px[i] = px[i+1] = px[i+2] = grey;
    }
    ctx.putImageData(imageData, 0, 0);
};

horizontal = (ctx, width, height, img) => {
    // ctx.clearRect(0,0, width, height);
    // ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(img, width, height);
    // ctx.restore();
};

rotate = (ctx, width, height, degrees, img) => {
    // ctx.clearRect(0,0, width, height);
    // ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    // ctx.drawImage(img, -width / 2, -height / 2);
    // ctx.restore();
};

validateAndSave = () => {
    let isValid = false;
    let errors = [];
    let floatPattern = /d+([.,])d*/;

    let fileInputValue = document.getElementById('file_input').value;
    if (fileInputValue !== "") {
        supportedFileTypes.forEach(type => {
            if (fileInputValue.endsWith(type)) {
                isValid = true;
            }
        });
        if (!isValid) {
            errors.push('Unsupported file type');
        }
    } else {
        errors.push("File is required");
    }

    let imgWidthValue = document.getElementById('img_width').value;
    if (imgWidthValue !== "") {
        if (imgWidthValue.match(floatPattern) === null) {
            if (parseInt(imgWidthValue) > 0) {
                isValid = true;
            } else {
                isValid = false;
                errors.push('Width can\'t be negative');
            }
        } else {
            isValid = false;
            errors.push('Width can\'t have float type');
        }
    } else {
        isValid = false;
        errors.push("Width is required");
    }

    let imgHeightValue = document.getElementById('img_height').value;
    if (imgWidthValue !== "") {
        if (imgWidthValue.match(floatPattern) === null) {
            if (parseInt(imgHeightValue) > 0) {
                isValid = true;
            } else {
                isValid = false;
                errors.push('Height can\'t be negative');
            }
        } else {
            isValid = false;
            errors.push('Height can\'t have float type');
        }
    } else {
        isValid = false;
        errors.push("Height is required");
    }

    if (isValid) {
        document.getElementById('drag_and_drop_area').style.display = 'none';
        document.getElementById('canvas_area').style.display = 'block';

        let activeFilters = document.getElementsByClassName('active_filter');
        let filterKeys = [];
        for (let i = 0; i < activeFilters.length; i++) {
            let filterKey = activeFilters[i].getElementsByTagName('span')[0].getAttribute('key');
            filterKeys.push(filterKey);
        }

        let fileReader = new FileReader();
        fileReader.readAsDataURL(document.getElementById('file_input').files[0]);
        fileReader.addEventListener('loadend', () => {
            let ctx = document.getElementById('canvas_area').getContext('2d');
            let img = new Image;
            img.onload = function() {
                ctx.drawImage(img, 0, 0, imgWidthValue,imgHeightValue);

                filterKeys.forEach(key => {
                    switch (key) {
                        case 'bw': bw(ctx, imgWidthValue, imgHeightValue); break;
                        case 'vertical': vertical(ctx, imgWidthValue, imgHeightValue); break;
                        case 'horizontal': horizontal(ctx, imgWidthValue, imgHeightValue, img); break;
                        case 'rotateToLeft': rotate(ctx, imgWidthValue, imgHeightValue, 90, img); break;
                        case 'rotateToRight': rotate(ctx, imgWidthValue, imgHeightValue, -90, img); break;
                        case 'binary': binary(ctx, imgWidthValue, imgHeightValue, -90); break;
                    }
                })
            };
            img.src = fileReader.result;
        });

    } else {
        alert(errors.join("\n"));
    }

};

const area = document.getElementById('drag_and_drop_area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    area.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    }, false)
});
['dragenter', 'dragover'].forEach(eventName => {
    area.addEventListener(eventName, () => area.classList.add('hover'), false)
});
['dragleave', 'drop'].forEach(eventName => {
    area.addEventListener(eventName, () => area.classList.remove('hover'), false)
});
area.addEventListener('drop', (event) => {
    let dataTransfer = event.dataTransfer;
    let files = dataTransfer.files;

    let fileInput = document.getElementById('file_input');
    fileInput.files = files;
    fileInput.value = files[0].name;
}, false);

const select = document.getElementById('filters');
select.addEventListener('change', (event) => {
    let div = document.createElement(`div`);
    div.classList.add('active_filter');

    let button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', (event) => {
        event.target.parentNode.remove()
    });

    let selectedOption = select.options[select.selectedIndex];

    let filter = document.createElement(`span`);
    filter.setAttribute("key", selectedOption.id);
    filter.innerText = selectedOption.value;


    div.appendChild(filter);
    div.appendChild(button);

    document.getElementById('active_filters').appendChild(div);
});