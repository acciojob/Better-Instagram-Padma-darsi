//your code here
// Select all draggable items
const images = document.querySelectorAll(".image");

// Variables to track the dragged item and its content
let draggedItem = null;

// Add drag event listeners to each image
images.forEach((image) => {
  // When drag starts
  image.addEventListener("dragstart", (e) => {
    draggedItem = e.target; // Store the dragged item
    setTimeout(() => {
      e.target.style.opacity = "0.5"; // Make the dragged item semi-transparent
    }, 0);
  });

  // When drag ends
  image.addEventListener("dragend", (e) => {
    setTimeout(() => {
      e.target.style.opacity = "1"; // Restore opacity
    }, 0);
    draggedItem = null; // Clear the dragged item
  });

  // When a draggable enters a valid drop target
  image.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow drop
  });

  // When a draggable is dropped onto a valid target
  image.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent default behavior
    if (draggedItem !== e.target) {
      // Swap the innerHTML (or images) of the dragged and target items
      const draggedContent = draggedItem.innerHTML;
      draggedItem.innerHTML = e.target.innerHTML;
      e.target.innerHTML = draggedContent;
    }
  });
});
