document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("parent");

  let draggedElement = null;

  // Add event listeners to the parent container for delegation
  container.addEventListener("dragstart", (event) => {
    if (event.target.classList.contains("image")) {
      draggedElement = event.target;
      event.target.classList.add("dragging");

      // Set a custom drag image to give feedback
      const customDragImage = document.createElement("div");
      customDragImage.style.height = "100px";
      customDragImage.style.width = "100px";
      customDragImage.style.background = event.target.style.backgroundImage;
      customDragImage.style.backgroundSize = "cover";
      customDragImage.style.backgroundPosition = "center";
      document.body.appendChild(customDragImage);
      event.dataTransfer.setDragImage(customDragImage, 50, 50);
    }
  });

  container.addEventListener("dragend", (event) => {
    if (event.target.classList.contains("image")) {
      event.target.classList.remove("dragging");
      draggedElement = null;

      // Remove custom drag image after dragging
      const customDragImage = document.querySelector(".custom-drag-image");
      if (customDragImage) {
        customDragImage.remove();
      }
    }
  });

  container.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allow dropping
    event.dataTransfer.dropEffect = "move";
  });

  container.addEventListener("drop", (event) => {
    event.preventDefault();
    const targetElement = event.target;

    if (
      draggedElement &&
      targetElement.classList.contains("image") &&
      draggedElement !== targetElement
    ) {
      // Swap background images of dragged and target elements
      const draggedImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
      targetElement.style.backgroundImage = draggedImage;
    }
  });
});
