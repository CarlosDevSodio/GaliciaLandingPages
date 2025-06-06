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
        <span class="couple-names animated fadeIn">Oscar y Sofia</span>
        <p class="date animated fadeIn">
          {{ translations[language].eventDate }}
        </p>
        <img
          src="../../assets/invitations/example1/marco.png"
          alt="Foto de la pareja"
          class="marco animated fadeIn"
        />
      </div>
      <div class="decorative-bottom"></div>
    </header>

    <hr class="divider" />  <!-- Divider -->

    <!-- Contenedor de las dos columnas -->
    <div class="columns-container">
      <!-- Columna izquierda -->
      <div class="column">
        <!-- Itinerario -->
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

        <hr class="divider" /> <!-- Divider -->

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

        <hr class="divider" /> <!-- Divider -->

        <!-- Galería de Fotos -->
        <section class="gallery animated fadeInUp">
          <h2>{{ translations[language].gallery }}</h2>
          <p>{{ translations[language].galleryDescription }}</p>
          <a href="#">{{ translations[language].viewList }}</a>
        </section>

        <hr class="divider" /> <!-- Divider -->

        <!-- Código de Vestimenta -->
        <section class="dress-code animated fadeInUp">
          <h2>{{ translations[language].dressCode }}</h2>
          <p>{{ translations[language].formalAttire }}</p>
        </section>
      </div>

      <hr class="vertical-divider" /> <!-- Vertical Divider -->

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

        <hr class="divider" /> <!-- Divider -->

        <!-- Ubicación -->
        <section class="location animated fadeInUp">
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
        </section>

        <hr class="divider" /> <!-- Divider -->

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

        <hr class="divider" /> <!-- Divider -->

        <!-- Mesa de Regalos -->
        <section class="gifts animated fadeInUp">
          <h2>{{ translations[language].giftRegistry }}</h2>
          <p>{{ translations[language].accommodationRecommendations }}</p>
          <a href="#">{{ translations[language].viewList }}</a>
        </section>
      </div>
    </div>

    <hr class="divider" /> <!-- Divider -->

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
/* Fuentes */


/* Estilos generales */
.invitation-container {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  border: none; /* Removed border */
  color: #ffffff; /* Texto blanco */
  background-color: #121212; /* Matte black */
  padding: 20px;
  border-radius: 10px;
  max-width: 768px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1); /* Sombra sutil blanca */
  position: relative;
  overflow: hidden;
}

/* Controles de idioma */
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
  background-color: rgba(255, 255, 255, 0.1); /* Blanco translúcido */
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.8em;
}

.language-controls button:hover,
.language-controls button.active {
  background-color: #ffffff; /* Blanco sólido al hacer hover o activo */
  color: #121212; /* Matte black */
}

/* Encabezado */
.invitation-header {
  text-align: center;
  margin-bottom: 30px;
}

.marco-container {
  position: relative;
}

.couple-names {
  font-size: 3.5em;
  color: #ffffff; /* Blanco */
  margin: 15px 0 5px;
  font-family: "Playfair Display", serif;
}

.date {
  font-size: 1.2em;
  font-weight: bold;
  color: #ffffff; /* Blanco */
}

.marco {
  width: 120px;
  height: auto;
  transform: rotateX(180deg);

}

.decorative-top,
.decorative-bottom {
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 10px 0;
}

/* Columnas */
.columns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.column {
  flex: 1;
  min-width: 300px;
  padding: 15px;
  border-radius: 8px;
}

/* Secciones */
section {
  margin-bottom: 25px;
  text-align: center;
}

section h2 {
  font-size: 1.8em;
  color: #ffffff; /* Blanco */
  margin-bottom: 15px;
  font-family: "Raleway", sans-serif;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Borde blanco translúcido */
  color: #ffffff; /* Texto blanco */
}

.itinerary th {
  background-color: rgba(255, 255, 255, 0.05); /* Fondo blanco translúcido */
  font-weight: bold;
}

.itinerary td.time {
  font-weight: bold;
  width: 35%;
}

/* RSVP */
.rsvp .input-group {
  margin-bottom: 15px;
  text-align: left;
}

.rsvp label {
  display: block;
  margin-bottom: 8px;
  color: #ffffff; /* Blanco */
  font-weight: 500;
}

.rsvp input {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borde blanco translúcido */
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1em;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.05); /* Fondo blanco translúcido */
  color: #ffffff; /* Texto blanco */
}

.rsvp button {
  background-color: #ffffff; /* Blanco */
  color: #121212; /* Matte black */
  padding: 14px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 1.1em;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 15px;
}

.rsvp button:hover {
  background-color: rgba(255, 255, 255, 0.8); /* Blanco translúcido al hacer hover */
}

/* Fotos */
.photos {
  display: flex;
  justify-content: space-around;
  gap: 15px;
  flex-wrap: wrap;
}

.photo {
  width: 45%;
  max-width: 180px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1); /* Sombra blanca */
  transition: transform 0.3s ease-in-out;
}

.photo:hover {
  transform: scale(1.05);
}

/* Ubicación */
.location iframe {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1); /* Sombra blanca */
}

/* Cuenta Regresiva */
.countdown {
  background-color: rgba(0, 0, 0, 0.6); /* Negro translúcido */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1); /* Sombra blanca */
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
  color: #ffffff; /* Blanco */
  font-weight: bold;
  line-height: 1;
  display: block;
}

.countdown-label {
  font-size: 50%;
  color: #ffffff; /* Blanco */
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Raleway", sans-serif;
}

.gallery a,
.gifts a {
  display: inline-block;
  background-color: #ffffff; /* Blanco */
  color: #121212; /* Matte black */
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 15px;
  font-weight: 500;
}

.gallery a:hover,
.gifts a:hover {
  background-color: rgba(255, 255, 255, 0.8); /* Blanco translúcido al hacer hover */
}

/* Dividers */
.divider {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1); /* Subtle white line */
  margin: 20px 0; /* Adjust spacing as needed */
}

/* Vertical Divider */
.vertical-divider {
  border: none;
  width: 1px;
  background: rgba(255, 255, 255, 0.1); /* Subtle white line */
  margin: 0 20px;
  align-self: stretch;
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .columns-container {
    flex-direction: column;
  }

  .column {
    min-width: auto;
  }

  .couple-names {
    font-size: 3em;
  }

  .photo {
    width: 100%;
    max-width: none;
  }

  .vertical-divider {
        display: none; /* Hide vertical divider on smaller screens */
    }
}

@media (max-width: 480px) {
  .countdown-numbers {
    flex-direction: column;
    gap: 10px;
  }

  .countdown-item {
    width: 100%;
  }

  .countdown-value {
    font-size: 1.8em;
  }
}
</style>