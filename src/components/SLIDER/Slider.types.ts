import type { Slider } from "@base-ui/react";
import type { VariantProps } from "class-variance-authority";
import type { indicatorVariants } from "./Slider.styles";


export interface SliderProps extends
React.ComponentProps<typeof Slider.Root>,
VariantProps<typeof indicatorVariants>{}


