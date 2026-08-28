import { cva } from "class-variance-authority";

const progressVariants = cva('relative overflow-hidden rounded-full bg-background shadow-inset p-0.25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',{
    variants: {
        orientation: {
            horizontal: "w-full h-5",
            vertical: "h-full w-5"
        },
    },
});
export {progressVariants}

const indicatorVariants = cva("absolute bg-foreground h-full rounded-full", {
    variants: {
        orientation: {
            horizontal: "bg-linear-to-l",
            vertical: "bg-linear-to-t"
        },
        variant: {
            default: 'from-primary/25 to-primary/75',
            primary: 'bg-primary',
            secondary: 'bg-gradient-to-r from-muted-foreground to-muted-foreground/75'
        }
    },
    defaultVariants: {
        orientation: "horizontal",
        variant: "default",
    }
});
export { indicatorVariants }
