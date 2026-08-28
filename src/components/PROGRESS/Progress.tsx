import { Progress } from '@base-ui/react/progress';
import type { ProgressProps } from './Progress.types';
import { mergeProps } from '@base-ui/react';
import { indicatorVariants, progressVariants } from './Progress.styles';



function NeuProgress(props: ProgressProps) {

    const mergedProps = mergeProps(props,{
        className: progressVariants({
            orientation: props.orientation
        })
    });
 
    const {value, ...otherProps } = mergedProps;

    return (
        <Progress.Root value={value} {...otherProps}>
            <Progress.Track>
            <Progress.Indicator className={indicatorVariants({orientation: props.orientation, variant: props.variant})}
            style={
                props.orientation === "vertical"
                ? {
                    height: `${value}%`,
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                } : {
                    height: "100%",
                    position: "absolute",
                    width: `${value}%`,
                    bottom: 0
                }
            }
            />
            </Progress.Track>
        </Progress.Root>
    )
}

export { NeuProgress }