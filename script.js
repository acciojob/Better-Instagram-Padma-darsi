
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("parent");
  const draggableItems = container.querySelectorAll("[id^='div']");

  let draggedElement = null;

  // Add event listeners to each draggable item
  draggableItems.forEach((item) => {
    // When drag starts
    item.addEventListener("dragstart", (event) => {
      draggedElement = event.target; // Save reference to the dragged element
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", event.target.id); // Pass element ID
      event.target.classList.add("dragging");
    });

    // When drag ends
    item.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
      draggedElement = null; // Reset reference
    });

    // Allow items to be droppable
    item.addEventListener("dragover", (event) => {
      event.preventDefault(); // Prevent default to allow dropping
      event.dataTransfer.dropEffect = "move";
    });

    // Handle drop event
    item.addEventListener("drop", (event) => {
      event.preventDefault();

      const targetElement = event.target;

      // Ensure the dragged and target elements are not the same
      if (draggedElement && draggedElement !== targetElement) {
        // Swap the `backgroundImage` styles of dragged and target elements
        const draggedStyle = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
        targetElement.style.backgroundImage = draggedStyle;
      }
    });
  });
});

