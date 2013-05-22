#pragma strict

static var username = "";
var checkname: boolean = false;

function Start ()
{

}

function Update ()
{

}

function OnGUI()
{
	GUI.color = Color.green;	
	
	//Display Enter Name and TextField in the middle of the screen
	GUI.Label(Rect((Screen.width/2)-100,Screen.height/2,100,30),"Enter Name:");
	username = GUI.TextField(Rect(Screen.width/2,Screen.height/2,200,25),username,40);
	
	//If user input a name, start the game
	if(checkname == true)
	{
		Application.LoadLevel(1);
		
	} else {
		//If user presses on the button but the name is empty, it will remain on the same screen
		if(GUI.Button(Rect(Screen.width/2,(Screen.height/2)+40,150,40),"Start Game"))
		{
			if(username == ""){
				checkname = false;				
			} else {
				checkname = true;
			}
		}
	}
}
