(function () {
    // IIFE pour encapsuler l'easter egg sans exposer de variables globales
    // Combo secret décodé à la volée pour le rendre illisible dans la source
    const obfuscationOffset = 7;
    const encodedSequence = [
        [72, 121, 121, 118, 126, 92, 119],
        [72, 121, 121, 118, 126, 75, 118, 126, 117],
        [72, 121, 121, 118, 126, 83, 108, 109, 123],
        [72, 121, 121, 118, 126, 89, 112, 110, 111, 123]
    ];
    const sequence = encodedSequence.map((codes) =>
        String.fromCharCode(...codes.map((code) => code - obfuscationOffset))
    );
    // Lien déclenché après la découverte du secret
    const destination = "https://www.youtube.com/watch?v=QDia3e12czc&autoplay=1";
    // Position courante dans la séquence tapée par l'utilisateur
    let index = 0;

    // Remet l'écouteur au début dès que la séquence est incorrecte ou complétée
    function reset() {
        index = 0
    }

    // Affiche un toast léger pour signaler la découverte avant d'ouvrir le bonus
    function showToast() {
        const existing = document.getElementById("konami-toast");
        if (existing) {
            existing.remove();
        }

        const toast = document.createElement("div");
        toast.id = "konami-toast";
        toast.textContent = "🎉 Git Master trouvé ! Vidéo bonus en cours...";
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.classList.add("show");
        });

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 350);
        }, 3500);
    }

    // Suit les touches dans l'ordre et déclenche la surprise quand la séquence est correcte
    document.addEventListener("keydown", (event) => {
        if (event.key === sequence[index]) {
            index += 1;
            if (index === sequence.length) {
                reset();
                showToast();
                window.open(destination, "_blank", "noopener");
            }
        } else {
            reset();
        }
    });
})();
