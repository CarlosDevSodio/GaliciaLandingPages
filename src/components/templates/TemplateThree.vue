<template>
  <div class="wedding-invitation">
    <!-- Corazones Animados -->
    <div class="heart-container">
      <div
        class="heart"
        v-for="index in numberOfHearts"
        :key="index"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1}s`,
          opacity: `${Math.random()}`,
          fontSize: `${Math.random() * 1 + 0.5}em`,
        }"
      >
        ❤️
      </div>
    </div>

    <!-- Controles de idioma arriba -->
    <div class="language-controls">
      <button @click="setLanguage('es')" :class="{ active: language === 'es' }">
        {{ translations.es.spanish }}
      </button>
      <button @click="setLanguage('en')" :class="{ active: language === 'en' }">
        {{ translations.en.english }}
      </button>
    </div>

    <div class="hero">
      <div class="hero-content">
        <h1 class="names">{{ translations[language].coupleNames }}</h1>
        <div class="date-location">
          <span class="date">{{ translations[language].eventDate }}</span>
        </div>
      </div>
    </div>

    <main class="main">
      <section class="about">
        <h2>{{ translations[language].aboutTheDay }}</h2>
        <p class="centered-text">
          {{ translations[language].aboutTheDayText }}
        </p>
      </section>

      <!-- Itinerario -->
      <section class="itinerary">
        <h2>{{ translations[language].itinerary }}</h2>
        <table>
          <tbody>
            <tr v-for="(item, index) in itinerary" :key="index">
              <td class="time">{{ item.time }}</td>
              <td class="event">{{ translations[language][item.eventKey] }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Galería de Imágenes -->
      <section class="gallery">
        <h2>{{ translations[language].gallery }}</h2>
        <div class="image-container">
          <img
            v-for="(img, index) in galleryImages"
            :key="index"
            :src="img"
            alt="Foto de la pareja"
            class="gallery-image"
          />
        </div>
      </section>

      <!-- Mapa -->
      <section class="location">
        <h2>{{ translations[language].location }}</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8983.6680439748!2d-99.23539262198015!3d18.79070386187982!2m3!1f0!2f3!0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd84bc194cb0b%3A0xd8ffada227b440af!2sFiesta%20Americana%20Hacienda%20San%20Antonio%20El%20Puente%20Cuernavaca!5e0!3m2!1ses!2smx"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section class="dress-code">
        <h2>{{ translations[language].dressCode }}</h2>
        <p class="centered-text">
          {{ translations[language].formalAttireDetails }}
        </p>
      </section>

      <!-- Cuenta Regresiva -->
      <section class="countdown">
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

      <!-- Mesa de Regalos -->
      <section class="gifts">
        <h2>{{ translations[language].giftRegistry }}</h2>
        <p class="centered-text">
          {{ translations[language].accommodationRecommendations }}
        </p>
        <a href="#" class="gift-link">{{ translations[language].viewList }}</a>
      </section>

      <section class="rsvp">
        <h2>{{ translations[language].rsvp }}</h2>
        <input
          type="text"
          :placeholder="translations[language].name"
          class="rsvp-input"
        />
        <input
          type="email"
          :placeholder="translations[language].email"
          class="rsvp-input"
        />
        <button class="rsvp-button">
          {{ translations[language].confirm }}
        </button>
      </section>

      <!-- Hospedaje -->
      <section class="accommodation">
        <h2>{{ translations[language].accommodation }}</h2>
        <p class="centered-text">
          {{ translations[language].accommodationRecommendations }}
        </p>
      </section>
    </main>

    <footer class="footer">© 2025 Pedro & Luisa</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "es",
      translations: {
        es: {
          coupleNames: "Pedro & Luisa",
          eventDate: "Sábado, 25 de Diciembre de 2025",
          location: "Ubicación",
          aboutTheDay: "Sobre Nuestro Día",
          aboutTheDayText:
            "Estamos emocionados de celebrar nuestro amor con ustedes. Únanse a nosotros para un día inolvidable.",
          dressCode: "Código de Vestimenta",
          formalAttireDetails: "Etiqueta Formal (Traje y Vestido Largo)",
          rsvp: "Confirmar Asistencia",
          name: "Nombre Completo",
          email: "Correo Electrónico",
          confirm: "Confirmar",
          spanish: "Español",
          english: "English",
          gallery: "Nuestra Galería",
          countdown: "Cuenta Regresiva",
          days: "Días",
          hours: "Horas",
          minutes: "Minutos",
          seconds: "Segundos",
          giftRegistry: "Mesa de Regalos",
          accommodationRecommendations:
            "Recomendaciones de hospedaje para nuestros invitados.",
          accommodation: "Hospedaje",
          viewList: "Ver Lista",
          itinerary: "Itinerario",
          ceremonyEvent: "Ceremonia",
          receptionEvent: "Recepción",
          dinnerEvent: "Cena",
        },
        en: {
          coupleNames: "Pedro & Luisa",
          eventDate: "Saturday, December 25, 2025",
          location: "Location",
          aboutTheDay: "About Our Day",
          aboutTheDayText:
            "We are thrilled to celebrate our love with you. Join us for an unforgettable day.",
          dressCode: "Dress Code",
          formalAttireDetails: "Formal Attire (Suit and Long Dress)",
          rsvp: "RSVP",
          name: "Full Name",
          email: "Email Address",
          confirm: "Confirm",
          spanish: "Spanish",
          english: "English",
          gallery: "Our Gallery",
          countdown: "Countdown",
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
          giftRegistry: "Gift Registry",
          accommodationRecommendations:
            "Accommodation recommendations for our guests.",
          accommodation: "Accommodation",
          viewList: "View List",
          itinerary: "Itinerary",
          ceremonyEvent: "Ceremony",
          receptionEvent: "Reception",
          dinnerEvent: "Dinner",
        },
      },
      numberOfHearts: 10,
      galleryImages: [
        require("../../assets/invitations/example1/img1.jpg"),
        require("../../assets/invitations/example1/img2.jpg"),
        require("../../assets/invitations/example1/img3.jpg"),
      ],
      endTime: new Date("2025-12-25T00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null,
      itinerary: [
        { time: "2:00 PM", eventKey: "ceremonyEvent" },
        { time: "6:00 PM", eventKey: "receptionEvent" },
        { time: "8:00 PM", eventKey: "dinnerEvent" },
      ],
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


/* General Styles */
.wedding-invitation {
  font-family: "Playfair Display", serif;
  color: #333;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f2f2; /* Background color */
}

/* Corazones Animados */
.heart-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.heart {
  position: absolute;
  color: #d21e1e; /* Burgundy for the hearts */
  animation: floatUp 5s linear infinite;
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(-10vh);
  }
}

/* Language Controls */
.language-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
  z-index: 2;
}

.language-controls button {
  padding: 5px 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  color: #333333;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.8em;
}

.language-controls button:hover,
.language-controls button.active {
  background-color: #d21e1e;
  color: #fff;
}

/* Hero Section */
.hero {
  width: 100%;
  padding: 4em 0; /* Aumenta el espacio */
  background-color: #f9f2f2; /* Burgundy */
  text-align: center;
  color: #555;
}

.hero .names {
  font-size: 4em;
  margin-bottom: 0.2em;
  font-weight: 700;
}

.hero .date-location {
  font-size: 1.1em;
  font-weight: 500;
}

.hero .separator {
  margin: 0 0.5em;
}

/* Main Content */
.main {
  width: 85%;
  max-width: 800px;
  margin: 2em auto;
  padding: 2em;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}

.main section {
  margin-bottom: 2.5em;
  text-align: center; /* Centrar todos los textos por defecto */
}

.main h2 {
  font-size: 1.8em;
  margin-bottom: 1.2em;
  color: #d21e1e; /* Burgundy for headings */
  font-family: "Raleway", sans-serif;
  font-weight: 600;
}

.main p {
  line-height: 1.7;
  color: #666;
}

/* Clase para Centrar Textos */
.centered-text {
  text-align: center;
}

/* Itinerario */
.itinerary table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.itinerary th,
.itinerary td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.itinerary th {
  background-color: rgba(0, 0, 0, 0.03);
  font-weight: bold;
}

.itinerary td.time {
  font-weight: bold;
  width: 35%;
}

/* Galería de Imágenes */
.gallery {
  text-align: center;
}

.image-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.gallery-image {
  width: 200px; /* Ajusta el tamaño según sea necesario */
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Mapa */
.location iframe {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Cuenta Regresiva */
.countdown {
  text-align: center;
}

.countdown-numbers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.countdown-item {
  text-align: center;
}

.countdown-value {
  font-size: 2.2em;
  font-family: "Playfair Display", serif;
  color: #d21e1e;
  font-weight: bold;
  line-height: 1;
  display: block;
}

.countdown-label {
  font-size: 50%;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Raleway", sans-serif;
}

/* Mesa de Regalos */
.gifts {
  text-align: center;
}

.gift-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #d21e1e;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.gift-link:hover {
  background-color: #b31616;
}

/* Hospedaje */
.accommodation {
  text-align: center;
}

/* RSVP Section */
.rsvp .rsvp-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1em;
}

.rsvp .rsvp-button {
  display: inline-block;
  padding: 14px 28px;
  background-color: #d21e1e;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.rsvp .rsvp-button:hover {
  background-color: #b31616;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1.5em;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 2em 0;
  }

  .hero .names {
    font-size: 3em;
  }

  .image-container {
    flex-direction: column;
    align-items: center;
  }

  .gallery-image {
    width: 80%;
    max-width: 300px;
    height: auto;
  }
}
</style>
