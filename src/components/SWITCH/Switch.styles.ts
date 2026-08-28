import { cva } from "class-variance-authority";

export const switchVariants = cva(
  "relative block shrink-0 cursor-pointer h-5.5 w-12 rounded-full bg-background shadow-inset transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 " +
  "data-[checked]:bg-primary data-[checked]:border-primary border border-highlight data-[disabled]:opacity-60"
);

export const thumbVariants = cva(
  "absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-background shadow-inset " +
  "transition-transform duration-300 ease-out data-[checked]:translate-x-6.5 border border-highlight"
);