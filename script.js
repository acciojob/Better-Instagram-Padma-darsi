document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("parent");
  const draggableItems = container.querySelectorAll("div");

  let draggedItem = null;

  draggableItems.forEach(item => {
    // When dragging starts
    item.addEventListener("dragstart", () => {
      draggedItem = item;
      setTimeout(() => item.style.opacity = "0.5", 0);
    });

    // When dragging ends
    item.addEventListener("dragend", () => {
      draggedItem = null;
      item.style.opacity = "1";
    });

    // When an item is dragged over a target
    item.addEventListener("dragover", (event) => {
      event.preventDefault(); // Necessary for allowing drop
    });

    // When a dragged item enters a droppable target
    item.addEventListener("dragenter", (event) => {
      event.preventDefault();
      item.style.border = "3px dashed #007BFF";
    });

    // When a dragged item leaves a droppable target
    item.addEventListener("dragleave", () => {
      item.style.border = "2px solid #ccc";
    });

    // When the dragged item is dropped
    item.addEventListener("drop", () => {
      if (draggedItem !== item) {
        // Swap the background images of the dragged and target items
        const draggedStyle = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = item.style.backgroundImage;
        item.style.backgroundImage = draggedStyle;
      }
      item.style.border = "2px solid #ccc";
    });
  });
});
