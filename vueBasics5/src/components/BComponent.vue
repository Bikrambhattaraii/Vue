<template>
    <div>
      <h1>This is B component</h1>
      <div>
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.url"
          :alt="image.alt"
          class="gallery-image"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhkGWSLI4M70ZOrbGUJY2hrGXF9_XFK5iSDwKEAQIzQ&s",
            alt: "alt1"
          },
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwIVXJHB1MI_xaeNPyAi5xGjDKwMdlSxiS9cemIXtBg&s",
            alt: "alt2"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  