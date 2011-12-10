var omega : float; // Argument of periapsis
var Omega : float; // Longitude of ascending node
var i : float; // Inclination
var a : float = 60.0; // Semimajor Axis
var e : float; // Eccentricity
var init_E : float = Mathf.PI*.25; // Mean anomaly
var marker : Transform;
var sat : Transform;
var t : float; // time

private var body : Transform;
private var ap : Transform;
private var per : Transform;
private var G : float = 6.67384e-29; // Mm^3 kg^-1 s^-2
private var mu : float;

function start(){
	init();
	}

function init() {
	body = Instantiate(sat,Vector3(a*(Mathf.Cos(init_E)-e),a*Mathf.Sqrt(1-e*e)*Mathf.Sin(init_E),0),Quaternion.identity);
	body.name = 'orbiting body';
	body.transform.parent = transform;
	mu = G * (transform.parent.GetComponent(cb).M + body.GetComponent(cb).M);
    ap = Instantiate(marker,Vector3((1+e)*a,0,0),Quaternion.identity);
    ap.transform.parent = transform;
    ap.name = 'apoapsis';
    per = Instantiate(marker,Vector3(-(1-e)*a,0,0),Quaternion.identity);
    per.transform.parent = transform;
    per.name = 'periapsis';
}

function Update () {
}
