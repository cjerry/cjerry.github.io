//////////////////
// CANVAS SETUP //
//////////////////

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Set some camera attributes.
const FOV_DEG = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 1000000;

// Create a WebGL renderer, camera and a scene
const renderer = new THREE.WebGLRenderer({canvas:maincanvas, antialias:true});
//renderer.setSize(640, 480);
const camera =
    new THREE.PerspectiveCamera(
        FOV_DEG,
        ASPECT,
        NEAR,
        FAR
    );
camera.position.z = 100;
const scene = new THREE.Scene();

// Get the DOM element to attach to
const container = document.querySelector('#canvas-stats');
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.id = 'stats';
stats.dom.style.position = 'inherit';
container.appendChild( stats.dom );

/////////////////
// ADD OBJECTS //
/////////////////

// Sky and Sun
// Add sky
var sky = new THREE.Sky();
sky.scale.setScalar( 450000 );
scene.add( sky );

// Add sun
sunSphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry( 20000, 16, 8 ),
    new THREE.MeshBasicMaterial( { color: 0xffffff } )
);
var azimuth = 0.25;
var inclination = 0.49;
var theta = Math.PI * (inclination - 0.5);
var phi = 2 * Math.PI * (azimuth - 0.5);
var distance = 400000;

sunSphere.position.x = distance * Math.cos( phi );
sunSphere.position.y = distance * Math.sin( phi ) * Math.sin( theta );
sunSphere.position.z = distance * Math.sin( phi ) * Math.cos( theta );

sunSphere.visible = false;
scene.add(sunSphere);

var uniforms = sky.material.uniforms;
uniforms.sunPosition.value.copy(sunSphere.position);

// Hemisphere light to emulate light from sun
var hemiLight = new THREE.HemisphereLight( 0xffffbb, 0xffffff, 0.6 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.position.set(0, -10, -sunSphere.position.z);
scene.add( hemiLight )

// add lensflares



var textureLoader = new THREE.TextureLoader();
var textureFlare0 = textureLoader.load( 'assets/textures/lensflare0.png' );
var textureFlare1 = textureLoader.load( 'assets/textures/lensflare3.png' );



var light = new THREE.PointLight(0xffffff, 1, 2000);
light.color.setHSL(1, 1, 1);
light.position.set(sunSphere.position.x, sunSphere.position.y, sunSphere.position.z);
scene.add(light);

var lensflare = new THREE.Lensflare();
lensflare.addElement( new THREE.LensflareElement( textureFlare0, 700, 0, light.color ) );
lensflare.addElement( new THREE.LensflareElement( textureFlare1, 60, 0.6 ) );
lensflare.addElement( new THREE.LensflareElement( textureFlare1, 70, 0.7 ) );
lensflare.addElement( new THREE.LensflareElement( textureFlare1, 120, 0.9 ) );
lensflare.addElement( new THREE.LensflareElement( textureFlare1, 70, 1 ) );
light.add( lensflare );


// Movement controls
var controls = new THREE.FlyControls( camera );
controls.movementSpeed = 1;
controls.domElement = renderer.domElement;
controls.rollSpeed = 0.01;
controls.autoForward = false;
controls.dragToLook = true;

//////////////////////////////////////////////////////////////////////
// END CANVAS SETUP
//////////////////////////////////////////////////////////////////////

var geometry, material; // FIXME: Might be a better way of doing this instead of reusing the variables

// Add a plane
var loader = new THREE.ObjectLoader();
var airplane;

// Plane mesh sourced from:
// https://clara.io/view/4446a747-cbc4-4485-bc76-985a32e80251
// Adds plane to the scene in front of the camera:
// https://stackoverflow.com/a/17247398/6469972
loader.load( 'assets/models/plane.json',
    function ( object ) {
        var scale = 0.005;
        object.scale.set(scale, scale, scale);
        airplane = object;
        scene.add(object);
        scene.add(camera);
        camera.add(airplane);
        airplane.position.set(0, -10, -50);
    });


// add vertex and fragment shaders
console.log(document.getElementById( 'v_shader' ).textContent);
console.log(document.getElementById( 'f_shader' ).textContent);
var s_mat = new THREE.ShaderMaterial({
    uniforms : {
        color : { value : new THREE.Color(0xffffff) },
    },
    vertexShader : document.getElementById( 'v_shader' ).textContent,
    fragmentShader : document.getElementById( 'f_shader' ).textContent

});

/////////////////////////
// ADD IMPOSTER CLOUDS //
/////////////////////////

const NUM_IMPOSTER_MATERIALS = 3;
const REGENERATION_INTERVAL = 200;
const TRANSLATION_THRESHOLD = 0.15;

var imposterClouds = new Set();
function generateImposters(numClouds, xRange, yRange, zRange, zStart) {
    for (i = 0; i < numClouds; i++) {
        var materialIndex = i % 3;
        var cm = cloudMaterials[materialIndex];
        cm.material.opacity = Math.random() / 2 + 0.3;
        var cloud = new THREE.Sprite( cm.material );

        var id = Date.now() + Math.ceil(Math.random() * 100) + Math.ceil(Math.random() * 10000);
        cloud.name = id;

        var scale_size = Math.min(Math.random() + 0.5, 1.0);
        cloud.scale.set(scale_size * cm.width, scale_size * cm.height, 1);

        var position = new THREE.Vector3(-(xRange / 2) + Math.random() * xRange, -yRange - 100 + Math.random() * yRange, zStart - Math.random()* zRange);
        cloud.position.copy(position);

        //imposterClouds.add({ id, position, materialIndex });
        imposterClouds.add( cloud );
        scene.add( cloud );
    }
}

function checkAndRegenerateImposter(cloud) {
    return;
    var alpha = 1;

    if ( alpha < TRANSLATION_THRESHOLD ) {
        console.log("regenerating cloud:", cloud);
        imposterClouds.delete( cloud );
        scene.remove( cloud );

        var newCloud = new THREE.Sprite( cloud.material );
        newCloud.scale.copy( cloud.scale );
        newCloud.position.copy( cloud.position );

        imposterClouds.add( cloud );
        scene.add( cloud );
    }
}

var cloudMaterials = [];
for (i = 1; i < NUM_IMPOSTER_MATERIALS + 1; i++) {
    var texture = new THREE.TextureLoader().load(
        "assets/textures/clouds" + i + ".png",
        function ( texture ) { // onLoad
            var material = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
            var width = texture.image.width;
            var height = texture.image.height;
            cloudMaterials.push({ material, width, height });
        },
        undefined, // onProgress
        function ( e ) { // onError
            console.log("Error:", e);
        }
    );
}

///////////////////////
// MOVEMENT CONTROLS //
///////////////////////

var controls = new THREE.FlyControls( camera );
controls.movementSpeed = 5;
controls.domElement = renderer.domElement;
controls.rollSpeed = 0.01;
controls.autoForward = false;
controls.dragToLook = true;

///////////////
// ANIMATION //
///////////////

var vibrate = 0;
function vibratePlane() {
    if (vibrate % 4 == 0) {
        airplane.position.set(0 + Math.random() * 0.1, -10 + Math.random() * 0.1, -50);
    }
    vibrate += 1;
}

var regeneratePosition = -6000;
function animate() {
    stats.begin();
    controls.update(1);
    renderer.render(scene, camera);

    if ( airplane ) vibratePlane();

    // Generate/regenerate imposters based on translation threshold
    if ( cloudMaterials.length == NUM_IMPOSTER_MATERIALS && imposterClouds.size == 0 ) {
        console.log("Generating clouds");
        //generateImposters(500, 30000, 2000, 10000, -1000);
        generateImposters(50, 30000, 2000, 10000, -1000);
    } else if ( cloudMaterials.length == NUM_IMPOSTER_MATERIALS ) {
        //imposterClouds.forEach(checkAndRegenerateImposter);

        // Match sprite rotation to camera rotation
        for (i = 0; i < 3; i++) {
            cloudMaterials[i].material.rotation = -camera.rotation.z;
        }
    }

    // Generate imposters as user goes deeper
    if (camera.position.z < regeneratePosition) {
        //generateImposters(100, 30000, 2000, 10000, camera.position.z - 6000);
        generateImposters(10, 30000, 2000, 10000, camera.position.z - 6000);
        regeneratePosition = camera.position.z - 4000;
    }

    camera.position.z -= 1;

    stats.end();
    requestAnimationFrame(animate);
}

// Schedule the first frame.
requestAnimationFrame(animate);
