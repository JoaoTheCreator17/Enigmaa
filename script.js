// ==============================
// FUNÇÕES GERAIS
// ==============================

function normalizar(texto) {
    return texto
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function mostrar(id) {
    const elemento = document.getElementById(id);

    elemento.classList.remove("escondida");

    setTimeout(() => {
        elemento.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}

function mostrarErro(id, texto) {
    document.getElementById(id).textContent = texto;
}


// ==============================
// FASE 1
// ==============================

function verificar1() {

    const resposta = normalizar(
        document.getElementById("resposta1").value
    );

    if (resposta === "olhe") {

        mostrar("fase2");

    } else {

        mostrarErro(
            "erro1",
            "Não é a resposta. Talvez você esteja olhando para o lugar errado."
        );
    }
}


// ==============================
// FASE 2
// ==============================

function verificar2() {

    const resposta = normalizar(
        document.getElementById("resposta2").value
    );

    if (resposta === "segredo") {

        mostrar("fase3");

    } else {

        mostrarErro(
            "erro2",
            "Ainda não. Os números estão dizendo mais do que parecem."
        );
    }
}


// ==============================
// FASE 3
// ==============================

function verificar3() {

    const resposta = normalizar(
        document.getElementById("resposta3").value
    );

    if (resposta === "caminho") {

        mostrar("fase4");

    } else {

        mostrarErro(
            "erro3",
            "Você encontrou o caminho... mas parece ter seguido errado."
        );
    }
}


// ==============================
// FASE 4
// ==============================

function verificar4() {

    const resposta = normalizar(
        document.getElementById("resposta4").value
    );

    if (resposta === "ola") {

        mostrar("fase5");

    } else {

        mostrarErro(
            "erro4",
            "O código ainda não foi decifrado."
        );
    }
}


// ==============================
// FASE 5
// ==============================

function verificar5() {

    const resposta = normalizar(
        document.getElementById("resposta5").value
    );

    if (resposta === "olhe") {

        const fase5 =
            document.getElementById("fase5");

        const finalNormal =
            document.getElementById("finalNormal");

        fase5.classList.add("escondida");

        finalNormal.classList.remove("escondida");

        setTimeout(() => {

            finalNormal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    } else {

        mostrarErro(
            "erro5",
            "Você já viu essa palavra antes. Talvez devesse ter prestado mais atenção nela."
        );
    }
}


// ==============================
// FINAL SECRETO
// ==============================
//
// A sequência correta está escondida
// nos valores dos símbolos.
//
// A ordem correta NÃO aparece
// visualmente na página.
//
// ==============================

const sequenciaSecreta = [
    "1",
    "2",
    "3",
    "4"
];

let progressoSecreto = 0;

const simbolos =
    document.querySelectorAll(".simbolo-secreto");


simbolos.forEach((simbolo) => {

    simbolo.addEventListener("click", () => {

        const numero =
            simbolo.dataset.secreto;


        // ACERTOU O PRÓXIMO SÍMBOLO

        if (
            numero ===
            sequenciaSecreta[progressoSecreto]
        ) {

            progressoSecreto++;


            // COMPLETOU A SEQUÊNCIA

            if (
                progressoSecreto ===
                sequenciaSecreta.length
            ) {

                const finalSecreto =
                    document.getElementById(
                        "finalSecreto"
                    );

                finalSecreto.classList.remove(
                    "escondida"
                );

                setTimeout(() => {

                    finalSecreto.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 100);

                progressoSecreto = 0;
            }


        } else {

            // ERROU A ORDEM

            progressoSecreto = 0;


            // Se o símbolo clicado for
            // o primeiro da sequência,
            // começa novamente.

            if (numero === "1") {

                progressoSecreto = 1;
            }
        }

    });

});