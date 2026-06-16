const boton = document.getElementById("btnSorpresa");

boton.addEventListener("click", () => {

    document.querySelector(".contenedor").innerHTML = `

        <h1>💌 Una carta para ti 💌</h1>

        <div class="carta">
            Mi amor,

            <br><br>

            Quiero que sepas que eres una de las personas más importantes de mi vida.

            <br><br>

            Gracias por cada sonrisa, por cada momento compartido y por hacer mis días más felices.

            <br><br>

            ❤️ Te quiero muchísimo ❤️

            <br><br>

            Con cariño,
            <br>
            Tu novio ❤️
        </div>

        <button id="continuar">
            Ver una sorpresa más ❤️
        </button>

    `;

    const continuar = document.getElementById("continuar");

    continuar.addEventListener("click", () => {

        document.querySelector(".contenedor").innerHTML = `

            <h1>🌹 Te Amo 🌹</h1>

                <img src="foto2.jpg.jpeg" alt="Nuestra foto 2">

            <p style="font-size: 22px; color: 
            black;">
                😍 Gracias mami por estar siempre para mí 💘
            </p>

            <div class="frase-final">

                <h2>✨ Eres mi persona favorita ✨</h2>

                <p id="contador"></p>

                <p>
                    💖 Gracias por todos los recuerdos que hemos creado juntos 💖
            </p> </div>

        `;
        const fechaInicio = new Date("2024-10-08");
    const hoy = new Date();

    const diferencia = hoy - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

        document.getElementById("contador").innerHTML =
`💖 Llevamos ${dias} días escribiendo nuestra historia de amor 💖`;

    });
    
});

  setInterval(() => {

    const corazon = document.createElement("div");

    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = window.innerHeight + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);

}, 500);
