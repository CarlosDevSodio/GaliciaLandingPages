<template>
  <div class="gallery">
    <!-- Controles de idioma -->
    <div class="language-controls">
      <button @click="setLanguage('es')" :class="{ active: language === 'es' }">
        {{ translations.es.spanish }}
      </button>
      <button @click="setLanguage('en')" :class="{ active: language === 'en' }">
        {{ translations.en.english }}
      </button>
    </div>

    <h2 class="gallery-title">{{ translations[language].galleryTitle }}</h2>
    <div class="gallery-actions">
      <button class="gallery-share-button" @click="openUploadModal">
        <i class="fas fa-heart"></i>
        {{ translations[language].shareButtonText }}
      </button>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img
          :src="image.url"
          :alt="image.alt"
          class="gallery-image"
          @click="openImageModal(image)"
          :style="{
            width: image.calculatedWidth + 'px',
            height: image.calculatedHeight + 'px',
          }"
        />
      </div>
    </div>

    <!-- Modal para subir foto -->
    <div v-if="showUploadModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeUploadModal">×</span>
        <h2>{{ translations[language].uploadTitle }}</h2>

        <!-- Input de archivo personalizado -->
        <label for="file-upload" class="custom-file-upload">
          <i class="fas fa-cloud-upload-alt"></i>
          {{ fileName || translations[language].chooseFile }}
        </label>
        <input
          id="file-upload"
          type="file"
          @change="uploadImage"
          accept="image/*"
        />

        <button @click="confirmUpload" :disabled="!newImageFile">
          {{ translations[language].confirmUploadButton }}
        </button>
      </div>
    </div>

    <!-- Modal para ver la foto en grande -->
    <div v-if="showImageModal" class="modal">
      <div class="modal-content image-modal">
        <span class="close-button" @click="closeImageModal">×</span>
        <img
          :src="selectedImage.url"
          :alt="selectedImage.alt"
          class="modal-image"
        />
        <p>{{ translations[language].likePhoto }}</p>
        <a :href="selectedImage.url" download class="download-button">
          {{ translations[language].downloadButton }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      language: "es",
      translations: {
        es: {
          spanish: "Español",
          english: "Inglés",
          galleryTitle: "Nuestra Galería de Recuerdos",
          shareButtonText: "Comparte tus Momentos Favoritos",
          uploadButtonText: "Sube tu Foto",
          uploadTitle: "Sube una Nueva Foto",
          confirmUploadButton: "Confirmar Subida",
          likePhoto: "¿Te gusta la foto? ¡Descárgala!",
          downloadButton: "Descargar",
          chooseFile: "Seleccionar Archivo",
        },
        en: {
          spanish: "Spanish",
          english: "English",
          galleryTitle: "Our Memory Gallery",
          shareButtonText: "Share Your Favorite Moments",
          uploadButtonText: "Upload Your Photo",
          uploadTitle: "Upload a New Photo",
          confirmUploadButton: "Confirm Upload",
          likePhoto: "Like the photo? Download it!",
          downloadButton: "Download",
          chooseFile: "Choose File",
        },
      },
      //imagenes que se sustituiran despues
      images: [
        {
          url: "https://cdn0.bodas.com.mx/article-vendor/3443/3_2/960/jpg/analois-photoshoot-0055_5_193443-164815363528699.webp",
          alt: "Wedding Photo 1",
        },
        {
          url: "https://cdn0.bodas.com.mx/article-real-wedding/803/original/960/jpg/1256143.webp",
          alt: "Wedding Photo 2",
        },
        {
          url: "https://i.pinimg.com/736x/11/84/0a/11840a12f027e45d3e485d66f1939710.jpg",
          alt: "Wedding Photo 3",
        },
        {
          url: "https://cdn0.bodas.com.mx/article-real-wedding/689/original/960/jpg/1421803.webp",
          alt: "Wedding Photo 4",
        },
        {
          url: "https://cdn0.bodas.com.mx/article-vendor/1600/original/960/jpg/-h1a8165_5_151600-160530312182177.webp",
          alt: "Wedding Photo 5",
        },
        {
          url: "https://cdn0.bodas.com.mx/article-real-wedding/209/original/960/jpg/1356793.webp",
          alt: "Wedding Photo 6",
        },
      ],
      showUploadModal: false,
      showImageModal: false,
      selectedImage: null,
      newImageFile: null,
      fileName: "",
      baseImageWidth: 300, // ancho base para las imagenes
    };
  },
  mounted() {
    this.calculateImageSizes();
  },
  methods: {
    setLanguage(lang) {
      this.language = lang;
    },
    openUploadModal() {
      this.showUploadModal = true;
    },
    closeUploadModal() {
      this.showUploadModal = false;
      this.fileName = "";
    },
    openImageModal(image) {
      this.selectedImage = image;
      this.showImageModal = true;
    },
    closeImageModal() {
      this.showImageModal = false;
      this.selectedImage = null;
    },
    uploadImage(event) {
      this.newImageFile = event.target.files[0];
      this.fileName = this.newImageFile ? this.newImageFile.name : "";
    },
    confirmUpload() {
      if (this.newImageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage = {
            url: e.target.result,
            alt: "Uploaded Image",
          };
          this.images.push(newImage);
          this.calculateImageSizes();
          this.closeUploadModal();
          this.newImageFile = null;
          this.fileName = "";
        };
        reader.readAsDataURL(this.newImageFile);
      }
    },
    //calculo del area para poner las mas grandes hasta abajo
    calculateImageSizes() {
      this.images.forEach((image) => {
        const img = new window.Image();
        img.src = image.url;
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          image.calculatedWidth = this.baseImageWidth;
          image.calculatedHeight = this.baseImageWidth / aspectRatio;
          image.realArea = img.width * img.height;
          this.sortImagesByArea();
        };
      });
    },
    sortImagesByArea() {
      this.images.sort((a, b) => {
        if (!a.realArea) return -1;
        if (!b.realArea) return 1;
        return a.realArea - b.realArea;
      });
    },
  },
};
</script>

<style scoped>
/* colores que se sustituiran depues */
.gallery {
  --primary-color: #c49b66;
  --secondary-color: #a58860;
  --background-color:
  --text-color: #333;
  --accent-color: #e0d8c7;

  padding: 30px;
  font-family: "serif", sans-serif;
  background-color: var(--background-color);
  position: relative;
  color: var(--text-color);
}

.gallery-title {
  font-size: 2.8em;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.gallery-actions {
  text-align: center;
  margin-bottom: 30px;
}

.gallery-share-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1em;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.gallery-share-button i {
  margin-right: 10px;
}

.gallery-share-button:hover {
  transform: translateY(-2px);
  background-color: var(--secondary-color);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(320px, 1fr)
  );
  gap: 25px;
  justify-content: center;
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  border: thick double var(--primary-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.gallery-image {
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;
  max-width: 100%;
  max-height: 100%;
}

.gallery-image:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .gallery {
    padding: 25px;
  }

  .gallery-title {
    font-size: 2.3em;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .gallery-share-button {
    font-size: 1em;
    padding: 10px 22px;
  }
}

.language-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}

.language-controls button {
  background-color: var(--accent-color);
  border: none;
  color: var(--text-color);
  padding: 10px 15px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 1em;
  transition: background-color 0.3s, color 0.3s;
}

.language-controls button:hover {
  background-color: var(--primary-color);
  color: white;
}

.language-controls button.active {
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 500;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 85%;
  max-width: 700px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-content.image-modal {
  text-align: center;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
}

.modal-image {
  max-width: 100%;
  max-height: 500px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.download-button {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 15px;
  font-size: 1.1em;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.download-button:hover {
  transform: translateY(-2px);
  background-color: var(--secondary-color);
}


.custom-file-upload {
  border: 2px dashed var(--accent-color);
  display: inline-block;
  padding: 12px 25px;
  cursor: pointer;
  background-color: var(--background-color);
  border-radius: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-bottom: 15px;
  color: var(--text-color);
}

.custom-file-upload:hover {
  background-color: #f0e9e1;
  border-color: var(--primary-color);
}

.custom-file-upload i {
  margin-right: 8px;
}

input[type="file"] {
  display: none;
}

</style>
