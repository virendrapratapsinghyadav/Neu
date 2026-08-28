import { cva } from "class-variance-authority";

//Styling Layer
const inputVariants = cva('flex w-full rounded-md border-1 border-highlight bg-background px-3 py-2 text-sm ring-offset-background file-border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground shadow-inset disabled:opacity-50');

export { inputVariants }