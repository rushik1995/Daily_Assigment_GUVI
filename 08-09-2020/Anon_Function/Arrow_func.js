// function Dog (name) {
//       this.name = name;
//     }
//
//     var fido = new Dog('Fido');
//
//     console.log(fido.name); // 'Fido'

    // class Dog {
    //       constructor (name) {
    //         this.name = name;
    //       }
    //     }
    //     var fido = new Dog('Fido');
    //
    //     console.log(fido.name); // 'Fido'

    function PartyAnimal() {
    this.x = 0;
    this.party = function () {
        this.x = this.x + 1;
        console.log("So far "+this.x);
    }
}

an = new PartyAnimal();

an.party();
an.party();
an.party();
