#pragma strict

var laserSpeed:int;

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
	
}

function OnBecameInvisible() 
{
	Destroy(this.gameObject);
}
