function Carro(marca, ano) {
    this.marca = marca
    this.ano = ano
}

function Esportivo(marca, modelo, ano, velocidadeMaxima = 180) {
    Carro.call(this, marca, ano)
    this.modelo = modelo

    var _velocidadeMaxima = velocidadeMaxima

    this.getVelocidadeMaxima = function () {
        return `Esse carro alcança até ${_velocidadeMaxima} Km/h`
    }
}

function Suv(marca, modelo, ano, maximoDeLugares = 5) {
    Carro.call(this, marca, ano)
    this.modelo = modelo

    var _maximoDeLugares = maximoDeLugares

    this.getMaximoDeLugares = function () {
        return `Esse carro tem ${_maximoDeLugares} lugares internos.`
    }
}

function Classico(marca, modelo, ano, estadoDeConservacao = "Normal") {
    Carro.call(this, marca, ano)
    this.modelo = modelo

    var _estadoDeConservacao = estadoDeConservacao

    this.getEstadoConservacao = function () {
        return `Esse carro está ${_estadoDeConservacao}.`
    }
}

const Esportivo1 = new Esportivo("Lamborghini", "Lamborghini Aventator", "2020", 355)
const Suv1 = new Suv("Fiat", "Doblô", "2023")
const Classico1 = new Classico("Mustang", "Shelby", "1967", "bem conservado")

console.log(Esportivo1.getVelocidadeMaxima());
console.log(Suv1.getMaximoDeLugares());
console.log(Classico1.getEstadoConservacao());
