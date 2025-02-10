// Função para alternar o menu no mobile
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}

// Botão de voltar ao topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Verifica se estamos próximos do final da página
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100) {
        backToTopButton.style.opacity = "1";  // Mostra o botão
    } else {
        backToTopButton.style.opacity = "0";  // Esconde o botão
    }
});

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

// Fleet status data
const fleetStatus = {
    "S100": "non-serviceable",
    "S101": "non-serviceable",
    "S102": "non-serviceable",
    "S103": "serviceable",
    "S104": "non-serviceable",
    "S105": "non-serviceable",
    "S106": "non-serviceable",
    "S107": "serviceable",
    "S108": "non-serviceable",
    "S109": "non-serviceable",
    "S110": "non-serviceable",
    "S111": "serviceable",
    "S112": "non-serviceable",
    "S113": "non-serviceable",
    "S114": "non-serviceable",
    "S115": "non-serviceable"
};

// Function to update fleet status dynamically
function updateFleetStatus() {
    const system = document.getElementById('fleet-dropdown').value;
    const status = fleetStatus[system];

    const statusDisplay = document.getElementById('status-display');
    if (status === "serviceable") {
        statusDisplay.innerHTML = `System ${system} is <span style="color: green;">Serviceable</span>`;
    } else {
        statusDisplay.innerHTML = `System ${system} is <span style="color: red;">Non-serviceable</span>`;
    }
}
