import React, { useEffect, useRef } from 'react';

export const FloatingAtoms = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Atom class
    class Atom {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      electrons: Electron[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 8;
        this.color = '#FDF6EC';
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.electrons = [];
        
        // Create 2-3 electrons per atom
        const electronCount = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < electronCount; i++) {
          this.electrons.push(new Electron(this, i * (360 / electronCount)));
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < this.radius || this.x > canvas!.width - this.radius) {
          this.vx *= -1;
        }
        if (this.y < this.radius || this.y > canvas!.height - this.radius) {
          this.vy *= -1;
        }

        // Update electrons
        this.electrons.forEach(electron => electron.update());
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw nucleus
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Draw inner glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, 'rgba(253, 246, 236, 1)');
        gradient.addColorStop(1, 'rgba(253, 246, 236, 0.2)');
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // Draw electron orbits
        ctx.save();
        ctx.strokeStyle = 'rgba(253, 246, 236, 0.2)';
        ctx.lineWidth = 1;
        this.electrons.forEach(electron => {
          ctx.beginPath();
          ctx.arc(this.x, this.y, electron.orbitRadius, 0, Math.PI * 2);
          ctx.stroke();
        });
        ctx.restore();

        // Draw electrons
        this.electrons.forEach(electron => electron.draw(ctx));
      }
    }

    // Electron class
    class Electron {
      atom: Atom;
      angle: number;
      orbitRadius: number;
      speed: number;
      color: string;

      constructor(atom: Atom, initialAngle: number) {
        this.atom = atom;
        this.angle = initialAngle;
        this.orbitRadius = 20 + Math.random() * 25;
        this.speed = 0.02 + Math.random() * 0.03;
        
        // Random electron colors for visual variety
        const colors = ['#70B5F9', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.angle += this.speed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const x = this.atom.x + Math.cos(this.angle) * this.orbitRadius;
        const y = this.atom.y + Math.sin(this.angle) * this.orbitRadius;

        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Create atoms
    const atoms: Atom[] = [];
    const atomCount = Math.floor(canvas.width / 200); // Responsive atom count
    
    for (let i = 0; i < atomCount; i++) {
      const x = Math.random() * (canvas.width - 100) + 50;
      const y = Math.random() * (canvas.height - 100) + 50;
      atoms.push(new Atom(x, y));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines between nearby atoms
      ctx.save();
      ctx.strokeStyle = 'rgba(253, 246, 236, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Update and draw atoms
      atoms.forEach(atom => {
        atom.update();
        atom.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-background opacity-80"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ height: '300px' }}
      />
      <div className="relative z-10 text-center">
        <h3 className="pixel-font text-3xl mb-4 text-primary">⚛️ Scientific Excellence</h3>
        <p className="geometric-font text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring the atomic world through computational science and machine learning
        </p>
        <div className="mt-8 flex justify-center space-x-8 text-sm text-muted-foreground geometric-font">
          <span>© 2024 Akkaldevi Saivinayak</span>
          <span>•</span>
          <span>Built with React & Scientific Precision</span>
        </div>
      </div>
    </footer>
  );
};

// SVG Atom Component for additional decoration
export const SVGAtom = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`floating-atom ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary">
        {/* Nucleus */}
        <circle cx="30" cy="30" r="6" fill="currentColor" className="opacity-80" />
        
        {/* Electron orbits */}
        <ellipse
          cx="30"
          cy="30"
          rx="20"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-40"
        />
        <ellipse
          cx="30"
          cy="30"
          rx="20"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-40"
          transform="rotate(60 30 30)"
        />
        <ellipse
          cx="30"
          cy="30"
          rx="20"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-40"
          transform="rotate(120 30 30)"
        />
        
        {/* Electrons */}
        <circle cx="50" cy="30" r="2" fill="#70B5F9" className="orbiting-electron">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;360 30 30"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="30" r="2" fill="#FF6B6B" className="orbiting-electron">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="120 30 30;480 30 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="30" r="2" fill="#4ECDC4" className="orbiting-electron">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="240 30 30;600 30 30"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};