#pragma strict

var laserSlot:Rigidbody;
static var score:int;
static var health:int; //static meaning the only one in the game
static var shotsfired:int;
static var shotshit:int;

var level:int;
var spaceshipColours:Material[];

var style:GUISkin;

var n:int;

function Start ()
{
	health = 50;
	shotsfired = 0;
	shotshit = 0;
	score = 0;
	DontDestroyOnLoad(this.gameObject);
	
	this.renderer.material = spaceshipColours[0];
}


function Update ()
{
	borderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		shotsfired++;
	}
	
	if (health <= 0)
	{
		Destroy(GameObject.FindGameObjectWithTag("spaceship"));
		//game ends .... goes to game over scene
		Application.LoadLevel(8);
	}
	
	if(n<6)
	{
		var myAlienGenerator:alienGenerator;
		myAlienGenerator=GameObject.FindGameObjectWithTag("swarm").GetComponent(alienGenerator);
	
		if(myAlienGenerator.aliencount==0)
		{
			score = 0;
			level = Application.loadedLevel;
			n = level+1;
			Application.LoadLevel(n);
		}
	}
	else
	{
		if (laserController.bosshealth==0)
		{
			Destroy(GameObject.FindGameObjectWithTag("spaceship"));
			Application.LoadLevel(9);
		}
	}
}

function OnGUI()
{
	var shotsmissed:int;
	shotsmissed = shotsfired - shotshit;
	
	GUI.skin = style;
	GUILayout.BeginArea(Rect(0,0,1024,40));
	GUILayout.BeginHorizontal();
	GUILayout.Label("Name: "+nameController.username);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Score: "+score);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Health: "+health);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Fired: "+shotsfired);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Hit: "+shotshit);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Missed: "+shotsmissed);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndArea();
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="enemylaser")
	{
		//player was hit, reduced health and changed colour
		this.renderer.material = spaceshipColours[1];
		health--;
	}
}

function OnTriggerExit(other:Collider)
{
	//when the laser leaves the spaceship, set the colour back to green
	this.renderer.material = spaceshipColours[0];
}
