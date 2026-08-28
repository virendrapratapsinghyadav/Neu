import { mergeProps, useRender } from "@base-ui/react"
import { twMerge } from "tailwind-merge";
import { buttonVariants } from './Button.styles';
import type { ButtonProps } from "./Button.types";


function NeuButton(props: ButtonProps) {

    //Logic Layer
    const mergedProps = mergeProps(props, {
        className: twMerge(
            buttonVariants(
                {
                    variant: props.variant,
                    size: props.size,
                    shape: props.shape
                }
            ),
            props.className
        ),
        tabIndex: 0,
    });

    //Rendering Layer
    const element = useRender({
        defaultTagName: "button",
        render: props.render,
        props: mergedProps,
    })
    return element;
}

export { NeuButton }