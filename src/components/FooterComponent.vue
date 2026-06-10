<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/images/logovest.jpeg" alt="IS VEST CONFECÇÕES">
          <p>Qualidade e estilo em uniformes profissionais. Vestindo seu sucesso com excelência e dedicação.</p>
          <div class="footer-tagline">
            <span>IS VEST</span>
            <span>Visto quem veste qualidade!</span>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#features">Produtos</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Solicitar Orçamento</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Contato</h4>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Av. Antonina Talarico, 195 - Vila Nhocuné, São Paulo - SP, 03559-010</span>
          </div>
          <div class="contact-item">
            <i class="fab fa-whatsapp"></i>
            <span>(11) 94486-3408</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>confeccao@isvest.com.br</span>
          </div>
        </div>
        
        <div class="footer-social">
          <h4>Siga-nos</h4>
          <div class="social-icons">
            <a href="https://www.instagram.com/isvestconfeccoes/" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="social-icon-circle">
              <img src="@/assets/images/instagram.png" alt="Instagram">
              <span class="social-tooltip">@isvestconfeccoes</span>
            </a>
          </div>
          <div class="footer-badge">
            <span>IS VEST CONFECÇÕES</span>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 IS VEST CONFECÇÕES. Todos os direitos reservados.</p>
        <p class="footer-slogan">Uniformes profissionais com qualidade e estilo</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
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

.footer {
  background: linear-gradient(135deg, #1a0f14 0%, #2d1a22 50%, #1a0f14 100%);
  color: white;
  padding: 60px 0 25px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color));
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

/* Logo e descrição */
.footer-logo img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid var(--accent-color);
  transition: all 0.3s ease;
}

.footer-logo img:hover {
  transform: scale(1.05);
  border-color: var(--primary-color);
}

.footer-logo p {
  color: #b8a3aa;
  margin-top: 10px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-tagline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 8px 15px;
  background: rgba(130, 44, 74, 0.25);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--accent-color);
}

.footer-tagline span:first-child {
  font-weight: bold;
  color: var(--accent-color);
}

/* Títulos das seções */
.footer-links h4,
.footer-contact h4,
.footer-social h4 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  color: var(--light-color);
}

.footer-links h4::after,
.footer-contact h4::after,
.footer-social h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
}

/* Links */
.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #b8a3aa;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  display: inline-block;
  position: relative;
  padding-left: 0;
}

.footer-links a:hover {
  color: var(--accent-color);
  transform: translateX(5px);
}

/* Contato */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #b8a3aa;
  margin-bottom: 15px;
  font-size: 0.9rem;
  line-height: 1.5;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: var(--accent-color);
  transform: translateX(5px);
}

.contact-item i {
  color: var(--primary-color);
  margin-top: 3px;
  min-width: 18px;
  font-size: 1rem;
}

/* Social */
.social-icons {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 25px;
}

.social-icon-circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(130, 44, 74, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.social-icon-circle:hover {
  background: var(--primary-color);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(130, 44, 74, 0.5);
}

.social-icon-circle img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.social-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.social-icon-circle:hover .social-tooltip {
  opacity: 1;
  visibility: visible;
  bottom: -40px;
}

.footer-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 6px 12px;
  background: rgba(130, 44, 74, 0.25);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--accent-color);
}

/* Footer bottom */
.footer-bottom {
  border-top: 1px solid rgba(147, 121, 125, 0.2);
  padding-top: 25px;
  text-align: center;
}

.footer-bottom p {
  color: #b8a3aa;
  font-size: 0.85rem;
  margin-bottom: 5px;
}

.footer-slogan {
  font-size: 0.8rem;
  color: #b8a3aa;
  opacity: 0.6;
}

/* ========== RESPONSIVIDADE ========== */

/* Tablet */
@media (max-width: 992px) {
  .footer {
    padding: 50px 0 20px;
  }
  
  .footer-content {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
  
  .footer-logo {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  .footer-logo img {
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer-tagline {
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer-links h4::after,
  .footer-contact h4::after,
  .footer-social h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-links h4,
  .footer-contact h4,
  .footer-social h4 {
    text-align: center;
  }
  
  .footer-links ul {
    text-align: center;
  }
  
  .contact-item {
    justify-content: center;
    text-align: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .footer-badge {
    margin-left: auto;
    margin-right: auto;
  }
}

/* Mobile */
@media (max-width: 576px) {
  .footer {
    padding: 40px 0 15px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
  
  .contact-item {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  
  .footer-links ul {
    text-align: center;
  }
  
  .footer-links a {
    padding: 5px 0;
  }
  
  .contact-item i {
    margin-top: 0;
  }
  
  .footer-bottom p {
    font-size: 0.75rem;
  }
}
</style>