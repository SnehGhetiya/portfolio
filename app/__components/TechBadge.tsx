import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import type { FC } from 'react';

interface Props {
  tech: string;
  icon: string; // URL or /public path
}

const TechBadge: FC<Props> = ({ tech, icon }) => {
  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-2 rounded-full px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
    >
      <Image
        src={icon}
        alt={`${tech} logo`}
        width={20}
        height={20}
        sizes="(max-width: 640px) 16px, 20px"
        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
      />
      <span className="font-medium">{tech}</span>
    </Badge>
  );
};

export default TechBadge;
