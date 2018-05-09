class Contact {
   constructor(name, email) {
      this.name = name;
      this.email = email;
   }
}


class ContactManager {
    constructor() {
        // when we build the contact manager, it
        // has an empty list of contacts
        this.listOfContacts = [];
    }
    addTestData() {
		let c1 = new Contact("Leonardo Perez", "Lperez@rip.com");
  		let c2 = new Contact("Leo Fabio", "robert.fripp@kingcrimson.com");
  		let c3 = new Contact("Leo Dvince", "leoDavince@acdc.com");
  		let c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");
		
		this.add(c1);
		this.add(c2);
		this.add(c3);
		this.add(c4);
		
		// Let's sort the list of contacts by Name
		this.sort();
	}
    add(contact) {
        this.listOfContacts.push(contact);
    }
    remove(contact) {
        // we iterate on the list of contacts until we find the contact
        // passed as a parameter (we say that they are equal if emails match)
        for(let i = 0; i < this.listOfContacts.length; i++) {
            var c = this.listOfContacts[i];
 
            if(c.email === contact.email) {
                // remove the contact at index i
                this.listOfContacts.splice(i, i);
                // stop/exit the loop
                break;
            }
         };
    }
    printContactsToConsole() {
        this.listOfContacts.forEach(function(c) {
            console.log(c.name);
        });
    };

    sort() {
      
        this.listOfContacts.sort(ContactManager.compareByName);
    }
    // class method for comparing two contacts by name
    static compareByName(c1, c2) {
        // JavaScript has built in capabilities for comparing strings
        // in alphabetical order
        if (c1.name < c2.name)
            return -1;
        if (c1.name > c2.name)
            return 1;
        return 0; // c1.name = c2.name
    }

    save() {
       
        localStorage.contacts = JSON.stringify(this.listOfContacts);
     }

     load() {
        if(localStorage.contacts !== undefined) {
            // the array of contacts is saved in JSON, let's convert
            // it back to a reak JavaScript object.
            this.listOfContacts = JSON.parse(localStorage.contacts);
        }
    }

    empty()
    {
        this.listOfContacts = [];
        
    }

    displayContactsAsATable(idOfContainer) {
        // to empty the container that contains the results
        let container = document.querySelector("#" + idOfContainer);
        container.innerHTML = "";
 
        if(this.listOfContacts.length === 0) {
            container.innerHTML = "<p>No contacts to display!</p>";
            // stops the execution of this method
            return;
        }
        // creates and populates the table with users
        let table = document.createElement("table");
        // iterates on the array of users
        this.listOfContacts.forEach(function(currentContact) {
            // creates a row
            let row = table.insertRow();
            row.innerHTML = "<td>" + currentContact.name + "</td>"
                          + "<td>" + currentContact.email + "</td>"
        });
        // adds the table to the div
        container.appendChild(table);
    }
}


function formSubmitted() {
    // Get the values from input fields
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let newContact = new Contact(name.value, email.value);
    cm.add(newContact);
    // Empty the input fields
    name.value = "";
    email.value = "";
    // refresh the table
    cm.displayContactsAsATable("contacts");
    // do not let your browser submit the form using HTTP
    return false;
}

function loadContacts()
{
    cm.load();
    cm.displayContactsAsATable("contacts");
}
function saveContacts()
{
    cm.save();
}
function emptyContacts()
{
    cm.empty();
    cm.displayContactsAsATable("contacts");
}