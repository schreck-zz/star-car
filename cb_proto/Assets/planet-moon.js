var planet : Transform;

function Start () {
	var p = Instantiate(planet,Vector3.zero,Quaternion.identity);
	p.GetComponent(cb).make_orbiter(2,.2);
	p.transform.parent = transform;
	p.name = 'parent planet';
}

function Update () {
}