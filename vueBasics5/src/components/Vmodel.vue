<template>
    <div>
      <label for="dropdown">Select an option:</label>
      <select v-model="selectedOption" id="dropdown">
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
      <p>You selected: {{ selectedOption }}</p>
      
      <h1>{{ message }}</h1>
  <p>{{ data }}</p>
      <input v-model="message" placeholder="Enter your text here">
      <input type="text" v-model="data">
    </div>
    
  </template>
  
  <script>

  export default {
    data() {
      return {
        selectedOption: 'Masu', 
        options: [
          { label: 'Masu', value: 'Masu' },
          { label: 'Chirua', value: 'Chirua' },
          { label: 'Dahi', value: 'Dahi' }
        ],
        message: '' ,
    
        data:""
      };
    }
  };
  </script>
  <style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    gap: 10px; 
  }
  
  label {
    font-weight: bold; 
  }
  
  select, input {
    width: 100%; 
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc; 
    border-radius: 4px;
    box-sizing: border-box; 
  }
  
  input::placeholder {
    color: #aaa; 
  }
  
  p, h1 {
    margin-top: 20px; 
  }
  
  h1 {
    color: #333; 
    margin-bottom: 0; 
  }
  
  p {
    color: #666; 
  }
  </style>
  
  