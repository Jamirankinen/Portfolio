import { useEffect, useRef, useState } from "react";
import { Engine, Runner, World, Bodies, Body, Events, Vector } from "matter-js";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./PhysicsSkills.module.css";

const PhysicsSkills = () => {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const skillBodiesRef = useRef([]);
  const [positions, setPositions] = useState([]);

  // Track last mouse position to calculate velocity
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 0;
    engine.gravity.x = 0;
    engineRef.current = engine;

    const runner = Runner.create();
    runnerRef.current = runner;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Walls
    const wallThickness = 100;
    const walls = [
      Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, {
        isStatic: true,
      }), // top
      Bodies.rectangle(
        width / 2,
        height + wallThickness / 2,
        width,
        wallThickness,
        {
          isStatic: true,
        }
      ), // bottom
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, {
        isStatic: true,
      }), // left
      Bodies.rectangle(
        width + wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        {
          isStatic: true,
        }
      ), // right
    ];
    World.add(world, walls);

    // Skills
    const radius = container.offsetWidth * 0.055;
    const centerX = width / 2;
    const centerY = height / 2;
    const circleRadius = Math.min(width, height) / 3;
    const skillBodies = skills.map((skill, index) => {
      const angle = (index / skills.length) * 2 * Math.PI;
      const x = centerX + circleRadius * Math.cos(angle);
      const y = centerY + circleRadius * Math.sin(angle);

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.9,
        friction: 0.1,
        frictionAir: 0.025,
      });
      Body.setVelocity(body, { x: 0, y: 0 }); // no initial movement
      return body;
    });

    skillBodiesRef.current = skillBodies;
    World.add(world, skillBodies);

    Runner.run(runner, engine);

    // Sync positions
    const updatePositions = () => {
      const newPositions = skillBodiesRef.current.map((body) => ({
        x: body.position.x,
        y: body.position.y,
      }));
      setPositions(newPositions);
    };

    Events.on(engine, "afterUpdate", updatePositions);

    // Mouse move handler - apply force to skills near cursor
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate cursor velocity vector
      const velocity = {
        x: mouseX - lastMousePos.current.x,
        y: mouseY - lastMousePos.current.y,
      };
      lastMousePos.current = { x: mouseX, y: mouseY };

      if (velocity.x === 0 && velocity.y === 0) return; // no movement

      // Normalize velocity vector & multiply by a force magnitude
      const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
      if (speed === 0) return;

      const forceMagnitude = 0.002; // tweak force strength
      const force = Vector.mult(Vector.normalise(velocity), forceMagnitude);

      // Apply force to skills within 100px radius of mouse
      skillBodiesRef.current.forEach((body, i) => {
        const dx = body.position.x - mouseX;
        const dy = body.position.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        console.log("Mouse move", mouseX, mouseY, velocity);
        console.log("Applying force to body", i, force);

        if (dist < 100) {
          // Apply force away from cursor movement
          Body.applyForce(body, body.position, force);
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      World.clear(world);
      Engine.clear(engine);
      Runner.stop(runner);
    };
  }, []);

  return (
    <div className={styles.physicsContainer} ref={containerRef}>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={styles.skillItem}
          style={{
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          <div className={styles.skillImageContainer}>
            <img src={getImageUrl(skills[i].imageSrc)} alt={skills[i].title} />
          </div>
          <p>{skills[i].title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhysicsSkills;
