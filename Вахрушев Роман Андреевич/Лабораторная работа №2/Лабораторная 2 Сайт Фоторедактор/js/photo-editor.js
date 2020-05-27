var input_file = document.getElementsByClassName("input-file")[0];
var buffer_img = document.getElementsByClassName("result__start-img")[0];
var canvas = document.getElementsByClassName("result__result-img")[0];
var w = document.getElementsByClassName("width__select-width")[0];
var h = document.getElementsByClassName("height__select-height")[0];
var button_send = document.getElementsByClassName("button-send")[0];

//Чтение загруженной картинки
var input_file = document.getElementsByClassName("input-file")[0];
input_file.onchange = function() {
    var file_img = input_file.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file_img);
    reader.onloadend = function() {
        buffer_img.src = reader.result;
    }
}

//Обработка картинки при нажатии кнопки Отправить
button_send.onclick = function() {

    var i = 0; //нужны для циклов
    var j = 0;

    //Изменение размеров картинки

    canvas.width = w.value; //меняется размер холста canvas в зависимости от введенных размеров
    canvas.height = h.value;
    var ctxCanvas = canvas.getContext("2d"); //получаем контекст холста (без него невозможно исп. методов)
    ctxCanvas.drawImage(buffer_img, 0, 0, w.value, h.value); //в холст с координат 0 0 записываем исходную картинку с размером w и h

    var n = $('.filter__select-filter-content').length; //определяем число фильтров по числу элементов класса
    //console.log(n);
    var filter = document.getElementsByClassName("filter__select-filter");

    //Для каждого фильтра выполняем 1 из операций

    for (i = 1; i < n; i++) {

        //console.log("i=" + i);
        //console.log("filter[i].value=" + filter[i].value);

        switch (filter[i].value) {

            //черно-белая картинка
            case '1':

                var imgd = ctxCanvas.getImageData(0, 0, canvas.width, canvas.height); //получаем массив пикселов исходной картинки
                var pix = imgd.data; //определяем атрибут data
                //меняем пикселы
                for (var j = 0; j < pix.length; j = j + 4) {
                    var grayscale = pix[j] * .3 + pix[j + 1] * .59 + pix[j + 2] * .11;
                    pix[j] = grayscale; // red
                    pix[j + 1] = grayscale; // green
                    pix[j + 2] = grayscale; // blue
                }
                ctxCanvas.putImageData(imgd, 0, 0); //вставляем массив пикселов в холст canvas с 0 0
                break;



            //отразить по вертикали
            case '2':

                var n1 = parseInt(canvas.height / 2);
                for (j = 0; j <= n1; j++) {
                    imgd = ctxCanvas.getImageData(0, j, canvas.width, 1);
                    imgd1 = ctxCanvas.getImageData(0, (canvas.height - j), canvas.width, 1);
                    ctxCanvas.putImageData(imgd, 0, (canvas.height - j));
                    ctxCanvas.putImageData(imgd1, 0, j);
                }
                break;

            //отразить по горизонтали
            case '3':

                var n1 = parseInt(canvas.width / 2);
                for (j = 0; j <= n1; j++) {
                    imgd = ctxCanvas.getImageData(j, 0, 1, canvas.height);
                    imgd1 = ctxCanvas.getImageData((canvas.width - j), 0, 1, canvas.height);
                    ctxCanvas.putImageData(imgd, (canvas.width - j), 0);
                    ctxCanvas.putImageData(imgd1, j, 0);
                }
                break;

            //повернуть на 90 градусов влево
            case '4':

                var buffer_image2 = document.createElement("img"); //текущую картинку из canvas копируем в созданный элемент img
                buffer_image2 = canvas;

                canvas.remove(); //очищаем холст

                canvas = document.createElement("canvas"); //создаем новый холст с новой шириной и высотой
                canvas.className = "result__result-img";
                canvas.display = "flex";
                var ctxCanvas = canvas.getContext("2d");
                canvas.width = buffer_image2.height; //в холсте изменятся при повороте ширина и высота поменяются местами
                canvas.height = buffer_image2.width;

                ctxCanvas.drawImage(buffer_image2, 0, 0, canvas.width, canvas.height); //поворот
                ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);
                ctxCanvas.translate(buffer_image2.height / 2, buffer_image2.width / 2);
                ctxCanvas.rotate(-90 * Math.PI / 180);
                ctxCanvas.drawImage(buffer_image2, -buffer_image2.width / 2, -buffer_image2.height / 2);

                document.getElementsByClassName("result")[0].insertBefore(canvas, document.getElementsByClassName("result__link")[0]); //вставка холста на страницу
                break;

            //повернуть на 90 градусов вправо
            case '5':

                //то же самое, но для другого угла
                var buffer_image2 = document.createElement("img");
                buffer_image2 = canvas;

                canvas.remove();

                canvas = document.createElement("canvas");
                canvas.className = "result__result-img";
                canvas.display = "flex";
                var ctxCanvas = canvas.getContext("2d");
                canvas.width = buffer_image2.height;
                canvas.height = buffer_image2.width;

                ctxCanvas.drawImage(buffer_image2, 0, 0, canvas.width, canvas.height);
                ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);
                ctxCanvas.translate(buffer_image2.height / 2, buffer_image2.width / 2);
                ctxCanvas.rotate(90 * Math.PI / 180);
                ctxCanvas.drawImage(buffer_image2, -buffer_image2.width / 2, -buffer_image2.height / 2);

                document.getElementsByClassName("result")[0].insertBefore(canvas, document.getElementsByClassName("result__link")[0]);
                break;

            //бинаризация по порогу
            case '6':

                var ThresholdValue = filter[i].nextElementSibling.nextElementSibling.value; //получаем введенный порог
                var imgd = ctxCanvas.getImageData(0, 0, canvas.width, canvas.height);
                var pix = imgd.data;

                for (var j = 0; j < pix.length; j = j + 4) { //идём по всему массиву
                    if (pix[j] > ThresholdValue) { //если больше порога - 0
                        pix[j] = pix[j + 1] = pix[j + 2] = 0; // red, green, blue
                    } else { //иначе 1, а то есть 255:
                        pix[j] = pix[j + 1] = pix[j + 2] = 255; // red, green, blue
                    }
                    pix[j + 3] = 255;
                }

                ctxCanvas.putImageData(imgd, 0, 0);
                break;

        }

    }

    //Получение адреса холста для ссылки Скачать
    document.getElementsByClassName("result__link")[0].href = canvas.toDataURL();

    //Вывод блока с результатом
    document.getElementsByClassName("editior-content")[0].style.display = "none";
    document.getElementsByClassName("result")[0].style.display = "flex";

};