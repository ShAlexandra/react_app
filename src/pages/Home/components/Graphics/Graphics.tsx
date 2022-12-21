import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector'

// import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar'

import _s from './Graphics.module.scss'

interface Props {}

export interface Coordinates {
    x: string;
    y: number;
}
export interface Data {
    id: string;
    color: string;
    data: Coordinates[];
}

const commonProperties = {
  width: 700,
  height: 400,
  margin: { top: 30, right: 100, bottom: 100, left: 50 },
  animate: true,
  labelTextColor: "Red"
}

// const data: Data[] = [
//   {
//     "id": "france",
//     "color": "hsl(327, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 263
//       },
//       {
//         "x": "helicopter",
//         "y": 107
//       },
//       {
//         "x": "boat",
//         "y": 186
//       },
//       {
//         "x": "train",
//         "y": 34
//       },
//       {
//         "x": "subway",
//         "y": 264
//       },
//       {
//         "x": "bus",
//         "y": 212
//       },
//       {
//         "x": "car",
//         "y": 226
//       },
//       {
//         "x": "moto",
//         "y": 78
//       },
//       {
//         "x": "bicycle",
//         "y": 41
//       },
//       {
//         "x": "horse",
//         "y": 237
//       },
//       {
//         "x": "skateboard",
//         "y": 287
//       },
//       {
//         "x": "others",
//         "y": 23
//       }
//     ]
//   }
// ]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// export const Graphics = ( prop: Props ) => {
//     return (
//     <ResponsiveLine
//     {...commonProperties}
//         data={data}
//         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//         xScale={{ type: 'point' }}
//         yScale={{
//             type: 'linear',
//             min: 'auto',
//             max: 'auto',
//             stacked: true,
//             reverse: false
//         }}
//         yFormat=" >-.2f"
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//             orient: 'bottom',
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'transportation',
//             legendOffset: 36,
//             legendPosition: 'middle'
//         }}
//         axisLeft={{
//             orient: 'left',
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'count',
//             legendOffset: -40,
//             legendPosition: 'middle'
//         }}
//         pointSize={10}
//         pointColor={{ theme: 'background' }}
//         pointBorderWidth={2}
//         pointBorderColor={{ from: 'serieColor' }}
//         pointLabelYOffset={-12}
//         useMesh={true}
//         legends={[
//             {
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 100,
//                 translateY: 0,
//                 itemsSpacing: 0,
//                 itemDirection: 'left-to-right',
//                 itemWidth: 80,
//                 itemHeight: 20,
//                 itemOpacity: 0.75,
//                 symbolSize: 12,
//                 symbolShape: 'circle',
//                 symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemBackground: 'rgba(0, 0, 0, .03)',
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
//     )
// }
const data = [
  {
    day: "Monday",
    degress: 59
  },
  {
    day: "Tuesday",
    degress: 61
  },
  {
    day: "Wednesday",
    degress: 55
  },
  {
    day: "Thursday",
    degress: 78
  },
  {
    day: "Friday",
    degress: 71
  },
  {
    day: "Saturday",
    degress: 56
  },
  {
    day: "Sunday",
    degress: 67
  }
];

export const Graphics = () => {
  return (
    <div style={{height: 200}}>
    <ResponsiveBar
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40
      }}
    />
    </div>
  );
};