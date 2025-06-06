<template>
  <!-- Sección de Video y Logo -->
  <div class="template1">
    <div class="video-container">
      <video autoplay loop muted playsinline class="background-video">
        <source
          src="../../../assets/galicia/2306686_Projector_Movies_3840x2160.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <div class="overlay-content">
      <img
        src="../../../assets/galicia/galicia-logo-wh.svg"
        alt="Logotipo de Galicia Abogados"
        class="logo"
      />
      <p>Festival de Cine de Guadalajara.</p>
    </div>
  </div>

  <!-- Sección 1: Descripción General -->
  <div class="section-container">
    <transition name="fade">
      <p
        v-if="showParagraph1"
        class="text-white mb-5 lh-sm fw-normal section-text"
      >
        En nuestro despacho, la colaboración y la excelencia no son solo
        valores, son la base de todo lo que hacemos. Integrando equipos de
        expertos listos para resolver apoyar a nuestros clientes en sus
        operaciones del día a día hasta los retos legales más complejos.
      </p>
    </transition>
  </div>

  <!-- Sección 2: Nuestra Propuesta -->
  <div class="section-container">
    <transition name="fade">
      <p
        v-if="showParagraph2"
        class="text-white mb-5 lh-sm fw-lighter styled-paragraph section-text"
      >
        ¡En Galicia queremos que te enfoques en crear arte, y que nos permitas
        asesorarte en todo lo legal! Somos una firma líder que integra servicios
        legales de excelencia en materia
        <span class="yellow-text"
          >fiscal, propiedad intelectual y privacidad de datos</span
        >, respaldados por una sólida experiencia en
        <span class="yellow-text"
          >tecnología, medios, entretenimiento e inteligencia artificial</span
        >. Atendemos a clientes del sector de entretenimiento, brindándoles
        asesoría estratégica y soluciones innovadoras que protegen sus
        intereses, impulsan su crecimiento y les permiten aprovechar al máximo
        las oportunidades que ofrece la era digital con una reconocida
        experiencia y el equipo para:
      </p>
    </transition>
  </div>

  <!-- Sección 3: Lista de Servicios -->
  <div class="section-container">
    <transition name="fade">
      <div v-if="showList" class="white-box mb-5">
        <ul class="list-unstyled">
          <li class="row alternate">
            <div class="col-6 text-right">
              <b class="yellow-text">Blindar tus proyectos:</b>
            </div>
            <div class="col-6 text-left">
              Contratos claros de producción, distribución y talento.
            </div>
          </li>
          <li class="row">
            <div class="col-6 text-left">
              Contratos claros de producción, distribución y talento.
            </div>
            <div class="col-6 text-right">
              <b class="yellow-text">Blindar tus proyectos:</b>
            </div>
          </li>
          <li class="row alternate">
            <div class="col-6 text-right">
              <b class="yellow-text">Proteger tus creaciones:</b>
            </div>
            <div class="col-6 text-left">
              Propiedad intelectual, imagen y reputación seguras.
            </div>
          </li>
          <li class="row">
            <div class="col-6 text-left">
              Propiedad intelectual, imagen y reputación seguras.
            </div>
            <div class="col-6 text-right">
              <b class="yellow-text">Proteger tus creaciones:</b>
            </div>
          </li>
          <li class="row alternate">
            <div class="col-6 text-right">
              <b class="yellow-text">Maximizar ganancias:</b>
            </div>
            <div class="col-6 text-left">
              Estrategias fiscales inteligentes para la industria.
            </div>
          </li>
          <li class="row">
            <div class="col-6 text-left">
              Estrategias fiscales inteligentes para la industria.
            </div>
            <div class="col-6 text-right">
              <b class="yellow-text">Maximizar ganancias:</b>
            </div>
          </li>
          <li class="row alternate">
            <div class="col-6 text-right">
              <b class="yellow-text">Asesoría Fiscal:</b>
            </div>
            <div class="col-6 text-left">
              Que el desconocimiento de los impuestos, no haga inviables tus
              proyectos y los encarezca.
            </div>
          </li>
          <li class="row">
            <div class="col-6 text-left">
              Que el desconocimiento de los impuestos, no haga inviables tus
              proyectos y los encarezca.
            </div>
            <div class="col-6 text-right">
              <b class="yellow-text">Asesoría Fiscal:</b>
            </div>
          </li>
          <li class="row alternate">
            <div class="col-6 text-right">
              <b class="yellow-text">Innovación con IA:</b>
            </div>
            <div class="col-6 text-left">
              Uso legal y protección de tu contenido.
            </div>
          </li>
          <li class="row">
            <div class="col-6 text-left">
              Uso legal y protección de tu contenido.
            </div>
            <div class="col-6 text-right">
              <b class="yellow-text">Innovación con IA:</b>
            </div>
          </li>
          <li class="row alternate">
            <div class="col-6 text-right">
              <b class="yellow-text"
                >Evitar y resolver conflictos de forma fácil:</b
              >
            </div>
            <div class="col-6 text-left">
              Apoyo experto en desafíos de producción o distribución.
            </div>
          </li>
          <li class="row">
            <div class="col-6 text-left">
              Apoyo experto en desafíos de producción o distribución.
            </div>
            <div class="col-6 text-right">
              <b class="yellow-text"
                >Evitar y resolver conflictos de forma fácil:</b
              >
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const showParagraph1 = ref(false);
    const showParagraph2 = ref(false);
    const showList = ref(false);

    onMounted(() => {
      // Initial display
      setTimeout(() => {
        showParagraph1.value = true;
      }, 500);

      setTimeout(() => {
        showParagraph2.value = true;
      }, 1500);

      setTimeout(() => {
        showList.value = true;
      }, 2500);
    });

    return {
      showParagraph1,
      showParagraph2,
      showList,
    };
  },
};
</script>

<style scoped>
/* Transition Styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Main Container Styles */
.template1 {
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Video Styles */
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay Content Styles (Logo and Text) */
.overlay-content {
  position: relative;
  z-index: 1;
  color: white;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  padding: 20px;
}

.logo {
  width: 150px;
  height: auto;
  margin: 0 auto;
}

/* Section Styles */
.section-container {
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  background-color: #161616;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-text {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Style for second paragraph */
.styled-paragraph {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  letter-spacing: 0.02em;
}

/* Style for the yellow text */
.yellow-text {
  color: yellow;
  font-weight: bold;
}

/* Styles for the white box */
.white-box {
  background-color: #161616;
  color: #a1a1a1;
  padding: 20px;
  border-radius: 5px;
  text-align: left;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

/* Style for the titles in the white box */
.yellow-text {
  color: yellow;
  font-weight: bold;
  display: block;
  margin-bottom: 0.2rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .section-container {
    padding: 10%;
  }
  
  .section-text {
    padding: 0 20px;
  }
  
  .white-box {
    padding: 15px;
  }
}

/* List styles */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.alternate {
  flex-direction: row-reverse;
}

/* Remove default Bootstrap padding from columns */
.col-6 {
  padding: 0;
}
</style>
