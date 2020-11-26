import * as THREE from 'three';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // Field of view in degrees
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping distance
  1000 // Far clipping distance
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
// First two arguments to setSize are the width and height we want to
// render our app.
// If you want to render your app at a lower resolution, pass false as
// the third argument to `setSize`
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x706993, 1);
document.body.appendChild(renderer.domElement);

// Adding cube to scene

// BoxGeometry is an object that contains all the vertices and faces
// of the cube.
const geometry = new THREE.BoxGeometry();
// Materials take an object of properties that will be applied to
// them, like a base color.
const material = new THREE.MeshStandardMaterial({ color: 0x70a0af });

// Mesh takes a geometry as an argument and applies a specified
// material to it.
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Create an ambient light with an intensity of 1.0
const ambientLight = new THREE.AmbientLight(0x331e38, 1.0);
scene.add(ambientLight);

// Create a directional light with an intensity of 1.0
const directionalLight = new THREE.DirectionalLight(0xf4e8c1, 1.0);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

// At this point, we're not seeing anything in the browser window
// because we're not actually rendering anything yet.

// We need a render (or animate) loop:
const animate = () => {
  // Schedule the animate function to be called at the start of every
  // frame
  requestAnimationFrame(animate);

  // Rotate the cube each frame
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  // Render a frame
  renderer.render(scene, camera);
};

// Anything you want to move or change while the app is running has
// to go through the animate loop.

animate();
