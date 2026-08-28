import { Checkbox, mergeProps } from "@base-ui/react"
import type { CheckboxProps } from "./Checkbox.types"
import { checkboxVariants, checkIndicatorVariants } from "./Checkbox.styles"
import { Check } from "lucide-react";


function NeuCheckbox(props: CheckboxProps) {

    const mergedProps = mergeProps(props, {
        className: checkboxVariants()
    });

    const mergedIndicator = mergeProps(props, {
        className: checkIndicatorVariants()
    });


    return (
        <Checkbox.Root {...mergedProps}>
            <Checkbox.Indicator {...mergedIndicator}>
                <Check className="w-3 h-3 text-primary"/>
            </Checkbox.Indicator>    
        </Checkbox.Root>
    )
}

export { NeuCheckbox }