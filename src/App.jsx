import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

const App = () => {
  return (
    <div>
      <h1 className="title">Welcome</h1>
      <Canvas
        className="mc2200"
        style={{ height: '600px', width: '800px', margin: '0 auto' }}
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
