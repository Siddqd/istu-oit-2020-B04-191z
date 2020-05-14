document.slides = undefined;

document.addEventListener("DOMContentLoaded", () => {
    document.slides = document.getElementsByClassName('slide');

    document.getElementById('previous').addEventListener('click', () => {
        let slide = document.getElementsByClassName('slide active')[0];
        let maxIndex = document.slides.length - 1;
        let index;
        for (let i = 0; i < maxIndex + 1; i++) {
            if (document.slides[i] === slide) {
                index = i;
                break;
            }
        }
        if (index === 0) {
            index = maxIndex;
        } else {
            index = index - 1;
        }

        slide.classList.remove('active');
        document.slides[index].classList.add('active');
    });

    document.getElementById('next').addEventListener('click', () => {
        let slide = document.getElementsByClassName('slide active')[0];
        let length = document.slides.length;
        let index;
        for (let i = 0; i < length; i++) {
            if (document.slides[i] === slide) {
                index = i;
                break;
            }
        }
        if (index === length - 1) {
            index = 0;
        } else {
            index = index + 1;
        }

        slide.classList.remove('active');
        document.slides[index].classList.add('active');
    })
});

