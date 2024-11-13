const frmList=document.getElementById('myList');
const insertItem=document.getElementById('insertItem');
const btnInsert=document.getElementById('btnInsert');
const listItems=document.getElementById('listItem');

const list= [];

btnInsert.addEventListener('click', function (e) {
    if (!checkInput) return;
    e.preventDefault();
    
    arrayCompleto();
    printList();
    frmList.reset();
}
);
    function checkInput() {
        if (insertItem.value === '') {
            return false;
        } else {
            return true;
        }
    }
function arrayCompleto () {
    list.push(insertItem.value);
}
function printList() {
    listItems.innerHTML="";
    for (let i=0; i<list.length; i++) {
        let newLi=document.createElement('li');
        newLi.classList.add('taskElement');
        newLi.innerText=list[i];
        newLi.addEventListener('click', function() {
        newLi.classList.toggle('barratura');
        });

        let btnCanc=document.createElement('button');
        btnCanc.setAttribute('type','button');
        btnCanc.setAttribute('onclick',`deleteItem(${i})`);
        btnCanc.innerText='☑️';
        newLi.appendChild(btnCanc);
        listItems.appendChild(newLi);
    }

}

function deleteItem(index) {
    list.splice(index,1);
    printList();
}


