
window.onload = init;

function init()
{
    cm = new ContactManager();
	
      cm.addTestData();
      cm.displayContactsAsATable("contacts")
}
