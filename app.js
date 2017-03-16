
var list = document.getElementById('todoList');
var lastid = 0;

var result = JSON.parse(localStorage.getItem("prodList"));

function appendTaskToList(val) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(val.id));
    entry.setAttribute('id','item'+lastid);
    entry.className='simple';
    var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("delete"));
    removeButton.setAttribute('onClick','removeName("'+'item'+lastid+'")');
    entry.appendChild(removeButton);
    lastid+=1;
    list.appendChild(entry);
}

if(result != null) {
    for(var i=0;i<result.length;i++) {
        appendTaskToList(result[i]);
    }
}

document.getElementById("addTodo").onclick =function(){
    var addTodoItem = document.getElementById('addTodoItem').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(addTodoItem));
    entry.setAttribute('id','item'+lastid);
    entry.className='simple';
    var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("delete"));
    removeButton.setAttribute('onClick','removeName("'+'item'+lastid+'")');
    entry.appendChild(removeButton);    
    list.appendChild(entry);
    if(result == null)
        result = [];
    
    result.push({id: addTodoItem, index: lastid});
    lastid+=1;
    // save the new result array
    localStorage.setItem("prodList", JSON.stringify(result));
    document.getElementById('addTodoItem').value='';
}

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI'){
        if (e.target.className=='simple') {
			e.target.className='marked';
		}else{
			e.target.className='simple';
		}
    }
});

function removeName(itemid){
	var result = JSON.parse(localStorage.getItem("prodList"));
	if(result != null) {
	    for(var i=0;i<result.length;i++) {
	    	debugger
	    	if ('item'+result[i].index===itemid) {
	    		result.splice(i, 1);	    		
    			localStorage.setItem("prodList", JSON.stringify(result));
	    	}
	        
	    }
	}
    var item = document.getElementById(itemid);
    list.removeChild(item);
}