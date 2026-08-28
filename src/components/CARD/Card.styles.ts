import { cva } from "class-variance-authority";

//Card
const cardVariants = cva(
  "p-3 hover:opacity-90 focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-3 border-border shadow-raised bg-linear-to-tl",
  {
    variants: {
      variant: {
        default: "from-mute/5 to-muted/25",
        primary: "text-primary from-primary/5 to-primary/25",
        destructive: "text-destructive from-destructive/5 to-destructive/25",
        warning: "text-warning from-warning/5 to-warning/25",
      },
      shape: {
        default: "rounded-md",
        rounded: "rounded-3xl",
        square: "rounded-none",
      },
      size: {
        default: "p-4 text-sm min-h-28",
        sm: "p-3 text-xs min-h-sm max-w-sm",
        md: "p-5 text-sm min-h-md max-w-md",
        lg: "p-7 text-base min-h-lg max-w-lg",
        xl: "p-8 text-lg min-h-xl max-w-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);
export { cardVariants };

//CardHeader
const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");
export { cardHeaderVariants };

//CardTitle
const cardTitleVariants = cva("font-semibold leading-none tracking-tight");
export { cardTitleVariants };

//CardDescription
const cardDescriptionVariants = cva("text-sm text-muted-foreground");
export { cardDescriptionVariants };

//CardContent
const cardContentVariants = cva("p-6 pt-0");
export { cardContentVariants };

//CardDescription
const cardFooterVariants = cva("p-6 pt-0");
export { cardFooterVariants };
