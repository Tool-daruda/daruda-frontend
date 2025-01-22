// import { OrbitControls } from '@react-three/drei';
// import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// import React, { useRef } from 'react';
// import { Mesh, MeshStandardMaterial } from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// const Model: React.FC = () => {
//   const obj = useLoader(OBJLoader, '/logo_landing.obj');
//   const ref = useRef<Mesh>(null);

//   // 모델 로딩 후 색상 수정
//   obj.traverse((child) => {
//     if (child.isMesh) {
//       child.material = new MeshStandardMaterial({ color: 'purple' }); // 보라색 설정
//     }
//   });

//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.01; // Y축 기준으로 회전 (속도: 0.01 라디안/frame)
//     }
//   });

//   return <primitive ref={ref} object={obj} scale={0.5} />;
// };

// // My3DScene 컴포넌트
// const My3DScene: React.FC = () => {
//   return (
//     <Canvas>
//       {/* 조명 설정 */}
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} intensity={1} />

//       {/* 3D 모델 */}
//       <Model />

//       {/* 마우스 조작 컨트롤 */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default My3DScene;
