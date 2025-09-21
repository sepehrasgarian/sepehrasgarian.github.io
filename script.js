// Simple JavaScript for basic functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Email click functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = 'sepehr.asgarian@gmail.com';
            
            // Try to copy to clipboard first
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email address copied to clipboard!');
                }).catch(() => {
                    // Fallback: allow default email client to open
                });
            }
        });
    });

    // Simple notification system
    function showNotification(message) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #333;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            z-index: 1000;
            font-size: 0.9rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Professional loading - no fade animations
    window.addEventListener('load', function() {
        // Ensure everything is visible immediately
        document.body.style.opacity = '1';
        
        // Remove any potential loading states
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    });

    // Add hover effects to publication links
    const publicationLinks = document.querySelectorAll('.publication-link');
    publicationLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click tracking for external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('External link clicked:', this.href);
        });
    });


    // Image Lightbox Functionality
    window.openLightbox = function(imgElement) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        
        lightboxImage.src = imgElement.src;
        lightboxImage.alt = imgElement.alt;
        lightboxCaption.textContent = imgElement.alt;
        
        lightbox.style.display = 'block';
        lightbox.style.opacity = '1';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
        lightbox.style.opacity = '0';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});