// Плавный скролл
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Пауза видео при скролле за пределы видимости
    const video = document.querySelector('.hero-video video');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, {threshold: 0.5});

    observer.observe(video);
});
// Анимация пунктов меню при наведении
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.7)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.textShadow = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл с учетом высоты шапки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл с учетом фиксированной шапки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

    // Анимация кнопок конфигуратора
    document.querySelectorAll('.btn-configure').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Параллакс эффект для героя
    const hero = document.querySelector('.brand-hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
});
// Обработка формы покупателя
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('customerForm');
    
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Здесь можно добавить AJAX-отправку или другую логику
            alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
            form.reset();
            form.classList.remove('was-validated');
        }
        
        form.classList.add('was-validated');
    }, false);
});

// Добавьте в script.js
function initMap() {
    const location = { lat: 55.751797, lng: 37.615310 }; // Координаты вашего салона
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        styles: [
            // Стили для темной темы карты
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            // ... другие стили
        ]
    });
    new google.maps.Marker({ position: location, map, title: "ELITE MOTORS" });
}
