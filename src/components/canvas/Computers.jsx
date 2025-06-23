// ComputersCanvas.jsx

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SpotLight } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Brighter & balanced lighting */}
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={35}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <spotLight
        position={[0, 15, 10]}
        angle={1}
        penumbra={0.5}
        intensity={35}
        castShadow
      />

      <pointLight position={[-5, 2, -5]} intensity={0.8} />

      {/* Omni-Man model - centered & lowered a bit */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.35}
        position={[0, -4.0, 0.9]} // Adjust as per visual need
        rotation={[0, 1.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
