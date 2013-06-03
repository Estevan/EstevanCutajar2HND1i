#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.skin = style;
	
	GUILayout.BeginArea(Rect(Screen.width/2-100, Screen.height/2-50, 200, 200));
	
	if (GUILayout.Button("New Game"))
	{
		Application.LoadLevel(7);
	}
	
	if (GUILayout.Button("Help"))
	{
		Application.LoadLevel(9);
	}
	
	if (GUILayout.Button("Exit"))
	{
		Application.Quit();
	}
	
	GUILayout.EndArea();
	
}