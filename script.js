// --- INTERNATIONALIZATION (i18n) DICTIONARY ---
const translations = {
    en: {
        site_title: "Nobilist Properties | Exclusive Real Estate & Wealth Advisory",
        nav_philosophy: "Philosophy", nav_portfolio: "Portfolio", nav_markets: "Markets", nav_citizenship: "Citizenship", nav_legal: "Legal", nav_advisory: "Private Advisory", btn_inquire: "Inquire",
        hero_subtitle: "Wealth & Real Estate Advisory", hero_title: "Curating Istanbul's Most Exclusive Assets", hero_desc: "Strategic investment opportunities, waterfront masterpieces, and discrete advisory for global citizens.", hero_cta1: "Explore The Portfolio", hero_cta2: "Request Private Consultation", scroll: "Scroll",
        
        phil_title: "Advisory Beyond Property", 
        phil_p1: "At Nobilist Properties, we believe real estate is not only a transaction. It is a strategic decision shaped by lifestyle, capital preservation, mobility, legal security, and long-term value.", 
        phil_p2: "Our philosophy is built on selected opportunities, transparent market analysis, and private advisory. We do not aim to present every property in the market. We focus on identifying the right property for the right client, in the right location, with the right investment logic.", 
        phil_p3: "For global citizens, real estate can represent more than ownership. It can create access, stability, lifestyle flexibility, and a stronger connection to one of the world's most dynamic regions.",
        phil_c1_t: "Selected Opportunities", phil_c2_t: "Strategic Perspective", phil_c3_t: "Discreet Advisory", phil_c4_t: "Long-Term Value",
        
        wt_title: "Why Turkey?", wt_c1: "Strategic Geography", wt_c2: "Istanbul's Market Depth", wt_c3: "Bosphorus Scarcity", wt_c4: "Aegean Lifestyle", wt_c5: "Commercial & Hospitality Potential", wt_c6: "Citizenship-Oriented Demand", wt_disc: "Investment decisions should be reviewed with licensed legal, tax, and financial professionals. Market conditions, rental income, resale values, and regulations may change.",
        
        mk_title: "Investment Markets", mk_btn: "Explore Opportunities →",
        mk_1_t: "Istanbul", mk_1_d: "The commercial and cultural heart of the region.",
        mk_2_t: "Bosphorus Line", mk_2_d: "Irreplaceable waterfront legacy assets.",
        mk_3_t: "Nişantaşı & Şişli", mk_3_d: "Prime luxury retail and residential hubs.",
        mk_4_t: "Etiler & Beşiktaş", mk_4_d: "High-demand residential and lifestyle centers.",
        mk_5_t: "Bodrum", mk_5_d: "The Riviera's most exclusive resort destination.",
        mk_6_t: "Marmaris", mk_6_d: "Coastal serenity with strong seasonal yields.",
        mk_7_t: "Akyaka", mk_7_d: "Boutique and nature-integrated retreats.",
        mk_8_t: "Muğla (Broader)", mk_8_d: "Expansive estates and agricultural investments.",
        mk_9_t: "Commercial Real Estate", mk_9_d: "Institutional-grade offices and retail spaces.",
        mk_10_t: "Boutique Hotel Investments", mk_10_d: "High-potential operational assets.",
        
        port_title: "Exclusive Portfolio", port_sub: "A curated selection of off-market and premium assets.", badge_offmarket: "Off-Market", badge_citizen: "Citizenship Eligible", price_req: "Price Upon Request", view_dossier: "View Dossier", port_btn: "Request Full Portfolio Access",
        prop1_t: "Bosphorus Waterfront Mansion", prop1_l: "Istanbul, Bosphorus",
        prop2_t: "Contemporary Aegean Villa", prop2_l: "Yalıkavak, Bodrum",
        prop3_t: "Branded Luxury Penthouse", prop3_l: "Nişantaşı, Istanbul",
        prop4_t: "Akyaka Private Villa", prop4_l: "Akyaka, Muğla",
        prop5_t: "Hisarönü Valley View Villa", prop5_l: "Marmaris, Muğla",
        prop6_t: "Boutique Hotel Investment", prop6_l: "Bodrum Peninsula",
        prop7_t: "Prime Commercial Property", prop7_l: "Levent, Istanbul",
        
        pass_title: "Passport & Residency Advisory", pass_desc: "Real estate can be part of a broader international mobility strategy. Nobilist Properties helps clients understand property-related opportunities in Turkey and coordinates with licensed professionals where legal or immigration guidance is required.",
        pass_c1: "Why Mobility Matters", pass_c2: "Turkey as a Strategic Base", pass_c3: "Property-Led Advisory", pass_c4: "Professional Coordination", pass_disc: "Nobilist Properties does not issue passports, does not provide immigration decisions, and does not guarantee any citizenship, residence permit, passport, or official approval.", pass_btn: "Book a Private Consultation",
        
        cit_title: "Turkish Citizenship by Investment Advisory", cit_desc: "Nobilist Properties assists international investors in exploring real estate opportunities that may be suitable for Turkish Citizenship by Investment. We support clients with property shortlisting, market review, valuation coordination, legal coordination, and transaction planning through a transparent advisory process.", cit_disc: "<strong>Important disclaimer:</strong> Nobilist Properties is not a law firm and does not provide legal, tax, financial, or immigration advice. Citizenship eligibility, investment thresholds, valuation rules, official procedures, and government regulations may change. All clients should consult licensed legal professionals and official authorities before making decisions.", cit_btn1: "Request Citizenship Consultation", cit_btn2: "Read Legal Information",
        
        leg_title: "Legal & Compliance",
        leg_1_t: "General Information Only", leg_1_d: "Content is for informational purposes and does not constitute a binding offer.",
        leg_2_t: "No Legal Advice", leg_2_d: "Nobilist Properties operates exclusively as a real estate consultancy, not a law firm.",
        leg_3_t: "No Financial or Tax Advice", leg_3_d: "Clients must conduct their own due diligence regarding taxation and financial structuring.",
        leg_4_t: "Citizenship & Immigration Disclaimer", leg_4_d: "We do not guarantee state approvals, citizenship, or residency statuses.",
        leg_5_t: "Property Information Disclaimer", leg_5_d: "Details, dimensions, and prices are subject to change and must be verified.",
        leg_6_t: "Third-Party Professionals", leg_6_d: "Legal and valuation services are provided by independent licensed third parties.",
        leg_7_t: "No Guaranteed Returns", leg_7_d: "Past performance or projections do not guarantee future yields or capital appreciation.",
        leg_8_t: "Client Responsibility", leg_8_d: "All investment decisions are made strictly at the client's own risk.",
        
        cont_title: "Initiate a Dialogue", cont_desc: "Discretion and precision define our advisory. Share your acquisition parameters, and a Senior Director will reach out to schedule a private consultation.", cont_hq: "Headquarters:",
        form_name: "Full Name", form_email: "Corporate or Private Email", form_phone: "Phone / WhatsApp (Optional)", form_msg: "Brief outline of your requirements...", form_msg2: "How may we assist you?", form_opt_default: "Primary Interest", form_opt1: "Luxury Acquisition", form_opt2: "Citizenship Program", form_opt3: "Commercial Investment", form_submit: "Submit Inquiry", form_success: "Your inquiry has been securely received. A director will contact you shortly.", form_success2: "Thank you. We will be in touch shortly.",
        
        foot_desc: "Istanbul's premier real estate investment gateway for the global elite.", foot_nav: "Navigation", foot_legal: "Legal", foot_connect: "Connect", foot_tc: "Terms & Conditions", foot_disc: "Legal Disclaimer", foot_disclaimer: "Information on this website is for general informational purposes only and does not constitute legal, financial, tax, or immigration advice.",
        
        mod_size: "Size", mod_status: "Status", mod_avail: "Available", mod_btn_dossier: "Request Full Dossier", mod_btn_wa: "Inquire via WhatsApp", mod_cont_title: "Private Inquiry", mod_inv_title: "Citizenship Consultation", mod_inv_desc: "Request a private briefing regarding eligible luxury assets and advisory coordination.", mod_inv_btn: "Request Consultation", mod_leg_title: "Legal & Compliance", mod_leg_btn: "Acknowledge & Close"
    },
    tr: {
        site_title: "Nobilist Properties | Özel Gayrimenkul ve Varlık Danışmanlığı",
        nav_philosophy: "Felsefe", nav_portfolio: "Portföy", nav_markets: "Piyasalar", nav_citizenship: "Vatandaşlık", nav_legal: "Yasal", nav_advisory: "Özel Danışmanlık", btn_inquire: "İletişim",
        hero_subtitle: "Varlık & Gayrimenkul Danışmanlığı", hero_title: "İstanbul'un En Seçkin Mülkleri", hero_desc: "Küresel yatırımcılar için stratejik fırsatlar, yalılar ve gizlilik odaklı danışmanlık.", hero_cta1: "Portföyü İncele", hero_cta2: "Özel Danışmanlık Talep Et", scroll: "Kaydır",
        
        phil_title: "Mülkün Ötesinde Danışmanlık", 
        phil_p1: "Nobilist Properties olarak gayrimenkulün sadece bir alım satım işlemi olmadığına inanıyoruz. Yaşam tarzı, varlık koruma, hareketlilik, hukuki güvenlik ve uzun vadeli değer ile şekillenen stratejik bir karardır.", 
        phil_p2: "Felsefemiz seçilmiş fırsatlar, şeffaf piyasa analizi ve özel danışmanlık üzerine kuruludur. Piyasadaki her mülkü sunmayı hedeflemiyoruz. Doğru müşteri için, doğru lokasyonda ve doğru yatırım mantığıyla en uygun mülkü belirlemeye odaklanıyoruz.", 
        phil_p3: "Küresel vatandaşlar için gayrimenkul mülkiyetten daha fazlasını temsil eder. Dünyanın en dinamik bölgelerinden biriyle erişim, istikrar, esneklik ve daha güçlü bir bağ kurabilir.",
        phil_c1_t: "Seçilmiş Fırsatlar", phil_c2_t: "Stratejik Perspektif", phil_c3_t: "Gizli Danışmanlık", phil_c4_t: "Uzun Vadeli Değer",
        
        wt_title: "Neden Türkiye?", wt_c1: "Stratejik Coğrafya", wt_c2: "İstanbul'un Pazar Derinliği", wt_c3: "Boğaziçi Az Bulunurluğu", wt_c4: "Ege Yaşam Tarzı", wt_c5: "Ticari ve Turizm Potansiyeli", wt_c6: "Vatandaşlık Odaklı Talep", wt_disc: "Yatırım kararları lisanslı hukuk, vergi ve finans profesyonelleri ile gözden geçirilmelidir. Piyasa koşulları, kira geliri, yeniden satış değerleri ve düzenlemeler değişebilir.",
        
        mk_title: "Yatırım Piyasaları", mk_btn: "Fırsatları Keşfet →",
        mk_1_t: "İstanbul", mk_1_d: "Bölgenin ticari ve kültürel kalbi.",
        mk_2_t: "Boğaz Hattı", mk_2_d: "Yerine konulamaz yalı ve sahil mülkleri.",
        mk_3_t: "Nişantaşı & Şişli", mk_3_d: "Birinci sınıf lüks perakende ve yaşam merkezleri.",
        mk_4_t: "Etiler & Beşiktaş", mk_4_d: "Yüksek talep gören prestijli yerleşim alanları.",
        mk_5_t: "Bodrum", mk_5_d: "Riviera'nın en seçkin tatil destinasyonu.",
        mk_6_t: "Marmaris", mk_6_d: "Güçlü sezonluk getirilere sahip sahil dinginliği.",
        mk_7_t: "Akyaka", mk_7_d: "Butik ve doğayla iç içe özel inziva alanları.",
        mk_8_t: "Muğla (Genel)", mk_8_d: "Geniş araziler ve tarımsal yatırım fırsatları.",
        mk_9_t: "Ticari Gayrimenkul", mk_9_d: "Kurumsal kalitede ofis ve perakende alanları.",
        mk_10_t: "Butik Otel Yatırımları", mk_10_d: "Yüksek potansiyelli operasyonel varlıklar.",
        
        port_title: "Seçkin Portföy", port_sub: "Gizli (Off-market) ve premium mülklerden oluşan özel bir seçki.", badge_offmarket: "Gizli Portföy", badge_citizen: "Vatandaşlığa Uygun", price_req: "Talep Üzerine", view_dossier: "Detayları İncele", port_btn: "Tam Portföy Erişimi Talep Et",
        prop1_t: "Boğazda Özel Yalı", prop1_l: "İstanbul, Boğaziçi",
        prop2_t: "Modern Ege Villası", prop2_l: "Yalıkavak, Bodrum",
        prop3_t: "Markalı Lüks Penthouse", prop3_l: "Nişantaşı, İstanbul",
        prop4_t: "Akyaka Özel Villa", prop4_l: "Akyaka, Muğla",
        prop5_t: "Hisarönü Vadi Manzaralı Villa", prop5_l: "Marmaris, Muğla",
        prop6_t: "Butik Otel Yatırımı", prop6_l: "Bodrum Yarımadası",
        prop7_t: "Prestijli Ticari Mülk", prop7_l: "Levent, İstanbul",
        
        pass_title: "Pasaport ve Oturum Danışmanlığı", pass_desc: "Gayrimenkul, daha geniş bir uluslararası hareketlilik stratejisinin parçası olabilir. Nobilist Properties, müşterilerinin Türkiye'deki mülkle ilgili fırsatları anlamasına yardımcı olur ve hukuki veya göçmenlik rehberliği gerektiğinde lisanslı profesyonellerle koordinasyon sağlar.",
        pass_c1: "Hareketlilik Neden Önemli", pass_c2: "Stratejik Üs Olarak Türkiye", pass_c3: "Mülk Odaklı Danışmanlık", pass_c4: "Profesyonel Koordinasyon", pass_disc: "Nobilist Properties pasaport vermez, göçmenlik kararları almaz ve herhangi bir vatandaşlık, oturum izni, pasaport veya resmi onay garantisi vermez.", pass_btn: "Özel Bir Görüşme Planlayın",
        
        cit_title: "Yatırım Yoluyla Türk Vatandaşlığı Danışmanlığı", cit_desc: "Nobilist Properties, uluslararası yatırımcılara Yatırım Yoluyla Türk Vatandaşlığına uygun olabilecek gayrimenkul fırsatlarını keşfetmelerinde yardımcı olur. Mülk seçimi, piyasa incelemesi, değerleme koordinasyonu, hukuki koordinasyon ve işlem planlaması konularında şeffaf bir danışmanlık süreciyle destek veriyoruz.", cit_disc: "<strong>Önemli yasal uyarı:</strong> Nobilist Properties bir hukuk bürosu değildir ve hukuki, vergisel, finansal veya göçmenlik tavsiyesi vermez. Vatandaşlık uygunluğu, yatırım alt sınırları, değerleme kuralları, resmi prosedürler ve devlet düzenlemeleri değişebilir. Tüm müşteriler karar vermeden önce lisanslı hukuk profesyonellerine ve resmi makamlara danışmalıdır.", cit_btn1: "Vatandaşlık Danışmanlığı Talep Et", cit_btn2: "Yasal Bilgileri Oku",
        
        leg_title: "Yasal & Uyumluluk",
        leg_1_t: "Sadece Genel Bilgilendirme", leg_1_d: "İçerik bilgilendirme amaçlıdır ve bağlayıcı bir teklif teşkil etmez.",
        leg_2_t: "Hukuki Tavsiye Değildir", leg_2_d: "Nobilist Properties hukuk bürosu değil, münhasıran gayrimenkul danışmanlığı olarak faaliyet gösterir.",
        leg_3_t: "Finansal veya Vergi Tavsiyesi Değildir", leg_3_d: "Müşteriler vergilendirme ve finansal yapılandırma konusunda kendi durum tespitlerini yapmalıdır.",
        leg_4_t: "Vatandaşlık ve Göçmenlik Sorumluluk Reddi", leg_4_d: "Devlet onaylarını, vatandaşlık veya oturum statülerini garanti etmiyoruz.",
        leg_5_t: "Mülk Bilgileri Sorumluluk Reddi", leg_5_d: "Detaylar, boyutlar ve fiyatlar değişebilir ve doğrulanmalıdır.",
        leg_6_t: "Üçüncü Taraf Profesyoneller", leg_6_d: "Hukuki ve değerleme hizmetleri bağımsız lisanslı üçüncü taraflarca sağlanır.",
        leg_7_t: "Garantili Getiri Yoktur", leg_7_d: "Geçmiş performans veya projeksiyonlar gelecekteki getirileri veya değer artışını garanti etmez.",
        leg_8_t: "Müşteri Sorumluluğu", leg_8_d: "Tüm yatırım kararları tamamen müşterinin kendi riskindedir.",
        
        cont_title: "Diyalog Başlatın", cont_desc: "Gizlilik ve kesinlik, danışmanlık anlayışımızın temelidir. Yatırım hedeflerinizi paylaşın, uzman direktörlerimiz size ulaşsın.", cont_hq: "Merkez:",
        form_name: "Adınız Soyadınız", form_email: "Kurumsal veya Kişisel E-posta", form_phone: "Telefon / WhatsApp", form_msg: "Talebinizin kısa bir özeti...", form_msg2: "Size nasıl yardımcı olabiliriz?", form_opt_default: "İlgi Alanınız", form_opt1: "Lüks Mülk Edinimi", form_opt2: "Vatandaşlık Programı", form_opt3: "Ticari Yatırım", form_submit: "Talebi İlet", form_success: "Talebiniz güvenle alınmıştır. Direktörümüz en kısa sürede sizinle iletişime geçecektir.", form_success2: "Teşekkürler. En kısa sürede iletişime geçeceğiz.",
        
        foot_desc: "Küresel elitler için İstanbul'un prestijli gayrimenkul yatırım kapısı.", foot_nav: "Menü", foot_legal: "Yasal", foot_connect: "İletişim", foot_tc: "Şartlar & Koşullar", foot_disc: "Yasal Uyarı", foot_disclaimer: "Bu web sitesindeki bilgiler genel bilgilendirme amaçlıdır; yasal, finansal, vergi veya göçmenlik tavsiyesi teşkil etmez.",
        
        mod_size: "Büyüklük", mod_status: "Durum", mod_avail: "Müsait", mod_btn_dossier: "Tam Dosyayı Talep Et", mod_btn_wa: "WhatsApp'tan Bilgi Al", mod_cont_title: "Özel İletişim", mod_inv_title: "Vatandaşlık Danışmanlığı", mod_inv_desc: "Uygun lüks varlıklar ve danışmanlık koordinasyonu hakkında özel bir brifing talep edin.", mod_inv_btn: "Görüşme Talep Et", mod_leg_title: "Yasal & Uyumluluk", mod_leg_btn: "Onayla ve Kapat"
    }
};

let currentLang = 'en';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("nobilistLang", lang);
    const dict = translations[lang];

    if (dict['site_title']) {
        document.title = dict['site_title'];
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("nobilistLang") || "en";
    
    const langBtns = document.querySelectorAll('.lang-btn, .lang-btn-mob');
    langBtns.forEach(b => {
        if(b.getAttribute('data-lang') === savedLang) b.classList.add('active');
        else b.classList.remove('active');
    });

    applyLanguage(savedLang);

    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

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

    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            langBtns.forEach(b => {
                if(b.getAttribute('data-lang') === selectedLang) b.classList.add('active');
                else b.classList.remove('active');
            });
            applyLanguage(selectedLang);
        });
    });
});

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

function openPropertyModal(title, loc, price, type, size, desc, imgSrc) {
    document.getElementById('pm-title').innerText = title;
    document.getElementById('pm-loc').innerText = loc;
    document.getElementById('pm-price').innerText = price;
    document.getElementById('pm-type').innerText = type;
    document.getElementById('pm-size').innerText = size;
    document.getElementById('pm-desc').innerText = desc;
    document.getElementById('pm-img').src = imgSrc;

    const prefix = currentLang === 'tr' ? "Merhaba Nobilist Properties, şu portföyün detaylarını talep ediyorum: " : "Hello Nobilist Properties, I would like to request the full dossier for the ";
    const encodedMessage = encodeURIComponent(prefix + title);
    const waLink = `https://wa.me/905300917796?text=${encodedMessage}`;
    document.getElementById('pm-wa-link').href = waLink;

    openModal('propertyModal');
}

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
