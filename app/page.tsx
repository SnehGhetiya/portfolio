import Header from '@/__components/Header';
import Hero from '@/__components/Hero';
import type { FC } from 'react';
import '../index.css';

const Home: FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
      `,
          backgroundSize: '100% 100%',
        }}
      >
        <Header />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
