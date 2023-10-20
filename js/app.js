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
    // console.log(carouselDOMElement, i)
}
// AGGIUNGERE LA CLASSE ACTIVE AD UN ELEMENTO DEL DOM
// Recupero gli elementi item dal dom

const itemDOMElements = document.querySelectorAll('.carousel-item');
// console.log(itemDOMElements)

// assegno ad una variabile il valore numerico 0

let currentIndex = 0;

// dichiaro una variabile nella quale salvo un elemento dell'array recuperato con l'indice corrispondente

const activeSlide = itemDOMElements[currentIndex];

// aggiungo la classe active all'elemento salvato dell'array

activeSlide.classList.add('active');

console.log(activeSlide);

// GENERARE LOOP INFINITO

// Recupero dal Dom gli elementi freccia

const arrowTopDOMElement = document.querySelector('.arrow-top');
const arrowBottomDOMElement = document.querySelector('.arrow-bottom');

// console.log(arrowBottomDOMElement, arrowTopDOMElement)

// Aggiungo all'elemento freccia in basso(salvato nella variabile) il comando event listener 'click'

arrowBottomDOMElement.addEventListener ('click', function(){

    // dichiaro una variabile slide attiva nella quale salvo l'elemento dell'array corrispondente al valore dell'indice attuale

    const actualActiveSlideElement = itemDOMElements[currentIndex];
    console.log(actualActiveSlideElement, currentIndex);

    // rimuovo la classe 'active' all'elemento slide attivo col comando class list remove

    actualActiveSlideElement.classList.remove('active');

    console.log(actualActiveSlideElement, currentIndex);

    console.log(itemDOMElements.length)

    // SE la situazione attuale, al click, è di identità tra i valori dell'indice corrente e lunghezza dell'array
    // l'indice corrente torna a 0

    if (currentIndex === itemDOMElements.length - 1) {
        currentIndex = 0; 
    } else {

        //ALTRIMENTI l'indice corrente viene incrementato

        currentIndex++;
    }

    console.log(actualActiveSlideElement, currentIndex);

    // mi salvo in una variabile la slide che corrisponde all'indice corrente
    // aggiungo la classe active alla slide 

    const nextSlideElement = itemDOMElements[currentIndex];
    nextSlideElement.classList.add('active');

    console.log(nextSlideElement, currentIndex);
})

// aggiungo all'elemento freccia in alto (salvato nella variabile) il comando event listener 'click'

arrowTopDOMElement.addEventListener ('click', function(){

    // salvo in una variabile l'elemento dell'array con l'indice corrente 

    const actualActiveSlideElement = itemDOMElements[currentIndex];

    // rimuovo dall'elemento la classe 'active'

    actualActiveSlideElement.classList.remove('active');

    // SE la situazione attuale è di identità tra l'indice corrente e il valore 0
    // il valore dell'indice corrente diventa corrispondente alla lunghezza dell'array che facciamo combaciare togliendo 1 al valore dell'array 

    if (currentIndex === 0) {
        currentIndex = itemDOMElements.length - 1;
    } else {

        //ALTRIMENTI decremento l'indice

        currentIndex--;
    }

    // mi salvo in una variabile l'elemento dell'array che corrisponde al valore dell'indice corrente
    // aggiungo la classe 'active' all'elemento individuato

    const nextSlideElement = itemDOMElements[currentIndex];
    nextSlideElement.classList.add('active');
})





