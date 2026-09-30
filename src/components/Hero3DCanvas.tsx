import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6.2);

    // 2. Renderer setup with high precision tone mapping
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // 3. Create procedural micro-scratch normal map for material realism
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 512;
    textureCanvas.height = 512;
    const ctx = textureCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#8080ff'; // Neutral normal base
      ctx.fillRect(0, 0, 512, 512);

      // Fine brushed micro-imperfections
      ctx.strokeStyle = '#8a8aff';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 400; i++) {
        const y = Math.random() * 512;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, y);
        ctx.lineTo(Math.random() * 512, y + (Math.random() - 0.5) * 4);
        ctx.stroke();
      }
    }
    const scratchTexture = new THREE.CanvasTexture(textureCanvas);
    scratchTexture.wrapS = THREE.RepeatWrapping;
    scratchTexture.wrapT = THREE.RepeatWrapping;
    scratchTexture.repeat.set(4, 4);

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0a0c10, 1.2);
    scene.add(ambientLight);

    // Warm Key Light (top right front)
    const keyLight = new THREE.DirectionalLight(0xfff6ea, 4.2);
    keyLight.position.set(4.5, 5.0, 3.5);
    scene.add(keyLight);

    // Cold Rim Light (rear left top to catch physical edges)
    const rimLight = new THREE.DirectionalLight(0xd4e2ff, 5.5);
    rimLight.position.set(-4.5, 3.5, -3.5);
    scene.add(rimLight);

    // Subtle Ground Bounce Fill
    const fillLight = new THREE.DirectionalLight(0x1d202b, 1.8);
    fillLight.position.set(0.5, -4.0, 2.5);
    scene.add(fillLight);

    // Internal Specular Accent Light
    const corePointLight = new THREE.PointLight(0xffffff, 2.5, 8);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // 5. Materials (Polished Dark Obsidian Metal + Translucent Refractive Glass)
    const darkMetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x14151a,
      roughness: 0.22,
      metalness: 0.94,
      clearcoat: 0.85,
      clearcoatRoughness: 0.16,
      normalMap: scratchTexture,
      normalScale: new THREE.Vector2(0.12, 0.12)
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf0f3fa,
      transmission: 0.93,
      opacity: 0.98,
      transparent: true,
      roughness: 0.08,
      ior: 1.54,
      thickness: 1.6,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06
    });

    const innerCoreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x22242c,
      roughness: 0.15,
      metalness: 0.98,
      clearcoat: 0.9
    });

    // 6. Sculptural Group Creation
    const sculptureGroup = new THREE.Group();

    // Architectural curved ribbon (Dark Metal)
    const metalTorusGeo = new THREE.TorusKnotGeometry(1.3, 0.32, 160, 32, 2, 3);
    const metalMesh = new THREE.Mesh(metalTorusGeo, darkMetalMaterial);
    metalMesh.scale.set(0.9, 0.9, 0.9);
    sculptureGroup.add(metalMesh);

    // Intertwined refractive glass envelope
    const glassTorusGeo = new THREE.TorusKnotGeometry(1.35, 0.26, 140, 28, 3, 2);
    const glassMesh = new THREE.Mesh(glassTorusGeo, glassMaterial);
    glassMesh.rotation.x = Math.PI / 4;
    glassMesh.rotation.z = Math.PI / 6;
    sculptureGroup.add(glassMesh);

    // Central geometric core (anchoring the refraction)
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 3);
    const coreMesh = new THREE.Mesh(coreGeo, innerCoreMaterial);
    sculptureGroup.add(coreMesh);

    // Subtle floating ring
    const ringGeo = new THREE.TorusGeometry(1.9, 0.025, 24, 90);
    const ringMesh = new THREE.Mesh(ringGeo, darkMetalMaterial);
    ringMesh.rotation.x = Math.PI / 2.3;
    sculptureGroup.add(ringMesh);

    scene.add(sculptureGroup);
    setIsLoaded(true);

    // 7. Heavy Physical Physics & Mouse Damping
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      
      const normX = (clientX / rect.width) * 2 - 1;
      const normY = -(clientY / rect.height) * 2 + 1;

      // Restrained target rotation range for heavy physical feel
      targetRotY = normX * 0.45;
      targetRotX = -normY * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Heavy mass physics damping
      currentRotX += (targetRotX - currentRotX) * 0.035;
      currentRotY += (targetRotY - currentRotY) * 0.035;

      // Slow, dignified architectural rotation
      sculptureGroup.rotation.y += 0.0035;
      sculptureGroup.rotation.x = 0.2 + currentRotX * 0.7;
      sculptureGroup.rotation.z = Math.sin(clock.getElapsedTime() * 0.35) * 0.06 + currentRotY * 0.5;
      sculptureGroup.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.07;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      metalTorusGeo.dispose();
      glassTorusGeo.dispose();
      coreGeo.dispose();
      ringGeo.dispose();
      darkMetalMaterial.dispose();
      glassMaterial.dispose();
      innerCoreMaterial.dispose();
      scratchTexture.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-80 h-80 rounded-full border border-white/10 bg-gradient-to-tr from-[#0f1015] via-[#161720] to-[#252834] flex items-center justify-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="w-56 h-56 rounded-full border border-white/20 bg-gradient-to-br from-[#1b1c24] to-[#0a0b0e] flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">Luvora Sculpture</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[580px] flex items-center justify-center pointer-events-none select-none">
      {/* Dark studio background vignette & controlled atmospheric lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(8,8,10,0)_68%)] pointer-events-none" />
      
      {/* Subtle floor shadow plane */}
      <div className="absolute bottom-8 w-72 h-14 bg-black/60 blur-2xl rounded-full transform -rotate-1 pointer-events-none" />

      {/* Three.js mount element */}
      <div 
        ref={mountRef} 
        className={`w-full h-full flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
      />
    </div>
  );
};
