
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("parent");
  const draggableItems = container.querySelectorAll("div");

  let draggedItem = null;

  draggableItems.forEach((item) => {
    // When dragging starts
    item.addEventListener("dragstart", (event) => {
      draggedItem = event.target;
      event.target.classList.add("dragging");
    });

    // When dragging ends
    item.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
      draggedItem = null;
    });

    // Allow dragover for all items
    item.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow dropping by preventing default behavior
    });

    // Highlight the droppable area on dragenter
    item.addEventListener("dragenter", (event) => {
      if (event.target !== draggedItem) {
        event.target.classList.add("drag-over");
      }
    });

    // Remove highlight on dragleave
    item.addEventListener("dragleave", (event) => {
      event.target.classList.remove("drag-over");
    });

    // Handle the drop event
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedItem && event.target !== draggedItem) {
        // Swap the background images of dragged and target items
        const draggedStyle = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = draggedStyle;
      }

      // Remove highlight after dropping
      event.target.classList.remove("drag-over");
    });
  });
});
