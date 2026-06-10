<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Nossos Produtos</h2>
      <p class="section-subtitle">Qualidade e estilo em uniformes profissionais para o seu negócio</p>
      
      <div class="carousel-container">
        <button class="carousel-btn prev-btn" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <div 
          class="carousel-wrapper"
          @mouseenter="pauseSlide"
          @mouseleave="resumeSlide"
        >
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="carousel-slide" v-for="(product, index) in products" :key="index">
              <div class="product-card">
                <div class="product-image">
                  <img :src="product.image" :alt="product.title">
                  <div class="product-overlay">
                    <span class="product-badge">{{ product.badge }}</span>
                  </div>
                </div>
                <div class="product-content">
                  <h3>{{ product.title }}</h3>
                  <p>{{ product.description }}</p>
                  <div class="product-features">
                    <span v-for="(feature, idx) in product.features" :key="idx" class="feature-tag">
                      {{ feature }}
                    </span>
                  </div>
                  <a href="#contact" class="btn-card">
                    Solicitar Orçamento
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn next-btn" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div class="carousel-dots">
        <span 
          v-for="(product, index) in products" 
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
      
      <div class="carousel-counter">
        {{ currentSlide + 1 }} / {{ products.length }}
      </div>
    </div>
  </section>
</template>

<script>
// Importação direta das imagens (Vue CLI / Webpack)
import uniformeAdministrativo from '@/assets/images/uniforme_administrativo.png'
import uniformeSeguranca from '@/assets/images/uniforme_seguranca.png'
import uniformeGastronomia from '@/assets/images/uniforme_gastronomia.png'
import uniformeIndustrial from '@/assets/images/uniforme_industrial.png'
import uniformeSaude from '@/assets/images/uniforme_saude.png'
import uniformeEscolar from '@/assets/images/uniforme_escolar.png'

export default {
  name: 'FeaturesSection',
  data() {
    return {
      currentSlide: 0,
      autoSlide: null,
      products: [
        {
          title: 'Uniformes Administrativos',
          description: 'Uniformes elegantes e profissionais para empresas, comércios e escritórios. Tecidos de alta qualidade e acabamento impecável.',
          image: uniformeAdministrativo,
          badge: 'Mais Vendido',
          features: ['Tecido Premium', 'Bordado Personalizado', 'Conforto']
        },
        {
          title: 'Uniformes para Segurança',
          description: 'Uniformes para vigilantes e segurança patrimonial com tecidos resistentes, confortáveis e de alta durabilidade.',
          image: uniformeSeguranca,
          badge: 'Destaque',
          features: ['Resistente', 'Confortável', 'Profissional']
        },
        {
          title: 'Uniformes para Gastronomia',
          description: 'Conjuntos completos para chefs, cozinheiros e auxiliares. Aventais, jalecos, gorros e muito mais com tecidos antichamas.',
          image: uniformeGastronomia,
          badge: 'Premium',
          features: ['Antichamas', 'Resistente', 'Respirável']
        },
        {
          title: 'Uniformes Industriais',
          description: 'Macacões, coletes e calças com alta durabilidade, segurança e proteção para o ambiente industrial.',
          image: uniformeIndustrial,
          badge: 'Resistente',
          features: ['Alta Durabilidade', 'Proteção', 'Refletivo']
        },
        {
          title: 'Uniformes para Saúde',
          description: 'Jalecos, scrubs e aventais com tecidos antimicrobianos, garantindo segurança e conforto para profissionais da saúde.',
          image: uniformeSaude,
          badge: 'Premium',
          features: ['Antimicrobiano', 'Macio', 'Durável']
        },
        {
          title: 'Uniformes Escolares',
          description: 'Fardas completas para escolas e faculdades com tecidos confortáveis e duradouros para o dia a dia.',
          image: uniformeEscolar,
          badge: 'Conforto',
          features: ['Macio', 'Respirável', 'Fácil Limpeza']
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  methods: {
    startAutoSlide() {
      this.autoSlide = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopAutoSlide() {
      if (this.autoSlide) {
        clearInterval(this.autoSlide)
      }
    },
    pauseSlide() {
      this.stopAutoSlide()
    },
    resumeSlide() {
      this.startAutoSlide()
    },
    // Loop infinito - avançar slide
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.products.length
    },
    
    // Loop infinito - voltar slide
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.products.length) % this.products.length
    },
    
    // Ir para slide específico
    goToSlide(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style scoped>
:root {
  --primary-color: #822c4a;
  --secondary-color: #885f5f;
  --accent-color: #c892a8;
  --dark-color: #2d1a22;
  --light-color: #f5ebed;
  --gray-color: #93797d;
}

.features {
  padding: 80px 0;
  background: linear-gradient(135deg, #fff 0%, var(--light-color) 100%);
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  color: var(--dark-color);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--gray-color);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  padding: 0 15px;
}

/* Carrossel */
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
}

.carousel-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 24px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  flex: 0 0 100%;
  padding: 10px;
}

/* Produto Card - Premium */
.product-card {
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(130, 44, 74, 0.08);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(130, 44, 74, 0.08);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(130, 44, 74, 0.15);
}

/* Container da imagem - Visual de catálogo premium */
.product-image {
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #ffffff 0%, #faf6f7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: all 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.03);
}

.product-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
}

/* Badge Premium */
.product-badge {
  background: linear-gradient(135deg, #822c4a, #b35478);
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(130, 44, 74, 0.3);
}

.product-content {
  padding: 30px;
  text-align: center;
}

.product-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--dark-color);
}

.product-content p {
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
  justify-content: center;
}

.feature-tag {
  background: var(--light-color);
  color: var(--primary-color);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Botão Premium */
.btn-card {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #822c4a, #a84367);
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.btn-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(130, 44, 74, 0.25);
}

.btn-card i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.btn-card:hover i {
  transform: translateX(5px);
}

/* Botões do Carrossel - Glass Effect */
.carousel-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(130, 44, 74, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.carousel-btn:hover {
  background: var(--primary-color);
  transform: scale(1.05);
  border-color: var(--primary-color);
}

.carousel-btn:hover i {
  color: white;
}

.carousel-btn i {
  font-size: 1.2rem;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

/* Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gray-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  width: 30px;
  border-radius: 10px;
  background: var(--primary-color);
}

.dot:hover {
  background: var(--primary-color);
}

/* Contador */
.carousel-counter {
  text-align: center;
  margin-top: 20px;
  color: var(--gray-color);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Responsividade */
@media (max-width: 1200px) {
  .product-image {
    height: 450px;
  }
}

@media (max-width: 992px) {
  .features {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .product-image {
    height: 400px;
  }
  
  .product-content {
    padding: 25px;
  }
  
  .product-content h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .features {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
  
  .carousel-btn {
    width: 38px;
    height: 38px;
  }
  
  .carousel-btn i {
    font-size: 1rem;
  }
  
  .product-image {
    height: 320px;
  }
  
  .product-content {
    padding: 20px;
  }
  
  .product-content h3 {
    font-size: 1.2rem;
  }
  
  .product-content p {
    font-size: 0.9rem;
  }
  
  .feature-tag {
    font-size: 0.7rem;
    padding: 4px 12px;
  }
  
  .btn-card {
    padding: 10px 22px;
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .features {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .carousel-container {
    gap: 8px;
  }
  
  .carousel-btn {
    width: 32px;
    height: 32px;
  }
  
  .carousel-btn i {
    font-size: 0.9rem;
  }
  
  .product-image {
    height: 260px;
  }
  
  .product-content {
    padding: 15px;
  }
  
  .product-content h3 {
    font-size: 1.1rem;
  }
  
  .product-content p {
    font-size: 0.85rem;
  }
  
  .feature-tag {
    font-size: 0.65rem;
    padding: 3px 10px;
  }
  
  .btn-card {
    padding: 8px 18px;
    font-size: 0.8rem;
  }
  
  .product-badge {
    padding: 5px 12px;
    font-size: 0.65rem;
  }
}

@media (max-width: 400px) {
  .section-title {
    font-size: 1.4rem;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .product-image {
    height: 220px;
  }
}
</style>