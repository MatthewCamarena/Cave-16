var wow = 1;

function startPath()
{


}

function startDefaultPath()
{
//starting points
var x = 16;
var y = 0;
var z = 0;
var s = [x,y,z];
//console.log(s);

// Limits
var max = [16, 9,7];

//list of coords
var positions = [];
positions.push(s);

for(var i = 0; i < 6; i++)
{
var t = ["", "",""];
t[0] = s[0];
t[1] = s[1];
t[2] = s[2];

t = getNextPoint(t, max, i);
//check position already visited if not add  else next 
//if(checkDuplicate(s, positions)) //WIP
positions.push(t);

//do check if reached target
//if(targetReached(position))

}//end for


console.log(positions);

}


function getNextPoint(position, max, state)
{

//POSITIONS
var pos1;
var pos2;

//STATES
//A->B
if(state == 0)
{
pos1 = 0;
pos2 = 1;
}
//A->C
if(state == 1) 
{
pos1 = 0;
pos2 = 2;
}
//B->C
if(state == 2)
{
pos1 = 1;
pos2 = 2;
}
//C->A
if(state == 3)
{
pos1 = 2;
pos2 = 0;
}
//C->B
if(state == 4)
{
pos1 = 2;
pos2 = 1;
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

function fill(position, pos1, pos2, max)
{
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
}


function checkDuplicate(position, positions)
{
	for(var i = 0; i < positions.length; i++)
	{
		console.log(i);
	}
	return true;


}

