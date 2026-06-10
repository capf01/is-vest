<template>
  <div class="app">
    <HeaderComponent />
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsComponent/>
      <ContactForm />
      <WhatsAppFloat />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ContactForm from './components/ContactForm.vue'
import FooterComponent from './components/FooterComponent.vue'
import TestimonialsComponent from './components/TestimonialsComponent.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    FeaturesSection,
    ContactForm,
    TestimonialsComponent,
    WhatsAppFloat,
    FooterComponent
  }
}
</script>

<style>
/* Estilos globais */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

:root {
    --primary-color: #822c4a;     /* vinho principal */
  --secondary-color: #885f5f;   /* marrom rosado */
  --accent-color: #c892a8;      /* rosa suave */
  --dark-color: #885f5f;        /* texto escuro */
  --light-color: #f5ebed;       /* fundo claro */
  --gray-color: #93797d;        /* cinza rosado */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--dark-color);
  background-color: var(--light-color);
  overflow-x: hidden;
}


.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-color);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
  border: 2px solid var(--secondary-color);
}

.btn-secondary:hover {
  background-color: transparent;
  color: var(--secondary-color);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
  color: var(--gray-color);
}

.section-subtitle {
  font-size: 1rem;
  color: var(--gray-color);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  padding: 0 15px;
}

/* Media Queries para responsividade */
@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
}

@media (max-width: 992px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.4rem;
  }
  
  .section-title::after {
    width: 60px;
    height: 3px;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .container {
    padding: 0 15px;
  }
}

@media (max-width: 375px) {
  .section-title {
    font-size: 1.3rem;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}
</style>