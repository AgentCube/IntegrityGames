const categories = [
    { leftArrowId: "left-arrow-puzzle", rightArrowId: "right-arrow-puzzle", containerId: "scroll-container-puzzle" },
    { leftArrowId: "left-arrow-adventure", rightArrowId: "right-arrow-adventure", containerId: "scroll-container-adventure" },
    { leftArrowId: "left-arrow-sports", rightArrowId: "right-arrow-sports", containerId: "scroll-container-sports" },
    { leftArrowId: "left-arrow-racing", rightArrowId: "right-arrow-racing", containerId: "scroll-container-racing" },
    { leftArrowId: "left-arrow-shooting", rightArrowId: "right-arrow-shooting", containerId: "scroll-container-shooting" },
    { leftArrowId: "left-arrow-tower-defense", rightArrowId: "right-arrow-tower-defense", containerId: "scroll-container-tower-defense" },
    { leftArrowId: "left-arrow-idle", rightArrowId: "right-arrow-idle", containerId: "scroll-container-idle" },
    { leftArrowId: "left-arrow-strategy", rightArrowId: "right-arrow-strategy", containerId: "scroll-container-strategy" },
    { leftArrowId: "left-arrow-arcade", rightArrowId: "right-arrow-arcade", containerId: "scroll-container-arcade" },
    { leftArrowId: "left-arrow-card", rightArrowId: "right-arrow-card", containerId: "scroll-container-card" },
    { leftArrowId: "left-arrow-merge", rightArrowId: "right-arrow-merge", containerId: "scroll-container-merge" },
    { leftArrowId: "left-arrow-music", rightArrowId: "right-arrow-music", containerId: "scroll-container-music" },
    { leftArrowId: "left-arrow-survival", rightArrowId: "right-arrow-survival", containerId: "scroll-container-survival" },
    { leftArrowId: "left-arrow-classic", rightArrowId: "right-arrow-classic", containerId: "scroll-container-classic" }
  ];
  
  categories.forEach(category => {
    const leftArrow = document.getElementById(category.leftArrowId);
    const rightArrow = document.getElementById(category.rightArrowId);
    const scrollContainer = document.getElementById(category.containerId);
  
    let scrollPosition = 0;
    const totalCards = scrollContainer.children.length;
    const visibleCards = 7; // Number of visible cards at a time
    const cardWidth = 220; // Width of one card (with gap)
    const totalWidth = cardWidth * totalCards + 20 * (totalCards - 1); // Include the gaps between cards
  
    // Set the total width of the scroll container based on the number of cards
    scrollContainer.style.width = `${totalWidth}px`;
  
    // Update the arrow visibility based on the scroll position
    function updateArrowVisibility() {
      if (scrollPosition === 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "block";
      }
  
      if (scrollPosition >= totalWidth - visibleCards * cardWidth) {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "block";
      }
    }
  
    // Scroll left when left arrow is clicked
    leftArrow.addEventListener("click", () => {
      scrollPosition -= cardWidth;
      if (scrollPosition < 0) scrollPosition = 0;
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      updateArrowVisibility();
    });
  
    // Scroll right when right arrow is clicked
    rightArrow.addEventListener("click", () => {
      scrollPosition += cardWidth;
      if (scrollPosition > totalWidth - visibleCards * cardWidth) {
        scrollPosition = totalWidth - visibleCards * cardWidth;
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      updateArrowVisibility();
    });
  
    // Initialize arrow visibility
    updateArrowVisibility();
  });
  