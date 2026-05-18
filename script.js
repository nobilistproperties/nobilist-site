document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. STICKY HEADER ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. SCROLL REVEAL ANIMATIONS (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // --- 3. LANGUAGE SWITCHER (UI Only) ---
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});

// --- 4. MOBILE MENU TOGGLE ---
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.toggle('open');
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// --- 5. MODAL LOGIC ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// --- 6. DYNAMIC PROPERTY MODAL ---
function openPropertyModal(title, loc, price, type, size, desc, imgSrc) {
    // Populate the modal fields
    document.getElementById('pm-title').innerText = title;
    document.getElementById('pm-loc').innerText = loc;
    document.getElementById('pm-price').innerText = price;
    document.getElementById('pm-type').innerText = type;
    document.getElementById('pm-size').innerText = size;
    document.getElementById('pm-desc').innerText = desc;
    document.getElementById('pm-img').src = imgSrc;

    // Dynamically update the WhatsApp link to include the specific property title
    const encodedMessage = encodeURIComponent(`Hello Nobilist, I would like to request the full dossier for the ${title} property.`);
    const waLink = `https://wa.me/905000000000?text=${encodedMessage}`;
    document.getElementById('pm-wa-link').href = waLink;

    // Open the modal
    openModal('propertyModal');
}

// --- 7. FORM VALIDATION & SUBMISSION ---
function validateAndSubmit(event, successDivId) {
    event.preventDefault(); // Prevent page reload
    const form = event.target;
    
    // Simple Email Regex check
    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailInput && !emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Hide form button, show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const successDiv = document.getElementById(successDivId);
    
    if(submitBtn) submitBtn.style.display = 'none';
    if(successDiv) {
        successDiv.style.display = 'block';
        form.reset();
        
        // Reset the form UI after 5 seconds
        setTimeout(() => {
            successDiv.style.display = 'none';
            if(submitBtn) submitBtn.style.display = 'block';
        }, 5000);
    }
}
