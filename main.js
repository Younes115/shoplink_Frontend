document.addEventListener("DOMContentLoaded", () => {
  const primaryImage = document.querySelector("[data-primary-image]");
  const thumbnailButtons = document.querySelectorAll("[data-thumb]");
  const addToCartButton = document.querySelector("[data-add-to-cart]");

  const setActiveThumbnail = (selected) => {
    thumbnailButtons.forEach((button) => {
      button.classList.toggle("active", button === selected);
    });
  };

  const updatePrimaryImage = (button) => {
    const nextSrc = button.dataset.full;
    const nextAlt = button.dataset.alt || "Product image";

    if (!nextSrc || !primaryImage) {
      return;
    }

    primaryImage.classList.add("is-loading");

    const preload = new Image();
    preload.onload = () => {
      primaryImage.src = nextSrc;
      primaryImage.alt = nextAlt;
      primaryImage.classList.remove("is-loading");
    };
    preload.onerror = () => {
      primaryImage.classList.remove("is-loading");
    };
    preload.src = nextSrc;
  };

  thumbnailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) {
        return;
      }

      setActiveThumbnail(button);
      updatePrimaryImage(button);
    });
  });

  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      console.log("Add to Cart:", {
        brand: "Shoplink",
        label: "MaGi",
        product: "AeroWeave Minimalist Trench Coat",
        price: "189.00",
        currency: "USD",
      });
    });
  }
});
