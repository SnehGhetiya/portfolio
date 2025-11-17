'use client';

import { Button } from '@/components/ui/button';
import { Eye, PhoneOutgoing } from 'lucide-react';
import type { FC } from 'react';
import TechBadge from './TechBadge';

const TECH_STACKS = [
  {
    technology: 'TypeScript',
    icon: '/assets/icons/typescript.svg',
  },
  {
    technology: 'JavaScript',
    icon: '/assets/icons/javascript.svg',
  },
  {
    technology: 'React.js',
    icon: '/assets/icons/react_light.svg',
  },
  {
    technology: 'Node.js',
    icon: '/assets/icons/nodejs.svg',
  },
  {
    technology: 'Express.js',
    icon: '/assets/icons/expressjs.svg',
  },
  {
    technology: 'Next.js',
    icon: '/assets/icons/nextjs_icon_dark.svg',
  },
  {
    technology: 'Nest.js',
    icon: '/assets/icons/nestjs.svg',
  },
  {
    technology: 'MongoDB',
    icon: '/assets/icons/mongodb-icon-light.svg',
  },
  {
    technology: 'PostgreSQL',
    icon: '/assets/icons/postgresql.svg',
  },
  {
    technology: 'Go',
    icon: '/assets/icons/golang.svg',
  },
  {
    technology: 'Docker',
    icon: '/assets/icons/docker.svg',
  },
];

const Hero: FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Greeting and Name */}
        <p className="text-foreground/80 mb-4 text-lg sm:text-xl">Hi, I&apos;m</p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="text-primary bg-clip-text">Sneh Ghetiya</span>
        </h1>

        {/* Description */}
        <p className="text-foreground/70 mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
          Full Stack Developer based in India. I specialize in building scalable web applications using modern
          technologies. I love architecting and designing systems that solve real-world problems.
        </p>

        {/* Tech Stack */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {TECH_STACKS.map((tech, index) => (
            <TechBadge key={`${tech.technology}-${index}`} tech={tech.technology} icon={tech.icon} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer rounded-full"
            size="lg"
          >
            <PhoneOutgoing fontSize="20" />
            Contact Me
          </Button>
          <Button className="cursor-pointer rounded-full" variant="outline" size="lg">
            <Eye fontSize="20" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
