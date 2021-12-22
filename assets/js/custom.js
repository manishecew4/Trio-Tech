async function init() {
    const node = document.querySelector("#type-text");

    await sleep(1000);
    node.innerText = "";
    // await node.type("We work on, ");

    while (true) {
        await node.type("Web  Design");
        await sleep(2000);
        await node.delete("Web  Design");

        await node.type("Web  Development");
        await sleep(2000);
        await node.delete("Web  Development");

        await node.type("App  Development");
        await sleep(2000);
        await node.delete("App  Development");
    }
}

// Source code 🚩

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
        const randomMs = 100 * Math.random();
        return randomMs < 50 ? 10 : randomMs;
    }

    async type(text) {
        for (let character of text) {
            this.innerText += character;
            await sleep(this.typeInterval);
        }
    }

    async delete(text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, this.innerText.length - 1);
            await sleep(this.typeInterval);
        }
    }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

init();

// Brand Slider

$(document).ready(function () {
    $('.demo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        draggable: true,
        easing: 'linear',
        fade: false,
        infinite: true,
        swipe: true,
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

// Banner Slide
$(document).ready(function () {
    $('.bnr_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        cssEase: 'linear',
        speed: 500,
        draggable: true,
        easing: 'linear',
        infinite: true,
        swipe: true,
        centerMode: false,
        swipeToSlide: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
});