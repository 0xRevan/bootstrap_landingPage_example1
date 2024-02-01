const quotes = [
    {
      text: "In the shadows of the Force, I walk a path uncharted, for in its duality, I find the secrets of true power.",
      source: "Aurion - passage from his Holocron",
    },
    {
      text: "I am a Jedi, like my father before me.",
      source: "Luke Skywalker",
    },
    {
      text: "Peace is a lie, there is only passion. Through passion, I gain strength.",
      source: "Sith Code",
    },
    // Add more quotes as needed
  ];
  
  document.addEventListener('DOMContentLoaded', (event) => {
    quotes.forEach((quote, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        carouselItem.innerHTML = `
            <blockquote class="blockquote">
                <p>${quote.text}</p>
                <footer class="blockquote-footer">${quote.source}</footer>
            </blockquote>
        `;

        document.querySelector("#quoteCarousel .carousel-inner").appendChild(carouselItem);
    });
});


