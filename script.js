// Billy Joe Cruzada Portfolio - Main JavaScript

// Default Data
const defaultData = {
    profile: {
        name: "Billy Joe Cruzada",
        title: "Graphic Designer | Photographer | Photo Editor | Generative AI Specialist",
        bio: "Creative professional with 5+ years of experience specializing in brand identity, digital design, and creative direction. Passionate about transforming ideas into compelling visual stories.",
        image: "Billy ID.jpg"
    },
    social: {
        instagram: "https://www.instagram.com/ezii_yooow",
        linkedin: "https://linkedin.com/in/iam-billycruzada/",
        behance: "https://behance.net/billyjoeCrzGraphx",
        email: "billyjoecruzada12@gmail.com"
    },
    featured: [
        { id: 1, src: "Elements/Designs/Food Product Design/(1) Primary Logo.jpg", title: "Kamote Chips", category: "Food Product Design" },
        { id: 2, src: "Elements/Designs/Food Product Design/(3) Best-seller-A.jpg", title: "Kamote Chips Ad", category: "Food Product Design" },
        { id: 3, src: "Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg", title: "Passiflora", category: "Health & Wellness" },
        { id: 4, src: "Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg", title: "Passiflora Mockup", category: "Health & Wellness" },
        { id: 5, src: "Elements/Designs/Print Designs/Nmax ii color 1 variation.png", title: "Nmax Design", category: "Print" },
        { id: 6, src: "Elements/Designs/Print Designs/Shirt mockup.jpg", title: "Shirt Design", category: "Print" }
    ],
    gallery: [
        { id: 1, src: "Elements/Photography/Julia 1st Process.jpg", title: "Portrait", category: "portrait" },
        { id: 2, src: "Elements/Photography/Julia 1st Process-5.jpg", title: "Portrait", category: "portrait" },
        { id: 3, src: "Elements/Photography/Julia 1st Process-7.jpg", title: "Portrait", category: "portrait" },
        { id: 4, src: "Elements/Photography/Julia 1st Process-11.jpg", title: "Portrait", category: "portrait" },
        { id: 5, src: "Elements/Photography/1x1 format IG 2.jpg", title: "Portrait", category: "portrait" },
        { id: 6, src: "Elements/Photography/1x1 format IG 4.jpg", title: "Portrait", category: "portrait" },
        { id: 7, src: "Elements/Photography/1x1 format IG 7.jpg", title: "Portrait", category: "portrait" },
        { id: 8, src: "Elements/Photography/1x1 format IG 9x.jpg", title: "Portrait", category: "portrait" },
        { id: 9, src: "Elements/Photography/1x1 format IG 11.jpg", title: "Portrait", category: "portrait" },
        { id: 10, src: "Elements/Photography/1x1 format IG 15.jpg", title: "Portrait", category: "portrait" },
        { id: 11, src: "Elements/Photography/Food Samgy1-01.jpg", title: "Food Photography", category: "food" },
        { id: 12, src: "Elements/Photography/Food Samgy1-02.jpg", title: "Food Photography", category: "food" },
        { id: 13, src: "Elements/Photography/KRV DSCF6221-Enhanced-NR.jpg", title: "Portrait", category: "portrait" },
        { id: 14, src: "Elements/Photography/DSCF6543.jpg", title: "Portrait", category: "portrait" },
        { id: 15, src: "Elements/Photography/DSCF6602.jpg", title: "Portrait", category: "portrait" }
    ],
    showcases: [
        {
            id: 1,
            title: "Kamote Chips Branding",
            category: "Food Product Design",
            tools: ["Ai", "Ps"],
            isNSFW: false,
            visible: true,
            images: [
                "Elements/Designs/Food Product Design/(1) Primary Logo.jpg",
                "Elements/Designs/Food Product Design/(2) Front - Kamote behanc.jpg",
                "Elements/Designs/Food Product Design/(3) Best-seller-A.jpg",
                "Elements/Designs/Food Product Design/(4) Kamote-Chips-ad-001.jpg"
            ]
        },
        {
            id: 2,
            title: "Passiflora Perfume",
            category: "Health & Wellness",
            tools: ["Ai", "Ps"],
            isNSFW: false,
            visible: true,
            images: [
                "Elements/Designs/Health and Wellness/(1) Artboard 19@2x.png",
                "Elements/Designs/Health and Wellness/(2) Artboard 4@2x.png",
                "Elements/Designs/Health and Wellness/(3) Artboard 1@2x.png",
                "Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg",
                "Elements/Designs/Health and Wellness/(6) passiflora-white.jpg",
                "Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg",
                "Elements/Designs/Health and Wellness/(9) passiflora-Business card.jpg"
            ]
        },
        {
            id: 3,
            title: "Print Designs",
            category: "Print",
            tools: ["Ai", "Ps"],
            isNSFW: false,
            visible: true,
            images: [
                "Elements/Designs/Print Designs/Nmax ii color 1 variation.png",
                "Elements/Designs/Print Designs/Nmax mock up.jpg",
                "Elements/Designs/Print Designs/Shirt mockup.jpg",
                "Elements/Designs/Print Designs/Shirt mockup 2.jpg"
            ]
        },
        {
            id: 4,
            title: "OFM AI Contents",
            category: "Generative AI",
            tools: ["Seedream", "Nano Banana", "Higgsfield"],
            isNSFW: true,
            visible: true,
            images: [
                "Elements/🌶OFM - Generative AI (Explicit)/Asian Girl/hf_20260227_084939_cf4c5dc9-24c7-470b-bfab-736df78742e6.jpeg",
                "Elements/🌶OFM - Generative AI (Explicit)/Asian Girl/hf_20260227_083132_b09553e3-9ae8-4592-8401-ffa7329ea321.jpeg",
                "Elements/🌶OFM - Generative AI (Explicit)/Asian Girl/hf_20260227_083132_c19d0c36-b3f6-4489-ad7d-5efd5e75bff3.jpeg",
                "Elements/🌶OFM - Generative AI (Explicit)/Latina Girl/seedream-i2i-1773811404667-0.png",
                "Elements/🌶OFM - Generative AI (Explicit)/Latina Girl/seedream-i2i-1773811544408-0.png",
                "Elements/🌶OFM - Generative AI (Explicit)/Latina Girl/seedream-i2i-1773811404306-1.png",
                "Elements/🌶OFM - Generative AI (Explicit)/White Girl/seedream-i2i-1772188655245-1.png",
                "Elements/🌶OFM - Generative AI (Explicit)/White Girl/seedream-i2i-1772189062112-0.png",
                "Elements/🌶OFM - Generative AI (Explicit)/White Girl/seedream-i2i-1772191279662-1.png"
            ]
        }
    ],
    services: [
        { title: "Brand Identity & Visual Design", description: "Creating memorable brand identities including logos, typography systems, color palettes, and comprehensive brand guidelines. I help businesses establish a cohesive visual presence that resonates with their target audience." },
        { title: "Photography & Photo Editing", description: "Professional photography services and expert retouching. From product shots to portraits, I capture moments and transform them into stunning visual content that tells your story." },
        { title: "Print & Packaging Design", description: "Eye-catching print designs for packaging, posters, business cards, and marketing materials. I ensure your brand makes a lasting tangible impression in the physical world." },
        { title: "Generative AI Content Creation", description: "Cutting-edge AI-generated imagery and content using state-of-the-art tools. Specializing in creative AI workflows for marketing, product visualization, and unique artistic expressions." }
    ],
    about: {
        quote: "\"Design is not just what it looks like. Design is how it works.\"",
        bio: "I'm Billy Joe Cruzada, a passionate graphic designer and visual storyteller based in Tarlac, Philippines. With over 5 years of experience in the creative industry, I specialize in transforming ideas into compelling visual experiences.\n\nMy journey began with a fascination for how design can evoke emotions and communicate messages without words. Today, I work with brands and individuals to create visual solutions that not only look stunning but also deliver results.\n\nI believe every project is an opportunity to tell a unique story. Whether it's a brand identity that captures a company's essence, a photograph that freezes a perfect moment, or AI-generated artwork that pushes creative boundaries, I approach each challenge with dedication and creativity.\n\nWhen I'm not designing, you'll find me exploring new creative tools, experimenting with AI art, or capturing the world through my lens.",
        location: "Tarlac City, Philippines",
        bioVisible: true
    }
};

// Load data from localStorage or use defaults
function loadData() {
    const savedProfile = localStorage.getItem('portfolio_profile');
    const savedSocial = localStorage.getItem('portfolio_social');
    const savedFeatured = localStorage.getItem('portfolio_featured');
    const savedGallery = localStorage.getItem('portfolio_gallery');
    const savedShowcases = localStorage.getItem('portfolio_showcases');
    const savedServices = localStorage.getItem('portfolio_services');
    const savedAbout = localStorage.getItem('portfolio_about');

    return {
        profile: savedProfile ? JSON.parse(savedProfile) : defaultData.profile,
        social: savedSocial ? JSON.parse(savedSocial) : defaultData.social,
        featured: savedFeatured ? JSON.parse(savedFeatured) : defaultData.featured,
        gallery: savedGallery ? JSON.parse(savedGallery) : defaultData.gallery,
        showcases: savedShowcases ? JSON.parse(savedShowcases) : defaultData.showcases,
        services: savedServices ? JSON.parse(savedServices) : defaultData.services,
        about: savedAbout ? JSON.parse(savedAbout) : defaultData.about
    };
}

const data = loadData();

// DOM Elements
const heroProfileImage = document.getElementById('heroProfileImage');
const heroBio = document.getElementById('heroBio');
const aboutProfileImage = document.getElementById('aboutProfileImage');
const aboutQuote = document.getElementById('aboutQuote');
const aboutBio = document.getElementById('aboutBio');
const aboutLocation = document.getElementById('aboutLocation');
const featuredGrid = document.getElementById('featuredGrid');
const galleryGrid = document.getElementById('galleryGrid');
const servicesGrid = document.getElementById('servicesGrid');
const showcasesGrid = document.getElementById('showcasesGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxTools = document.getElementById('lightboxTools');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const nav = document.querySelector('.floating-nav');
const navLinks = document.querySelector('.nav-links');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const sections = document.querySelectorAll('section');

// NSFW Modal
const nsfwModal = document.getElementById('nsfwModal');
const nsfwConfirm = document.getElementById('nsfwConfirm');
const nsfwProceed = document.getElementById('nsfwProceed');
const nsfwBack = document.getElementById('nsfwBack');

let pendingNSFWShowcase = null;

function showNSFWModal(showcase) {
    pendingNSFWShowcase = showcase;
    nsfwConfirm.checked = false;
    nsfwProceed.disabled = true;
    nsfwModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideNSFWModal() {
    nsfwModal.classList.remove('active');
    pendingNSFWShowcase = null;
    document.body.style.overflow = '';
}

nsfwConfirm.addEventListener('change', () => {
    nsfwProceed.disabled = !nsfwConfirm.checked;
});

nsfwProceed.addEventListener('click', () => {
    if (pendingNSFWShowcase) {
        sessionStorage.setItem('nsfw_consent_' + pendingNSFWShowcase.id, 'true');
        hideNSFWModal();
        openLightbox(0, pendingNSFWShowcase.images.map((src, i) => ({ src, title: pendingNSFWShowcase.title })), pendingNSFWShowcase.title, pendingNSFWShowcase.tools || []);
    }
});

nsfwBack.addEventListener('click', () => {
    hideNSFWModal();
});

nsfwModal.addEventListener('click', (e) => {
    if (e.target === nsfwModal) {
        hideNSFWModal();
    }
});

// Render Functions
function renderProfile() {
    heroProfileImage.src = data.profile.image;
    heroBio.textContent = data.profile.bio;
    aboutProfileImage.src = data.profile.image;
    if (data.about.quote) aboutQuote.textContent = data.about.quote;
    if (data.about.bio) aboutBio.innerHTML = data.about.bio.replace(/\n/g, '<br>');
    if (data.about.location) aboutLocation.textContent = data.about.location;
    
    // Handle bio visibility
    if (data.about.bioVisible === false) {
        heroBio.classList.add('hidden');
        aboutBio.classList.add('hidden');
        document.getElementById('toggleHeroBio')?.classList.add('hidden-text');
        document.getElementById('toggleAboutBio')?.classList.add('hidden-text');
    }
}

function renderSocial() {
    const instagramLink = document.getElementById('socialInstagram');
    const linkedinLink = document.getElementById('socialLinkedin');
    const behanceLink = document.getElementById('socialBehance');
    const emailLink = document.getElementById('socialEmail');

    if (instagramLink) instagramLink.href = data.social.instagram;
    if (linkedinLink) linkedinLink.href = data.social.linkedin;
    if (behanceLink) behanceLink.href = data.social.behance;
    if (emailLink) emailLink.href = `mailto:${data.social.email}`;
}

function renderFeatured() {
    featuredGrid.innerHTML = data.featured.map((item, index) => `
        <div class="project-card reveal reveal-delay-${(index % 5) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}">
            <div class="overlay">
                <h3>${item.title}</h3>
                <span class="category">${item.category}</span>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function renderShowcases() {
    const visibleShowcases = data.showcases.filter(s => s.visible);
    
    if (visibleShowcases.length === 0) {
        showcasesGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1;">No showcases available.</p>';
        return;
    }
    
    showcasesGrid.innerHTML = visibleShowcases.map((showcase, index) => {
        const previewImages = showcase.images.slice(0, 3);
        const gridClass = previewImages.length >= 3 ? 'showcase-grid-2x2' : '';
        const toolsHtml = showcase.tools && showcase.tools.length > 0 
            ? `<div class="showcase-tools">${showcase.tools.map(t => `<span class="showcase-tool-badge">${t}</span>`).join('')}</div>` 
            : '';
        const isNSFW = showcase.isNSFW;
        const hasConsent = sessionStorage.getItem('nsfw_consent_' + showcase.id) === 'true';
        const blurClass = isNSFW && !hasConsent ? 'nsfw-blur' : '';
        const badgeHtml = isNSFW && !hasConsent 
            ? `<div class="nsfw-badge-overlay"><div class="nsfw-badge-text">🌶 +18</div></div>` 
            : '';
        const dataAttrs = `data-is-nsfw="${isNSFW}" data-showcase-id="${showcase.id}"`;
        
        return `
            <div class="showcase-card reveal reveal-delay-${(index % 3) + 1}" data-index="${index}" ${dataAttrs}>
                <div class="showcase-preview" style="position: relative;">
                    <div class="${gridClass}">
                        ${previewImages.map((img, i) => `
                            <img src="${img}" alt="${showcase.title}" class="preview-img ${blurClass}" data-img-index="${i}">
                        `).join('')}
                    </div>
                    ${badgeHtml}
                </div>
                <div class="showcase-title">
                    <h3>${showcase.title}</h3>
                    <span>${showcase.category}</span>
                    ${toolsHtml}
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function renderGallery(filter = 'all') {
    const filtered = filter === 'all' 
        ? data.gallery 
        : data.gallery.filter(item => item.category === filter);

    galleryGrid.innerHTML = filtered.map((item, index) => `
        <div class="gallery-item reveal reveal-delay-${(index % 4) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}">
        </div>
    `).join('');

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function renderServices() {
    servicesGrid.innerHTML = data.services.map((service, index) => `
        <div class="service-card reveal reveal-delay-${index + 1}">
            <div class="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description.replace(/\n/g, '<br>')}</p>
        </div>
    `).join('');

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Navigation
function handleScroll() {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links > li > a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// Gallery Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
    });
});

// Lightbox
let currentGalleryIndex = 0;
let currentGallery = [];

function openLightbox(index, gallery = data.gallery, title = '', tools = []) {
    currentGallery = gallery;
    currentGalleryIndex = index;
    lightboxImage.src = currentGallery[currentGalleryIndex].src;
    lightboxTitle.textContent = title || '';
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
    
    if (tools.length > 0) {
        lightboxTools.innerHTML = tools.map(tool => `<span class="lightbox-tool-badge">${tool}</span>`).join('');
        lightboxTools.style.display = 'flex';
    } else {
        lightboxTools.style.display = 'none';
    }
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
    lightboxImage.src = currentGallery[currentGalleryIndex].src;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
}

function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
    lightboxImage.src = currentGallery[currentGalleryIndex].src;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-next').addEventListener('click', nextImage);
document.querySelector('.lightbox-prev').addEventListener('click', prevImage);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Gallery Item Click
galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
        const index = parseInt(item.dataset.index);
        const filter = document.querySelector('.filter-btn.active').dataset.filter;
        const filtered = filter === 'all' ? data.gallery : data.gallery.filter(i => i.category === filter);
        openLightbox(index, filtered);
    }
});

// Featured Item Click
featuredGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.project-card');
    if (item) {
        const index = parseInt(item.dataset.index);
        openLightbox(index, data.featured, data.featured[index].title);
    }
});

// Showcase Item Click
showcasesGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.showcase-card');
    if (item) {
        const index = parseInt(item.dataset.index);
        const visibleShowcases = data.showcases.filter(s => s.visible);
        const showcase = visibleShowcases[index];
        
        if (showcase && showcase.images.length > 0) {
            if (showcase.isNSFW && sessionStorage.getItem('nsfw_consent_' + showcase.id) !== 'true') {
                showNSFWModal(showcase);
            } else {
                openLightbox(0, showcase.images.map((src, i) => ({ src, title: showcase.title })), showcase.title, showcase.tools || []);
            }
        }
    }
});

// Contact Form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${data.social.email}?subject=${subject}&body=${body}`;
        
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
    }
});

// Text Toggle
function initTextToggles() {
    const toggleHeroBio = document.getElementById('toggleHeroBio');
    const toggleAboutBio = document.getElementById('toggleAboutBio');
    
    if (toggleHeroBio) {
        toggleHeroBio.addEventListener('click', () => {
            heroBio.classList.toggle('hidden');
            toggleHeroBio.classList.toggle('hidden-text');
            data.about.bioVisible = !heroBio.classList.contains('hidden');
            localStorage.setItem('portfolio_about', JSON.stringify(data.about));
        });
    }
    
    if (toggleAboutBio) {
        toggleAboutBio.addEventListener('click', () => {
            aboutBio.classList.toggle('hidden');
            toggleAboutBio.classList.toggle('hidden-text');
            data.about.bioVisible = !aboutBio.classList.contains('hidden');
            localStorage.setItem('portfolio_about', JSON.stringify(data.about));
        });
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderSocial();
    renderFeatured();
    renderShowcases();
    renderGallery();
    renderServices();
    initTextToggles();

    handleScroll();

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});

// Back to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
