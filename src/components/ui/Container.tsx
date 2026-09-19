import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export type { ContainerProps };
