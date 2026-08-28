import { cva } from "class-variance-authority";

//Styling Layer
 const buttonVariants = cva("inline-flex justify-center items-center cursor-pointer hover:opacity-90 focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-3 border-border shadow-raised bg-linear-to-tl disabled:opacity-50 disabled:pointer-events-none font-medium active:shadow-inset transition-all duration-250 ease-out active:scale-97 whitespace-nowrap",
    {
        variants: {
            variant: {
                default: "from-mute/5 to-muted/25",
                primary: "text-primary from-primary/5 to-primary/25",
                destructive: "text-destructive from-destructive/5 to-destructive/25",
                warning: "text-warning from-warning/5 to-warning/25",
            },
            size: {
                default: "h-12 px-4",
                icon: "h-12 w-12"
            },
            shape: {
                default: "rounded-xl",
                circle: "rounded-full"
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            shape: 'default'
        }
    }
);

export { buttonVariants };