export function validarNome(nome) {

    return nome.trim().length >= 3;

}


export function validarEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


export function validarTelefone(telefone) {

    const numeros = telefone.replace(/\D/g, "");

    return numeros.length === 10 ||
           numeros.length === 11;

}


export function validarParticipacao(participacao) {

    return participacao !== "";

}