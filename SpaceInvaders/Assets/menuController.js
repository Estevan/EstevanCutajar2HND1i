#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.Label(Rect(0,0,logo.width,logo.height),logo);
	
	if(GUI.Button(Rect(logo.width/2,logo.height/2,100,25),"New Game"))
	{
		Application.LoadLevel(7);
	}
	
	if(GUI.Button(Rect(logo.width/2,logo.height*2,100,25),"Exit"))
	{
		Application.Quit();
	}
}