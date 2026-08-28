import { useRender } from "@base-ui/react";
import type { VariantProps } from "class-variance-authority";
import { cardVariants, cardHeaderVariants, cardTitleVariants, cardDescriptionVariants, cardContentVariants, cardFooterVariants } from "./Card.styles"

//Card
export interface cardProps 
extends useRender.ComponentProps<"div">,
VariantProps<typeof cardVariants>{}


//CardHeader
export interface cardHeaderProps 
extends useRender.ComponentProps<"div">,
VariantProps<typeof cardHeaderVariants>{}

//CardTitle
export interface cardTitleProps 
extends useRender.ComponentProps<"div">,
VariantProps<typeof cardTitleVariants>{}

//CardDescription
export interface cardDescriptionProps 
extends useRender.ComponentProps<"div">,
VariantProps<typeof cardDescriptionVariants>{}

//CardContent
export interface cardContentProps 
extends useRender.ComponentProps<"div">,
VariantProps<typeof cardContentVariants>{}

//CardFooter
export interface cardFooterProps 
extends useRender.ComponentProps<"div">,
VariantProps<typeof cardFooterVariants>{}