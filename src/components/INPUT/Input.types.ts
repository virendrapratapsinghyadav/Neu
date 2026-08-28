import type { useRender } from "@base-ui/react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./Input.styles";


//Typescript interface for button - API Layer
export interface InputProps extends
useRender.ComponentProps<"input">,
VariantProps<typeof inputVariants>{}