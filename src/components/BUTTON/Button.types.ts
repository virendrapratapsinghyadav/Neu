import { useRender } from "@base-ui/react"
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from './Button.styles';


//Typescript interface for button - API Layer
export interface ButtonProps
    extends useRender.ComponentProps<"button">,  //all native HTML button props & useRender to have own wrapper rather than exposing to react
    VariantProps<typeof buttonVariants> {}      //all cva variants




