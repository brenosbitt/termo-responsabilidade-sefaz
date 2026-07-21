document.addEventListener("DOMContentLoaded", function () {
    const data = new Date();
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    const elementoData = document.getElementById('data-hoje');
    if (elementoData) {
        elementoData.textContent = data.toLocaleDateString('pt-BR', opcoes);
    }

    const btnExportar = document.getElementById('btnExportar');
    const form = document.getElementById('termoForm');
    const camposObrigatorios = form.querySelectorAll('input[required], select[required]');

    camposObrigatorios.forEach(campo => {
        campo.addEventListener('input', function () {
            if (this.value && this.value.trim() !== "") {
                this.classList.remove('campo-invalido');
            }
        });

        campo.addEventListener('change', function () {
            if (this.value && this.value.trim() !== "") {
                this.classList.remove('campo-invalido');
            }
        });
    });

    btnExportar.addEventListener('click', function () {
        let formularioValido = true;

        camposObrigatorios.forEach(campo => campo.classList.remove('campo-invalido'));

        camposObrigatorios.forEach(campo => {
            if (!campo.value || campo.value.trim() === "") {
                campo.classList.add('campo-invalido');
                formularioValido = false;
            }
        });

        if (formularioValido) {
            window.print();
        } else {
            alert("Por favor, preencha todos os campos obrigatórios antes de gerar o PDF. Os campos vazios foram destacados em vermelho.");

            const primeiroInvalido = form.querySelector('.campo-invalido');
            if (primeiroInvalido) {
                primeiroInvalido.scrollIntoView({ behavior: 'smooth', block: 'center' });
                primeiroInvalido.focus();
            }
        }
    });
});
