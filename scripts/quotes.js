const quotes = [
    {
      text: "In the shadows of the Force, I walk a path uncharted, for in its duality, I find the secrets of true power.",
      source: "Lord Aurion - passage from his Holocron",
    },
    {
      text: "I am a Jedi, like my father before me.",
      source: "Luke Skywalker",
    },
    {
      text: "Peace is a lie, there is only passion. Through passion, I gain strength.",
      source: "Sith Code",
    },
    {
      text: "In the dance of light and darkness, I find my purpose, for it is in the balance that true wisdom resides.",
      source: "Jedi Proverb",
    },
    {
      text: "The Force is neither good nor evil; it simply is. It is our choices that shape its nature.",
      source: "Unknown Force Scholar",
    },
    {
      text: "The path to power is not through domination, but through understanding and mastery of oneself.",
      source: "Jedi Master Kael",
    },
    {
      text: "The greatest strength is found not in the Force itself but in the compassion and empathy it awakens within us.",
      source: "Seren, Grey Jedi",
    },
    {
      text: "Fear leads to anger, anger leads to hate, hate leads to suffering. Let go of fear, and the path to peace will reveal itself.",
      source: "Yoda",
    },
    {
      text: "The Sith crave power for its own sake. We Jedi seek it only as a means to protect others.",
      source: "Obi-Wan Kenobi",
    },
    {
      text: "The Sith crave power for its own sake. We Jedi seek it only as a means to protect others.",
      source: "Unknown Force Philosopher",
    },

    {
      text: "To truly master the Force, one must first master oneself.",
      source: "Ahsoka Tano",
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


