// ===== CATEGORY FILTER FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Projects Filter System Loading...');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');

    console.log('=== Filter System Initialized ===');
    console.log('Filter buttons found:', filterButtons.length);
    console.log('Category sections found:', categorySections.length);
    
    // Log all sections
    categorySections.forEach(section => {
        const category = section.getAttribute('data-category');
        console.log(`Section found: ${category}`);
    });

    // Function to show only the selected category
    function showCategory(categoryToShow) {
        console.log(`\n=== Filtering to category: ${categoryToShow} ===`);
        
        categorySections.forEach(section => {
            const sectionCategory = section.getAttribute('data-category');
            
            if (sectionCategory === categoryToShow) {
                console.log(`✓ SHOWING: ${sectionCategory}`);
                section.style.display = 'block';
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                
                void section.offsetHeight;
                
                setTimeout(() => {
                    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 50);
            } else {
                console.log(`✗ HIDING: ${sectionCategory}`);
                section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                section.style.opacity = '0';
                section.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    section.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add click handlers to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');
            console.log(`\n🖱️ Button clicked: ${selectedCategory}`);
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            showCategory(selectedCategory);
            window.history.pushState({}, '', `#${selectedCategory}`);
        });
    });

    // Initial load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetButton = document.querySelector(`[data-category="${hash}"]`);
        if (targetButton) {
            setTimeout(() => targetButton.click(), 300);
        }
    } else {
        setTimeout(() => showCategory('ai-ml'), 100);
    }

    console.log('✅ Filter system ready!');
});