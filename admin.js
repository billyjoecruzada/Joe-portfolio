// Billy Joe Cruzada Portfolio - Admin JavaScript

const ADMIN_USERNAME = 'adminjoe';
const ADMIN_PASSWORD = 'joeportfolio12';
const MAX_IMAGE_SIZE = 8 * 1024 * 1024; // 8MB
const MAX_RESIZE_WIDTH = 2000;
const JPEG_QUALITY = 0.85;

// DOM Elements
const loginPage = document.getElementById('loginPage');
const adminDashboard = document.getElementById('adminDashboard');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const confirmModal = document.getElementById('confirmModal');
const changesList = document.getElementById('changesList');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Pending changes for confirmation
let pendingChanges = {};
let tempShowcaseImages = [];

// Check if already logged in
function checkAuth() {
    const auth = localStorage.getItem('portfolio_admin_auth');
    if (auth === 'true') {
        showDashboard();
    } else {
        showLogin();
    }
}

// Show Login Page
function showLogin() {
    loginPage.style.display = 'flex';
    adminDashboard.style.display = 'none';
}

// Show Dashboard
function showDashboard() {
    loginPage.style.display = 'none';
    adminDashboard.style.display = 'block';
    loadAdminData();
}

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem('portfolio_admin_auth', 'true');
        loginError.classList.remove('show');
        showDashboard();
    } else {
        loginError.classList.add('show');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('portfolio_admin_auth');
    showLogin();
});

// Toast Notification
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = 'toast ' + type;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Confirmation Modal
function showConfirmModal(changes, saveFunction) {
    pendingChanges = { changes, saveFunction };
    changesList.innerHTML = changes.map(change => `<p>${change}</p>`).join('');
    confirmModal.classList.add('active');
}

document.getElementById('cancelSave').addEventListener('click', () => {
    confirmModal.classList.remove('active');
    pendingChanges = {};
});

document.getElementById('confirmSave').addEventListener('click', () => {
    confirmModal.classList.remove('active');
    if (pendingChanges.saveFunction) {
        pendingChanges.saveFunction();
    }
    pendingChanges = {};
});

// Image compression for large files
async function compressImage(file) {
    return new Promise((resolve, reject) => {
        if (file.size <= MAX_IMAGE_SIZE && file.type === 'image/jpeg') {
            resolve(file);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > MAX_RESIZE_WIDTH) {
                    height = (height * MAX_RESIZE_WIDTH) / width;
                    width = MAX_RESIZE_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                canvas.toBlob((blob) => {
                    resolve(new File([blob], file.name, { type: 'image/jpeg' }));
                }, 'image/jpeg', JPEG_QUALITY);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Update upload progress
function updateProgress(elementId, percent) {
    const progress = document.getElementById(elementId);
    const bar = progress.querySelector('.upload-progress-bar');
    progress.style.display = 'block';
    bar.style.width = percent + '%';
    if (percent >= 100) {
        setTimeout(() => {
            progress.style.display = 'none';
            bar.style.width = '0%';
        }, 500);
    }
}

// Admin Navigation
document.querySelectorAll('.admin-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`${btn.dataset.section}Section`).classList.add('active');
    });
});

// Save buttons with confirmation
document.querySelectorAll('[data-save]').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.save;
        let changes = [];
        let saveFunction = null;

        switch(section) {
            case 'profile':
                const newName = document.getElementById('adminName').value;
                const newTitle = document.getElementById('adminTitle').value;
                const newBio = document.getElementById('adminBio').value;
                const currentProfile = JSON.parse(localStorage.getItem('portfolio_profile') || '{}');
                if (currentProfile.name !== newName) changes.push(`Name: "${currentProfile.name}" → "${newName}"`);
                if (currentProfile.title !== newTitle) changes.push(`Title changed`);
                if (currentProfile.bio !== newBio) changes.push(`Bio updated`);
                if (document.getElementById('profilePreview').src.includes('base64')) changes.push(`Profile image updated`);
                saveFunction = () => {
                    const profile = {
                        name: newName,
                        title: newTitle,
                        bio: newBio,
                        image: document.getElementById('profilePreview').src || 'Billy ID.jpg'
                    };
                    localStorage.setItem('portfolio_profile', JSON.stringify(profile));
                    showToast('Profile saved successfully!');
                };
                break;
            case 'social':
                const instagram = document.getElementById('adminInstagram').value;
                const linkedin = document.getElementById('adminLinkedin').value;
                const behance = document.getElementById('adminBehance').value;
                const email = document.getElementById('adminEmail').value;
                changes.push(`Instagram: ${instagram}`);
                changes.push(`LinkedIn: ${linkedin}`);
                changes.push(`Behance: ${behance}`);
                changes.push(`Email: ${email}`);
                saveFunction = () => {
                    const social = { instagram, linkedin, behance, email };
                    localStorage.setItem('portfolio_social', JSON.stringify(social));
                    showToast('Social links saved!');
                };
                break;
            case 'services':
                const titles = document.querySelectorAll('.service-title');
                const descs = document.querySelectorAll('.service-desc');
                const services = [];
                titles.forEach((title, i) => {
                    services.push({ title: title.value, description: descs[i].value });
                });
                changes.push(`${services.length} services configured`);
                saveFunction = () => {
                    localStorage.setItem('portfolio_services', JSON.stringify(services));
                    showToast('Services saved!');
                };
                break;
            case 'about':
                const quote = document.getElementById('adminAboutQuote').value;
                const bio = document.getElementById('adminAboutBio').value;
                const location = document.getElementById('adminAboutLocation').value;
                const bioVisible = document.getElementById('adminAboutBioVisible').checked;
                changes.push(`Quote: "${quote}"`);
                changes.push(`Bio updated`);
                changes.push(`Location: ${location}`);
                changes.push(`Bio visibility: ${bioVisible ? 'Shown' : 'Hidden'}`);
                saveFunction = () => {
                    const about = { quote, bio, location, bioVisible };
                    localStorage.setItem('portfolio_about', JSON.stringify(about));
                    showToast('About section saved!');
                };
                break;
        }

        if (changes.length > 0) {
            showConfirmModal(changes, saveFunction);
        } else {
            showToast('No changes to save', 'error');
        }
    });
});

// Load Data from localStorage
function loadAdminData() {
    const profile = JSON.parse(localStorage.getItem('portfolio_profile') || 'null') || getDefaultProfile();
    const social = JSON.parse(localStorage.getItem('portfolio_social') || 'null') || getDefaultSocial();
    const featured = JSON.parse(localStorage.getItem('portfolio_featured') || 'null') || getDefaultFeatured();
    const gallery = JSON.parse(localStorage.getItem('portfolio_gallery') || 'null') || getDefaultGallery();
    const showcases = JSON.parse(localStorage.getItem('portfolio_showcases') || 'null') || getDefaultShowcases();
    const services = JSON.parse(localStorage.getItem('portfolio_services') || 'null') || getDefaultServices();
    const about = JSON.parse(localStorage.getItem('portfolio_about') || 'null') || getDefaultAbout();
    const experience = JSON.parse(localStorage.getItem('portfolio_experience') || 'null') || [];

    // Populate Profile
    document.getElementById('adminName').value = profile.name;
    document.getElementById('adminTitle').value = profile.title;
    document.getElementById('adminBio').value = profile.bio;
    if (profile.image && profile.image !== 'Billy ID.jpg') {
        document.getElementById('profilePreview').src = profile.image;
        document.getElementById('profilePreview').style.display = 'block';
    }

    // Populate Social
    document.getElementById('adminInstagram').value = social.instagram;
    document.getElementById('adminLinkedin').value = social.linkedin;
    document.getElementById('adminBehance').value = social.behance;
    document.getElementById('adminEmail').value = social.email;

    // Populate About
    document.getElementById('adminAboutQuote').value = about.quote || '';
    document.getElementById('adminAboutBio').value = about.bio || '';
    document.getElementById('adminAboutLocation').value = about.location || '';
    document.getElementById('adminAboutBioVisible').checked = about.bioVisible !== false;

    // Render Galleries
    renderFeaturedGallery(featured);
    renderGalleryAdmin(gallery);
    renderShowcasesAdmin(showcases);
    renderServicesAdmin(services);
    renderExperienceAdmin(experience);
}
    // Populate Profile
    document.getElementById('adminName').value = profile.name;
    document.getElementById('adminTitle').value = profile.title;
    document.getElementById('adminBio').value = profile.bio;
    if (profile.image && profile.image !== 'Billy ID.jpg') {
        document.getElementById('profilePreview').src = profile.image;
        document.getElementById('profilePreview').style.display = 'block';
    }

    // Populate Social
    document.getElementById('adminInstagram').value = social.instagram;
    document.getElementById('adminLinkedin').value = social.linkedin;
    document.getElementById('adminBehance').value = social.behance;
    document.getElementById('adminEmail').value = social.email;

    // Populate About
    document.getElementById('adminAboutQuote').value = about.quote || '';
    document.getElementById('adminAboutBio').value = about.bio || '';
    document.getElementById('adminAboutLocation').value = about.location || '';
    document.getElementById('adminAboutBioVisible').checked = about.bioVisible !== false;

    // Render Galleries
    renderFeaturedGallery(featured);
    renderGalleryAdmin(gallery);
    renderShowcasesAdmin(showcases);
    renderServicesAdmin(services);
    renderExperienceAdmin(experience);
}

// Default Data
function getDefaultProfile() {
    return {
        name: 'Billy Joe Cruzada',
        title: 'Graphic Designer | Photographer | Photo Editor | Generative AI Specialist',
        bio: 'Creative professional with 5+ years of experience...',
        image: 'Billy ID.jpg'
    };
}

function getDefaultSocial() {
    return {
        instagram: 'https://www.instagram.com/ezii_yooow',
        linkedin: 'https://linkedin.com/in/iam-billycruzada/',
        behance: 'https://behance.net/billyjoeCrzGraphx',
        email: 'billyjoecruzada12@gmail.com'
    };
}

function getDefaultFeatured() {
    return [
        { id: 1, src: 'Elements/Designs/Food Product Design/(1) Primary Logo.jpg', title: 'Kamote Chips', category: 'Food Product Design' },
        { id: 2, src: 'Elements/Designs/Food Product Design/(3) Best-seller-A.jpg', title: 'Kamote Chips Ad', category: 'Food Product Design' },
        { id: 3, src: 'Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg', title: 'Passiflora', category: 'Health & Wellness' },
        { id: 4, src: 'Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg', title: 'Passiflora Mockup', category: 'Health & Wellness' },
        { id: 5, src: 'Elements/Designs/Print Designs/Nmax ii color 1 variation.png', title: 'Nmax Design', category: 'Print' },
        { id: 6, src: 'Elements/Designs/Print Designs/Shirt mockup.jpg', title: 'Shirt Design', category: 'Print' }
    ];
}

function getDefaultGallery() {
    return [
        { id: 1, src: 'Elements/Photography/Julia re processed 2.jpg', title: 'Portrait', category: 'portrait' },
        { id: 2, src: 'Elements/Photography/Julia re processed 5.jpg', title: 'Portrait', category: 'portrait' },
        { id: 3, src: 'Elements/Photography/Julia re processed 7.jpg', title: 'Portrait', category: 'portrait' },
        { id: 4, src: 'Elements/Photography/Julia re processed 11.jpg', title: 'Portrait', category: 'portrait' },
        { id: 5, src: 'Elements/Photography/1x1 format IG 2.jpg', title: 'Portrait', category: 'portrait' },
        { id: 6, src: 'Elements/Photography/1x1 format IG 4.jpg', title: 'Portrait', category: 'portrait' },
        { id: 7, src: 'Elements/Photography/1x1 format IG 7.jpg', title: 'Portrait', category: 'portrait' },
        { id: 8, src: 'Elements/Photography/1x1 format IG 9x.jpg', title: 'Portrait', category: 'portrait' },
        { id: 9, src: 'Elements/Photography/1x1 format IG 11.jpg', title: 'Portrait', category: 'portrait' },
        { id: 10, src: 'Elements/Photography/1x1 format IG 15.jpg', title: 'Portrait', category: 'portrait' },
        { id: 11, src: 'Elements/Photography/Food Samgy1-01.jpg', title: 'Food Photography', category: 'food' },
        { id: 12, src: 'Elements/Photography/Food Samgy1-02.jpg', title: 'Food Photography', category: 'food' },
        { id: 13, src: 'Elements/Photography/Malico --8.jpg', title: 'Street Photography', category: 'street' },
        { id: 14, src: 'Elements/Photography/baag --6.jpg', title: 'Street Photography', category: 'street' },
        { id: 15, src: 'Elements/Photography/2x3 format IG White BG - 3.jpg', title: 'Portrait', category: 'portrait' }
    ];
}

function getDefaultShowcases() {
    return [
        {
            id: 1,
            title: 'Kamote Chips Branding',
            category: 'Food Product Design',
            tools: ['Ai', 'Ps'],
            isNSFW: false,
            visible: true,
            images: [
                'Elements/Designs/Food Product Design/(1) Primary Logo.jpg',
                'Elements/Designs/Food Product Design/(2) Front - Kamote behanc.jpg',
                'Elements/Designs/Food Product Design/(3) Best-seller-A.jpg',
                'Elements/Designs/Food Product Design/(4) Kamote-Chips-ad-001.jpg'
            ]
        },
        {
            id: 2,
            title: 'Passiflora Perfume',
            category: 'Health & Wellness',
            tools: ['Ai', 'Ps'],
            isNSFW: false,
            visible: true,
            images: [
                'Elements/Designs/Health and Wellness/(1) Artboard 19@2x.png',
                'Elements/Designs/Health and Wellness/(2) Artboard 4@2x.png',
                'Elements/Designs/Health and Wellness/(3) Artboard 1@2x.png',
                'Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg',
                'Elements/Designs/Health and Wellness/(6) passiflora-white.jpg',
                'Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg',
                'Elements/Designs/Health and Wellness/(9) passiflora-Business card.jpg'
            ]
        },
        {
            id: 3,
            title: 'Print Designs',
            category: 'Print',
            tools: ['Ai', 'Ps'],
            isNSFW: false,
            visible: true,
            images: [
                'Elements/Designs/Print Designs/Nmax ii color 1 variation.png',
                'Elements/Designs/Print Designs/Nmax mock up.jpg',
                'Elements/Designs/Print Designs/Shirt mockup.jpg',
                'Elements/Designs/Print Designs/Shirt mockup 2.jpg'
            ]
        },
        {
            id: 4,
            title: 'OFM AI Contents',
            category: 'Generative AI',
            tools: ['Seedream', 'Nano Banana', 'Higgsfield'],
            isNSFW: true,
            visible: true,
            images: [
                'Elements/🌶OFM - Generative AI (Explicit)/Asian Girl/hf_20260227_084939_cf4c5dc9-24c7-470b-bfab-736df78742e6.jpeg',
                'Elements/🌶OFM - Generative AI (Explicit)/Asian Girl/hf_20260227_083132_b09553e3-9ae8-4592-8401-ffa7329ea321.jpeg',
                'Elements/🌶OFM - Generative AI (Explicit)/Asian Girl/hf_20260227_083132_c19d0c36-b3f6-4489-ad7d-5efd5e75bff3.jpeg',
                'Elements/🌶OFM - Generative AI (Explicit)/Latina Girl/seedream-i2i-1773811404667-0.png',
                'Elements/🌶OFM - Generative AI (Explicit)/Latina Girl/seedream-i2i-1773811544408-0.png',
                'Elements/🌶OFM - Generative AI (Explicit)/Latina Girl/seedream-i2i-1773811404306-1.png',
                'Elements/🌶OFM - Generative AI (Explicit)/White Girl/seedream-i2i-1772188655245-1.png',
                'Elements/🌶OFM - Generative AI (Explicit)/White Girl/seedream-i2i-1772189062112-0.png',
                'Elements/🌶OFM - Generative AI (Explicit)/White Girl/seedream-i2i-1772191279662-1.png'
            ]
        }
    ];
}

function getDefaultServices() {
    return [
        { title: 'Brand Identity', description: 'Comprehensive brand systems including logos, typography, color palettes, and guidelines.' },
        { title: 'Digital Art', description: 'Custom illustrations, digital paintings, and visual artwork.' },
        { title: 'Print Design', description: 'Posters, packaging, business cards, and print collateral.' },
        { title: 'Generative AI Specialist', description: 'Using various generative AI tools to produce high quality AI generated image, video and audio contents.' }
    ];
}

function getDefaultAbout() {
    return {
        quote: 'Design is not just what it looks like. Design is how it works.',
        bio: 'Creative professional with 5+ years of experience...',
        location: 'Based on Tarlac, Philippines',
        bioVisible: true
    };
}

// Profile Image Upload
document.getElementById('profileUploadArea').addEventListener('click', () => {
    document.getElementById('profileImageInput').click();
});

document.getElementById('profileImageInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
        updateProgress('profileUploadProgress', 30);
        try {
            const compressed = await compressImage(file);
            updateProgress('profileUploadProgress', 70);
            const dataUrl = await fileToBase64(compressed);
            updateProgress('profileUploadProgress', 100);
            document.getElementById('profilePreview').src = dataUrl;
            document.getElementById('profilePreview').style.display = 'block';
            showToast('Image uploaded successfully!');
        } catch (error) {
            showToast('Error uploading image', 'error');
        }
    }
});

// Featured Gallery
function renderFeaturedGallery(items) {
    const container = document.getElementById('featuredGallery');
    container.innerHTML = items.map((item, index) => `
        <div class="gallery-admin-item">
            <img src="${item.src}" alt="${item.title}">
            <button class="delete-btn" data-index="${index}" data-type="featured">&times;</button>
        </div>
    `).join('');

    container.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(btn.dataset.index);
            const type = btn.dataset.type;
            deleteGalleryItem(index, type);
        });
    });
}

function renderGalleryAdmin(items) {
    const container = document.getElementById('adminGallery');
    container.innerHTML = items.map((item, index) => `
        <div class="gallery-admin-item">
            <img src="${item.src}" alt="${item.title}">
            <button class="delete-btn" data-index="${index}" data-type="gallery">&times;</button>
        </div>
    `).join('');

    container.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(btn.dataset.index);
            const type = btn.dataset.type;
            deleteGalleryItem(index, type);
        });
    });
}

function deleteGalleryItem(index, type) {
    const key = type === 'featured' ? 'portfolio_featured' : 'portfolio_gallery';
    let items = JSON.parse(localStorage.getItem(key) || 'null') || (type === 'featured' ? getDefaultFeatured() : getDefaultGallery());
    items.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(items));
    if (type === 'featured') {
        renderFeaturedGallery(items);
    } else {
        renderGalleryAdmin(items);
    }
    showToast('Image deleted');
}

// Featured Image Upload
document.getElementById('featuredUploadArea').addEventListener('click', () => {
    document.getElementById('featuredImageInput').click();
});

document.getElementById('featuredImageInput').addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    const featured = JSON.parse(localStorage.getItem('portfolio_featured') || 'null') || getDefaultFeatured();
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        updateProgress('featuredUploadProgress', ((i + 1) / files.length) * 100);
        try {
            const compressed = await compressImage(file);
            const dataUrl = await fileToBase64(compressed);
            const newItem = {
                id: Date.now() + i,
                src: dataUrl,
                title: 'New Artwork',
                category: 'Featured'
            };
            featured.push(newItem);
        } catch (error) {
            console.error('Error processing image:', error);
        }
    }
    
    localStorage.setItem('portfolio_featured', JSON.stringify(featured));
    renderFeaturedGallery(featured);
    showToast(`${files.length} image(s) added!`);
    e.target.value = '';
});

// Gallery Image Upload
document.getElementById('galleryUploadArea').addEventListener('click', () => {
    document.getElementById('galleryImageInput').click();
});

document.getElementById('galleryImageInput').addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    const category = document.getElementById('galleryCategory').value;
    const gallery = JSON.parse(localStorage.getItem('portfolio_gallery') || 'null') || getDefaultGallery();
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        updateProgress('galleryUploadProgress', ((i + 1) / files.length) * 100);
        try {
            const compressed = await compressImage(file);
            const dataUrl = await fileToBase64(compressed);
            const newItem = {
                id: Date.now() + i,
                src: dataUrl,
                title: 'New Image',
                category: category
            };
            gallery.push(newItem);
        } catch (error) {
            console.error('Error processing image:', error);
        }
    }
    
    localStorage.setItem('portfolio_gallery', JSON.stringify(gallery));
    renderGalleryAdmin(gallery);
    showToast(`${files.length} image(s) added!`);
    e.target.value = '';
});

// Showcases Admin
function renderShowcasesAdmin(showcases) {
    const container = document.getElementById('showcasesList');
    
    if (showcases.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">No showcases yet. Create one above.</p>';
        return;
    }
    
    container.innerHTML = showcases.map((showcase, index) => {
        const nsfwBadge = showcase.isNSFW ? '<span style="background: var(--accent-red); color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-left: 8px;">🌶 +18</span>' : '';
        return `
        <div class="showcase-admin-item" data-index="${index}">
            <div class="showcase-admin-header">
                <h4>${showcase.title}${nsfwBadge} <span style="color: var(--accent-orange); font-size: 12px;">(${showcase.category})</span></h4>
                <div class="showcase-admin-actions">
                    <label class="toggle-switch" style="width: 40px; height: 22px;">
                        <input type="checkbox" ${showcase.visible ? 'checked' : ''} data-index="${index}" class="showcase-visibility">
                        <span class="toggle-slider"></span>
                    </label>
                    <button class="btn btn-danger" style="padding: 8px 16px; font-size: 12px;" data-index="${index}" data-action="delete">Delete</button>
                </div>
            </div>
            <div class="showcase-admin-images">
                ${showcase.images.map((img, imgIndex) => `
                    <div style="position: relative;">
                        <img src="${img}" alt="Showcase image">
                        <button class="delete-btn" data-showcase="${index}" data-img="${imgIndex}" style="opacity: 1;">&times;</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `}).join('');

    // Visibility toggle
    container.querySelectorAll('.showcase-visibility').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            showcases[parseInt(e.target.dataset.index)].visible = e.target.checked;
            localStorage.setItem('portfolio_showcases', JSON.stringify(showcases));
            showToast(`Showcase ${e.target.checked ? 'visible' : 'hidden'}`);
        });
    });

    // Delete showcase
    container.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            showcases.splice(index, 1);
            localStorage.setItem('portfolio_showcases', JSON.stringify(showcases));
            renderShowcasesAdmin(showcases);
            showToast('Showcase deleted');
        });
    });

    // Delete image from showcase
    container.querySelectorAll('.showcase-admin-images .delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const showcaseIndex = parseInt(btn.dataset.showcase);
            showcases[showcaseIndex].images.splice(parseInt(btn.dataset.img), 1);
            localStorage.setItem('portfolio_showcases', JSON.stringify(showcases));
            renderShowcasesAdmin(showcases);
            showToast('Image deleted from showcase');
        });
    });
}

// Add Showcase
document.getElementById('showcaseUploadArea').addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT') {
        document.getElementById('showcaseImageInput').click();
    }
});

document.getElementById('showcaseImageInput').addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    tempShowcaseImages = [];
    const container = document.getElementById('showcaseTempImages');
    container.innerHTML = '';
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        updateProgress('showcaseUploadProgress', ((i + 1) / files.length) * 100);
        try {
            const compressed = await compressImage(file);
            const dataUrl = await fileToBase64(compressed);
            tempShowcaseImages.push(dataUrl);
            container.innerHTML += `<img src="${dataUrl}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">`;
        } catch (error) {
            console.error('Error processing image:', error);
        }
    }
    
    showToast(`${files.length} image(s) selected`);
    e.target.value = '';
});

document.getElementById('addShowcaseBtn').addEventListener('click', () => {
    const title = document.getElementById('newShowcaseTitle').value;
    const category = document.getElementById('newShowcaseCategory').value;
    const toolsRaw = document.getElementById('newShowcaseTools').value;
    const tools = toolsRaw ? toolsRaw.split(',').map(t => t.trim()).filter(t => t) : [];
    const visible = document.getElementById('newShowcaseVisible').checked;
    const isNSFW = document.getElementById('newShowcaseNSFW').checked;
    
    if (!title) {
        showToast('Please enter a title', 'error');
        return;
    }
    
    if (tempShowcaseImages.length === 0) {
        showToast('Please add at least one image', 'error');
        return;
    }
    
    const showcases = JSON.parse(localStorage.getItem('portfolio_showcases') || 'null') || getDefaultShowcases();
    showcases.push({
        id: Date.now(),
        title,
        category,
        tools,
        isNSFW,
        visible,
        images: tempShowcaseImages
    });
    
    localStorage.setItem('portfolio_showcases', JSON.stringify(showcases));
    renderShowcasesAdmin(showcases);
    
    // Reset form
    document.getElementById('newShowcaseTitle').value = '';
    document.getElementById('newShowcaseCategory').value = 'Branding';
    document.getElementById('newShowcaseTools').value = '';
    document.getElementById('newShowcaseVisible').checked = true;
    document.getElementById('newShowcaseNSFW').checked = false;
    document.getElementById('showcaseTempImages').innerHTML = '';
    tempShowcaseImages = [];
    
    showToast('Showcase added successfully!');
});

// Services
function renderServicesAdmin(items) {
    const container = document.getElementById('servicesList');
    container.innerHTML = items.map((service, index) => `
        <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <div class="form-group-admin">
                <label>Service Title</label>
                <input type="text" class="service-title" value="${service.title}" data-index="${index}">
            </div>
            <div class="form-group-admin">
                <label>Description</label>
                <textarea class="service-desc" rows="2" data-index="${index}">${service.description}</textarea>
            </div>
        </div>
    `).join('');
}

// Experience
function renderExperienceAdmin(items) {
    const container = document.getElementById('experienceList');
    if (items.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">No experience entries yet.</p>';
        return;
    }

    container.innerHTML = items.map((exp, index) => `
        <div class="experience-item">
            <h4>${exp.company}</h4>
            <p class="role">${exp.role}</p>
            <p class="period">${exp.period}</p>
            <p class="description">${exp.description}</p>
            <button class="delete-btn" data-index="${index}" style="opacity: 1; position: static; margin-top: 12px;">Delete</button>
        </div>
    `).join('');

    container.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            const experience = JSON.parse(localStorage.getItem('portfolio_experience') || 'null') || [];
            experience.splice(index, 1);
            localStorage.setItem('portfolio_experience', JSON.stringify(experience));
            renderExperienceAdmin(experience);
            showToast('Experience deleted');
        });
    });
}

// Add Experience
document.getElementById('addExperience').addEventListener('click', () => {
    const company = document.getElementById('newExpCompany').value;
    const role = document.getElementById('newExpRole').value;
    const period = document.getElementById('newExpPeriod').value;
    const description = document.getElementById('newExpDesc').value;

    if (!company || !role) {
        showToast('Please fill in at least company and role', 'error');
        return;
    }

    const experience = JSON.parse(localStorage.getItem('portfolio_experience') || 'null') || [];
    experience.push({ id: Date.now(), company, role, period, description });
    localStorage.setItem('portfolio_experience', JSON.stringify(experience));

    // Clear inputs
    document.getElementById('newExpCompany').value = '';
    document.getElementById('newExpRole').value = '';
    document.getElementById('newExpPeriod').value = '';
    document.getElementById('newExpDesc').value = '';

    renderExperienceAdmin(experience);
    showToast('Experience added successfully!');
});

// Initialize
checkAuth();
