// On attend que la page soit totalement chargée
document.addEventListener('DOMContentLoaded', () => {
    
    // Sélection des éléments
    const burger = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    const headerHeight = 70; // La hauteur de ton header en pixels

    // 1. Gestion du clic sur le bouton Burger
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('open');
        
        // Empêche le scroll de la page quand le menu est ouvert
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    // 2. Fermeture automatique et Scroll fluide ajusté
    const navLinks = document.querySelectorAll('.menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // On récupère l'ID de la section cible (ex: #services)
            const targetId = link.getAttribute('href');
            
            // Si c'est un lien interne (commence par #)
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Empêche le saut brusque
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Calcul de la position : Position de la section - hauteur du header
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    // Scroll fluide vers la position calculée
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }

            // Fermeture du menu mobile
            navMenu.classList.remove('active');
            burger.classList.remove('open');
            body.style.overflow = 'auto';
        });
    });

    // 3. Fermer le menu si on clique à l'extérieur
    window.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !burger.contains(e.target)) {
            navMenu.classList.remove('active');
            burger.classList.remove('open');
            body.style.overflow = 'auto';
        }
    });
});