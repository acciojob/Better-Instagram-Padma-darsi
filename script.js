//your code here
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image"); // Select all divs with the "image" class
  let draggedElement = null; // Variable to store the element being dragged

  images.forEach((image) => {
    // Drag start event
    image.addEventListener("dragstart", (event) => {
      draggedElement = event.target; // Store the element being dragged
      event.target.classList.add("selected"); // Add a visual indicator for dragging
    });

    // Drag end event
    image.addEventListener("dragend", (event) => {
      event.target.classList.remove("selected"); // Remove the visual indicator
      draggedElement = null; // Clear the dragged element
    });

    // Drag over event (required to allow dropping)
    image.addEventListener("dragover", (event) => {
      event.preventDefault(); // Prevent default to allow drop
    });

    // Drop event
    image.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedElement && draggedElement !== event.target) {
        // Swap the background images of the dragged and target elements
        const draggedImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = draggedImage;
      }
    });
  });
});
