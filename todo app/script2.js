var  newtodotask = null; 
var ulList;
var todoToEdit;


const add = () => {
    ulList = document.getElementById("todoul");
	const todonewtask = document.getElementById("newtask").value ;
    if (todonewtask != ''){
        newtodotask = document.createElement('li');
		newtodotask.setAttribute('id',todonewtask);
		newtodotask.appendChild(document.createTextNode(todonewtask));
        ulList.appendChild(newtodotask);
        // creatbutton();
        document.getElementById("newtask").value= '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'type the task again after some time';
    }
}

const creatbutton = () => {
    const p = document.createElement('p2');
     newtodotask.append(p);
    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit';
    p.append(buttonEdit);
    //const buttondelete = document.createElement('button');
    //buttondelete.textContent= 'Delete';
    // p.append( buttonEdit, buttondelete);
}

const delli1 =() => {
    var ulList = document.getElementById("todoul");
    var candidate = document.getElementById("deltask").value;
  var item = document.getElementById(candidate);
    ulList.removeChild(item);
    document.getElementById("deltask").value= '';



    //e.target.closest('li').remove(); 
    // const allToDos = ulList.querySelectorAll('li');
    if (ulList.length - 1 == 0) {
        errorInfo.textContent = 'No more task in the list'
    }
}


const changeTodoText = () => {
    if (popupInput.value != '') {
        todoToEdit.firstChild.textContent = popupInput.value;

        popup.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!';
    }
}




