$(document).ready(function () {
    $('#btnBuscar').click(function () {
        buscarPersonaje();
    });

    $('#busqueda').keypress(function (e) {
        if (e.which === 13) {
            buscarPersonaje();
        }
    });

    function buscarPersonaje() {
        const query = $('#busqueda').val().trim();
        const $resultado = $('#resultado');

        if (query === "") {
            $resultado.html(`
                <div class="msg-box">
                    <div class="msg-icon">⚠️</div>
                    <div class="msg-texto">Por favor, ingresá un nombre o un ID</div>
                </div>
            `);
            return;
        }

        let url = "";
        const isIdSearch = !isNaN(query);

        if (isIdSearch) {
            url = `https://rickandmortyapi.com/api/character/${query}`;
        } else {
            url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(query)}`;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Personaje no encontrado");
                }
                return response.json();
            })
            .then(data => {
                let personaje;

                if (isIdSearch) {
                    personaje = data;
                } else {
                    
                    if (data.results && data.results.length > 0) {
                        personaje = data.results[0];
                    } else {
                        throw new Error("Personaje no encontrado");
                    }
                }

                renderCard(personaje);
            })
            .catch(error => {
                $resultado.html(`
                    <div class="msg-box">
                        <div class="msg-icon">👽</div>
                        <div class="msg-texto">Personaje no encontrado</div>
                        <div class="msg-sub">Intentá con otro nombre o ID numérico</div>
                    </div>
                `);
            });
    }

    function renderCard(personaje) {
        const $resultado = $('#resultado');
        
        let statusClass = "unknown";
        let badgeClass = "badge-unknown";

        const statusLower = personaje.status.toLowerCase();
        if (statusLower === "alive") {
            statusClass = "alive";
            badgeClass = "badge-alive";
        } else if (statusLower === "dead") {
            statusClass = "dead";
            badgeClass = "badge-dead";
        }

        const cardHTML = `
            <div class="personaje-card ${statusClass}">
                <img src="${personaje.image}" alt="${personaje.name}" class="card-img-personaje">
                <div class="card-body-rm">
                    <h2 class="card-nombre">${personaje.name}</h2>
                    
                    <div class="mb-3">
                        <span class="badge-estado ${badgeClass}">${personaje.status}</span>
                    </div>

                    <div class="info-row">
                        <div class="info-label">Especie</div>
                        <div class="info-value">${personaje.species}</div>
                    </div>

                    <div class="info-row">
                        <div class="info-label">Última ubicación conocida</div>
                        <div class="info-value">${personaje.location.name}</div>
                    </div>
                </div>
            </div>
        `;

        $resultado.html(cardHTML);
    }
});