// ===== CATEGORY FILTER FUNCTIONALITY =====
const filterButtons = document.querySelectorAll('.filter-btn');
const categorySections = document.querySelectorAll('.category-section');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get selected category
        const selectedCategory = button.getAttribute('data-category');
        
        // Filter sections with smooth animation
        categorySections.forEach(section => {
            const sectionCategory = section.getAttribute('data-category');
            
            if (selectedCategory === 'all' || selectedCategory === sectionCategory) {
                section.style.display = 'block';
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 10);
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    section.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== SCROLL ANIMATIONS FOR PROJECT CARDS =====
const projectCards = document.querySelectorAll('.project-card-full');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all project cards
projectCards.forEach(card => {
    card.classList.add('fade-in-up');
    observer.observe(card);
});

// ===== SMOOTH ENTRANCE ANIMATION =====
window.addEventListener('load', () => {
    const hero = document.querySelector('.projects-hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        hero.style.transition = 'all 0.6s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});

// ===== PROJECT CARD HOVER EFFECT WITH PARALLAX =====
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== CATEGORY SECTIONS STAGGER ANIMATION =====
const categorySectionsList = document.querySelectorAll('.category-section');
categorySectionsList.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`;
});

// ===== URL HASH NAVIGATION =====
// Check if URL has a hash for specific category
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1); // Remove the '#'
    
    if (hash) {
        // Find and click the corresponding filter button
        const targetButton = document.querySelector(`[data-category="${hash}"]`);
        if (targetButton) {
            setTimeout(() => {
                targetButton.click();
            }, 500);
        }
    }
});

// Update URL when filter is clicked
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (category !== 'all') {
            window.history.pushState({}, '', `#${category}`);
        } else {
            window.history.pushState({}, '', window.location.pathname);
        }
    });
});

// ===== PROJECT CARD GRADIENT BORDER ANIMATION =====
projectCards.forEach(card => {
    const angle = Math.random() * 360;
    card.style.setProperty('--gradient-angle', `${angle}deg`);
});

// ===== SMOOTH SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
`;
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
    transition: all 0.3s ease;
    z-index: 1000;
`;
scrollToTopBtn.querySelector('svg').style.cssText = `
    width: 24px;
    height: 24px;
    stroke: white;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.boxShadow = '0 6px 25px rgba(124, 58, 237, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.4)';
});

// ===== FILTER COUNT ANIMATION =====
function updateProjectCount() {
    const activeFilter = document.querySelector('.filter-btn.active');
    const category = activeFilter.getAttribute('data-category');
    
    let count = 0;
    if (category === 'all') {
        count = projectCards.length;
    } else {
        categorySections.forEach(section => {
            if (section.getAttribute('data-category') === category) {
                count = section.querySelectorAll('.project-card-full').length;
            }
        });
    }
    
    // You can display this count somewhere if needed
    console.log(`Showing ${count} projects`);
}

filterButtons.forEach(button => {
    button.addEventListener('click', updateProjectCount);
});

// ===== KEYBOARD NAVIGATION FOR FILTERS =====
let currentFilterIndex = 0;
const filterButtonsArray = Array.from(filterButtons);

document.addEventListener('keydown', (e) => {
    // Only handle keyboard navigation when not typing in input fields
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
    }
    
    if (e.key === 'ArrowRight') {
        currentFilterIndex = (currentFilterIndex + 1) % filterButtonsArray.length;
        filterButtonsArray[currentFilterIndex].click();
        filterButtonsArray[currentFilterIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (e.key === 'ArrowLeft') {
        currentFilterIndex = (currentFilterIndex - 1 + filterButtonsArray.length) % filterButtonsArray.length;
        filterButtonsArray[currentFilterIndex].click();
        filterButtonsArray[currentFilterIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

console.log('%c🎨 Projects Page Loaded!', 'color: #7C3AED; font-size: 16px; font-weight: bold;');
console.log('%cUse Arrow Keys to navigate between project categories', 'color: #A78BFA; font-size: 12px;');
