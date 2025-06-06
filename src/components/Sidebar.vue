<template>
  <div class="layout-container" v-if="showSidebar">
    <!-- Overlay si el sidebar está abierto -->
    <div
      v-if="visible"
      class="sidebar-overlay"
      @click="$emit('update:visible', false)"
    ></div>

    <!-- Sidebar -->
    <div :class="['custom-sidebar', { open: visible }]">
      <div class="w-100">
        <ul>
          <li
            class="item"
            v-for="(item, index) in menuItems"
            :key="index"
            @click="navigate(item.route)"
            :class="{ active: isActive(item.route) }"
          >
            <span class="sidebar-icon"><i :class="item.icon"></i></span>
            <span class="sidebar-text">{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Contenido principal -->
    <main class="content-area">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "PublicSidebar",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showSidebar: true,
      menuItems: [
        {
          label: "Inicio",
          icon: "fa-solid fa-house",
          route: "start",
        },
        {
          label: "Secciones",
          icon: "fa-solid fa-list",
          route: "list-sections",
        },
        {
          label: "Correos",
          icon: "fa-solid fa-inbox",
          route: "list-messages",
        },
        {
          label: "Documentos",
          icon: "fa-solid fa-file",
          route: "list-files",
        },
        {
          label: "Usuarios",
          icon: "fa-solid fa-user-plus",
          route: "user-list",
        },
      ],
    };
  },
  methods: {
    isActive(route) {
      return this.$route.name === route;
    },
    navigate(route) {
      if (route !== this.$route.name) {
        this.$router
          .push({ name: route })
          .then(() => {
            this.$emit("update:visible", false);
          })
          .catch((err) => {
            if (err.name !== "NavigationDuplicated") {
              console.error("Navigation error:", err);
            }
          });
      } else {
        this.$emit("update:visible", false);
      }
    },
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.custom-sidebar {
  position: fixed;
  height: 100vh;
  width: 70%;
  top: 0;
  left: 0;
  background: #ffffff8a;
  color: #333333;
  padding: 20px 0;
  box-shadow: 8px 0 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-100%);
  z-index: 100;
  border-right: 1px solid #e0e0e0;
}

.custom-sidebar.open {
  transform: translateX(0);
}

.content-area {
  flex: 1;
  background: #ffffff;
  transition: margin-left 0.3s ease;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 99;
  transition: opacity 0.3s ease;
}

.sidebar-header {
  margin: 20px 0 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sidebar-header:hover .avatar {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(255, 149, 0, 0.4);
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff9500, #ff2d00);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 10px rgba(255, 149, 0, 0.3);
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow: hidden;
}

.user-sidebar {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #333333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.role {
  margin: 5px 0 0;
  font-size: 14px;
  color: #ff9500;
  font-weight: 500;
}

.sidebar-icon {
  font-size: 18px;
  min-width: 24px;
  color: #666666;
  transition: all 0.3s ease;
}

.sidebar-text {
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
  color: #333333;
  transition: all 0.3s ease;
  white-space: nowrap;
}

ul {
  padding: 0;
  list-style-type: none;
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 5px 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.item:hover {
  background-color: #f8f8f8;
}

.item:hover .sidebar-icon {
  color: #ff9500;
}

.item:hover .sidebar-text {
  color: #ff2d00;
}

.item.active {
  background-color: #fff5f0;
}

.item.active .sidebar-icon {
  color: #ff2d00;
}

.item.active .sidebar-text {
  color: #ff2d00;
  font-weight: 600;
}
</style>
