// About Page Specific Logic
document.addEventListener('DOMContentLoaded', () => {
    const valueCards = document.querySelectorAll('.value-card');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    valueCards.forEach(card => {
        card.classList.add('pre-animate');
        observer.observe(card);
    });
});
