<template>
  <div class="wedding-invitation">
    <!-- Controles de idioma -->
    <div class="language-controls">
      <button @click="setLanguage('es')" :class="{ active: language === 'es' }">
        {{ translations.es.spanish }}
      </button>
      <button @click="setLanguage('en')" :class="{ active: language === 'en' }">
        {{ translations.en.english }}
      </button>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-images">
        <img
          src="../../assets/invitations/example1/img1.jpg"
          alt="Isa & Carlos"
          class="hero-image"
        />
        <img
          src="../../assets/invitations/example1/img2.jpg"
          alt="Isa & Carlos"
          class="hero-image"
        />
        <img
          src="../../assets/invitations/example1/img3.jpg"
          alt="Isa & Carlos"
          class="hero-image"
        />
      </div>
      <div class="hero-content">
        <h1 class="couple-names">Isa & Carlos</h1>
        <p class="date">{{ translations[language].eventDate }}</p>
      </div>
    </section>

    <!-- Event Details Section -->
    <section class="event-details">
      <div class="container">
        <div class="itinerary">
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
        </div>

        <div class="location">
          <h2>{{ translations[language].location }}</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8983.6680439748!2d-99.23539262198015!3d18.79070386187982!2m3!1f0!2f3!f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd84bc194cb0b%3A0xd8ffada227b440af!2sFiesta%20Americana%20Hacienda%20San%20Antonio%20El%20Puente%20Cuernavaca!5e0!3m2!1ses!2smx"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Main Content (Flexbox) -->
    <main class="main-content">
      <!-- RSVP Form -->
      <section class="rsvp-form">
        <div class="container">
          <h2>{{ translations[language].rsvp }}</h2>
          <div class="form-group">
            <label for="name">{{ translations[language].name }}:</label>
            <input type="text" id="name" />
          </div>
          <div class="form-group">
            <label for="email">{{ translations[language].email }}:</label>
            <input type="email" id="email" />
          </div>
          <button>{{ translations[language].confirm }}</button>
        </div>
      </section>

      <!-- Additional Info (Flexbox) -->
      <section class="additional-info">
        <div class="container">
          <div class="info-item dress-code">
            <h2>{{ translations[language].dressCode }}</h2>
            <p>{{ translations[language].formalAttire }}</p>
          </div>

          <div class="info-item countdown">
            <h2>{{ translations[language].countdown }}</h2>
            <div class="countdown-numbers">
              <div class="countdown-item-inline">
                <span class="countdown-value">{{ days }}</span>
                <span class="countdown-label">{{
                  translations[language].days
                }}</span>
              </div>
              <div class="countdown-item-inline">
                <span class="countdown-value">{{ hours }}</span>
                <span class="countdown-label">{{
                  translations[language].hours
                }}</span>
              </div>
              <div class="countdown-item-inline">
                <span class="countdown-value">{{ minutes }}</span>
                <span class="countdown-label">{{
                  translations[language].minutes
                }}</span>
              </div>
              <div class="countdown-item-inline">
                <span class="countdown-value">{{ seconds }}</span>
                <span class="countdown-label">{{
                  translations[language].seconds
                }}</span>
              </div>
            </div>
          </div>

          <div class="info-item gift-registry">
            <h2>{{ translations[language].giftRegistry }}</h2>
            <p>{{ translations[language].accommodationRecommendations }}</p>
            <a href="#">{{ translations[language].viewList }}</a>
          </div>

          <div class="info-item accommodation">
            <h2>{{ translations[language].accommodation }}</h2>
            <p>{{ translations[language].accommodationRecommendations }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">© 2025 Julia & Andrés</footer>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "WeddingInvitation",
  data() {
    return {
      language: "es",
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
          rsvp: "CONFIRMAR ASISTENCIA",
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
          coupleNames: "Isa & Carlos",
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
          coupleNames: "Isa & Carlos",
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
/* Estilos generales */
.wedding-invitation {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  color: #776043; /* Marrón */
  background-color: #f5ebdc; /* Crema */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

/* Controles de idioma */
.language-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
  z-index: 10;
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
  color: #fff;
}

/* Encabezado */
.invitation-header {
  text-align: center;
  margin-bottom: 20px;
}

.marco-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.couple-names {
  font-size: 4em;
  color: #776043;
  margin: 10px 0;
}

.date {
  font-size: 1.1em;
  font-weight: bold;
  color: #a07d3c;
}

.marco {
  width: 120px;
  height: auto;
}

.marcoInvertido {
  width: 120px;
  height: auto;
  transform: rotateX(180deg);
}

/* Hero Section */
.hero {
  width: 100%;
  text-align: center;
  padding: 50px 20px;
}

.hero-content {
  margin-bottom: 30px;
}

.hero-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #d6b46b;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.1);
}

/* Event Details Section */
.event-details {
  width: 100%;
  padding: 30px 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.itinerary {
  margin-bottom: 30px;
}

.itinerary h2,
.location h2,
.rsvp-form h2,
.additional-info h2 {
  font-size: 1.6em;
  color: #776043;
  margin-bottom: 15px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}

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

/* Ubicación */
.location iframe {
  width: 100%;
  height: 300px;
  border: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Main Content */
.main-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  max-width: 70%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
}

/* RSVP */
.rsvp-form {
  width: 100%;
  max-width: 400px;
  padding: 30px 20px;
  background-color: #f8f5f0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.rsvp-form .container {
  max-width: none;
}

.rsvp-form h2 {
  font-size: 1.4em;
  color: #776043;
  margin-bottom: 15px;
  font-family: "Raleway", sans-serif;
  text-align: center;
}

.rsvp-form .form-group {
  margin-bottom: 15px;
}

.rsvp-form label {
  display: block;
  margin-bottom: 5px;
  color: #776043;
  font-weight: bold;
  text-align: left;
}

.rsvp-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d6b46b;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
}

.rsvp-form button {
  background-color: #a07d3c;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.rsvp-form button:hover {
  background-color: darken(#a07d3c, 10%);
}

/* Información Adicional */
.additional-info {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}

.additional-info .container {
  max-width: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.info-item {
  width: 48%;
  min-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
}

.info-item h2 {
  font-size: 1.4em;
  color: #776043;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
}

.info-item p {
  color: #776043;
}

.gift-registry a,
.accommodation a {
  display: inline-block;
  background-color: #a07d3c;
  color: #fff;
  padding: 8px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.gift-registry a:hover,
.accommodation a:hover {
  background-color: darken(#a07d3c, 10%);
}

/* Cuenta Regresiva (Inline) */
.countdown-numbers {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 50%;
}

.countdown-item-inline {
  text-align: center;
}

.countdown-value {
  font-size: 2em;
  font-family: "Playfair Display", serif;
  color: #a07d3c;
  font-weight: bold;
  line-height: 1;
  display: block;
}

.countdown-label {
  font-size: 0.7em;
  color: #776043;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
}

/* Media Queries */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .rsvp-form,
  .additional-info {
    width: 100%;
  }

  .additional-info .container {
    flex-direction: column;
  }

  .info-item {
    width: 100%;
    min-width: auto;
  }
}
</style>
