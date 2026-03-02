const defaultConfig = {
  hero_title: 'Pixel-Perfect <span class="gradient-text">HTML & CSS</span> Conversion',
  hero_subtitle: 'Transforming designs into fully responsive, production-ready code with clean React.js & Next.js components',
  services_title: 'What I Deliver',
  service_1_title: 'Pixel-Perfect Conversion',
  service_2_title: 'Fully Responsive Layouts',
  service_3_title: 'Clean React.js / Next.js',
  service_4_title: 'Reusable Components',
  cta_button_text: 'Start Your Project',
  background_color: '#0a0a0f',
  surface_color: '#16161f',
  text_color: '#f4f4f5',
  primary_action: '#6366f1',
  secondary_action: '#22d3ee',
  font_family: 'Syne',
  font_size: 16
};

let config = { ...defaultConfig };

function applyColors() {
  const root = document.documentElement;
  root.style.setProperty('--background-color', config.background_color || defaultConfig.background_color);
  root.style.setProperty('--surface-color', config.surface_color || defaultConfig.surface_color);
  root.style.setProperty('--text-color', config.text_color || defaultConfig.text_color);
  root.style.setProperty('--primary-action', config.primary_action || defaultConfig.primary_action);
  root.style.setProperty('--secondary-action', config.secondary_action || defaultConfig.secondary_action);
}

async function onConfigChange(newConfig) {
  config = { ...defaultConfig, ...newConfig };
  applyColors();

  const fontFamily = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.querySelectorAll('.font-display').forEach(el => {
    el.style.fontFamily = `${fontFamily}, Syne, sans-serif`;
  });

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = config.hero_title || defaultConfig.hero_title;
    heroTitle.style.fontSize = `${baseSize * 3}px`;
  }

  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
    heroSubtitle.style.fontSize = `${baseSize * 1.25}px`;
  }

  const servicesTitle = document.getElementById('services-title');
  if (servicesTitle) {
    servicesTitle.textContent = config.services_title || defaultConfig.services_title;
    servicesTitle.style.fontSize = `${baseSize * 2.25}px`;
  }

  const service1 = document.getElementById('service-1');
  if (service1) {
    service1.textContent = config.service_1_title || defaultConfig.service_1_title;
    service1.style.fontSize = `${baseSize * 1.25}px`;
  }

  const service2 = document.getElementById('service-2');
  if (service2) {
    service2.textContent = config.service_2_title || defaultConfig.service_2_title;
    service2.style.fontSize = `${baseSize * 1.25}px`;
  }

  const service3 = document.getElementById('service-3');
  if (service3) {
    service3.textContent = config.service_3_title || defaultConfig.service_3_title;
    service3.style.fontSize = `${baseSize * 1.25}px`;
  }

  const service4 = document.getElementById('service-4');
  if (service4) {
    service4.textContent = config.service_4_title || defaultConfig.service_4_title;
    service4.style.fontSize = `${baseSize * 1.25}px`;
  }

  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.textContent = config.cta_button_text || defaultConfig.cta_button_text;
  }
}

function mapToCapabilities(cfg) {
  return {
    recolorables: [
      {
        get: () => cfg.background_color || defaultConfig.background_color,
        set: (value) => {
          cfg.background_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => cfg.surface_color || defaultConfig.surface_color,
        set: (value) => {
          cfg.surface_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => cfg.text_color || defaultConfig.text_color,
        set: (value) => {
          cfg.text_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => cfg.primary_action || defaultConfig.primary_action,
        set: (value) => {
          cfg.primary_action = value;
          if (window.elementSdk) window.elementSdk.setConfig({ primary_action: value });
        }
      },
      {
        get: () => cfg.secondary_action || defaultConfig.secondary_action,
        set: (value) => {
          cfg.secondary_action = value;
          if (window.elementSdk) window.elementSdk.setConfig({ secondary_action: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => cfg.font_family || defaultConfig.font_family,
      set: (value) => {
        cfg.font_family = value;
        if (window.elementSdk) window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => cfg.font_size || defaultConfig.font_size,
      set: (value) => {
        cfg.font_size = value;
        if (window.elementSdk) window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(cfg) {
  return new Map([
    ['hero_title', cfg.hero_title || defaultConfig.hero_title],
    ['hero_subtitle', cfg.hero_subtitle || defaultConfig.hero_subtitle],
    ['services_title', cfg.services_title || defaultConfig.services_title],
    ['service_1_title', cfg.service_1_title || defaultConfig.service_1_title],
    ['service_2_title', cfg.service_2_title || defaultConfig.service_2_title],
    ['service_3_title', cfg.service_3_title || defaultConfig.service_3_title],
    ['service_4_title', cfg.service_4_title || defaultConfig.service_4_title],
    ['cta_button_text', cfg.cta_button_text || defaultConfig.cta_button_text]
  ]);
}

// Initialization
applyColors();

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Modal functionality
const modal = document.getElementById('contact-modal');
const modalContent = document.getElementById('modal-content');
const ctaBtn = document.getElementById('cta-button');
const closeModalBtn = document.getElementById('close-modal');
const cancelBtn = document.getElementById('cancel-btn');
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const closeSuccessBtn = document.getElementById('close-success');
const submitBtn = document.getElementById('submit-btn');

function openModal() {
  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  modalContent.classList.remove('scale-95', 'translate-y-4');
  modalContent.classList.add('scale-100', 'translate-y-0');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('pointer-events-none', 'opacity-0');
  modal.classList.remove('pointer-events-auto', 'opacity-100');
  modalContent.classList.add('scale-95', 'translate-y-4');
  modalContent.classList.remove('scale-100', 'translate-y-0');
  document.body.style.overflow = '';
  
  setTimeout(() => {
    contactForm.classList.remove('hidden');
    successMessage.classList.add('hidden');
    contactForm.reset();
  }, 300);
}

ctaBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
closeSuccessBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Form Data Collect karein
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('project-type').value;
  const budget = document.getElementById('budget').value;
  const message = document.getElementById('message').value;
  const whatsappNumber = document.getElementById('whatsapp').value;

  // WhatsApp Message taiyar karein
  const myPhoneNumber = "923174407879"; // <-- Yahan apna WhatsApp number likhein (Country code ke saath, bina + ke)
  const text = `*New Project Request!*%0A%0A` +
               `*Name:* ${name}%0A` +
               `*Email:* ${email}%0A` +
               `*Service:* ${service}%0A` +
               `*Budget:* ${budget}%0A` +
               `*WhatsApp:* ${whatsappNumber}%0A` +
               `*Details:* ${message}`;

  const whatsappURL = `https://api.whatsapp.com/send?phone=${myPhoneNumber}&text=${text}`;

  // Button state change
  submitBtn.disabled = true;
  submitBtn.textContent = 'Processing...';
  
  setTimeout(() => {
    // Success message dikhayein
    contactForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Naye Tab mein WhatsApp kholein
    window.open(whatsappURL, '_blank');

    // Reset buttons
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Project Request';
  }, 1000);
});