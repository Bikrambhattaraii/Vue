<template>
    <div>
      <ArtistList :artists="artists" />
    </div>
  </template>
  
  <script>
  import ArtistList from './parentComponen.vue'; // Import the child component
  
  export default {
    name: "test",
    components: {
      ArtistList // Add the imported child component to the components option
    },
    data() {
      return {
        artists: [
          { name: "Davido", genre: "afrobeats", country: "Nigeria" },
          { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
          { name: "AKA", genre: "hiphop", country: "South-Africa" },
          { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
          { name: "Stormzy", genre: "hiphop", country: "United Kingdom" },
          { name: "Lil Nas", genre: "Country", country: "United States" },
          { name: "Nasty C", genre: "hiphop", country: "South-Africa" },
          { name: "Shatta-walle", genre: "Reagae", country: "Ghana" },
          { name: "Khalid", genre: "pop", country: "United States" },
          { name: "ed-Sheeran", genre: "pop", country: "United Kingdom" },
        ],
      };
    },
  };
  </script>
  