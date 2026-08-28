import { mergeProps, Switch } from "@base-ui/react";
import type { SwitchProps } from "./Switch.types";
import { switchVariants, thumbVariants } from "./Switch.styles";


function NeuSwitch(props: SwitchProps) {

    const mergedProps = mergeProps(props,{
        className: switchVariants()
    });

    const thumbProps = mergeProps(props,{
        className: thumbVariants()
    });

    return(
        <Switch.Root {...mergedProps}>
            <Switch.Thumb {...thumbProps}/>
        </Switch.Root>
    )
}

export { NeuSwitch }