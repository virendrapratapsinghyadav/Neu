import { cva } from "class-variance-authority";

const tabsRootVariants = cva('w-full');
export { tabsRootVariants }

const tabsTabVariants = cva('inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-background data-[active]:text-foreground data-[active]:shadow-inset cursor-pointer hover:text-foreground duration-350 relative z-10');
export { tabsTabVariants }

const tabsListVariants = cva('relative  inline-flex h-12 items-center justify-center rounded-2xl bg-linear-to-tl from-background to-highlight/75 p-1 text-muted-foreground shadow-raised border-3 border-border gap-4');
export { tabsListVariants }

const tabsIndicatorVariants = cva('absolute rounded-sm bg-background shadow-raised transition-all duration-200 border-1 border-background');
export { tabsIndicatorVariants }

const tabsPanelVariants = cva('mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2');
export { tabsPanelVariants }
