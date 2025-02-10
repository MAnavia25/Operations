// Função para alternar o menu no mobile
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}

// Botão de voltar ao topo
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

// Inicializa o calendário
document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('fullcalendar-container');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listYear'
        },
        events: [
            { title: 'Treinamento UAV', start: '2025-02-15' },
            { title: 'Manutenção preventiva', start: '2025-02-20' },
            { title: 'Briefing operacional', start: '2025-02-20' },
            { title: 'Revisão de segurança', start: '2025-02-25' }
        ],
        eventClick: function(info) {
            alert('Evento: ' + info.event.title + '\nData: ' + info.event.start.toLocaleDateString());
        }
    });

    calendar.render();
});
