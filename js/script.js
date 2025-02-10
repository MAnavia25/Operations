// SCRIPT.JS

// 1. MENU RESPONSIVO (Abrir/Fechar no Mobile)
function toggleMenu() {
    document.getElementById('main-menu').classList.toggle('active');
}

// 2. ABRIR FORMULÁRIO DE RESERVA
function openBookingForm() {
    document.getElementById('booking-modal').style.display = 'block';
}

// 3. FECHAR FORMULÁRIO DE RESERVA
function closeBookingForm() {
    document.getElementById('booking-modal').style.display = 'none';
}

// 4. INICIALIZAÇÃO DO CALENDÁRIO (FullCalendar)
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Flight Operations', start: '2025-02-15' },
            { title: 'Maintenance Check', start: '2025-02-18' },
            { title: 'Training Session', start: '2025-02-22' }
        ]
    });
    calendar.render();
});

// 5. BOTÃO "BACK TO TOP" (Mostrar ou esconder conforme o scroll)
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
