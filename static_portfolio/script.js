/**
 * Ashutosh Gupta - Standalone Portfolio Custom Script
 * Handles mobile hamburger navigation, sticky headers, scroll spying,
 * dynamic portfolio category filtering, case-study modal triggers,
 * form validations, and back-to-top scroll actions.
 */

// --- DETAILED CASE STUDY DATA FOR PORTFOLIO ITEMS ---
const PROJECT_CASE_STUDIES = {
  'anand-plastics': {
    title: 'Anand Plastics',
    subtitle: 'Social Content & SEO Support',
    category: 'Social Media',
    role: 'Digital Marketing Executive',
    tools: ['Canva', 'WordPress', 'SEO'],
    clientBrief: 'The client requested high-impact, product-centric social media layouts to highlight plastic manufacturing specifications alongside a clean WordPress SEO structure to drive search query traffic.',
    keyActions: [
      'Researched and integrated key plastic industry search terms into the existing website layout.',
      'Designed clean product posters prioritizing product durability and usage information in Canva.',
      'Monitored search terms performance to support continuous WordPress content updates.'
    ],
    deliverables: [
      'Custom Instagram grids & product templates',
      'Optimized WordPress meta tags & alt-texts',
      'Engaging, benefit-driven copy for B2B product posts'
    ]
  },
  'kovark': {
    title: 'Kovark / A Kovark',
    subtitle: 'Instagram Page Support & Content Planning',
    category: 'Social Media',
    role: 'Social Media Management & Design',
    tools: ['Canva', 'Content Writing', 'SEO'],
    clientBrief: 'Kovark needed consistent social brand styling to elevate its Instagram presence. The challenge was aligning caption copy to search trends while maintaining a casual, modern tone.',
    keyActions: [
      'Drafted engaging captions matching the brand voice for multiple posts.',
      'Sourced aesthetic, brand-focused templates to showcase agency capabilities.',
      'Applied on-page SEO best practices during the overall content outline phases.'
    ],
    deliverables: [
      'Social media poster designs with structured grid layouts',
      'Targeted keyword-rich captions for search discovery',
      'Weekly content plans outlining key business offerings'
    ]
  },
  'signxpress': {
    title: 'SignXpress India',
    subtitle: 'SEO Articles & Braille Product Posters',
    category: 'SEO Support',
    role: 'SEO & Product Design Specialist',
    tools: ['Canva', 'SEO Content', 'Keyword Research'],
    clientBrief: 'The objective was to clearly communicate technical features of tactile Braille signage while writing comprehensive, keyword-focused articles explaining regulatory compliance.',
    keyActions: [
      'Performed initial keyword research to identify high-potential searches around accessible signage.',
      'Structured technical content clearly to appeal to both property managers and search engines.',
      'Designed posters visually explaining tactile dots and high-contrast lettering specs.'
    ],
    deliverables: [
      'Minimalist accessibility product visual aids',
      'Deep-dive SEO blogs focusing on signage compliance requirements',
      'Corporate blue-and-white brand guidelines alignment'
    ]
  },
  'satnam-overseas': {
    title: 'Satnam Overseas',
    subtitle: 'Premium Product Design & Presentation',
    category: 'Content Design',
    role: 'Creative Post Designer',
    tools: ['Canva', 'Social Media Design', 'Content Writing'],
    clientBrief: 'Satnam Overseas requested a series of elegant, professional product posts emphasizing environmental friendliness and durability, maintaining a blue-and-white theme.',
    keyActions: [
      'Selected specific typography in Canva to emphasize brand quality.',
      'Highlighted technical product specifications (GSM weight, handle durability) within designs.',
      'Crafted copy outlining bulk procurement opportunities.'
    ],
    deliverables: [
      'Eco-friendly product post banners and listings templates',
      'Concise, benefit-driven product copy focusing on eco-benefits',
      'Consistent, cohesive layout rules for multi-channel posts'
    ]
  },
  'votec': {
    title: 'VOTEC Consulting',
    subtitle: 'Corporate B2B Services Communication',
    category: 'Website Content',
    role: 'B2B Creative Content Executive',
    tools: ['Canva', 'B2B Design', 'Content Structuring'],
    clientBrief: 'The partner needed corporate B2B creatives to present high-end consulting solutions. Complex cloud integration pathways had to be presented clearly and professionaly.',
    keyActions: [
      'Analyzed corporate service offerings to extract core value propositions.',
      'Utilized high-contrast typography and precise corporate alignments in Canva.',
      'Supported general web visibility by arranging structured digital copy.'
    ],
    deliverables: [
      'Service posters mapping SAP and IBM cloud solution benefits',
      'B2B slide templates for digital outreach',
      'Structured textual callouts showing corporate problem-solving capabilities'
    ]
  },
  'akash-blowers': {
    title: 'Akash Blowers',
    subtitle: 'SEO Optimization & WordPress Management',
    category: 'SEO & Optimization',
    role: 'SEO & WordPress Executive',
    tools: ['WordPress', 'SEO', 'Canva'],
    clientBrief: 'Akash Blowers required technical on-page SEO optimization and strategic layout updates on WordPress to rank their heavy industrial blowers higher in B2B search results.',
    keyActions: [
      'Conducted extensive B2B keyword research for industrial fan and centrifugal blower search terms.',
      'Revised WordPress page layouts to increase user engagement and inquiries.',
      'Created and integrated visual product banners matching the corporate blue theme.'
    ],
    deliverables: [
      'Keyword-rich product descriptions and technical specification sheets',
      'Fully optimized meta tags, header tags, and alt-image details',
      'Custom visual banners designed for heavy-duty industrial blowers'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. STICKY HEADER & SCROLL SPY ---
  const header = document.getElementById('nav-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header scrolled state
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy: Highlight active link
    const spyPos = scrollPos + 180;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (spyPos >= top && spyPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


  // --- 2. MOBILE DRAWER NAVIGATION ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const iconMenu = hamburgerBtn.querySelector('.icon-menu');
  const iconClose = hamburgerBtn.querySelector('.icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu() {
    mobileDrawer.classList.toggle('hidden');
    iconMenu.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden'); // Lock body scroll when open
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Close drawer when any mobile nav link is clicked
      if (!mobileDrawer.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    });
  });


  // --- 3. DYNAMIC PORTFOLIO CATEGORY FILTER ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Update active filter button class
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filterValue = e.target.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('fade-out');
          card.classList.add('fade-in');
        } else {
          card.classList.remove('fade-in');
          card.classList.add('fade-out');
        }
      });
    });
  });


  // --- 4. BACK TO TOP FLOATING BUTTON ---
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  // --- 5. CONTACT FORM CLIENT-SIDE VALIDATION & MAILTO ---
  const contactForm = document.getElementById('portfolio-form');
  const successBanner = document.getElementById('form-success-banner');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const companyInput = document.getElementById('form-company');
      const messageInput = document.getElementById('form-message');

      const errName = document.getElementById('err-name');
      const errEmail = document.getElementById('err-email');
      const errMessage = document.getElementById('err-message');

      // Clear previous errors
      errName.textContent = '';
      errEmail.textContent = '';
      errMessage.textContent = '';

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        errName.textContent = 'Please provide your name.';
        isValid = false;
      }

      // Validate email
      if (!emailInput.value.trim()) {
        errEmail.textContent = 'Please provide your email address.';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        errEmail.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate message
      if (!messageInput.value.trim()) {
        errMessage.textContent = 'Please write a message so I can understand your project.';
        isValid = false;
      }

      if (!isValid) return;

      // Successful Front-End Validation -> Trigger mailto link opening
      contactForm.classList.add('hidden');
      successBanner.classList.remove('hidden');

      const clientName = nameInput.value.trim();
      const clientEmail = emailInput.value.trim();
      const clientCompany = companyInput.value.trim() || 'Direct Connection';
      const clientMsg = messageInput.value.trim();

      const subject = `Inquiry from Portfolio - ${clientName} (${clientCompany})`;
      const body = `Hello Ashutosh,\n\nName: ${clientName}\nEmail: ${clientEmail}\nCompany: ${clientCompany}\n\nMessage:\n${clientMsg}\n\n--\nSent via Portfolio Standalone HTML`;

      // Set timeout to let user see success validation state first
      setTimeout(() => {
        window.location.href = `mailto:ratangup386@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }, 1200);

    });
  }

  // --- 7. EDITABLE PROFILE IMAGE SECTION ---
  const profileContainer = document.getElementById('profile-img-container');
  const profileImageInput = document.getElementById('static-profile-input');
  const profileImageEl = document.getElementById('static-profile-image');
  const profileOverlay = document.getElementById('static-profile-overlay');
  const profileBtn = document.getElementById('static-profile-btn');
  const profileError = document.getElementById('static-profile-error');

  if (profileContainer && profileImageInput && profileImageEl) {
    // Load saved image from localStorage
    try {
      const savedImage = localStorage.getItem('ashutosh_profile_image');
      if (savedImage) {
        profileImageEl.src = savedImage;
      }
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }

    // Trigger file picker on click
    const openFilePicker = (e) => {
      e.stopPropagation();
      profileImageInput.click();
    };

    profileContainer.addEventListener('click', openFilePicker);
    profileBtn.addEventListener('click', openFilePicker);

    // Keyboard accessibility
    profileContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        profileImageInput.click();
      }
    });

    // Hover effect styles dynamically handled for absolute precision
    const addHover = () => {
      profileOverlay.style.opacity = '1';
      profileImageEl.style.transform = 'scale(1.1)';
    };
    const removeHover = () => {
      profileOverlay.style.opacity = '0';
      profileImageEl.style.transform = 'scale(1)';
    };

    profileContainer.addEventListener('mouseenter', addHover);
    profileContainer.addEventListener('mouseleave', removeHover);
    profileContainer.addEventListener('focus', addHover);
    profileContainer.addEventListener('blur', removeHover);

    // Handle photo selection
    profileImageInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Validate only image files: JPG, JPEG, PNG, WEBP
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        showPhotoError('Only JPG, JPEG, PNG and WEBP files are allowed.');
        return;
      }

      // Validate size < 5 MB
      if (file.size > 5 * 1024 * 1024) {
        showPhotoError('Image size must be smaller than 5 MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        profileImageEl.src = base64String;
        hidePhotoError();
        try {
          localStorage.setItem('ashutosh_profile_image', base64String);
        } catch (err) {
          console.warn('Failed to save image to localStorage: ', err);
        }
      };
      reader.readAsDataURL(file);
    });

    function showPhotoError(message) {
      profileError.textContent = message;
      profileError.style.display = 'block';
      profileError.style.animation = 'bounce 0.5s ease infinite alternate';
      
      // Inject standard bounce keyframes if they don't exist
      if (!document.getElementById('bounce-keyframe-style')) {
        const style = document.createElement('style');
        style.id = 'bounce-keyframe-style';
        style.innerHTML = `
          @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-4px); }
          }
        `;
        document.head.appendChild(style);
      }

      setTimeout(() => {
        hidePhotoError();
      }, 5000);
    }

    function hidePhotoError() {
      profileError.style.display = 'none';
      profileError.textContent = '';
    }
  }

});

// --- 6. STANDALONE MODAL OVERLAY INJECTIONS (GLOBAL ACCESS) ---
function openModal(projectId) {
  const modal = document.getElementById('case-study-modal');
  const injectTarget = document.getElementById('modal-content-inject');
  const data = PROJECT_CASE_STUDIES[projectId];

  if (!data) return;

  // Injected HTML Structure matching the responsive layout CSS
  const contentHtml = `
    <div class="modal-badge-row">
      <span class="modal-badge">CASE STUDY DETAILS</span>
    </div>
    
    <div class="modal-title-row">
      <h3>${data.title}</h3>
      <p class="modal-subtitle">${data.subtitle}</p>
    </div>

    <div class="modal-meta-row">
      <div class="modal-meta-item">
        <span class="modal-meta-lbl">My Agency Role</span>
        <span class="modal-meta-val">${data.role}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-lbl">Primary Tools</span>
        <div class="modal-meta-tags">
          ${data.tools.map(tool => `<span>${tool}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="modal-body">
      
      <div class="modal-block">
        <h4>The Client Brief</h4>
        <p class="modal-brief-box">${data.clientBrief}</p>
      </div>

      <div class="modal-block">
        <h4>Key Actions Taken</h4>
        <ul class="modal-bullet-list">
          ${data.keyActions.map(action => `<li>${action}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-block">
        <h4>Completed Deliverables</h4>
        <div class="modal-grid-box">
          ${data.deliverables.map(del => `
            <div class="modal-grid-item">
              <span class="modal-grid-dot"></span>
              <span>${del}</span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <div class="modal-footer-row">
      <button class="btn-modal-close" onclick="closeModal()">Close Case Study</button>
    </div>
  `;

  injectTarget.innerHTML = contentHtml;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden'); // Lock background scroll

  // Listen for Escape key to close
  document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {
  const modal = document.getElementById('case-study-modal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden'); // Unlock scroll
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

// Bind modal backdrop click listener to close
document.getElementById('case-study-modal').addEventListener('click', (e) => {
  if (e.target.id === 'case-study-modal') {
    closeModal();
  }
});

// Bind modal cross button click listener
document.getElementById('modal-close').addEventListener('click', closeModal);
