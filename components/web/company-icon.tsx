import { Building2Icon } from "lucide-react";
import Image from "next/image";

export function CompanyIcon({ logo, companyName }: { logo?: string; companyName: string }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground">
      {logo ? (
        <Image
          alt=""
          aria-hidden
          className="size-4 object-contain dark:brightness-0 dark:invert"
          height={16}
          width={16}
          src={logo}
        />
      ) : (
        <Building2Icon aria-label={companyName} className="size-4" />
      )}
    </span>
  );
}
