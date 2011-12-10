var M : float; // Mass of the body
var R : float; // Radius of the surface
var label : String; // display label
var x : Vector3; // position
var orbiter : Transform; // cbio prefab

function Start () {
	transform.localScale = R*Vector3.one;
}

function make_orbiter (a : float, e : float) {
	var orb = Instantiate(orbiter,Vector3.zero,Quaternion.identity);
	orb.GetComponent(cbio).a = a;
	orb.GetComponent(cbio).e = e;
	orb.transform.parent = transform;
	orb.name = "orbit";
	orb.GetComponent(cbio).init();
}

function Update () {
}