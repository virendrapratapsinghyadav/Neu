import { cva } from "class-variance-authority";

const sliderVariants = cva("w-full");
export { sliderVariants }


const trackVariants = cva("relative w-full rounded-full shadow-inset h-4");
export { trackVariants }


const indicatorVariants = cva("absolute h-full rounded-full",{
    variants: {
        variant: {
            default: "bg-linear-to-l from-primary to primary/75",
            secondary: "bg-linear-to-l from-muted-foreground to-muted-foreground/75"
        }
    },
    defaultVariants:{
        variant: "default"
    }
});
export { indicatorVariants }


const thumbVariants = cva("h-5 w-5 rounded-full border-1 border-highlight bg-background "+ "cursor-pointer");
export { thumbVariants }


