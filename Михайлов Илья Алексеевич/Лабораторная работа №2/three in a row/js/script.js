$(document).ready(function () {

  let name;
  let crystal = 50;
  let N = 10;
  let Class = "Class";
  let Id = "Id";
  let arr = new Array();
  let koli;
  let kolj;
  let one_click_i = -1;
  let one_click_j = -1;
  let two_click_i;
  let two_click_j;
  let number_of_points;
  let boolen = true;
  let lSLength = localStorage.length;

  let Arr_color = new Array(
    "yellow",
    "cyan",
    "magenta",
    "orange",
    "mediumblue",
    "crimson",
    "gray",
    "lime"
  );

  $("body")
    .append('<button id = "button">Играть</button>')
    .append('<span class = "seconds">60</span>')
    .append('<div id = "gamefield"></div>')
    .append('<ol class = "table_rekord"></ol>')
    .css({
      "margin": "0",
      "background-color": "black",
    });
  $("#gamefield")
    .css({
      "float": "left",
      "margin": "100px 100px 100px 300px",
      "border": "2px solid white",
      "background-color": "black",
      "position": "relative",
      "width": (N * crystal) + "px",
      "height": (N * crystal) + "px"
    });
  $("#button")
    .css({
      "position": "absolute",
      "margin": "50px 0px 0px 400px",
      "font-size": "25px",
      "color": "white",
      "text-decoration": "none",
      "border-color": "white",
      "border-radius": "18px",
      "background": "black",
      "outline": "none",
      "cursor": "pointer"
    });
  $(".seconds")
    .css({
      "position": "absolute",
      "margin": "50px 0px 0px 600px",
      "color": "white",
      "font-size": "30px"
    });
  $(".table_rekord")
    .css({
      "margin": "100px 0px 0px 0px",
      "float": "left",
      "color": "white",
      "font-size": "30px"
    });
  for (i = 0; i < N; i++) {
    arr[i] = new Array();
    for (j = 0; j < N; j++) {
      arr[i][j] = -1;
    }
  }
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      do {
        arr[i][j] = Math.floor(Math.random() * 8);
      } while (Proverka_color(i, j));
      $("#gamefield").append('<div class = "' + Class + '" id = "' + Id + '_' + i + '_' + j + '"></div>');
      $("#" + Id + "_" + i + "_" + j).css({
        "top": (i * crystal) + 4 + "px",
        "left": (j * crystal) + 4 + "px",
        "width": "40px",
        "height": "40px",
        "cursor": "pointer",
        "position": "absolute",
        "border-radius": "18px",
        "background-color": Arr_color[arr[i][j]]
      });
    }
  }
  if (lSLength > 0) {
    for (i = 0; i < lSLength; i++) {
      $(".table_rekord").append('<li class = "item_rekord">' + localStorage.getItem(i) + '</li>');
    }
  }

  Start();

  function Proverka_color(i, j) {
    let cwet = arr[i][j];
    koli = 0;
    kolj = 0;
    let z = i;
    while (z > 0 && arr[z - 1][j] == cwet) {
      koli++;
      z--;
    }
    z = i;
    while (z < N - 1 && arr[z + 1][j] == cwet) {
      koli++;
      z++;
    }
    z = j;
    while (z > 0 && arr[i][z - 1] == cwet) {
      kolj++;
      z--;
    }
    z = j;
    while (z < N - 1 && arr[i][z + 1] == cwet) {
      kolj++;
      z++;
    }
    if (koli > 1 || kolj > 1) {
      return true;
    }
    else {
      return false;
    }
  }

  const time = $('.seconds');
  function Start() {
    $("#button").click(function () {
      number_of_points = 0;
      $("#button").prop('disabled', true);
      $("." + Class).on('click', Click);
      Timer();
    });
  }

  function Timer() {
    setTimeout(function () {
      const newTime = time.text() - 1;

      time.text(newTime);
      if (newTime > -1) {
        Timer();
      }
      else {
        lSLength++;
        $("#button").prop('disabled', false);
        $("." + Class).off('click', Click);
        do {
          name = prompt('Введите ваше имя');
        } while (!name);
        name += " = " + number_of_points;
        localStorage.setItem(lSLength, name);
        $(".table_rekord").append('<li class = "item_rekord">' + localStorage.getItem(lSLength) + '</li>');
        time.text(60);
      }
    }, 1000);
  }

  function Click() {
    Click_crystal($(this));
  }

  function Click_crystal(target) {
    $("#" + Id + "_" + one_click_i + "_" + one_click_j).css({
      "width": "40px",
      "height": "40px",
      "margin": "0"
    });
    let i = parseInt($(target).attr("id").split("_")[1]);
    let j = parseInt($(target).attr("id").split("_")[2]);
    $(target).css({
      "width": "20px",
      "height": "20px",
      "margin": "12px"
    });
    if (one_click_i == -1) {
      one_click_i = i;
      one_click_j = j;
    }
    else {
      if ((Math.abs(one_click_i - i) == 1 && one_click_j == j) || (Math.abs(one_click_j - j) == 1 && one_click_i == i)) {
        two_click_i = j;
        two_click_j = i;
        boolen = true;
        Crystal_zam();
      }
      else {
        one_click_i = i;
        one_click_j = j;
      }
    }
  }

  function Crystal_zam() {
    let position = $("#" + Id + "_" + one_click_i + "_" + one_click_j).position();
    $("#" + Id + "_" + one_click_i + "_" + one_click_j).css({
      "left": + $("#" + Id + "_" + two_click_j + "_" + two_click_i).position().left,
      "top": + $("#" + Id + "_" + two_click_j + "_" + two_click_i).position().top
    });
    $("#" + Id + "_" + two_click_j + "_" + two_click_i).css({
      "left": + position.left,
      "top": + position.top
    });
    $("#" + Id + "_" + one_click_i + "_" + one_click_j)
      .attr("id", "none");
    $("#" + Id + "_" + two_click_j + "_" + two_click_i)
      .attr("id", Id + "_" + one_click_i + "_" + one_click_j);
    $("#none")
      .attr("id", Id + "_" + two_click_j + "_" + two_click_i);
    let tmp = arr[one_click_i][one_click_j];
    arr[one_click_i][one_click_j] = arr[two_click_j][two_click_i];
    arr[two_click_j][two_click_i] = tmp;
    $("#" + Id + "_" + two_click_j + "_" + two_click_i).css({
      "width": "40px",
      "height": "40px",
      "margin": "0"
    });
    setTimeout(function () {
      if (boolen == true) {
        if (Proverka_color(one_click_i, one_click_j) || Proverka_color(two_click_j, two_click_i)) {
          if (Proverka_color(one_click_i, one_click_j)) {
            Crystal_delete(one_click_i, one_click_j);
          }
          if (Proverka_color(two_click_j, two_click_i)) {
            Crystal_delete(two_click_j, two_click_i);
          }
        }
        else {
          boolen = false;
          Crystal_zam();
          one_click_i = -1;
        }
      }
    }, 300);
  }

  function Crystal_delete(i, j) {
    let cwet = arr[i][j];
    let tmp = i;
    $("#" + Id + "_" + i + "_" + j).remove();
    Proverka_color(i, j);
    if (koli > 1) {
      number_of_points += koli;
      while (tmp > 0 && arr[tmp - 1][j] == cwet) {
        $("#" + Id + "_" + (tmp - 1) + "_" + j).remove();
        arr[tmp - 1][j] = -1;
        tmp--;
      }
      tmp = i;
      while (tmp < N - 1 && arr[tmp + 1][j] == cwet) {
        $("#" + Id + "_" + (tmp + 1) + "_" + j).remove();
        arr[tmp + 1][j] = -1;
        tmp++;
      }
    }
    if (kolj > 1) {
      number_of_points += kolj;
      tmp = j;
      while (tmp > 0 && arr[i][tmp - 1] == cwet) {
        $("#" + Id + "_" + i + "_" + (tmp - 1)).remove();
        arr[i][tmp - 1] = -1;
        tmp--;
      }
      tmp = j;
      while (tmp < N - 1 && arr[i][tmp + 1] == cwet) {
        $("#" + Id + "_" + i + "_" + (tmp + 1)).remove();
        arr[i][tmp + 1] = -1;
        tmp++;
      }
    }
    number_of_points++;
    arr[i][j] = -1;
    Crystal_new();
  }

  function Crystal_new() {
    for (j = 0; j < N; j++) {
      for (i = N - 1; i > 0; i--) {
        if (arr[i][j] == -1 && arr[i - 1][j] >= 0) {
          $("#" + Id + "_" + (i - 1) + "_" + j).attr("id", Id + "_" + i + "_" + j);
          arr[i][j] = arr[i - 1][j];
          arr[i - 1][j] = -1;
          $("#" + Id + "_" + i + "_" + j).css({
            "top": "+=" + crystal
          });
        }
      }
    }
    for (i = 0; i < N; i++) {
      if (arr[0][i] == -1) {
        arr[0][i] = Math.floor(Math.random() * 8);
        $("#gamefield").append('<div class = "' + Class + '" id = "' + Id + "_0_" + i + '"></div>');
        $("#" + Id + "_0_" + i).css({
          "top": "4px",
          "left": (i * crystal) + 4 + "px",
          "width": "40px",
          "height": "40px",
          "position": "absolute",
          "cursor": "pointer",
          "border-radius": "18px",
          "background-color": Arr_color[arr[0][i]]
        });
        Crystal_new();
      }
    }
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) {
        if (j <= N - 3 && arr[i][j] == arr[i][j + 1] && arr[i][j] == arr[i][j + 2]) {
          Crystal_delete(i, j);
        }
        if (i <= N - 3 && arr[i][j] == arr[i + 1][j] && arr[i][j] == arr[i + 2][j]) {
          Crystal_delete(i, j);
        }
      }
    }
    $("." + Class).css({
      "width": "40px",
      "height": "40px",
      "margin": "0"
    });
    one_click_i = -1;
    $("." + Class).on('click', Click);
  }
});

