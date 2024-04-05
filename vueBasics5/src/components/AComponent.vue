<template>
  <div>
    <p>You're in A component</p>
    <div class="image-container">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        :alt="image.alt"
        :class="image.class"
        class="gallery-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      images: [
        {
          url: "https://images.unsplash.com/photo-1712173486904-5f149ee40dce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fHx8fA%3D%3D",
          alt: "Image 1",
        },
        {
          url: "https://images.unsplash.com/photo-1712013839230-15e7928efdab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
          alt: "Image 2",
          class:"c1"
        },
        {
          url: "https://images.unsplash.com/photo-1711735346434-ea3c23121b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
          alt: "Image 3",
          class:"c2",
        },
        {
          url: "https://images.unsplash.com/photo-1712081024208-f04e1956d736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Image 4",
          class:"c3"
        },
        {
          url: "https://images.unsplash.com/photo-1582567397638-559df60a4d24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
          alt: "Image 5",
          class:"c4",
        },
        {
          url: "https://images.unsplash.com/photo-1712081024200-400ca47d02d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
          alt: "Image 6",
          class:"c5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit,minmax(299px,2fr));
  grid-gap: 10px;
}

.gallery-image {
  width: 100%;
  height: auto;
}
.image-container {
display: grid;
grid-template-columns: 4fr 3fr repeat(3, 1fr);
grid-template-rows: 3fr repeat(2, 4fr) repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.c1 { grid-area: 1 / 1 / 2 / 2; }
.c2 { grid-area: 2 / 1 / 3 / 2; }
.c3 { grid-area: 2 / 2 / 3 / 3; }
.c4 { grid-area: 1 / 2 / 2 / 3; }
.c5 { grid-area: 3 / 2 / 4 / 3; }


</style>
