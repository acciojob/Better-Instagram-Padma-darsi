//your code here

document.addEventListener("DOMContentLoaded", () => {
  const draggableItems = document.querySelectorAll("[id^='drag']");
  let draggedElement = null;

  draggableItems.forEach((item) => {
    // Drag start event
    item.addEventListener("dragstart", (event) => {
      draggedElement = event.target; // Store the element being dragged
      event.target.classList.add("dragging");
    });

    // Drag end event
    item.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
      draggedElement = null; // Clear the dragged element
    });

    // Drag over event
    item.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow dropping
    });

    // Drop event
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedElement && draggedElement !== event.target) {
        // Swap the innerHTML of the dragged and target elements
        const tempHTML = event.target.innerHTML;
        event.target.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = tempHTML;
      }
    });
  });
});
