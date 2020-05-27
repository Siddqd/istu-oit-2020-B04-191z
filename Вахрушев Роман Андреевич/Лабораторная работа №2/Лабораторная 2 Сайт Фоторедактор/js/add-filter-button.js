var count = 1; //переменная для подсчета количества фильтров
var filter_content = document.getElementsByClassName("filter__select-filter-content")[0];
var butt_add = document.getElementsByClassName("filter__add-filter")[0];
var filter = document.getElementsByClassName("filter")[0];

//Кнопка добавить
butt_add.onclick = function() {

    var copyNode = filter_content.cloneNode(true); //копируем скрытый фильтр
    filter.insertBefore(copyNode, butt_add); //вставляем фильтр перед кнопкой добавить
    document.getElementsByClassName("filter__select-filter-content")[count].style.display = "block"; //делаем вставленный фильтр видимым

    //Вывод поля для ввода порога бинаризации при выборе фильтра 6
    document.getElementsByClassName("filter__select-filter")[count].onchange = function(e) {
        //e.target - ссылка на текущее событие, nextElementSibling - ссылка на элемент, идущий следом
        if (e.target.value == '6') {
            e.target.nextElementSibling.nextElementSibling.style.display = "block";
            console.log(e.target.nextElementSibling.nextElementSibling.tagName);
        } else {
            e.target.nextElementSibling.nextElementSibling.style.display = "none";
        }

    }

    //Кнопка удалить, назначаем обработчик сразу после добавления нового фильтра
    document.getElementsByClassName("filter__delete-filter")[count].onclick = function(e) {
        const btn = e.target;
        if (!btn) {
            return;
        }
        btn.parentElement.remove(); //удаляем фильтр полностью 
        count--;
    }

    count++; //увеличиваем переменную для следующего добавленного фильтра

};