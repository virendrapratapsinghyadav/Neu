import { mergeProps, useRender } from "@base-ui/react";
import type { InputProps } from "./Input.types";
import { inputVariants } from "./Input.styles";


function NeuInput(props: InputProps){
    
    //Logic Layer
    const mergedProps = mergeProps(props, {
        className: inputVariants(),
        type: props.type,
    })
    
    //Rendering Layer
    const element = useRender({
        defaultTagName: "input",
        render: props.render,
        props: mergedProps,
    })
    return element;
}

export { NeuInput }