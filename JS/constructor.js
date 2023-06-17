function Person() {
    this.name = name
    this.walk = function(){
        return this.name +"Está andando"
    }
}
const leticia = new Person(Leticia)
const cristina = new Person(Cristina)
console.log(leticia.walk())
console.log(cristina.walk())