<template>
    <nav class="navbar">
      <div class="menu-icon">
        <button class="menu-button" type="button" @click="openMobileMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
      </div>
      <div class="language-buttons">
        <button
          class="language-button"
          @click="$store.commit('setLanguage', 'en')"
        >
          En
        </button>
        <button
          class="language-button"
          @click="$store.commit('setLanguage', 'es')"
        >
          Es
        </button>
      </div>
      <Menu ref="mobileMenu" />
    </nav>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import Menu from "./Menu.vue";
  
  export default {
    name: "LanguageNavbar",
    components: {
      Menu
    },
    setup() {
      const mobileMenu = ref(null);
  
      const openMobileMenu = () => {
          if (mobileMenu.value) {
              mobileMenu.value.openMenu();
          }
      };
  
      onMounted(() => {
        // Ensure the menu is properly initialized
        if (mobileMenu.value) {
          mobileMenu.value.closeMenu();
        }
      });
  
      return {
        mobileMenu,
        openMobileMenu
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #000;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1001;
  }
  
  .menu-icon {
    cursor: pointer;
    display: block;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    padding: 0;
  }
  
  .bar {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
    transition: all 0.3s ease;
  }
  
  .menu-button:hover .bar {
    background-color: #ffc629;
  }
  
  .language-buttons {
    display: flex;
    gap: 10px;
    margin-right: 10px;
  }
  
  .language-button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .language-button:hover {
    background-color: #ffc629;
    color: #000;
    border-color: #ffc629;
  }
  
  /* En pantallas más grandes, muestra los botones horizontalmente y desactiva el menú desplegable */
  @media (min-width: 768px) {

  
    .language-buttons {
      display: flex;
      position: static; /* Elimina el posicionamiento absoluto */
      flex-direction: row; /* Muestra los botones horizontalmente */
      background-color: transparent; /* Elimina el fondo oscuro */
      padding: 0; /* Elimina el relleno */
      box-shadow: none; /* Elimina la sombra */
    }
    .language-buttons:not(.menu-open) {
      display: flex; /* Muestra los botones normalmente */
    }
  }
  </style>