import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

