$(document).ready(function() {
    var dropZone = $('#dropZone')
        // Проверка поддержки браузером
    if (typeof(window.FileReader) == 'undefined') {
        dropZone.text('Не поддерживается браузером!');
        dropZone.addClass('error');
    }
    // Добавляем класс hover при наведении
    dropZone[0].ondragover = function() {
        dropZone.addClass('hover');
        return false;
    };
    // Убираем класс hover
    dropZone[0].ondragleave = function() {
        dropZone.removeClass('hover');
        return false;
    };
    // Обрабатываем событие Drop
    dropZone[0].ondrop = function(event) {
        event.preventDefault();
        dropZone.removeClass('hover');
        dropZone.addClass('drop');
        document.getElementsByClassName("input-file")[0].files = event.dataTransfer.files;
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            var file = event.dataTransfer.files.item(i);
            var reader = new FileReader();
            reader.readAsDataURL(file);
        }
        reader.onloadend = function() {
            buffer_img.src = reader.result;
        }
    };
});