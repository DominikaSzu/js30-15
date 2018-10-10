const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem (e) {
    e.preventDefault(); // prevent page reload
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();

}


// function which will display added tapas, we give an empty array as an argument, to not stop the script in case we forgot to give some parameters
function populateList(plates =[], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${ plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
        </li>
    `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
    
//    if (element.checked) {
//        items[index].done = true;
//    } else {
//        items[index].done = false;
//    }
}


// we're listening for submit event of form, not click event on button, because we want to be sure, that when someone will click enter it will also be noticed
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);