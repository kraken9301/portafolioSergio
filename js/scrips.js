const projects = [
    {
        titulo: "Sistema    kipuTec",
        descripcion: "Sistema para registro y  control de Kuas de laboratorio.",
        img: "img/proyecto1.jpg",
        sitio: "https://portafoliosers.free.nf/kuas/",
        demo: "https://www.youtube.com/watch?v=VIDEO1"
    },
    {
        titulo: "Calculadora Java",
        descripcion: "Aplicación de consola en Java que realiza operaciones básicas.",
        img: "img/proyecto2.jpg",
        sitio: "#",
        demo: "https://www.youtube.com/watch?v=VIDEO2"
    },
    {
        titulo: "Página de Jugos Verdes",
        descripcion: "Sitio web con HTML y CSS con temática de jugos naturales.",
        img: "img/proyecto3.jpg",
        sitio: "#",
        demo: "https://www.youtube.com/watch?v=VIDEO3"
    }
];

const container = document.getElementById('projects');

projects.forEach(proyecto => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${proyecto.img}" class="card-img-top" alt="${proyecto.titulo}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${proyecto.titulo}</h5>
                <p class="card-text">${proyecto.descripcion}</p>
                <div class="mt-auto d-flex justify-content-between">
                    <a href="${proyecto.sitio}" target="_blank" class="btn btn-primary">Ver Sitio</a>
                    <a href="${proyecto.demo}" target="_blank" class="btn btn-danger">Ver Demo</a>
                </div>
            </div>
        </div>
    `;

    container.appendChild(card);
});
