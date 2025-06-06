<template>
  <div class="wrapper">
    <div class="background-layer"></div>
    <v-container fluid class="fill-height d-flex flex-column justify-center align-center text-center">
      <v-row class="mb-12" justify="center">
        <v-col cols="12" class="d-flex flex-column align-center" style="z-index: 10; height: 80vh; margin-top: 80px;">
          <img src="@/assets/apollo/galicia-apollo.svg" class="apollo-galicia" />
          <img src="@/assets/apollo/we-are-more-than-just-a-law-firm.svg" class="law-firm-text" />
          <h3 class="principal-text" style="margin-top: -20px;">
            we are a <span>powerhouse of legal innovative thinking</span>
          </h3>
        </v-col>
      </v-row>

      <v-row justify="center" class="content2" style="height: 80vh;">
        <v-col cols="10" md="8" class="d-flex flex-column align-center">
          <p>
            At <strong>Galicia</strong>, we have integrated a unique legal service offering within the Mexican and Latin American markets that has allowed us to build strong, differentiated and close long-term relations with high-profile, high-demand, sophisticated clients.
          </p>
          <div class="spacer"></div>
          <p>
            Galicia's unique market offering sets us apart, blending the precision of renowned transactional and regulatory expertise with the strategic acumen required for high-stakes litigation.
          </p>
        </v-col>
      </v-row>

      <v-row class="yellow-zone">
        <v-col cols="12">
          <p>Leveraging deep industry insight, strategic positioning, and proven strength in key practice areas aligned with Apollo's objectives, we are uniquely positioned to add value and support the success of its upcoming ventures in Mexico.</p>
        </v-col>
      </v-row>

      <v-row class="white-zone" style="height: 100px; background-color: #f7f7f7;">
        <v-col cols="12">
          <p style="color: #121212; font-weight: bold; font-size: 1.2rem; text-align: center;">As Mexico's leading firm, Galicia is committed to being the best alternative for clients looking for industry-focused, pragmatic legal services by means of our robust practice area offering, always working in a coordinated manner and teams of experts focused on strategic sectors: Energy, Infrastructure, Financial, Health, Private Equity, Real Estate and Regulated Industries</p>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #121212;
  overflow: hidden;
  color: white;
  font-family: 'FiraSans', sans-serif;
}

.background-layer {
  position: absolute;
  inset: 0;
  background-color: #121212;
  opacity: 0.99;
  z-index: 0;
}

.apollo-galicia {
  max-width: 900px;
  margin-bottom: 40px;
}

.law-firm-text {
  max-width: 700px;
  margin-bottom: 20px;
}

.principal-text {
  font-size: 1.9rem;
  color: white;
  font-family: 'Gelasio', serif;
}

.principal-text span {
  font-weight: bold;
  font-size: 2.2rem;
}

.content2 {
  background-color: #1a1a1a;
  padding: 40px 20px;
  color: white;
  font-weight: 300;
  font-size: 1.1rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.content2 p {
  margin-left: 120px;
  margin-right: 120px;
  line-height: 1.3em;
  font-size: 1.3rem;
}

.yellow-zone {
  width: 100%;
  height: 200px;
  background-color: #f7c600;
  position: relative;
  z-index: 1;
  padding-left: 120px;
  padding-right: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #121212;
}

.yellow-zone p {
  color: #121212;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5em;
  font-family: 'FiraSans', sans-serif;
  text-align: center;
  margin-left: 120px;
  margin-right: 120px;
}

.spacer {
  height: 100px;
}
</style>
