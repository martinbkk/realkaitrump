import { cn } from "@/lib/utils";

interface RainbowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function RainbowLink({
  children,
  className,
  ...props
}: RainbowLinkProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex animate-rainbow cursor-pointer items-center gap-2 rounded-xl border-0 bg-[length:200%] px-4 py-2 text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}