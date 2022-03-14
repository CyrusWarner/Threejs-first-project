import * as THREE from "../node_modules/three/build/three.module.js";
let scene, camera, renderer, cube;
// Creating Our First Scene
function init() {
  scene = new THREE.Scene();

  // Creating our camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Creating out WebGL Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // Creating our Box Geometry
  var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  // Creating our material for our box geometry
  var material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  // Meshing our geometry and material together
  cube = new THREE.Mesh(boxGeometry, material);

  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  // Roate the cube on the x and y axis
  cube.rotateX(0.01);
  cube.rotateY(0.01);

  renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)
// Initializing Our Scene
init();
animate();
