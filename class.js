class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  welcome() {
    return `Bem-vindo(a), ${this.firstName} ${this.lastName}!`;
  }  
}

pessoa1 = new Person("Fulano", "de Tal");
console.log(pessoa1.welcome());