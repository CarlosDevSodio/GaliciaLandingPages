<template>
  <div class="public-layout">
    <LanguageNavbar />
    <router-view />
  </div>
</template>

<script>
import LanguageNavbar from "../components/navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PublicLayout",
  components: {
    LanguageNavbar,
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.public-layout {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.my-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  border-radius: 20px;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
}
</style>
