import { Progress } from "@base-ui/react"
import type { VariantProps } from "class-variance-authority";
import { progressVariants, indicatorVariants } from "./Progress.styles";


export interface ProgressProps extends
React.ComponentProps<typeof Progress.Root>,
VariantProps<typeof progressVariants>,
VariantProps<typeof indicatorVariants>{}
