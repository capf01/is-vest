<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Solicite seu Orçamento</h2>
      <p class="section-subtitle">Preencha o formulário abaixo e receba um atendimento personalizado</p>
      
      <div class="contact-container">
        <div class="contact-info">
          <h3>Informações de Contato</h3>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h4>Endereço</h4>
              <p>Av. Antonina Talarico, 195 - Vila Nhocuné</p>
              <p>São Paulo - SP, 03559-010</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="info-content">
              <h4>WhatsApp</h4>
              <p>(11) 94486-3408</p>
              <span class="info-badge">Atendimento rápido</span>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h4>E-mail</h4>
              <p>confeccao@isvest.com.br</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="info-content">
              <h4>Horário de Atendimento</h4>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
          
          <div class="info-highlight">
            <p>✂️ Solicite seu orçamento sem compromisso!</p>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nome Completo *</label>
            <input type="text" id="name" v-model="form.name" placeholder="Digite seu nome completo" required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="email">E-mail *</label>
              <input type="email" id="email" v-model="form.email" placeholder="seu@email.com" required>
            </div>
            <div class="form-group">
              <label for="phone">Telefone/WhatsApp *</label>
              <input type="tel" id="phone" v-model="form.phone" placeholder="(11) 99999-9999" required>
            </div>
          </div>
          
          <div class="form-group">
            <label for="uniform-type">Tipo de Uniforme *</label>
            <select id="uniform-type" v-model="form.uniformType" required>
              <option value="">Selecione o tipo de uniforme</option>
              <option value="Corporativo">Uniforme Corporativo</option>
              <option value="Cozinha">Uniforme para Cozinha</option>
              <option value="Hospitalar">Uniforme Hospitalar</option>
              <option value="Industrial">Uniforme Industrial</option>
              <option value="Escolar">Uniforme Escolar</option>
              <option value="Esportivo">Uniforme Esportivo</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="quantity">Quantidade (aproximada)</label>
            <input type="text" id="quantity" v-model="form.quantity" placeholder="Ex: 50 unidades, 100 peças, etc.">
          </div>
          
          <div class="form-group">
            <label for="message">Mensagem *</label>
            <textarea id="message" v-model="form.message" rows="4" placeholder="Descreva sua necessidade, como modelo desejado, cores, personalização, etc." required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">
            <i class="fab fa-whatsapp"></i> Enviar Orçamento via WhatsApp
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        uniformType: '',
        quantity: '',
        message: ''
      }
    }
  },
  methods: {
    formatPhoneNumber(phone) {
      return phone.replace(/\D/g, '');
    },
    submitForm() {
      const phoneNumber = '5511944863408';
      
      let whatsappMessage = `*🆕 NOVO PEDIDO DE ORÇAMENTO - IS VEST CONFECÇÕES*\n\n`;
      whatsappMessage += `📋 *DADOS DO CLIENTE*\n`;
      whatsappMessage += `• *Nome:* ${this.form.name}\n`;
      whatsappMessage += `• *E-mail:* ${this.form.email}\n`;
      whatsappMessage += `• *Telefone:* ${this.form.phone}\n\n`;
      whatsappMessage += `👕 *DETALHES DO PEDIDO*\n`;
      whatsappMessage += `• *Tipo de Uniforme:* ${this.form.uniformType}\n`;
      
      if (this.form.quantity) {
        whatsappMessage += `• *Quantidade:* ${this.form.quantity}\n`;
      }
      
      whatsappMessage += `\n📝 *MENSAGEM:*\n${this.form.message}\n\n`;
      whatsappMessage += `---\n`;
      whatsappMessage += `Enviado via Site IS VEST CONFECÇÕES\n`;
      whatsappMessage += `Responder para: ${this.form.phone}`;
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
      } else {
        window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`);
      }
      
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        uniformType: '',
        quantity: '',
        message: ''
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

.contact {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--light-color) 0%, #fff 100%);
  position: relative;
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  margin-top: 30px;
}

/* Informações de Contato */
.contact-info {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(130, 44, 74, 0.1);
}

.contact-info h3 {
  font-size: 1.4rem;
  margin-bottom: 25px;
  color: var(--primary-color);
  position: relative;
  padding-bottom: 12px;
}

.contact-info h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 3px;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  align-items: flex-start;
}

.info-icon {
  width: 40px;
  height: 40px;
  background: rgba(130, 44, 74, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon i {
  color: var(--primary-color);
  font-size: 1.2rem;
}

.info-content h4 {
  font-size: 0.9rem;
  color: var(--gray-color);
  margin-bottom: 5px;
  font-weight: 500;
}

.info-content p {
  color: var(--dark-color);
  margin: 0;
  line-height: 1.5;
  font-weight: 500;
}

.info-badge {
  display: inline-block;
  background: rgba(130, 44, 74, 0.1);
  color: var(--primary-color);
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 20px;
  margin-top: 5px;
}

.info-highlight {
  margin-top: 25px;
  padding: 15px;
  background: linear-gradient(135deg, rgba(130, 44, 74, 0.05), rgba(200, 146, 168, 0.05));
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(130, 44, 74, 0.1);
}

.info-highlight p {
  color: var(--primary-color);
  font-weight: 600;
  margin: 0;
}

/* Formulário */
.contact-form {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(130, 44, 74, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group label {
  font-weight: 600;
  color: var(--dark-color);
  font-size: 0.9rem;
}

.form-group label::after {
  content: '*';
  color: var(--primary-color);
  margin-left: 4px;
}

.form-group label:not([for])::after {
  content: none;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 12px 16px;
  border: 1.5px solid #e8e8e8;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  width: 100%;
  background: #fafafa;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 3px rgba(130, 44, 74, 0.1);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  width: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  margin-top: 10px;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(130, 44, 74, 0.3);
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
}

.btn-primary i {
  font-size: 1.2rem;
}

/* Responsividade */
@media (max-width: 992px) {
  .contact-container {
    gap: 30px;
  }
  
  .contact-info, .contact-form {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 576px) {
  .contact {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .contact-info, .contact-form {
    padding: 20px;
  }
  
  .info-item {
    flex-direction: column;
    gap: 10px;
  }
  
  .info-icon {
    width: 35px;
    height: 35px;
  }
  
  .btn {
    padding: 12px 20px;
    font-size: 0.95rem;
  }
}

@media (max-width: 400px) {
  .section-title {
    font-size: 1.4rem;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>