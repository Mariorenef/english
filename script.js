document.addEventListener("DOMContentLoaded", function () {
    // FORMULARIO DE CONTACTO
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const inputs = form.querySelectorAll("input, textarea");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = "2px solid red";
                    valid = false;
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (valid) {
                alert("Mensaje enviado con éxito ✅");
                form.reset();
            } else {
                alert("Por favor completá todos los campos.");
            }
        });
    }

    // TOGGLE MENÚ RESPONSIVE
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            document.querySelector(".nav-menu").classList.toggle("active");
        });
    }

    // EFECTO REVEAL EN SECCIÓN ABOUT
    const aboutSection = document.querySelector("#about");
    function revealAbout() {
        if (aboutSection) {
            const sectionPosition = aboutSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                aboutSection.classList.add("show");
            }
        }
    }
    window.addEventListener("scroll", revealAbout);

    // EFECTO SCROLL EN SECCIONES
    const scrollSections = document.querySelectorAll(".scroll-section");
    function showOnScroll() {
        scrollSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight - 100) {
                section.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Ejecutar en el primer render por si ya hay elementos en pantalla

    // EFECTO DE TYPING
    const typingElement = document.getElementById("typing-text");
    const text = "Bienvenidos a C&E English";
    let i = 0;
    function typingEffect() {
        if (typingElement && i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 60);
        }
    }
    typingEffect();

    // MODO OSCURO
    const toggleDark = document.getElementById("toggle-dark");
    if (toggleDark) {
        toggleDark.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});
const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("info-modal");
const closeModalBtn = document.querySelector(".close-modal");

if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar haciendo clic fuera del modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}
const cursoCards = document.querySelectorAll(".curso-card");

cursoCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const extra = card.querySelector(".info-extra");
        if (extra) {
            extra.style.opacity = 1;
            extra.style.maxHeight = "150px";
        }
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
        const extra = card.querySelector(".info-extra");
        if (extra) {
            extra.style.opacity = 0;
            extra.style.maxHeight = "0";
        }
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    });
});
const form = document.getElementById("contact-form");
const toast = document.getElementById("form-toast");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = form.name;
        const email = form.email;
        const message = form.message;
        let valid = true;

        // Validación del nombre
        if (!name.value.trim()) {
            name.style.border = "2px solid red";
            valid = false;
        } else {
            name.style.border = "1px solid #ccc";
        }

        // Validación del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.style.border = "2px solid red";
            valid = false;
        } else {
            email.style.border = "1px solid #ccc";
        }

        // Validación del mensaje
        if (!message.value.trim()) {
            message.style.border = "2px solid red";
            valid = false;
        } else {
            message.style.border = "1px solid #ccc";
        }

        if (valid) {
            form.reset();
            showToast("Mensaje enviado con éxito ✅");
        } else {
            showToast("Por favor completá todos los campos correctamente ❌");
        }
    });
}

function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev-testimonial");
const nextBtn = document.getElementById("next-testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((el, i) => {
        el.classList.toggle("active", i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextTestimonial);
    prevBtn.addEventListener("click", prevTestimonial);
}

// Carrusel automático cada 5 segundos
setInterval(nextTestimonial, 5000);
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});
const nivelForm = document.getElementById("nivel-form");
const nivelResultado = document.getElementById("nivel-resultado");
const nivelDetalle = document.getElementById("nivel-detalle");

if (nivelForm) {
    nivelForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const respuestas = {
            q1: "b",
            q2: "b",
            q3: "b",
            q4: "b",
            q5: "a",
            q6: "b",
            q7: "c",
            q8: "b",
            q9: "c",
            q10: "a"
        };

        let puntos = 0;
        nivelDetalle.innerHTML = ""; // limpia errores anteriores

        // Limpiamos clases previas
        const radios = nivelForm.querySelectorAll("input[type=radio]");
        radios.forEach(r => {
            r.classList.remove("correcta", "incorrecta");
        });

        for (let q in respuestas) {
            const correcta = respuestas[q];
            const opciones = nivelForm.elements[q];
            let respondida = false;

            for (let i = 0; i < opciones.length; i++) {
                const input = opciones[i];
                if (input.checked) {
                    respondida = true;
                    if (input.value === correcta) {
                        puntos++;
                        input.classList.add("correcta");
                    } else {
                        input.classList.add("incorrecta");

                        // Mostramos cuál era la correcta
                        for (let j = 0; j < opciones.length; j++) {
                            if (opciones[j].value === correcta) {
                                opciones[j].classList.add("correcta");
                            }
                        }

                        // Detalle de error
                        const pregunta = input.closest("p")?.textContent || `Pregunta ${q}`;
                        nivelDetalle.innerHTML += `<p><strong>${pregunta}</strong><br>Tu respuesta fue incorrecta. ✅ Correcta: ${input.form[q].value === correcta ? "✔️" : respuestas[q]}</p>`;
                    }
                }
            }

            // Si no respondió nada en la pregunta
            if (!respondida) {
                nivelDetalle.innerHTML += `<p><strong>Pregunta ${q}:</strong> ❗ No fue respondida.</p>`;
            }
        }

        // Mensaje final según el puntaje
        const inscribiteLink = document.getElementById("inscribite-link");

        if (puntos >= 9) {
            nivelResultado.textContent = `🧠 ¡Increíble! Tenés un nivel C1 o superior. Aciertos: ${puntos}/10`;
            inscribiteLink.textContent = "Sumate al curso avanzado 🧑‍🏫";
        } else if (puntos >= 6) {
            nivelResultado.textContent = `💪 Buen trabajo. Nivel intermedio (B1-B2). Aciertos: ${puntos}/10`;
            inscribiteLink.textContent = "Inscribite en nivel intermedio 💼";
        } else if (puntos >= 3) {
            nivelResultado.textContent = `📘 Estás en nivel básico o pre-intermedio (A2-B1). Aciertos: ${puntos}/10`;
            inscribiteLink.textContent = "Comenzá con nosotros 📘";
        } else {
            nivelResultado.textContent = `🚀 Ideal para empezar desde cero (A1). Aciertos: ${puntos}/10`;
            inscribiteLink.textContent = "Empezá desde cero 🚀";
        }

    });
}
// Botones y contenedores del test
const inscribiteDiv = document.getElementById("inscribite-btn");
const reiniciarBtn = document.getElementById("reiniciar-test");

// Escuchar clic en botón "Reiniciar test"
if (reiniciarBtn) {
    reiniciarBtn.addEventListener("click", () => {
        // Limpiar selección de radios
        const radios = nivelForm.querySelectorAll("input[type=radio]");
        radios.forEach(radio => {
            radio.checked = false;
            radio.classList.remove("correcta", "incorrecta");
        });

        // Limpiar resultados y ocultar botones
        nivelResultado.textContent = "";
        nivelDetalle.innerHTML = "";
        reiniciarBtn.style.display = "none";
        inscribiteDiv.style.display = "none";
    });
}

// Mostrar botón de reinicio e inscripción después de enviar el test
if (nivelForm) {
    nivelForm.addEventListener("submit", function () {
        reiniciarBtn.style.display = "inline-block";
        inscribiteDiv.style.display = "block";
    });
}
function toggleTest() {
    const testContainer = document.getElementById('nivel-form-container');
    testContainer.classList.toggle('hidden');
}
