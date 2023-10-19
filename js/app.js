const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]
// console.log(images, images[0]);

const carouselDOMElement = document.querySelector('.carousel')

// console.log(carouselDOMEl);

for (let i = 0; i < images.length; i++) {
    const img = images[i];
    // console.log(img);

    const imgHTML = `
    <figure class="carousel-item">
        <img src="./${img.image}" alt="">
        <div class="item-text">
            <h3 class="title">
                ${img.title}
            </h3>
            <p>
                ${img.text}
            </p>
        </div>
    </figure>
    `
    carouselDOMElement.innerHTML += imgHTML;
    console.log(carouselDOMElement, i)
}
// AGGIUNGERE LA CLASSE ACTIVE AD UN ELEMENTO DEL DOM
// Recupero gli elementi item dal dom

const itemDOMElements = document.querySelectorAll('.carousel-item');
console.log(itemDOMElements)

// assegno ad una variabile il valore numerico 0

let currentIndex = 0;

// dichiaro una variabile nella quale salvo un elemento dell'array recuperato con l'indice corrispondente

let activeslide = itemDOMElements[currentIndex];

// aggiungo la classe active all'elemento salvato dell'array

activeslide.classList.add('active');

console.log(activeslide);

