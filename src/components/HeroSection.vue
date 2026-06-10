<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <img src="@/assets/images/Hero-Section.jpeg" alt="IS VEST CONFECÇÕES" class="hero-bg-image">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon"></span>
          <span class="badge-text">Há mais de 10 anos vestindo seu sucesso</span>
        </div>
        <h1>
          Qualidade e Estilo em 
          <span class="highlight">Uniformes Profissionais</span>
        </h1>
        <p class="subtitle">
          Na <strong>IS VEST CONFECÇÕES</strong>, sua empresa encontra uniformes de alta qualidade 
          com design moderno, tecidos premium e acabamento impecável. 
          <span class="tagline">Visto quem veste qualidade!</span>
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Clientes satisfeitos</span>
          </div>
          <div class="stat">
            <span class="stat-number">50k+</span>
            <span class="stat-label">Uniformes produzidos</span>
          </div>
          <div class="stat">
            <span class="stat-number">24h</span>
            <span class="stat-label">Atendimento rápido</span>
          </div>
        </div>
        <div class="hero-buttons">
          <a href="#contact" class="btn btn-primary">
            <span>Solicitar Orçamento</span>
            <span class="btn-icon"></span>
          </a>
          <a href="#features" class="btn btn-secondary">
            <span>Conheça nossos produtos</span>
            <span class="btn-icon">→</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Elementos decorativos -->
    <div class="hero-decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
:root {
  --primary-color: #822c4a;
  --secondary-color: #885f5f;
  --accent-color: #fa0467;
  --dark-color: #885f5f;
  --light-color: #f5ebed;
  --gray-color: #93797d;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* Background da imagem */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Overlay mais leve para a imagem aparecer */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(130, 44, 74, 0.65) 4%,
    rgba(141, 106, 106, 0.6) 5%
  );
  z-index: 1;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  animation: fadeUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 18px;
  border-radius: 50px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: fadeUp 0.6s ease;
}

.badge-icon {
  font-size: 1.2rem;
  animation: scissorSnip 2s ease-in-out infinite;
}

@keyframes scissorSnip {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(15deg); }
}

.badge-text {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: white;
}

/* Título */
.hero h1 {
  font-size: 3.8rem;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.hero .highlight {
  color: var(--accent-color);
  position: relative;
  display: inline-block;
}

.hero .highlight::before {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(200, 146, 168, 0.3);
  border-radius: 4px;
  z-index: -1;
}

/* Subtítulo */
.hero .subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}

.hero .subtitle strong {
  color: var(--accent-color);
  font-weight: 700;
}

.hero .subtitle .tagline {
  display: inline-block;
  font-weight: 600;
  margin-top: 8px;
  color: var(--accent-color);
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent-color);
  line-height: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
  color: white;
}

/* Botões */
.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary-color);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(130, 44, 74, 0.4);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(130, 44, 74, 0.5);
  background: var(--secondary-color);
}

.btn-primary .btn-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: rotate(15deg);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.9);
  color: #fff;
}

.btn-secondary:hover {
  background: white;
  color: var(--primary-color);
  border-color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary .btn-icon {
  transition: transform 0.3s ease;
}

.btn-secondary:hover .btn-icon {
  transform: translateX(5px);
}

/* Elementos decorativos */
.hero-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(200, 146, 168, 0.15);
  backdrop-filter: blur(2px);
  animation: float 20s infinite ease-in-out;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 50px;
  left: -80px;
  animation-delay: -5s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  bottom: 30%;
  right: 10%;
  animation-delay: -10s;
  animation-duration: 25s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(10deg);
  }
}

/* ========== RESPONSIVIDADE ========== */

/* Desktop médio */
@media (max-width: 1024px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero-stats {
    gap: 40px;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 100px 0 80px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero .subtitle {
    font-size: 1rem;
  }
  
  .hero-stats {
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .circle-1 {
    width: 200px;
    height: 200px;
  }
  
  .circle-2 {
    width: 150px;
    height: 150px;
  }
}

/* Mobile grande */
@media (max-width: 576px) {
  .hero {
    padding: 80px 0 60px;
  }
  
  .hero-badge {
    padding: 6px 14px;
  }
  
  .badge-text {
    font-size: 0.7rem;
  }
  
  .hero h1 {
    font-size: 1.6rem;
  }
  
  .hero .highlight::before {
    height: 5px;
    bottom: 4px;
  }
  
  .hero .subtitle {
    font-size: 0.9rem;
  }
  
  .hero-stats {
    gap: 20px;
  }
  
  .stat-number {
    font-size: 1.3rem;
  }
  
  .stat-label {
    font-size: 0.7rem;
  }
  
  .btn {
    padding: 10px 24px;
    font-size: 0.9rem;
  }
  
  .circle-1 {
    width: 150px;
    height: 150px;
  }
  
  .circle-2 {
    width: 100px;
    height: 100px;
  }
  
  .circle-3 {
    width: 80px;
    height: 80px;
  }
}

/* Mobile pequeno */
@media (max-width: 375px) {
  .hero {
    padding: 70px 0 50px;
  }
  
  .hero h1 {
    font-size: 1.4rem;
  }
  
  .hero .subtitle {
    font-size: 0.85rem;
  }
  
  .btn {
    max-width: 100%;
  }
}

/* Animação dos stats */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat {
  animation: countUp 0.6s ease forwards;
  opacity: 0;
}

.stat:nth-child(1) { animation-delay: 0.2s; }
.stat:nth-child(2) { animation-delay: 0.3s; }
.stat:nth-child(3) { animation-delay: 0.4s; }
</style>