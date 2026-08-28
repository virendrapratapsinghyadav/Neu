import { mergeProps, Slider } from "@base-ui/react";
import type { SliderProps } from "./Slider.types";
import { indicatorVariants, sliderVariants, thumbVariants, trackVariants } from "./Slider.styles";

function NeuSlider(props:SliderProps) {

    const mergedProps = mergeProps(props, {
        className: sliderVariants()
    })

  return (
    <div>
      <Slider.Root {...mergedProps}>
        <Slider.Label>
          Volume
        </Slider.Label>
        <Slider.Value/>

        <Slider.Control>
          <Slider.Track className={trackVariants()}>
            <Slider.Indicator className={indicatorVariants({variant: props.variant})} />
            <Slider.Thumb className={thumbVariants()} />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  );
}

export { NeuSlider };