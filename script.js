// 1. Guardamos la estructura exacta de la primera pantalla en una variable
const vistaInicialHtml = `
    <h1>Para ti mi amor ❤️</h1>
    <img src="img/foto1.jpg.jpeg" alt="Nuestra foto">
    <p style="margin-bottom: 10px;">Tengo algo especial para ti...</p>
    <button id="btnSorpresa">¡Haz clic para ver la sorpresa! ✨</button>
`;

// 2. Esta función activa el comportamiento de toda la página
function iniciarExperiencia() {
    const btnSorpresa = document.getElementById("btnSorpresa");
    
    // Verificamos que el botón exista antes de meterle el evento clic
    if (btnSorpresa) {
        btnSorpresa.addEventListener("click", () => {
            
            // PANTALLA 2: La Carta
            document.querySelector(".contenedor").innerHTML = `
                <h1>💌 Una carta para ti </h1>
                <div class="carta">
                    <strong>Mi amor,</strong><br><br>
                    Quiero que sepas que eres una de las personas más importantes de mi vida.<br><br>
                    Gracias por cada sonrisa, por cada momento compartido y por hacer mis días más felices.<br><br>
                    <strong>Te quiero muchísimo ❤️</strong><br><br>
                    Con cariño,<br>
                    <strong>Tu novio ❤️</strong>
                </div>
                <button id="continuar">Ver una sorpresa más ❤️</button>
            `;

            const btnContinuar = document.getElementById("continuar");
            
            btnContinuar.addEventListener("click", () => {
                
                // PANTALLA 3: El final con el Contador y el Botón de Regreso
                document.querySelector(".contenedor").innerHTML = `
                    <h1>🌹 Te Amo 🌹</h1>
                    <img src="foto2.jpg.jpeg" alt="Nuestra foto 2">
                    <p style="font-size: 18px; color: #4a3f4b; font-weight: 600; margin-bottom: 10px;">
                        😍 Gracias por estar siempre para mí 💘
                    </p>
                    <div class="frase-final">
                        <h2>✨ Eres mi persona favorita ✨</h2>
                        <div id="contador"></div>
                        <p style="font-size: 14px; margin-top: 10px;">
                            💖 Gracias por todos los recuerdos que hemos creado juntos 💖
                        </p>
                    </div>
                    <button id="btnRegresar" 
                        style="margin-top: 20px; background: #ff4d6d; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        Volver al inicio❤️
                    </button>
                `;

                // Cálculo exacto y automático de los más de 900 días (Octubre 2023)
                const fechaInicio = new Date("2023-10-08");
                const hoy = new Date();
                const diferencia = hoy - fechaInicio;
                const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

                document.getElementById("contador").innerHTML = 
                    `💖 Llevamos ${dias} días escribiendo nuestra historia 💖`;

                // PROGRAMACIÓN DEL BOTÓN REGRESAR
                const btnRegresar = document.getElementById("btnRegresar");
                
                btnRegresar.addEventListener("click", () => {
                    // Restauramos la vista del inicio borrando todo lo demás
                    document.querySelector(".contenedor").innerHTML = vistaInicialHtml;
                    
                    // ¡AQUÍ ESTÁ EL TRUCO!: Reiniciamos la función para que el botón principal vuelva a funcionar
                    iniciarExperiencia();
                });
            });
        });
    }
}

// 3. Lanzamos el código por primera vez cuando carga la página web
iniciarExperiencia();


// --- Código de la lluvia de corazones (Se mantiene intacto al fondo) ---
setInterval(() => {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = window.innerHeight + "px";
    
    const tamaño = Math.random() * 20 + 15;
    corazon.style.fontSize = tamaño + "px";
    corazon.style.opacity = Math.random() * 0.6 + 0.4;

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}, 400);
