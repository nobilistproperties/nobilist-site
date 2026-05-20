// --- INTERNATIONALIZATION (i18n) DICTIONARY ---
const translations = {
    en: {
        nav_about: "Philosophy", nav_portfolio: "Portfolio", nav_markets: "Markets", nav_citizenship: "Citizenship", nav_advisory: "Private Advisory", btn_inquire: "Inquire",
        hero_subtitle: "Wealth & Real Estate Advisory", hero_title: "Curating Istanbul's Most Exclusive Assets", hero_desc: "Strategic investment opportunities, waterfront masterpieces, and discrete advisory for global citizens.", hero_cta1: "Explore The Portfolio", hero_cta2: "Request Private Consultation", scroll: "Scroll",
        about_title: "Our Philosophy", about_p1: "Nobilist Properties operates at the intersection of luxury real estate and wealth preservation. We cater exclusively to high-net-worth individuals, family offices, and international investors seeking unparalleled assets in Turkey.", about_p2: "Beyond transactions, we provide rigorous market intelligence, legal coordination, and a highly discrete acquisition process across the Bosphorus, the Aegean Riviera, and prime commercial districts.", about_btn: "Speak with a Director →",
        port_title: "Exclusive Portfolio", port_sub: "A curated selection of off-market and premium assets.", badge_offmarket: "Off-Market", badge_citizen: "Citizenship Eligible", price_request: "Price Upon Request", view_dossier: "View Dossier", prop1_title: "Bosphorus Waterfront Mansion", prop1_loc: "Istanbul, Bosphorus", prop2_title: "Contemporary Aegean Villa", prop2_loc: "Yalıkavak, Bodrum", prop3_title: "Branded Luxury Penthouse", prop3_loc: "Nişantaşı, Istanbul", port_btn: "Request Full Portfolio Access",
        cit_title: "Turkish Citizenship by Investment", cit_desc: "Acquire a globally respected second passport through strategic real estate acquisition. Nobilist Properties orchestrates the entire lifecycle of the investment.", cit_li1: "Curation of officially eligible, high-yield assets.", cit_li2: "Coordination with top-tier legal and valuation experts.", cit_li3: "Seamless title deed transfer and application tracking.", cit_li4: "Post-acquisition asset management and rental positioning.", cit_btn1: "Schedule Briefing", cit_btn2: "View Legal Parameters",
        cont_title: "Initiate a Dialogue", cont_desc: "Discretion and precision define our advisory. Share your acquisition parameters, and a Senior Director will reach out to schedule a private consultation.", cont_hq: "Headquarters:",
        form_name: "Full Name", form_email: "Corporate or Private Email", form_phone: "Phone / WhatsApp (Optional)", form_msg: "Brief outline of your requirements...", form_msg2: "How may we assist you?", form_opt_default: "Primary Interest", form_opt1: "Luxury Acquisition", form_opt2: "Citizenship Program", form_opt3: "Commercial Investment", form_submit: "Submit Inquiry", form_success: "Your inquiry has been securely received. A director will contact you shortly.", form_success2: "Thank you. We will be in touch shortly.",
        foot_desc: "Istanbul's premier real estate investment gateway for the global elite.", foot_nav: "Navigation", foot_legal: "Legal", foot_connect: "Connect", foot_tc: "Terms & Conditions", foot_disc: "Legal Disclaimer", foot_disclaimer: "Information on this website is for general informational purposes only and does not constitute legal, financial, tax, or immigration advice.",
        mod_size: "Size", mod_status: "Status", mod_avail: "Available", mod_btn_dossier: "Request Full Dossier", mod_btn_wa: "Inquire via WhatsApp", mod_cont_title: "Private Inquiry", mod_leg_title: "Legal & Compliance", mod_leg_btn: "Acknowledge & Close"
    },
    tr: {
        nav_about: "Felsefemiz", nav_portfolio: "Portföy", nav_markets: "Piyasalar", nav_citizenship: "Vatandaşlık", nav_advisory: "Özel Danışmanlık", btn_inquire: "İletişim",
        hero_subtitle: "Varlık & Gayrimenkul Danışmanlığı", hero_title: "İstanbul'un En Seçkin Mülkleri", hero_desc: "Küresel yatırımcılar için stratejik fırsatlar, yalılar ve gizlilik odaklı danışmanlık.", hero_cta1: "Portföyü İncele", hero_cta2: "Özel Danışmanlık Talep Et", scroll: "Kaydır",
        about_title: "Felsefemiz", about_p1: "Nobilist Properties, lüks gayrimenkul ve varlık koruma ekseninde faaliyet gösterir. Türkiye'de benzersiz mülkler arayan yüksek net değere sahip bireylere ve uluslararası yatırımcılara özel hizmet veriyoruz.", about_p2: "Sadece alım satım değil; Boğaziçi, Ege Rivierası ve seçkin ticari bölgelerde derin piyasa istihbaratı, hukuki koordinasyon ve gizlilik odaklı bir edinim süreci sunuyoruz.", about_btn: "Bir Direktörle Görüşün →",
        port_title: "Seçkin Portföy", port_sub: "Gizli (Off-market) ve premium mülklerden oluşan özel bir seçki.", badge_offmarket: "Gizli Portföy", badge_citizen: "Vatandaşlığa Uygun", price_request: "Talep Üzerine", view_dossier: "Detayları İncele", prop1_title: "Boğazda Özel Yalı", prop1_loc: "İstanbul, Boğaziçi", prop2_title: "Modern Ege Villası", prop2_loc: "Yalıkavak, Bodrum", prop3_title: "Markalı Lüks Penthouse", prop3_loc: "Nişantaşı, İstanbul", port_btn: "Tam Portföy Erişimi Talep Et",
        cit_title: "Yatırım Yoluyla Türk Vatandaşlığı", cit_desc: "Stratejik gayrimenkul yatırımı ile küresel saygınlığa sahip ikinci bir pasaport edinin. Nobilist Properties tüm süreci baştan sona yönetir.", cit_li1: "Resmi kriterlere uygun, yüksek getirili mülk seçimi.", cit_li2: "Üst düzey hukuk ve değerleme uzmanlarıyla koordinasyon.", cit_li3: "Sorunsuz tapu devri ve başvuru takibi.", cit_li4: "Satın alma sonrası mülk yönetimi ve kiralama stratejisi.", cit_btn1: "Görüşme Planla", cit_btn2: "Hukuki Parametreleri İncele",
        cont_title: "Diyalog Başlatın", cont_desc: "Gizlilik ve kesinlik, danışmanlık anlayışımızın temelidir. Yatırım hedeflerinizi paylaşın, uzman direktörlerimiz size ulaşsın.", cont_hq: "Merkez:",
        form_name: "Adınız Soyadınız", form_email: "Kurumsal veya Kişisel E-posta", form_phone: "Telefon / WhatsApp", form_msg: "Talebinizin kısa bir özeti...", form_msg2: "Size nasıl yardımcı olabiliriz?", form_opt_default: "İlgi Alanınız", form_opt1: "Lüks Mülk Edinimi", form_opt2: "Vatandaşlık Programı", form_opt3: "Ticari Yatırım", form_submit: "Talebi İlet", form_success: "Talebiniz güvenle alınmıştır. Direktörümüz en kısa sürede sizinle iletişime geçecektir.", form_success2: "Teşekkürler. En kısa sürede iletişime geçeceğiz.",
        foot_desc: "Küresel elitler için İstanbul'un prestijli gayrimenkul yatırım kapısı.", foot_nav: "Menü", foot_legal: "Yasal", foot_connect: "İletişim", foot_tc: "Şartlar & Koşullar", foot_disc: "Yasal Uyarı", foot_disclaimer: "Bu web sitesindeki bilgiler genel bilgilendirme amaçlıdır; yasal, finansal, vergi veya göçmenlik tavsiyesi teşkil etmez.",
        mod_size: "Büyüklük", mod_status: "Durum", mod_avail: "Müsait", mod_btn_dossier: "Tam Dosyayı Talep Et", mod_btn_wa: "WhatsApp'tan Bilgi Al", mod_cont_title: "Özel İletişim", mod_leg_title: "Yasal & Uyumluluk", mod_leg_btn: "Onayla ve Kapat"
    }
};

let currentLang = 'en';

function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    // Translate all standard text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key]; // innerHTML allows formatting like →
    });

    // Translate Placeholders in Forms
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. STICKY HEADER ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // --- 2. SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    // --- 3. LANGUAGE SWITCHER LOGIC ---
    const langBtns = document.querySelectorAll('.lang-btn, .lang-btn-mob');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            
            // Update Active Class visually on both Desktop and Mobile buttons
            langBtns.forEach(b => {
                if(b.getAttribute('data-lang') === selectedLang) b.classList.add('active');
                else b.classList.remove('active');
            });
            
            // Execute Translation
            applyLanguage(selectedLang);
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
    document.getElementById('pm-title').innerText = title;
    document.getElementById('pm-loc').innerText = loc;
    document.getElementById('pm-price').innerText = price;
    document.getElementById('pm-type').innerText = type;
    document.getElementById('pm-size').innerText = size;
    document.getElementById('pm-desc').innerText = desc;
    document.getElementById('pm-img').src = imgSrc;

    // Secure, dynamic WhatsApp Routing
    const prefix = currentLang === 'tr' ? "Merhaba Nobilist, şu portföyün tam detaylarını talep ediyorum: " : "Hello Nobilist, I would like to request the full dossier for the ";
    const encodedMessage = encodeURIComponent(prefix + title);
    const waLink = `https://wa.me/905300917796?text=${encodedMessage}`;
    document.getElementById('pm-wa-link').href = waLink;

    openModal('propertyModal');
}

// --- 7. FORM VALIDATION & SUBMISSION ---
function validateAndSubmit(event, successDivId) {
    event.preventDefault(); 
    const form = event.target;
    
    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailInput && !emailRegex.test(emailInput.value)) {
        alert(currentLang === 'tr' ? "Lütfen geçerli bir e-posta adresi girin." : "Please enter a valid email address.");
        return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const successDiv = document.getElementById(successDivId);
    
    if(submitBtn) submitBtn.style.display = 'none';
    if(successDiv) {
        successDiv.style.display = 'block';
        form.reset();
        
        setTimeout(() => {
            successDiv.style.display = 'none';
            if(submitBtn) submitBtn.style.display = 'block';
        }, 5000);
    }
}
