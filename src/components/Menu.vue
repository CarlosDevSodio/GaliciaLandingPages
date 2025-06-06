<template>
  <div class="menu-overlay" :class="{ 'menu-open': isMenuOpen }">
    <div class="menu-content" :class="{ 'slide-out': !isMenuOpen }">
      <div class="menu-header">
        <img src="../assets/galicia/g.png" alt="Logo de Galicia Abogados" class="menu-logo" style="width:90px;margin-bottom: 10px; margin-top:0px">
        <button class="close-button" @click="closeMenu">×</button>
      </div>

      <ul class="menu-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">The Firm</a></li>
        <li><a href="#">Awards & Recognitions</a></li>
        <li><a href="#">Practice Areas</a></li>
        <li><a href="#">Sectors</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Join Us</a></li>
        <li><a href="#">Business Opportunities</a></li>
        <li class="has-submenu">
          <a href="#">Publications <span class="dropdown-arrow">▼</span></a>
        </li>
        <li><a href="#">VI Pre Moot</a></li>
        <li><a href="#">Diversity</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div class="social-icons">
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineExpose, onMounted } from "vue";

export default {
  name: "MobileMenu",
  setup() {
    const isMenuOpen = ref(false);

    const openMenu = () => {
      isMenuOpen.value = true;
      document.body.classList.add("menu-is-open");
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
      document.body.classList.remove("menu-is-open");
    };

    // Close menu when clicking outside
    onMounted(() => {
      const handleClickOutside = (e) => {
        if (
          isMenuOpen.value &&
          !e.target.closest(".menu-content") &&
          !e.target.closest(".menu-icon")
        ) {
          closeMenu();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });

    defineExpose({
      openMenu,
      closeMenu,
    });

    return {
      isMenuOpen,
      openMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: none;
}

.menu-overlay.menu-open {
  display: block;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.menu-content {
  width: 460px;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  background-color: #ffc629;
  padding: 2.7em;
  z-index: 11;
  animation: slideIn 0.5s ease-out forwards;
  
  @media (max-width: 768px) {
    width: 80%;
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.menu-content.slide-out {
  animation: slideOut 0.5s ease-in forwards;
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
  
}



.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.menu-title {
  font-size: 1.5rem;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: #000;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
}

.menu-items {
  list-style: none;
  padding: 0;
  width: 100%;
}

.menu-items li {
  margin-bottom: 15px;
}

.menu-items a {
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  line-height: 0.1rem;
  display: block;
  padding: 8px 0;
  font-family: 'Gelasio', serif;
}

.menu-items a:hover {
  font-size: 1.6rem;
}

.social-icons {
  margin-top: auto;
  display: flex;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon {
  color: #000;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #ffd700;
}

.dropdown-arrow {
  font-size: 0.8em;
  margin-left: 5px;
}

/*Ocultar o mostrar el componente según el tamaño de la pantalla */
@media (min-width: 768px) {
  .menu-overlay {
    display: none;
  }
}
</style>
