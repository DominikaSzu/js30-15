const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


function addItem (e) {
    e.preventDefault(); // prevent page reload
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    this.reset();

}




// we're listening for submit event of form, not click event on button, because we want to be sure, that when someone will click enter it will also be noticed
addItems.addEventListener('submit', addItem);