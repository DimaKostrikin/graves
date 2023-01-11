import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const ThreeScene = () => {
  const sceneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = sceneContainerRef;
    if (!current) {
      return;
    }

    var scene = new THREE.Scene();
    const color = new THREE.Color(0xaaaaaa);
    scene.background = color;
    var camera = new THREE.PerspectiveCamera(
      50,
      current.clientWidth / current.clientHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(current.clientWidth, current.clientHeight);

    current.appendChild(renderer.domElement);

    const loader = new OBJLoader();
    var id = 0;

    loader.load(
      // resource URL
      "textures/grave.obj",

      // onLoad callback
      // Here the loaded data is assumed to be an object
      function (obj) {
        // Add the loaded object to the scene
        scene.add(obj);
        id = obj.id;
      },

      // onProgress callback
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      // onError callback
      function (err) {
        console.error("An error happened");
      }
    );

    camera.position.z = 200;

    var animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div style={{ height: "100%" }} ref={sceneContainerRef}></div>
    </>
  );
};

const Product = () => {
  return (
    <div>
      <span>Product page</span>
      <div style={{ width: 500, height: 500 }}>
        <ThreeScene />
      </div>
    </div>
  );
};

export default Product;
