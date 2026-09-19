import { forwardRef, cloneElement, Children } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, ReactElement } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantStyles = {
  primary:
    "bg-accent-500 text-ink-950 hover:bg-accent-400 focus-visible:ring-accent-400 shadow-[0_14px_34px_-14px_rgba(199,123,63,0.55)]",
  secondary:
    "border border-white/20 bg-white/5 text-bone-50 hover:border-white/35 hover:bg-white/10 focus-visible:ring-bone-200",
};

const sizeStyles = {
  sm: "min-h-10 px-4 py-2 text-xs tracking-[0.14em]",
  md: "min-h-12 px-5 py-3 text-sm tracking-[0.12em]",
  lg: "min-h-14 px-7 py-4 text-sm tracking-[0.14em]",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className = "", href, children, type = "button", asChild, ...props },
    ref,
  ) {
    const classes = [
      "inline-flex items-center justify-center gap-3 font-semibold uppercase transition-colors transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      "hover:-translate-y-0.5",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (asChild) {
      const child = Children.only(children) as ReactElement<any>;
      return cloneElement(child, {
        ref,
        className: [child.props.className, classes].filter(Boolean).join(" "),
      });
    }

    if (href) {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={type as HTMLButtonElement["type"]}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);
