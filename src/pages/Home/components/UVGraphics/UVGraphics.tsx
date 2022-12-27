import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector'

import { ResponsiveBar } from '@nivo/bar'


import _s from './UVGraphics.module.scss'
import { GraphicUV } from '../../../../store/types/types';

interface Props {
  graphicUV: GraphicUV;
}


// const data = [
//   {
//     UV: "UV",
//     index: 4.20
//   },
// ];

export const UVGraphics = ({ graphicUV }: Props) => {
  return (
    <div style={{height: 500, width: 400}}>
    <ResponsiveBar
      data={[
        {
          UV: "UV",
          index: graphicUV.wind.speed
        },
      ]}
      keys={["index"]}
      indexBy="UV"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      maxValue={12}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "UV index",
        legendPosition: "middle",
        legendOffset: -40
      }}
    />
    </div>
  );
};