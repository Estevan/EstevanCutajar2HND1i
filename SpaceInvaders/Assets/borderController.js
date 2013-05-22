#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;

function Start () {

}

function Update () {
	//calculate the margins
	
	//x axis
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;

	//y axis
	//topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	//bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
}

static function EnableBorders(object:Transform)
{
	//if the object leaves the screen to the left
	if (object.position.x < leftmost +1)
	{
		object.position.x = leftmost +1;
	}
	
	//if the object leaves the screen to the right
	if (object.position.x > rightmost -1)
	{
		object.position.x = rightmost -1;
	}
}