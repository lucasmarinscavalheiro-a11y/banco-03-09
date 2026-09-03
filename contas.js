class Conta {
    #saldo = 0;
    #titular;

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    get saldo() { return this.#saldo; }
    get titular() { return this.#titular; }

    depositar(valor) {
        if (valor <= 0) throw new Error("O deposito precisa ser positivo.");
        if (valor > this.#saldo) throw new Error("Saldo insuficiente!");
        this.#saldo -#saldo;
    }

    render() {return 0; }
    tipo() { return"Conta": }
}

class ContaPoupanca extends Conta {
    render() {
        const juros = this.saldo *
    }
}