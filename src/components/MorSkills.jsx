import React from 'react'
import './cssBoiler.css'
import './MorSkills.css'
import { SkillCard } from './SkillCard'
import ReactLogo from './assets/reacticon.svg'
import RedisLogo from "./assets/redis.svg";
import Tailwind from "./assets/tailwind.svg";
import NodeJS from "./assets/node.svg";
import ExpressJS from "./assets/express.png";
import MongoDB from "./assets/mongodb.svg";
import Postgres from "./assets/pg.png";
import Kafka from "./assets/kafka.svg";
import Microservices from "./assets/structure.png";
import JS from "./assets/js.png"

function MorSkills() {
  return (
    <div>
      <div className="whole-morSkills" data-aos="fade-up">
        <div className="cen-mor">
          <h1>Some of my skills</h1>
        </div>

        <div className="fullCen" id="skls">
          <div className="skill-card-div">
          <SkillCard
              logo={JS}
              title="JavaScript"
              desc="Strong command over JavaScript — from core concepts to advanced patterns like closures, async/await, and event-driven architecture across both frontend and backend."
            />
            <SkillCard
              logo={ReactLogo}
              title="React JS"
              desc="Proficient in modern React — advanced hooks, context API, optimized form handling, and scalable component architecture. I build fast, maintainable UIs using best practices and performance-focused techniques."
            />
            <SkillCard
              logo={Tailwind}
              title="Tailwind CSS"
              desc="Tailwind CSS is my go-to for styling — it streamlines my workflow by enabling utility-first design directly in markup. I use it to craft clean, responsive, and modern UIs efficiently."
            />
            <SkillCard
              logo={NodeJS}
              title="Node JS"
              desc="After mastering frontend development, I dove deep into Node.js — building full-stack apps using core modules like fs, http, child_process, and cluster. I’ve developed scalable APIs, CLI tools, and handled real-world backend scenarios with performance and reliability in focus."
            />
            <SkillCard
              logo={RedisLogo}
              title="Redis"
              desc="Proficient in using Redis for caching and session management — improving application speed, efficiency, and overall backend performance."
            />
            <SkillCard
              logo={Kafka}
              title="Kafka"
              desc="Used Apache Kafka for building robust microservices architecture — enabling reliable event-driven communication and handling high-throughput data streams efficiently."
            />
            <SkillCard
              logo={Microservices}
              title="Microservices"
              desc="Experienced in designing and developing microservices-based backends — with a focus on scalability, modularity, and clean communication using REST, Kafka, and Redis."
            />
            <SkillCard
              logo={ExpressJS}
              title="Express JS"
              desc="Skilled in building fast and scalable APIs using Express.js — with structured routing, middleware, and robust error handling in production-ready applications."
            />
            <SkillCard
              logo={Postgres}
              title="PostgreSQL"
              desc="Proficient in PostgreSQL — designing normalized schemas, writing complex queries, and optimizing performance for scalable, data-driven applications."
            />
            <SkillCard
              logo={MongoDB}
              title="MongoDB"
              desc="Experienced with MongoDB — designing flexible schemas, optimizing queries, and handling large-scale data using Mongoose and the aggregation framework."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MorSkills