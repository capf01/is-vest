<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <img src="@/assets/images/logovest.jpeg" alt="IS VEST UNIFORMES PROFISSIONAIS">
        </div>

        <!-- Menu Desktop -->
        <ul class="nav-links desktop-menu">
          <li><a href="#home">Início</a></li>
          <li><a href="#features">Produtos</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Solicitar Orçamento</a></li>
        </ul>

        <!-- Botão CTA Desktop -->
        <div class="cta desktop-cta">
          <a href="#contact" class="btn btn-primary">Contato</a>
        </div>

        <!-- Botão Menu Mobile - Tesoura com imagens -->
        <button
          class="mobile-menu-toggle"
          :class="{ active: isMobileMenuOpen }"
          @click="toggleMobileMenu"
        >
          <img 
            src="@/assets/images/tesoura-fechada.png" 
            alt="Menu" 
            class="scissor-icon scissor-closed"
            v-show="!isMobileMenuOpen"
          >
          <img 
            src="@/assets/images/tesoura-aberta.png" 
            alt="Fechar" 
            class="scissor-icon scissor-open"
            v-show="isMobileMenuOpen"
          >
        </button>
      </nav>

      <!-- Menu Mobile -->
      <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
        <ul class="mobile-nav-links">
          <li><a href="#home" @click="closeMobileMenu">Início</a></li>
          <li><a href="#features" @click="closeMobileMenu">Produtos</a></li>
          <li><a href="#testimonials" @click="closeMobileMenu">Depoimentos</a></li>
          <li><a href="#contact" @click="closeMobileMenu">Solicitar Orçamento</a></li>
        </ul>
        <div class="mobile-cta">
          <a href="#contact" class="btn btn-primary" @click="closeMobileMenu">Contato ✂️</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {
      isMobileMenuOpen: false
    }
  },

  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },

    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #f5ebed;
  border-bottom: 1px solid #c892a8;
  box-shadow: 0 2px 15px rgba(130, 44, 74, 0.12);
  transition: all 0.3s ease;
  min-height: 90px;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo img {
  width: clamp(55px, 8vw, 80px);
  height: clamp(55px, 8vw, 80px);
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease;
}

.logo img:hover {
  transform: scale(1.08);
}

/* Estilos do menu desktop */
.desktop-menu {
  display: flex;
  list-style: none;
  gap: clamp(15px, 2vw, 30px);
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.desktop-menu li {
  margin: 0;
}

.desktop-menu a {
  text-decoration: none;
  color: #885f5f;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
  white-space: nowrap;
}

.desktop-menu a:hover {
  color: #822c4a;
}

.desktop-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #822c4a;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.desktop-menu a:hover::after {
  width: 100%;
}

.desktop-cta {
  flex-shrink: 0;
}

.desktop-cta .btn {
  padding: 10px 24px;
  font-size: 0.9rem;
  background: #822c4a;
  border: 2px solid #822c4a;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.desktop-cta .btn:hover {
  background: #885f5f;
  border-color: #885f5f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(130, 44, 74, 0.2);
}

/* BOTÃO TESOURA COM IMAGENS */
.mobile-menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: #f5ebed;
  border: 2px solid #c892a8;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(130, 44, 74, 0.15);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.mobile-menu-toggle:hover {
  border-color: #822c4a;
  box-shadow: 0 5px 15px rgba(130, 44, 74, 0.25);
  transform: scale(1.05);
}

.scissor-icon {
  width: 32px;
  height: 32px;
  display: block;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  object-fit: contain;
  pointer-events: none;
}

/* Animação de entrada/saída das imagens */
.scissor-closed {
  animation: scissorIn 0.3s ease;
}

.scissor-open {
  animation: scissorIn 0.3s ease;
}

/* Efeito de rotação da tesoura quando menu aberto */
.mobile-menu-toggle.active .scissor-icon {
  transform: rotate(20deg) scale(1.15);
}

/* Efeito de corte ao clicar */
.mobile-menu-toggle.active {
  animation: cutAnimation 0.4s ease;
}

@keyframes cutAnimation {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.15) rotate(8deg);
  }
  50% {
    transform: scale(1.05) rotate(-8deg);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scissorIn {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-90deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Menu Mobile */
.mobile-menu {
  position: fixed;
  top: 75px;
  left: 0;
  width: 100%;
  height: calc(100vh - 75px);
  background: #f5ebed;
  padding: 25px;
  overflow-y: auto;
  z-index: 999;
  transform: translateY(-120%);
  transition: transform 0.35s ease;
  border-top: 1px solid #c892a8;
  box-shadow: 0 10px 30px rgba(130, 44, 74, 0.15);
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.mobile-nav-links li {
  margin-bottom: 20px;
  animation: slideIn 0.3s ease forwards;
  opacity: 0;
  transform: translateX(-20px);
}

.mobile-nav-links li:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-links li:nth-child(2) { animation-delay: 0.2s; }
.mobile-nav-links li:nth-child(3) { animation-delay: 0.3s; }
.mobile-nav-links li:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-nav-links a {
  text-decoration: none;
  color: #885f5f;
  font-weight: 600;
  font-size: 1.2rem;
  display: block;
  padding: 12px 0;
  transition: all 0.3s ease;
  text-align: center;
  border-radius: 8px;
}

.mobile-nav-links a:hover {
  color: #822c4a;
  background: rgba(130, 44, 74, 0.05);
  padding-left: 15px;
}

.mobile-cta .btn {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 14px;
  font-size: 1.1rem;
  background: #822c4a;
  border: none;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: fadeInUp 0.3s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  animation-delay: 0.5s;
  font-weight: 600;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-cta .btn:hover {
  background: #885f5f;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(130, 44, 74, 0.3);
}

.btn {
  display: inline-block;
  background: #822c4a;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(130, 44, 74, 0.2);
}

/* ========== RESPONSIVIDADE ========== */

/* Tablet */
@media (max-width: 768px) {
  .header {
    min-height: 75px;
  }

  .desktop-menu,
  .desktop-cta {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu {
    top: 75px;
    height: calc(100vh - 75px);
  }

  .container {
    padding: 0 16px;
  }

  .navbar {
    gap: 10px;
  }

  .mobile-nav-links a {
    font-size: 1.05rem;
  }
}

/* Mobile Grande */
@media (max-width: 576px) {
  .header {
    min-height: 65px;
  }

  .container {
    padding: 0 15px;
  }

  .mobile-menu {
    top: 65px;
    height: calc(100vh - 65px);
    padding: 20px;
  }

  .mobile-menu-toggle {
    width: 50px;
    height: 50px;
  }

  .scissor-icon {
    width: 28px;
    height: 28px;
  }

  .mobile-nav-links li {
    margin-bottom: 14px;
  }

  .mobile-nav-links a {
    font-size: 1rem;
  }

  .mobile-cta .btn {
    font-size: 1rem;
  }
}

/* Mobile Pequeno */
@media (max-width: 375px) {
  .header {
    min-height: 60px;
  }

  .mobile-menu {
    top: 60px;
    height: calc(100vh - 60px);
    padding: 18px;
  }

  .mobile-menu-toggle {
    width: 42px;
    height: 42px;
  }

  .scissor-icon {
    width: 22px;
    height: 22px;
  }

  .mobile-nav-links a {
    font-size: 0.95rem;
  }

  .container {
    padding: 0 10px;
  }
}

/* Ultra Wide */
@media (min-width: 1600px) {
  .container {
    max-width: 1400px;
  }

  .desktop-menu {
    gap: 50px;
  }

  .desktop-menu a {
    font-size: 1.15rem;
  }

  .desktop-cta .btn {
    padding: 12px 28px;
    font-size: 1rem;
  }
}

/* Melhora toque em celulares */
a,
button {
  -webkit-tap-highlight-color: transparent;
}

/* Animações mais suaves */
.mobile-menu,
.mobile-menu-toggle,
.desktop-menu a,
.btn {
  will-change: transform;
}
</style>