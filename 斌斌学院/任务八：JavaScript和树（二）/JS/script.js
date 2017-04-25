
function Node (data) {
	this.data=data;
	this.parent=null;
	this.children=[];
}



function Tree(data)
{
	var node=new Node(data);
	this._root=node;
}


function DFS(callback,currentNode)
{
	function recurse(currentNode)
		{
			for(var i=0;i<currentNode.length;i++)
			{
				recurse(currentNode[i]);
			}
			callback(currentNode);}
}



function BFS(callback)
{
	var queue=new Queue();

	queue.enqueue(this._root);
	currentTree=queue.dequeue();

	while (currentTree) {
		
		for(var i=0;i<currentTree.children.length;i++)
		{
			queue.enqueue(currentTree.children[i]);
		}

		callback(currentTree);
		currentTree=queue.dequeue();
	}
}





function contais(callback,traversal)
{
	traversal.call(this,callback);
}


 
function add(data,toData,traversal)
{
	var child=new Node(data);
	parent=null;
	callback=function (node){

		if(node.data==toData)
		{
			parent=node;
		}

		this.contains(callback,traversal);

		if(parent)
		{
			parent.children.push(child);
			child.parent=parent;
		}

		else {
			throw new Error('Cannot add node to a non-existent parent.');
		}
	}
}


function remove(data, fromData, traversal)
{
	 var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
}



function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}

function init()
{
	var DFSBTN=document.getElementsByClassName('DFS');
	var BFSBTN=document.getElementsByClassName('BFS');

	var searchValue=document.getElementsByTagName('input');
	var searchbtn=document.getElementsByClassName('searchbtn');

	var ROOT=document.getElementsByClassName('box-one');


	

	
	var data=new Array();

	data[0]=ROOT[0];

	DFSBTN[0].onclick=function(){DFS(function(){data.push(node);},data[0])};


}


init();