const myImages = [
    {
        src: "/images/SurvivingEvilChicken.png",
        description: "Ruthless Chickens tried to kill Steve.",
        alt: "Local Chickens throw fireballs at Steve."
    },
    {
        src: "/images/Swarmed.jpg",
        description: "Yikes, that guy in the corner has three eyes!",
        alt: "Three-eyed King orders swarm on defenseless Pharoah."
    },
    {
        src: "/images/HumptyDumptyFellOfAWall.jpg",
        description: "Humpty Dumpty fell off a wall, and the Kings attacking him fell off too.",
        alt: "Foolish Kings try to follow Sensei into the void."
    },
    {
        src: "/images/SunsetInChaos.jpg",
        description: "An amazing view from the roof, or maybe underside, of a house in Chaos. A person approaches from the side who will soon try to be Santa and go down a chimney.",
        alt: "Santa impersonator charges resident of Chaos."
    }
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

showcaseImageElement.src = myImages[currentIndex].src
showcaseImageElement.alt = myImages[currentIndex].alt
showcaseImageDescription.innerText = myImages[currentIndex].description

function changeMyImage(e){
    if (e.target.id === nextButton.id) {
        if (currentIndex < myImages.length -1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        } 
    }   
    if (e.target.id === prevButton.id) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = myImages.length - 1
        }
    }
    
    showcaseImageElement.src = myImages[currentIndex].src
    showcaseImageElement.alt = myImages[currentIndex].alt
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;