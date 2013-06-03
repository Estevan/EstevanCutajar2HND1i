#pragma strict

var enemyLaser:Rigidbody;

function ShootLaser ()
{
	Instantiate(enemyLaser,transform.position,transform.rotation); 
}

function Start () {
	var delay:float;
	
	for (var i = 0;i <= 10; i++)
	{
		//range of seconds between 1 to 3 sec
		delay = Random.Range(1.0, 3.0);
		//calling ShootLaser function and shooting twice randomly
		InvokeRepeating("ShootLaser",delay,delay);
	}
}


function Update () {

}
