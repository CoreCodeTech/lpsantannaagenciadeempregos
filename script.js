document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SISTEMA DE CORREÇÃO DE NAVBAR (APPLE INSPIRED) ---
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // --- 2. REGISTRO DE MOTOR GSAP SCROLL TRIGGER ---
    gsap.registerPlugin(ScrollTrigger);

    // --- 3. CINEMATIC BACKGROUND ZOOM (Efeito Apple Keynote) ---
    gsap.to(".hero-bg-zoom", {
        scale: 1.15,
        scrollTrigger: {
            trigger: "#inicio",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // --- 4. ORQUESTRAÇÃO DE ANIMAÇÕES INTERNAS DA HERO ---
    const tlHero = gsap.timeline();
    
    tlHero.from(".animate-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
    .from(".animate-text-delayed", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".animate-fade", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.4");

    // --- 5. INTERAÇÕES DE REVELAÇÃO DURANTE O SCROLL (REVEALS) ---
    
    // Revelação de baixo para cima (Padrão para títulos e cards)
    gsap.utils.toArray(".reveal-up").forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // Revelação vindo da esquerda (Imagens/Depoimentos)
    gsap.utils.toArray(".reveal-left").forEach(element => {
        gsap.from(element, {
            x: -60,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

    // Revelação vindo da direita (Textos emparelhados/Depoimentos)
    gsap.utils.toArray(".reveal-right").forEach(element => {
        gsap.from(element, {
            x: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

    // --- 6. ANIMAÇÃO DE CARROSSEL INFINITO (GSAP CINEMATIC MARCAS) ---
    // Faz a esteira de marcas do Sebrae/Gerdau rodar de forma perfeitamente contínua
    gsap.to(".logo-carousel-track", {
        xPercent: -50,
        ease: "none",
        duration: 22, // Tempo em segundos para uma volta completa da esteira
        repeat: -1
    });

    // Faz a esteira das marcas clientes rodar no sentido oposto ou contínuo
    gsap.to(".companies-carousel-track", {
        xPercent: -50,
        ease: "none",
        duration: 26,
        repeat: -1
    });

    // --- 7. MENU MOBILE INTERATIVO ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-item");

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});
