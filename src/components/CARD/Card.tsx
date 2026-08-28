import { mergeProps, useRender } from "@base-ui/react";
import { twMerge } from "tailwind-merge";
import { cardVariants, cardHeaderVariants, cardTitleVariants, cardDescriptionVariants, cardContentVariants, cardFooterVariants } from "./Card.styles"
import type { cardProps, cardHeaderProps, cardTitleProps, cardDescriptionProps, cardContentProps, cardFooterProps } from './Card.types';


//Card
function NeuCard(props: cardProps) {

    //Logic Layer
    const mergedProps = mergeProps(props,{
        className: twMerge(
            cardVariants({
                variant: props.variant,
                size: props.size,
                shape: props.shape
            }),
            props.className
        )
    })


    //Rendering Layer
    const element = useRender({
        defaultTagName: "div",
        render: props.render,
        props: mergedProps,
    })

    return element;
}
export {NeuCard};


//CardHeader
function NeuCardHeader(props: cardHeaderProps) {

    //Logic Layer
    const mergedProps = mergeProps(props,{
        className: twMerge(
            cardHeaderVariants(),
            props.className
        )
    });


    //Rendering Layer
    const element = useRender({
        defaultTagName: "div",
        render: props.render,
        props: mergedProps,
    })

    return element;
}
export {NeuCardHeader};


//CardTitle
function NeuCardTitle(props: cardTitleProps) {

    //Logic Layer
    const mergedProps = mergeProps(props,{
        className: twMerge(
            cardTitleVariants(),
            props.className
        )
    });


    //Rendering Layer
    const element = useRender({
        defaultTagName: "div",
        render: props.render,
        props: mergedProps,
    })

    return element;
}
export {NeuCardTitle};


//CardDescription
function NeuCardDescription(props: cardDescriptionProps) {

    //Logic Layer
    const mergedProps = mergeProps(props,{
        className: twMerge(
            cardDescriptionVariants(),
            props.className
        )
    });


    //Rendering Layer
    const element = useRender({
        defaultTagName: "div",
        render: props.render,
        props: mergedProps,
    })

    return element;
}
export {NeuCardDescription};


//CardContent
function NeuCardContent(props: cardContentProps) {

    //Logic Layer
    const mergedProps = mergeProps(props,{
        className: twMerge(
            cardContentVariants(),
            props.className
        )
    });


    //Rendering Layer
    const element = useRender({
        defaultTagName: "div",
        render: props.render,
        props: mergedProps,
    })

    return element;
}
export {NeuCardContent};


//CardFooter
function NeuCardFooter(props: cardFooterProps) {

    //Logic Layer
    const mergedProps = mergeProps(props,{
        className: twMerge(
            cardFooterVariants(),
            props.className
        )
    });


    //Rendering Layer
    const element = useRender({
        defaultTagName: "div",
        render: props.render,
        props: mergedProps,
    })

    return element;
}
export {NeuCardFooter};