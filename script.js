// Billy Joe Cruzada Portfolio - Main JavaScript

// Default Data
const defaultData = {
    profile: {
        name: "Billy Joe Cruzada",
        title: "Graphic Designer | Video Editor | Photographer | Photo Editor | Generative AI Specialist",
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
        { id: 1, src: "Elements/Designs/Food Product Design/(1) Primary Logo.jpg", title: "Kamote Crisps", category: "Food Product Design" },
        { id: 2, src: "Elements/Designs/Food Product Design/(3) Best-seller.jpg", title: "Kamote Crisps Ad", category: "Food Product Design" },
        { id: 3, src: "Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg", title: "Passiflora", category: "Health & Wellness" },
        { id: 4, src: "Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg", title: "Passiflora Mockup", category: "Health & Wellness" },
        { id: 5, src: "Elements/Designs/Print Designs/Nmax ii color 1 variation.png", title: "Nmax Design", category: "Print" },
        { id: 6, src: "Elements/Designs/Shopify - Berrimora/Logo.png", title: "Berrimora Shopify", category: "Shopify" }
    ],
    gallery: [
        { id: 1, src: "Elements/photography-images/1x1 format IG 2 copy.webp", title: "Portrait", category: "portrait" },
        { id: 2, src: "Elements/photography-images/1x1 format IG 4.jpg", title: "Portrait", category: "portrait" },
        { id: 3, src: "Elements/photography-images/1x1 format IG 7 copy.webp", title: "Portrait", category: "portrait" },
        { id: 4, src: "Elements/photography-images/1x1 format IG 11 copy.webp", title: "Portrait", category: "portrait" },
        { id: 5, src: "Elements/photography-images/1x1 format IG 15 copy.webp", title: "Portrait", category: "portrait" },
        { id: 6, src: "Elements/photography-images/2x3 format IG White BG - 3 copy.webp", title: "Portrait", category: "portrait" },
        { id: 7, src: "Elements/photography-images/2x3 format IG White BG - 6 copy.webp", title: "Portrait", category: "portrait" },
        { id: 8, src: "Elements/photography-images/baag --6 copy.webp", title: "Portrait", category: "portrait" },
        { id: 9, src: "Elements/photography-images/DSCF6543.jpg", title: "Portrait", category: "portrait" },
        { id: 10, src: "Elements/photography-images/DSCF6602.jpg", title: "Portrait", category: "portrait" },
        { id: 11, src: "Elements/photography-images/Food Samgy1-01 copy.webp", title: "Food Photography", category: "food" },
        { id: 12, src: "Elements/photography-images/Food Samgy1-02 copy.webp", title: "Food Photography", category: "food" },
        { id: 13, src: "Elements/photography-images/Grad 2024.jpg", title: "Portrait", category: "portrait" },
        { id: 14, src: "Elements/photography-images/Img-1.jpg", title: "Portrait", category: "portrait" },
        { id: 15, src: "Elements/photography-images/Img-2.jpg", title: "Portrait", category: "portrait" },
        { id: 16, src: "Elements/photography-images/Img-3.jpg", title: "Portrait", category: "portrait" },
        { id: 17, src: "Elements/photography-images/Imga-2.jpg", title: "Portrait", category: "portrait" },
        { id: 18, src: "Elements/photography-images/Imga-3 copy.webp", title: "Portrait", category: "portrait" },
        { id: 19, src: "Elements/photography-images/Julia 1st Process.jpg", title: "Portrait", category: "portrait" },
        { id: 20, src: "Elements/photography-images/Julia 1st Process-5.jpg", title: "Portrait", category: "portrait" },
        { id: 21, src: "Elements/photography-images/Julia 1st Process-7.jpg", title: "Portrait", category: "portrait" },
        { id: 22, src: "Elements/photography-images/Julia 1st Process-11.jpg", title: "Portrait", category: "portrait" },
        { id: 23, src: "Elements/photography-images/KRV DSCF6221-Enhanced-NR copy.webp", title: "Portrait", category: "portrait" }
    ],
    showcases: [
        {
            id: 1,
            title: "Kamote Crisps Branding",
            category: "Food Product Design",
            tools: ["Ai", "Ps", "Ae"],
            visible: true,
            images: [
                "Elements/Designs/Food Product Design/(1) Primary Logo.jpg",
                "Elements/Designs/Food Product Design/(2) Front - Kamote behanc.jpg",
                "Elements/Designs/Food Product Design/(3) Best-seller.jpg",
                "Elements/Designs/Food Product Design/(4) Kamote-Chips-ad-001.jpg",
                "Elements/Designs/Food Product Design/(5) Kamote chips ads sample.mov"
            ]
        },
        {
            id: 2,
            title: "Passiflora Perfume",
            category: "Health & Wellness",
            tools: ["Ai", "Ps"],
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
            title: "Berrimora Shopify Store",
            category: "Shopify",
            tools: ["Ps", "Figma"],
            visible: true,
            images: [
                "Elements/Designs/Shopify - Berrimora/Logo.png",
                "Elements/Designs/Shopify - Berrimora/Berrimora snaps 01.PNG",
                "Elements/Designs/Shopify - Berrimora/Berrimora snaps 02.PNG",
                "Elements/Designs/Shopify - Berrimora/Berrimora snaps 03.PNG",
                "Elements/Designs/Shopify - Berrimora/Backdrop.jpg",
                "Elements/Designs/Shopify - Berrimora/Mobile View.jpg"
            ]
        }
    ],
    aiVideos: [
        {
            id: 1,
            src: "Elements/AI videos - Higgsfield/AI-Seedance footage.mp4",
            title: "AI Seedance Motion",
            tool: "Seedance",
            ratio: "horizontal"
        },
        {
            id: 2,
            src: "Elements/AI videos - Higgsfield/hf_20260605_114930_7583322b-8f04-4e59-b108-d6bebaf1419a.mp4",
            title: "Higgsfield AI 001",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 3,
            src: "Elements/AI videos - Higgsfield/hf_20260605_120624_5e56f7f8-97dd-4f25-957e-01bd78da919d.mp4",
            title: "Higgsfield AI 002",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 4,
            src: "Elements/AI videos - Higgsfield/hf_20260606_104322_abf631e7-9aac-493b-9d22-920cb3913057.mp4",
            title: "Higgsfield AI 003",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 5,
            src: "Elements/AI videos - Higgsfield/YTS_001.mp4",
            title: "YTS 001",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 6,
            src: "Elements/AI videos - Higgsfield/YTS-002.mp4",
            title: "YTS 002",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 7,
            src: "Elements/AI videos - Higgsfield/YTS-007.mp4",
            title: "YTS 007",
            tool: "Higgsfield",
            ratio: "vertical"
        }
    ],
    services: [
        { title: "Brand Identity & Visual Design", description: "Creating memorable brand identities including logos, typography systems, color palettes, and comprehensive brand guidelines. I help businesses establish a cohesive visual presence that resonates with their target audience." },
        { title: "Photography & Photo Editing", description: "Professional photography services and expert retouching. From product shots to portraits, I capture moments and transform them into stunning visual content that tells your story." },
        { title: "Print & Packaging Design", description: "Eye-catching print designs for packaging, posters, business cards, and marketing materials. I ensure your brand makes a lasting tangible impression in the physical world." },
        { title: "Generative AI Content Creation", description: "Cutting-edge AI-generated imagery and content using state-of-the-art tools. Specializing in creative AI workflows for marketing, product visualization, and unique artistic expressions." }
    ],
    about: {
        aboutImage: "Joe portrait.webp",
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
    const savedServices = localStorage.getItem('portfolio_services');
    const savedAIVideos = localStorage.getItem('portfolio_aiVideos');
    const savedAbout = localStorage.getItem('portfolio_about');

    // featured, gallery, and showcases use only defaults to avoid localStorage corruption
    return {
        profile: savedProfile ? JSON.parse(savedProfile) : defaultData.profile,
        social: savedSocial ? JSON.parse(savedSocial) : defaultData.social,
        featured: defaultData.featured,
        gallery: defaultData.gallery,
        showcases: defaultData.showcases,
        services: savedServices ? JSON.parse(savedServices) : defaultData.services,
        aiVideos: savedAIVideos ? JSON.parse(savedAIVideos) : defaultData.aiVideos,
        about: savedAbout ? JSON.parse(savedAbout) : defaultData.about
    };
}

const data = loadData();

function getRandomGallery(pool) {
    return [...pool].sort(() => Math.random() - 0.5);
}

let currentGallery = [];

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
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxTools = document.getElementById('lightboxTools');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const nav = document.querySelector('.floating-nav');
const navLinks = document.querySelector('.nav-links');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const sections = document.querySelectorAll('section');

// Render Functions
function renderProfile() {
    heroBio.textContent = data.profile.bio;
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
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="overlay">
                <h3>${item.title}</h3>
                <span class="category">${item.category}</span>
            </div>
        </div>
    `).join('');

}

function renderShowcases() {
    const visibleShowcases = data.showcases.filter(s => s.visible);
    
    if (visibleShowcases.length === 0) {
        showcasesGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1;">No showcases available.</p>';
        return;
    }
    
    showcasesGrid.innerHTML = visibleShowcases.map((showcase, index) => {
        const previewImages = showcase.images
            .filter(img => !isVideoFile(img))
            .slice(0, 3);
        const gridClass = previewImages.length >= 3 ? 'showcase-grid-2x2' : '';
        const toolsHtml = showcase.tools && showcase.tools.length > 0 
            ? `<div class="showcase-tools">${showcase.tools.map(t => `<span class="showcase-tool-badge">${t}</span>`).join('')}</div>` 
            : '';
        
        return `
            <div class="showcase-card reveal reveal-delay-${(index % 3) + 1}" data-index="${index}">
                <div class="showcase-preview" style="position: relative;">
                    <div class="${gridClass}">
                        ${previewImages.map((img, i) => `
                            <img src="${img}" alt="${showcase.title}" class="preview-img" data-img-index="${i}" loading="lazy">
                        `).join('')}
                    </div>
                </div>
                <div class="showcase-title">
                    <h3>${showcase.title}</h3>
                    <span>${showcase.category}</span>
                    ${toolsHtml}
                </div>
            </div>
        `;
    }).join('');

}

function renderGallery() {
    const shuffledGallery = getRandomGallery(data.gallery);
    currentGallery = shuffledGallery;
    const initialCount = 8;
    const teaserCount = 3;
    const totalVisible = initialCount + teaserCount;
    const hasMore = shuffledGallery.length > totalVisible;

    galleryGrid.innerHTML = shuffledGallery.slice(0, initialCount).map((item, index) => `
        <div class="gallery-item reveal reveal-delay-${(index % 4) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
        </div>
    `).join('');

    if (shuffledGallery.length > initialCount) {
        const teaserItems = shuffledGallery.slice(initialCount, totalVisible);
        galleryGrid.insertAdjacentHTML('beforeend', teaserItems.map((item, i) => {
            const idx = initialCount + i;
            return `
                <div class="gallery-item reveal teaser reveal-delay-${(idx % 4) + 1}" data-index="${idx}">
                    <img src="${item.src}" alt="${item.title}" loading="lazy">
                </div>
            `;
        }).join(''));
    }

    const existingWrapper = document.querySelector('.gallery-show-more');
    if (existingWrapper) existingWrapper.remove();

    if (hasMore) {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-show-more';
        wrapper.innerHTML = `
            <button class="gallery-show-more-btn">
                See more
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        `;
        galleryGrid.parentNode.appendChild(wrapper);

        wrapper.querySelector('.gallery-show-more-btn').addEventListener('click', () => {
            document.querySelectorAll('#galleryGrid .teaser').forEach(el => {
                el.classList.remove('teaser');
            });
            const remaining = shuffledGallery.slice(totalVisible);
            remaining.forEach((item, i) => {
                const idx = totalVisible + i;
                const div = document.createElement('div');
                div.className = 'gallery-item appear';
                div.style.animationDelay = `${i * 0.08}s`;
                div.dataset.index = idx;
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.title;
                img.loading = 'lazy';
                div.appendChild(img);
                galleryGrid.appendChild(div);
            });
            wrapper.remove();
        });
    }
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

}

function renderAIVideos() {
    const aiVideoGrid = document.getElementById('aiVideoGrid');
    if (!aiVideoGrid) return;

    aiVideoGrid.innerHTML = data.aiVideos.map((video, index) => `
        <div class="ai-video-card ${video.ratio} reveal reveal-delay-${(index % 3) + 1}" 
             data-index="${index}"
             data-video="${video.src}" 
             data-title="${video.title}" 
             data-tools="${video.tool}">
            <video preload="metadata" muted loop playsinline>
                <source src="${video.src}" type="video/mp4">
            </video>
            <div class="video-overlay">
                <button class="play-btn" aria-label="Play video">▶</button>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-tools">${video.tool}</div>
            </div>
        </div>
    `).join('');

    // Show first frame as thumbnail
    aiVideoGrid.querySelectorAll('video').forEach(v => {
        v.addEventListener('loadedmetadata', function() {
            this.currentTime = 0.01;
        });
        v.addEventListener('seeked', function() {
            this.pause();
        }, { once: true });
    });

    // Hover: play video from start
    aiVideoGrid.querySelectorAll('.ai-video-card').forEach(card => {
        const video = card.querySelector('video');

        card.addEventListener('mouseenter', () => {
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
        });

        card.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

        // Click: open in lightbox
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.index);
            if (data.aiVideos[index]) {
                openLightbox(index, data.aiVideos, data.aiVideos[index].title, [data.aiVideos[index].tool]);
            }
        });
    });

}

// Navigation
function handleScroll() {
    if (!nav || !sections.length) return;
    
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

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});
window.addEventListener('load', () => {
    handleScroll();
});

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

// Lightbox
let currentGalleryIndex = 0;

function isVideoFile(src) {
    return /\.(mov|mp4|webm)$/i.test(src);
}

function openLightbox(index, gallery = data.gallery, title = '', tools = []) {
    currentGallery = gallery;
    currentGalleryIndex = index;
    const currentSrc = currentGallery[currentGalleryIndex].src || currentGallery[currentGalleryIndex];
    
    if (isVideoFile(currentSrc)) {
        lightboxImage.style.display = 'none';
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = currentSrc;
        lightboxVideo.play();
    } else {
        lightboxVideo.style.display = 'none';
        lightboxVideo.pause();
        lightboxImage.style.display = 'block';
        lightboxImage.src = currentSrc;
    }
    
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
    lightboxVideo.pause();
    lightboxVideo.src = '';
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const currentItem = currentGallery[currentGalleryIndex];
    const currentSrc = currentItem.src || currentItem;
    
    if (isVideoFile(currentSrc)) {
        lightboxImage.style.display = 'none';
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = currentSrc;
        lightboxVideo.play();
    } else {
        lightboxVideo.style.display = 'none';
        lightboxVideo.pause();
        lightboxImage.style.display = 'block';
        lightboxImage.src = currentSrc;
    }
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
    
    if (currentItem.title) {
        lightboxTitle.textContent = currentItem.title;
    }
    
    const itemTools = currentItem.tools || (currentItem.tool ? [currentItem.tool] : []);
    if (itemTools.length > 0) {
        lightboxTools.innerHTML = itemTools.map(t => `<span class="lightbox-tool-badge">${t}</span>`).join('');
        lightboxTools.style.display = 'flex';
    } else {
        lightboxTools.style.display = 'none';
    }
}

function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
    updateLightboxContent();
}

function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxContent();
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
        openLightbox(index, currentGallery);
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
            openLightbox(0, showcase.images.map((src, i) => ({ src, title: showcase.title })), showcase.title, showcase.tools || []);
        }
    }
});

// Video Card Hover & Click
document.querySelectorAll('.video-card').forEach((card, index) => {
    const video = card.querySelector('video');
    
    card.addEventListener('mouseenter', () => {
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
    
    card.addEventListener('click', () => {
        const cards = document.querySelectorAll('.video-card');
        const allData = Array.from(cards).map(c => ({
            src: c.dataset.video,
            title: c.dataset.title,
            tools: c.dataset.tools ? c.dataset.tools.split(',').map(t => t.trim()) : []
        }));
        if (allData[index] && allData[index].src) {
            openLightbox(index, allData, allData[index].title, allData[index].tools);
        }
    });
});

// Contact Form with Formspree
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            contactForm.style.display = 'none';
            formSuccess.classList.add('show');
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        alert('Something went wrong. Please try again or contact via Telegram.');
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
    renderAIVideos();
    initTextToggles();

    handleScroll();

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    setTimeout(handleScroll, 100);
});

// Back to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
