
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("parent");
  const draggableItems = container.querySelectorAll(".image");

  let draggedElement = null;

  // Add event listeners to each draggable item
  draggableItems.forEach((item) => {
    item.addEventListener("dragstart", (event) => {
      draggedElement = event.target; // Save the dragged element
      event.dataTransfer.effectAllowed = "move"; // Set move effect
    });

    item.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow dropping
      event.dataTransfer.dropEffect = "move"; // Set move effect
    });

    item.addEventListener("drop", (event) => {
      event.preventDefault();

      const targetElement = event.target;

      if (draggedElement && draggedElement !== targetElement) {
        // Swap background images of dragged and target elements
        const draggedImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
        targetElement.style.backgroundImage = draggedImage;
      }
    });
  });
});
