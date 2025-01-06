//your code here
const images = document.querySelectorAll("[id^='drag']");

let draggedElement = null;

// Add drag event listeners to each element
images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target; // Store the element being dragged
    e.target.classList.add("selected");
  });

  image.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected"); // Remove highlight after drag
    draggedElement = null; // Reset the dragged element
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow dropping
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent default drop behavior
    if (draggedElement && draggedElement !== e.target) {
      // Swap the innerHTML of the two elements
      const tempHTML = e.target.innerHTML;
      e.target.innerHTML = draggedElement.innerHTML;
      draggedElement.innerHTML = tempHTML;
    }
  });
});
