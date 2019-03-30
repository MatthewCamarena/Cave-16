
function startPath(){


}

function startDefaultPath(){
//starting points
var x = 16;
var y = 0;
var z = 0;
var u = [x,y,z];

//destination points
var d = [8,1,7];

// Limits
var max = [16, 9,7];

//list of coords
var positions = [];
positions.push(u);

var s = ["", "",""];
s[0] = u[0];
s[1] = u[1];
s[2] = u[2];

for(var i = 0; i < 6; i++) //run through states
{
//initialize new coordinate given last position
var t = ["", "",""]; 
t[0] = s[0];
t[1] = s[1];
t[2] = s[2];

//get the next point
t = getNextPoint(t, max, i);

//check position already visited if not add to visited
if(checkNotDuplicate(t, positions)){
positions.push(t);
//saving position
s[0] = t[0];
s[1] = t[1];
s[2] = t[2];
i = -1;
}

//If we've reached our target break out of the loop
if(targetReached(t, d)){
	break;
}

}//end for

printRoute(positions);
//console.log(positions);

}


function getNextPoint(position, max, state){

//POSITIONS
var pos1;
var pos2;

//STATES
//A->B
if(state == 0)
{
console.log("A->B");
pos1 = 0; pos2 = 1;
}
//A->C
if(state == 1) 
{
console.log("A->C");
pos1 = 0; pos2 = 2;
}
//B->C
if(state == 2)
{
console.log("B->C");
pos1 = 1; pos2 = 2;
}
//C->A
if(state == 3)
{
console.log("C->A");
pos1 = 2; pos2 = 0;
}
//C->B
if(state == 4)
{
console.log("C->B");
pos1 = 2; pos2 = 1;
}
//B->A
if(state == 5)
{
pos1 = 1; pos2 = 0;
}

//RUN CHANGE
if(position[pos1] == 0) // if position 1 has nothing to move return
{
	return position;
}

else if (position[pos2] == max[pos2]) //if pos2 is full return
{
 	return position;
}

else //fill pos2 as much as possible from pos1
{
	return position = fill(position, pos1, pos2, max);
}


}// end function getNext

function fill(position, pos1, pos2, max){
	var tempMaxAdd = max[pos2] - position[pos2];
	if(tempMaxAdd > position[pos1])
	{
		position[pos2]+= position[pos1]
		position[pos1] = 0;
		
	}
	else if(tempMaxAdd == position[pos1])
	{
		position[pos2] = max[pos2];
		position[pos1] = 0;
	}
	else // amount in a is greater than in B need to get max amount out of a and put in into B
	{
		position[pos1] -= tempMaxAdd;
		position[pos2] += tempMaxAdd;
	}
	return position;	
} //End fill

function checkNotDuplicate(position, positions){	//start checkNot Dup
	for(var i = 0; i < positions.length; i++)
	{	//start forloop
		if(positions[i][0] == position[0])
		{
			if(positions[i][1] == position[1])
			{
				if(positions[i][2] == position[2]) return false;
			}
		}
	}	
	return true;
}	//End checkNotDuplicate

function targetReached(position, target){
	if(target[0] == position[0])
	{
		if(target[1] == position[1])
		{
			if(target[2] == position[2])
			{
				return true;
			}
		}		
	}
	return false;
} 	//End target Reached

function printRoute(positions)
{
var temp = "";
temp+=("["+positions[0] + "]" + "<br>");
for(var i = 1; i < positions.length; i++)
{
for(var j = 0; j < i; j++)
{
temp+= "&nbsp";
}
temp+=("["+positions[i] + "]" + "<br>");
}
document.getElementById("display").innerHTML = temp;
}



