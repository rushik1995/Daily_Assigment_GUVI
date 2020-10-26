
class Pet {
  type: String;
  availableCount: Number;
  age: Number;
}

interface petDetail {
  type: String;
  count: Number;
}

// Pet availability class

class PetsAvailability {
  pets: Array<Pet> = new Array();

  constructor(availablePets: Array<Pet>) {
    this.pets.push(...availablePets);
  }

  insert(pet: Pet) {
    this.pets.push(pet);
  }

  showPets() {
    console.log(this.pets);
  }

  checkRequests(requestArray: Array<petDetail>) {
    for (let i = 0; i < requestArray.length; i++) {
      let available;
      for (let j = 0; j < this.pets.length; j++) {
        if (requestArray[i].type === this.pets[j].type) {
          available = this.pets[j].availableCount;
          break;
        }
      }
      if (!available) {
        console.log(`${requestArray[i].type} is not available`);
      } else {
        console.log(
          `${requestArray[i].type} is available and the available count is ${available}`
        );
      }
    }
  }
}

let availablePets = new PetsAvailability([
  { type: "Dog", availableCount: 4, age: 5 },
  { type: "Cat", availableCount: 4, age: 2 },
  { type: "Parrot", availableCount: 1, age: 3 },
  { type: "Snake", availableCount: 3, age: 1 },
]);

// ----- Pet Requests class ----------------

class PetRequests {
  requests: Array<petDetail> = new Array();

  constructor(initialRequests: Array<petDetail>) {
    this.requests.push(...initialRequests);
  }

  addRequest(newRequest: petDetail) {
    this.requests.push(newRequest);
  }

  showRequests() {
    console.log(this.requests);
  }

  checkAvailability() {
    availablePets.checkRequests(this.requests);
  }
}

let request1 = new PetRequests([
  {
    type: "Snake",
    count: 3,
  },
  {
    type: "Cat",
    count: 2,
  },
  {
    type: "Zebra",
    count: 1,
  },
]);

request1.addRequest({ type: "Snake", count: 2 });

request1.checkAvailability();