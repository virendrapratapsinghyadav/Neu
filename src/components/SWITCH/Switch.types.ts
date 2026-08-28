import { Switch } from "@base-ui/react";
import type { VariantProps } from "class-variance-authority";
import type { switchVariants } from "./Switch.styles";

export interface SwitchProps extends 
React.ComponentProps<typeof Switch.Root>,
VariantProps<typeof switchVariants>{};


