var car_models = [
    {
        name: 'Bmw 416d',
        image: 'images/bmw.jpg',
        link: 'https://www.sahibinden.com/'
    },
    {
        name: 'Honda Civic',
        image: 'images/honda.jpg',
        link: 'https://www.sahibinden.com/r'
    },
    {
        name: 'Mazda R8',
        image: 'images/mazda.jpg',
        link: 'https://www.sahibinden.com/'
    },
    {
        name: 'Scoda Fabia',
        image: 'images/skoda.jpg',
        link: 'https://www.sahibinden.com/'
    },
    {
        name: 'Volvo XC90',
        image: 'images/volvo.jpg',
        link: 'https://www.sahibinden.com/'
    }
]

var index = 1;

var sliderCount = car_models.length;

var settings = {
    duration: 2100,
    random: false
}

var interval;

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', e => {
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', e => {
    index++;
    showSlide(index);
});


document.querySelectorAll('.arrow').forEach(item => {
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(item => {
    item.addEventListener('mouseleave', function(){
        init(settings);
    });
});

function showSlide(index) {

    if (index < 0) {
        index = sliderCount - 1;
    } else if (index >= sliderCount) {
        index = 0;
    }

    console.log(index);
    document.querySelector('.card-title').textContent = car_models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', car_models[index].image);
    document.querySelector('.card-link').setAttribute('href', car_models[index].link);
}


function init(settings) {

    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * sliderCount);
            } while (prev == index)
            prev = index;
            showSlide(index);
        } else {
            if (index + 1 == sliderCount) {
                index = -1;
            }
            showSlide(index);
            index++;
        }

    }, settings.duration);

}