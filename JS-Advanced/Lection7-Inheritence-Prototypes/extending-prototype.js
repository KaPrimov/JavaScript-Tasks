
function extendPerson(Person) {
    Person.prototype.species = 'Human';
    Person.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}