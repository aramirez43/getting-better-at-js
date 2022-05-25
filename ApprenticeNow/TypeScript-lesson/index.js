"use strict";
class ContactCard {
    constructor(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    sendMessage() {
        console.log(this.firstName + " " + this.phoneNumber);
    }
}
let newPerson = new ContactCard("Henry", 1234567890);
newPerson.sendMessage();
