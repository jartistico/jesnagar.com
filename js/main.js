const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const sections = document.querySelectorAll('section[id]');

function highlightLink() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLink.classList.add('active');
            }
        } else {
            if (navLink) {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightLink);

// --- AQUÍ ESTÁ LA CORRECCIÓN ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Enviamos los datos REALMENTE a Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert('✅ Mensaje enviado correctamente. Te contactaré pronto.');
                contactForm.reset();
            } else {
                alert('❌ Hubo un error. Por favor, escríbeme directamente a jesnavarro@gmail.com o por WhatsApp.');
            }
        } catch (error) {
            alert('❌ Error de conexión. Por favor, usa el botón de WhatsApp.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

console.log('%c🦜 Aviario Tuloro', 'font-size: 24px; font-weight: bold; color: #2E7D32;');
console.log('%cCriador de Loros Grises Africanos - Sevilla', 'font-size: 14px; color: #FF6F00;');
console.log('%chttps://tuloro.es', 'font-size: 12px; color: #757575;');
