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

    if (!calendarEl) {
        console.error('O contêiner do calendário não foi encontrado.');
        return;
    }

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
        },
        editable: true,
        selectable: true,
        select: function(info) {
            alert('Selecionado: ' + info.startStr + ' a ' + info.endStr);
        }
    });

    calendar.render();

    // Função do botão para abrir o formulário
    const bookNowButton = document.getElementById('book-now');
    bookNowButton.addEventListener('click', function () {
        document.getElementById('booking-form-container').style.display = 'block';
    });

    // Fechar o formulário
    const closeButton = document.getElementById('close-form');
    closeButton.addEventListener('click', function () {
        document.getElementById('booking-form-container').style.display = 'none';
    });
});
