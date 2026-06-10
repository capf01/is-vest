<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <h2 class="section-title">O que dizem nossos clientes</h2>
      <p class="section-subtitle">Empresas que confiam na qualidade e estilo dos uniformes IS VEST</p>
      
      <!-- Faixa de confiança -->
      <div class="trust-bar">
        <span class="trust-item">
          <i class="fas fa-star"></i>
          ★★★★★ 5.0 de satisfação
        </span>
        <span class="trust-item">
          <i class="fas fa-users"></i>
          +500 clientes atendidos
        </span>
        <span class="trust-item">
          <i class="fas fa-truck"></i>
          Entrega para todo o Brasil
        </span>
      </div>
      
      <div class="testimonials-slider" ref="slider">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-content">
            <!-- Barra superior de identidade visual -->
            <div class="brand-bar"></div>
            
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            
            <!-- Selo de cliente verificado -->
            <div class="verified">
              <i class="fas fa-check-circle"></i>
              Cliente Verificado
            </div>
            
            <!-- Resultado da empresa -->
            <div class="result">
              {{ testimonial.result }}
            </div>
            
            <p class="quote">"{{ testimonial.quote }}"</p>
            
            <div class="author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p class="role">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Indicadores do carrossel -->
      <div class="carousel-indicators">
        <button 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="indicator-dot"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsComponent',
  data() {
    return {
      currentIndex: 0,
      autoSlide: null,
      testimonials: [
        {
          quote: "A IS VEST transformou a imagem da nossa empresa. Os uniformes são de altíssima qualidade, o caimento é perfeito e os funcionários adoraram o conforto. Atendimento impecável do início ao fim!",
          name: "Dra. Ana Beatriz Silva",
          role: "Diretora - Clínica Saúde Total",
          avatar: require('@/assets/images/avatar1.png'),
          result: "250 uniformes entregues"
        },
        {
          quote: "Contratamos a IS VEST para uniformizar nossa equipe de cozinha e o resultado superou as expectativas. Tecidos resistentes, design moderno e a personalização ficou impecável. Recomendo fortemente!",
          name: "Chef Carlos Mendes",
          role: "Proprietário - Restaurante Sabor & Arte",
          avatar: require('@/assets/images/avatar2.png'),
          result: "100 colaboradores uniformizados"
        },
        {
          quote: "Como gestora de uma empresa industrial, precisava de uniformes duráveis e seguros. A IS VEST entregou produtos de altíssima qualidade, com tecidos resistentes e acabamento premium. Excelente parceria!",
          name: "Engª Mariana Oliveira",
          role: "Gerente de RH - Indústria Metalúrgica ABC",
          avatar: require('@/assets/images/avatar3.png'),
          result: "Projeto concluído em 15 dias"
        },
        {
          quote: "Os uniformes escolares da IS VEST são os melhores que já tivemos. Confortáveis, duráveis e com um visual elegante. Alunos e pais aprovaram! Atendimento rápido e pontual.",
          name: "Prof. Ricardo Santos",
          role: "Coordenador - Colégio Futuro",
          avatar: require('@/assets/images/avatar4.png'),
          result: "Mais de 500 peças produzidas"
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide()
    this.updateCurrentIndex()
    
    // Adiciona evento de scroll para atualizar o índice atual
    const slider = this.$refs.slider
    if (slider) {
      slider.addEventListener('scroll', this.updateCurrentIndex)
    }
  },
  beforeUnmount() {
    this.stopAutoSlide()
    const slider = this.$refs.slider
    if (slider) {
      slider.removeEventListener('scroll', this.updateCurrentIndex)
    }
  },
  methods: {
    startAutoSlide() {
      this.autoSlide = setInterval(() => {
        const slider = this.$refs.slider
        if (slider) {
          const cardWidth = 410 // 380px + 30px de gap
          const maxScroll = slider.scrollWidth - slider.clientWidth
          const nextScroll = slider.scrollLeft + cardWidth
          
          if (nextScroll >= maxScroll) {
            slider.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' })
          }
        }
      }, 5000)
    },
    stopAutoSlide() {
      if (this.autoSlide) {
        clearInterval(this.autoSlide)
      }
    },
    updateCurrentIndex() {
      const slider = this.$refs.slider
      if (slider) {
        const cardWidth = 410
        const index = Math.round(slider.scrollLeft / cardWidth)
        this.currentIndex = Math.min(index, this.testimonials.length - 1)
      }
    },
    goToSlide(index) {
      const slider = this.$refs.slider
      if (slider) {
        const cardWidth = 410
        slider.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
        this.currentIndex = index
      }
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

.testimonials {
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f5ebed 100%);
  position: relative;
  overflow: hidden;
}

/* Elementos decorativos */
.testimonials::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(130, 44, 74, 0.05);
  pointer-events: none;
}

.testimonials::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: rgba(200, 146, 168, 0.08);
  pointer-events: none;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
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

/* Faixa de confiança */
.trust-bar {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding: 15px 20px;
  background: rgba(130, 44, 74, 0.05);
  border-radius: 60px;
  backdrop-filter: blur(10px);
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 0.9rem;
}

.trust-item i {
  font-size: 1rem;
}

/* Slider horizontal */
.testimonials-slider {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 10px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.testimonials-slider::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  min-width: 380px;
  max-width: 380px;
  display: flex;
  scroll-snap-align: start;
  flex-shrink: 0;
}

/* Card Premium */
.testimonial-content {
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(130, 44, 74, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(130, 44, 74, 0.08);
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

/* Barra superior da identidade visual */
.brand-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #822c4a, #c892a8);
}

/* Hover elegante */
.testimonial-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(130, 44, 74, 0.18);
}

/* Aspas decorativas */
.testimonial-content::before {
  content: '"';
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 5rem;
  color: rgba(130, 44, 74, 0.06);
  font-family: Georgia, serif;
  line-height: 1;
  pointer-events: none;
}

/* Estrelas */
.stars {
  color: #f4b400;
  font-size: 1rem;
  margin: 25px 25px 0 25px;
  letter-spacing: 2px;
}

.stars i {
  margin-right: 2px;
}

/* Selo de cliente verificado */
.verified {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(130, 44, 74, 0.08);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 15px 25px 0 25px;
  width: fit-content;
}

/* Resultado da empresa */
.result {
  color: var(--primary-color);
  font-weight: 700;
  margin: 15px 25px 0 25px;
  font-size: 0.9rem;
  padding: 8px 12px;
  background: linear-gradient(135deg, rgba(130, 44, 74, 0.05), rgba(200, 146, 168, 0.05));
  border-radius: 12px;
  display: inline-block;
  width: fit-content;
}

/* Texto do depoimento */
.quote {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--dark-color);
  font-style: italic;
  margin: 20px 25px;
  position: relative;
  z-index: 2;
  flex: 1;
}

/* Autor */
.author {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: auto 25px 25px 25px;
  padding-top: 15px;
  border-top: 1px solid rgba(130, 44, 74, 0.08);
}

.avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 5px 20px rgba(130, 44, 74, 0.2);
}

.author-info h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 4px;
}

.role {
  color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: 600;
}

/* Indicadores do carrossel */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gray-color);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  padding: 0;
}

.indicator-dot.active {
  width: 30px;
  border-radius: 10px;
  background: var(--primary-color);
}

.indicator-dot:hover {
  background: var(--primary-color);
}

/* Responsividade */
@media (max-width: 992px) {
  .testimonials {
    padding: 80px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .trust-bar {
    gap: 25px;
  }
  
  .trust-item {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
  
  .trust-bar {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border-radius: 30px;
    margin-bottom: 30px;
  }
  
  .testimonial-card {
    min-width: 300px;
    max-width: 300px;
  }
  
  .testimonial-content {
    min-height: 400px;
  }
  
  .stars {
    margin: 20px 20px 0 20px;
  }
  
  .verified, .result {
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .quote {
    font-size: 0.9rem;
    margin: 15px 20px;
  }
  
  .author {
    margin: auto 20px 20px 20px;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 576px) {
  .testimonials {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .testimonial-card {
    min-width: 280px;
    max-width: 280px;
  }
  
  .testimonial-content {
    min-height: 380px;
  }
  
  .quote {
    font-size: 0.85rem;
  }
  
  .result {
    font-size: 0.8rem;
  }
}
</style>