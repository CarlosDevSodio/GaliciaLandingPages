<template>
  <div class="invitation-container">
    <!-- Controles de idioma -->
    <div class="language-controls">
      <button @click="setLanguage('es')" :class="{ active: language === 'es' }">
        {{ translations.es.spanish }}
      </button>
      <button @click="setLanguage('en')" :class="{ active: language === 'en' }">
        {{ translations.en.english }}
      </button>
    </div>

    <!-- Encabezado -->
    <header class="invitation-header">
      <div class="decorative-top"></div>
      <div class="marco-container">
        <img
          src="../../assets/invitations/example1/marco.png"
          alt="Foto de la pareja"
          class="marco animated fadeIn"
        />
        <span class="couple-names animated fadeIn">Julia & Andrés</span>
        <p class="date animated fadeIn">
          {{ translations[language].eventDate }}
        </p>
        <img
          src="../../assets/invitations/example1/marco.png"
          alt="Foto de la pareja"
          class="marcoInvertido animated fadeIn"
        />
      </div>
      <div class="decorative-bottom"></div>
    </header>

    <!-- Contenedor de las dos columnas -->
    <div class="columns-container">
      <!-- Columna izquierda -->
      <div class="column">
        <!-- Itinerario -->
        <div class="divider"></div>
        <section class="itinerary animated fadeInUp">
          <h2>{{ translations[language].itinerary }}</h2>
          <table>
            <tbody>
              <tr v-for="(item, index) in itinerary" :key="index">
                <td class="time">{{ item.time }}</td>
                <td class="event">
                  {{ translations[language][item.eventKey] }}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div class="divider"></div>

        <!-- Confirmar Asistencia -->
        <section class="rsvp animated fadeInUp">
          <h2>{{ translations[language].rsvp }}</h2>
          <div class="input-group">
            <label for="nombre">{{ translations[language].name }}:</label>
            <input
              type="text"
              id="nombre"
              :placeholder="translations[language].name"
            />
          </div>
          <div class="input-group">
            <label for="email">{{ translations[language].email }}:</label>
            <input
              type="email"
              id="email"
              :placeholder="translations[language].email"
            />
          </div>
          <button>{{ translations[language].confirm }}</button>
        </section>
        <div class="divider"></div>

        <!-- Galería de Fotos -->
        <section class="gallery animated fadeInUp">
          <h2>{{ translations[language].gallery }}</h2>
          <p>{{ translations[language].galleryDescription }}</p>
          <a href="#">{{ translations[language].viewList }}</a>
        </section>
        <div class="divider"></div>

        <!-- Código de Vestimenta -->
        <section class="dress-code animated fadeInUp">
          <h2>{{ translations[language].dressCode }}</h2>
          <p>{{ translations[language].formalAttire }}</p>
        </section>
      </div>

      <!-- Columna derecha -->
      <div class="column">
        <!-- Fotos -->
        <section class="photos animated fadeInUp">
          <img
            src="../../assets/invitations/example1/img1.jpg"
            alt="Foto de la pareja"
            class="photo"
          />
          <img
            src="../../assets/invitations/example1/img2.jpg"
            alt="Foto de la pareja"
            class="photo"
          />
          <img
            src="../../assets/invitations/example1/img3.jpg"
            alt="Foto de la pareja"
            class="photo"
          />
        </section>
        <div class="divider"></div>

        <!-- Ubicación -->
        <section class="location animated fadeInUp">
          <h2>{{ translations[language].location }}</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8983.6680439748!2d-99.23539262198015!3d18.79070386187982!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd84bc194cb0b%3A0xd8ffada227b440af!2sFiesta%20Americana%20Hacienda%20San%20Antonio%20El%20Puente%20Cuernavaca!5e0!3m2!1ses!2smx"
            width="100%"
            height="300"
            style="border: 1px solid #776043"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <!-- Cuenta Regresiva -->
        <section class="countdown animated fadeInUp">
          <h2>{{ translations[language].countdown }}</h2>
          <div class="countdown-numbers">
            <div class="countdown-item">
              <span class="countdown-value">{{ days }}</span>
              <span class="countdown-label">{{
                translations[language].days
              }}</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">{{ hours }}</span>
              <span class="countdown-label">{{
                translations[language].hours
              }}</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">{{ minutes }}</span>
              <span class="countdown-label">{{
                translations[language].minutes
              }}</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">{{ seconds }}</span>
              <span class="countdown-label">{{
                translations[language].seconds
              }}</span>
            </div>
          </div>
        </section>
        <div class="divider"></div>

        <!-- Mesa de Regalos -->
        <section class="gifts animated fadeInUp">
          <h2>{{ translations[language].giftRegistry }}</h2>
          <p>{{ translations[language].accommodationRecommendations }}</p>
          <a href="#">{{ translations[language].viewList }}</a>
        </section>
      </div>
    </div>
    <div class="divider"></div>

    <!-- Hospedaje -->
    <section
      class="accommodation animated fadeInUp"
      style="display: flex; align-items: center; flex-direction: column"
    >
      <h2>{{ translations[language].accommodation }}</h2>
      <p>{{ translations[language].accommodationRecommendations }}</p>
    </section>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "WeddingInvitation",
  data() {
    return {
      language: "es", // Idioma por defecto: español
      translations: {
        es: {
          selectLanguage: "Selecciona un idioma",
          eventDate: "25 de diciembre de 2025",
          spanish: "Español",
          english: "Inglés",
          itinerary: "ITINERARIO",
          ceremony: "Ceremonia",
          reception: "Recepción",
          dinner: "Cena",
          rsvp: "FORMA DE CONFIRMAR ASISTENCIA",
          name: "Nombre",
          email: "Correo electrónico",
          confirm: "CONFIRMAR",
          gallery: "GALERÍA DE FOTOS",
          galleryDescription:
            "Obeetga on linea en inta forma. d'ecorree o reparatrosee.",
          viewList: "VER LISTA",
          dressCode: "CÓDIGO DE VESTIMENTA",
          formalAttire: "Etiqueta formal",
          location: "UBICACIÓN",
          countdown: "CUENTA REGRESIVA",
          days: "DÍAS",
          hours: "HORAS",
          minutes: "MINUTOS",
          seconds: "SEGUNDOS",
          giftRegistry: "MESA DE REGALOS",
          accommodationRecommendations:
            "Recomendaciones de hospedaje para nuestros invitados foráneos.",
          accommodation: "HOSPEDAJE",
        },
        en: {
          selectLanguage: "Select a language",
          eventDate: "December 25, 2025",
          spanish: "Spanish",
          english: "English",
          itinerary: "ITINERARY",
          ceremony: "Ceremony",
          reception: "Reception",
          dinner: "Dinner",
          rsvp: "Confirm Attendance",
          name: "Name",
          email: "Email",
          confirm: "CONFIRM",
          gallery: "PHOTO GALLERY",
          galleryDescription:
            "Obeetga on linea en inta forma. d'ecorree o reparatrosee.",
          viewList: "VIEW LIST",
          dressCode: "DRESS CODE",
          formalAttire: "Formal attire",
          location: "LOCATION",
          countdown: "COUNTDOWN",
          days: "DAYS",
          hours: "HOURS",
          minutes: "MINUTES",
          seconds: "SECONDS",
          giftRegistry: "GIFT REGISTRY",
          accommodationRecommendations:
            "Accommodation recommendations for our out-of-town guests.",
          accommodation: "ACCOMMODATION",
        },
      },
      itinerary: [
        { time: "1:00 PM", eventKey: "ceremony" },
        { time: "3:00 PM", eventKey: "reception" },
        { time: "6:00 PM", eventKey: "dinner" },
      ],
      endTime: new Date("2025-12-25T00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null,
    };
  },
  mounted() {
    this.updateCountdown();
    this.interval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    setLanguage(lang) {
      this.language = lang;
    },
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.endTime - now;

      if (distance < 0) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },
  },
};
</script>

<style scoped>
.invitation-container {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  color: #a07d3c;
  background-color: #f5ebdc;
  padding: 20px;
  border: thick double #d6b46b;
  max-width: 768px;
  margin: 10px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* Para posicionamiento absoluto de controles de idioma */
}

/* Estilos para los controles de idioma */
.language-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
}

.language-controls button {
  padding: 5px 10px;
  border: none;
  background-color: #776043;
  color: #f5ebdc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.8em;
}

.language-controls button:hover,
.language-controls button.active {
  background-color: #a07d3c;
}

@media (max-width: 768px) {
  .invitation-container {
    max-width: 95%;
    padding: 10px;
  }

  .language-controls {
    top: 5px;
    right: 5px;
  }
}

/* Encabezado */
.invitation-header {
  text-align: center;
  margin-bottom: 20px;
}

/* Estilos para el contenedor del marco */
.marco-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

/* Estilos para el texto */
.couple-names {
  font-size: 4em;
  color: #776043;
  margin: 10px 0;
}

.date {
  font-size: 1.1em;
  font-weight: bold;
}

.marco {
  width: 150px;
  height: auto;
}

.marcoInvertido {
  width: 150px;
  height: auto;
  transform: rotateX(180deg);
}

.divider {
  height: 1px;
  background-color: #776043;
  margin: 15px auto;
  width: 70%;
}

/* Adornos */
.decorative-top,
.decorative-bottom {
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 15px;
  margin-top: 10px;
  background-size: contain;
}

/* Estilos para las dos columnas */
.columns-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.column {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}

@media (min-width: 768px) {
  .columns-container {
    display: flex;
  }

  .columns-container > div:nth-child(1) {
    width: 35%;
  }

  .columns-container > div:nth-child(2) {
    width: 63%;
  }
}

/* Common styles for sections */
section {
  text-align: center;
  margin-bottom: 20px;
}

section h2 {
  font-size: 1.6em;
  margin-bottom: 10px;
  color: #776043;
}

/* Itinerario */
.itinerary table {
  width: 100%;
  border-collapse: collapse;
}

.itinerary th,
.itinerary td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.itinerary th {
  background-color: #f9f9f9;
}

.itinerary td.time {
  font-weight: bold;
  width: 30%;
}

.itinerary td.event {
  text-align: left;
}

/* Fotos */
.photos {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.photo {
  width: 28%;
  max-width: 150px;
  border: thick double #d6b46b;
  margin: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.photo:hover {
  transform: scale(1.1);
}

/* Confirmar Asistencia (RSVP) */
.rsvp {
  margin-bottom: 20px;
}

.rsvp .input-group {
  margin-bottom: 10px;
  text-align: left;
}

.rsvp label {
  display: block;
  margin-bottom: 5px;
  color: #776043;
}

.rsvp input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d6b46b;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
}

.rsvp button {
  background-color: #776043;
  color: #f5ebdc;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.rsvp button:hover {
  background-color: #a07d3c;
}

/* Ubicación */
.location {
  padding: 10px;
  margin-bottom: 20px;
}

/* Cuenta Regresiva */
.countdown {
  margin-bottom: 20px;
  border: 2px solid #d6b46b;
  border-radius: 8px;
  padding: 10px;
}

.countdown-numbers {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;
  margin-top: 10px;
  width: 100%;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 18%;
  flex: 1 1 0;
}

.countdown-value {
  font-size: 2.5em;
  font-family: "Playfair Display", serif;
  color: #a07d3c;
  font-weight: bold;
  line-height: 1;
  width: 100%;
  text-align: center;
}

.countdown-label {
  font-size: 50%;
  color: #776043;
  letter-spacing: 1px;
  margin-top: 4px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  width: 100%;
  text-align: center;
}

@media (max-width: 768px) {
  .countdown-numbers {
    gap: 12px;
  }
  .countdown-item {
    min-width: 40px;
  }
  .countdown-value {
    font-size: 1.3em;
  }
  .countdown-label {
    font-size: 0.8em;
  }
}

/* Other sections */
.gallery a,
.gifts a {
  color: #f5ebdc;
  background-color: #776043;
  padding: 8px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: inline-block;
  margin-top: 10px;
}

.gallery a:hover,
.gifts a:hover {
  background-color: #a07d3c;
}
</style>
