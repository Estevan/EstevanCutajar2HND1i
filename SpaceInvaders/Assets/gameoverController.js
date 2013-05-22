#pragma strict

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.Label(Rect(0,0,200,200),"Game Over");
	
	if(GUI.Button(Rect(200,200,100,25),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}