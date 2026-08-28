import { cva } from "class-variance-authority";


const checkboxVariants = cva('h-5 w-5 relative block cursor-pointer rounded-sm border-1 border-highlight bg-background shadow-inset ' +
    'ease-out transition-all duration-300 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ' +
    'data-[checked]:shadow-raised data-[checked]:border-primary/80  data-[checked]:bg-linear-to-tl data-[checked]:from-primary/5 data-[checked]:to-primary/25 ');

export { checkboxVariants }


const checkIndicatorVariants = cva('flex absolute items-center justify-center top-1/2 left-1/2 -translate-1/2')

export { checkIndicatorVariants }