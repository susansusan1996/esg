<template>
  <carousel></carousel>
  <div class="esg-home">
    <header class="header">
      <h1 class="title">Sustainable Future</h1>
      <p class="subtitle">Empowering ESG Initiatives with Innovation</p>
    </header>
    <main>
      <section class="hero" v-motion-fade>
        <p>Join us in making a positive impact on the planet.</p>
        <button @click="scrollToInfo" class="cta-button">Learn More</button>
      </section>
      <section ref="infoSection" class="info-cards">
        <div class="card" v-motion-slide-bottom>
          <h2>Environmental</h2>
          <p>We promote sustainable practices and green technologies.</p>
        </div>
        <div class="card" v-motion-slide-bottom>
          <h2>Social</h2>
          <p>Fostering inclusive communities and responsible businesses.</p>
        </div>
        <div class="card" v-motion-slide-bottom>
          <h2>Governance</h2>
          <p>Ensuring transparency and ethical leadership.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";
import carousel from "./carousel.vue";

const infoSection = ref(null);

const scrollToInfo = () => {
  infoSection.value?.scrollIntoView({ behavior: "smooth" });
};

useMotion(infoSection, {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8 } },
});
</script>

<style scoped>
.esg-home {
  text-align: center;
  font-family: Arial, sans-serif;
}

.header {
  padding: 2rem;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color: white;
  border-radius: 0 0 20px 20px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.hero {
  padding: 4rem 2rem;
  background: #f4f4f4;
}

.cta-button {
  background: #56ab2f;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.cta-button:hover {
  background: #3d8b1e;
}

.info-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
}
</style>
