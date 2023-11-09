import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">Home Value</Typography>
        <Typography variant="h5">$ 3000</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          $1000
        </Typography>
        <Typography variant="caption" color="text.secondary">
          $10000
        </Typography>
      </Stack>
      {/* Start video at 1:26:54 */}
    </>
  );
};

export default SliderComponent;
