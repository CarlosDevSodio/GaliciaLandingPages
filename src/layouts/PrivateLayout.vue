<template>
    <div>
      <h1>Hello World</h1>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: "privateLayout",
    components: {
    },
    data() {
      return {
        isSidebarVisible: false, // Control del sidebar
      };
    },
    methods: {
      handleToggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; 
    },
    }
  });
  
  </script>
  
  <style scoped>
  .content{
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    width: 100%;
    overflow: auto;
    height: 92vh;
    margin-top: 16px;
  }
  </style>