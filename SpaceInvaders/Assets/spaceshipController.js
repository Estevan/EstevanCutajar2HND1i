#pragma strict
var laserSlot:Rigidbody;
static var score:int;
static var health:int; //static meaning the only one in the game
static var shotsfired:int;
static var shotshit:int;

var level:int;
var spaceshipColours:Material[];


var n:int;

function Start ()
{
	health = 10;
	shotsfired = 0;
	shotshit = 0;
	score = 0;
	DontDestroyOnLoad(this.gameObject);
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
	
	var myAlienGenerator:alienGenerator;
	myAlienGenerator=GameObject.FindGameObjectWithTag("swarm").GetComponent(alienGenerator);
	
	if(myAlienGenerator.aliencount==0)
	{
		level = Application.loadedLevel;
		n = level+1;
		Application.LoadLevel(n);
		print(n);
	}
}

function OnGUI()
{
	var shotsmissed:int;
	shotsmissed = shotsfired - shotshit;
	
	GUI.color = Color.cyan;
	GUI.Label(Rect(10,0,100,25),"Score: "+score); //x,y,width label,height label
	GUI.Label(Rect(200,0,100,25),"Health: "+health); //x,y,width label,height label
	GUI.Label(Rect(375,0,100,25),"Shots Fired: "+shotsfired);
	GUI.Label(Rect(500,0,100,25),"Shots Hit: "+shotshit);
	GUI.Label(Rect(625,0,120,25),"Shots Missed: "+shotsmissed);	
	GUI.Label(Rect(10,30,200,25),"Name: "+nameController.username);
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
