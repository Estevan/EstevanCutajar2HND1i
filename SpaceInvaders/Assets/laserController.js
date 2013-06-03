#pragma strict

var laserSpeed:int;
static var bosshealth:int=5;

function Start () {

}

function Update () 
{
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
}

function OnTriggerEnter(other:Collider)
{

	
	if(other.gameObject.tag=="alien")
	{
		spaceshipController.score++;
		//destroy the alien
		Destroy(other.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
		spaceshipController.shotshit++;
		//retreives the variable from the mentioned js
		alienGenerator.aliencount--;
		
	}
	else 
	{
		if(other.gameObject.tag=="boss")
		{
			bosshealth--;
			spaceshipController.score = spaceshipController.score + 5;
			Destroy(this.gameObject);
			spaceshipController.shotshit++;
		}
	
	} 

	
}

function OnBecameInvisible() 
{
	Destroy(this.gameObject);
}
