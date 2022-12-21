import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector'


import { ResponsiveBar } from '@nivo/bar'
// import { ResponsiveLine } from '@nivo/line'

import _s from './SecondGraphics.module.scss'

interface Props {}

// export interface Coordinates {
//     x: string;
//     y: number;
// }
// export interface Data {
//     id: string;
//     color: string;
//     data: Coordinates[];
// }

// const commonProperties = {
//   width: 700,
//   height: 400,
//   margin: { top: 30, right: 100, bottom: 100, left: 50 },
//   animate: true,
//   labelTextColor: "Red"
// }

// const data: Data[] = [
//     {
//       "id": "japan",
//       "color": "hsl(170, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 288
//         },
//         {
//           "x": "helicopter",
//           "y": 133
//         },
//         {
//           "x": "boat",
//           "y": 59
//         },
//         {
//           "x": "train",
//           "y": 103
//         }
//       ]
//     },
//     {
//       "id": "france",
//       "color": "hsl(179, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 155
//         },
//         {
//           "x": "helicopter",
//           "y": 20
//         },
//         {
//           "x": "boat",
//           "y": 230
//         },
//         {
//           "x": "train",
//           "y": 208
//         },
//         {
//           "x": "subway",
//           "y": 116
//         },
//         {
//           "x": "bus",
//           "y": 222
//         },
//         {
//           "x": "car",
//           "y": 124
//         },
//         {
//           "x": "moto",
//           "y": 152
//         },
//         {
//           "x": "bicycle",
//           "y": 140
//         },
//         {
//           "x": "horse",
//           "y": 187
//         },
//         {
//           "x": "skateboard",
//           "y": 208
//         },
//         {
//           "x": "others",
//           "y": 228
//         }
//       ]
//     },
//     {
//       "id": "us",
//       "color": "hsl(238, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 36
//         },
//         {
//           "x": "helicopter",
//           "y": 118
//         },
//         {
//           "x": "boat",
//           "y": 102
//         },
//         {
//           "x": "train",
//           "y": 149
//         },
//         {
//           "x": "subway",
//           "y": 231
//         },
//         {
//           "x": "bus",
//           "y": 283
//         },
//         {
//           "x": "car",
//           "y": 270
//         },
//         {
//           "x": "moto",
//           "y": 121
//         },
//         {
//           "x": "bicycle",
//           "y": 259
//         },
//         {
//           "x": "horse",
//           "y": 6
//         },
//         {
//           "x": "skateboard",
//           "y": 194
//         },
//         {
//           "x": "others",
//           "y": 195
//         }
//       ]
//     },
//     {
//       "id": "germany",
//       "color": "hsl(225, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 299
//         },
//         {
//           "x": "helicopter",
//           "y": 179
//         },
//         {
//           "x": "boat",
//           "y": 199
//         },
//         {
//           "x": "train",
//           "y": 154
//         },
//         {
//           "x": "subway",
//           "y": 10
//         },
//         {
//           "x": "bus",
//           "y": 233
//         },
//         {
//           "x": "car",
//           "y": 170
//         },
//         {
//           "x": "moto",
//           "y": 140
//         },
//         {
//           "x": "bicycle",
//           "y": 20
//         },
//         {
//           "x": "horse",
//           "y": 159
//         },
//         {
//           "x": "skateboard",
//           "y": 12
//         },
//         {
//           "x": "others",
//           "y": 231
//         }
//       ]
//     },
//     {
//       "id": "norway",
//       "color": "hsl(148, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 26
//         },
//         {
//           "x": "helicopter",
//           "y": 180
//         },
//         {
//           "x": "boat",
//           "y": 220
//         },
//         {
//           "x": "train",
//           "y": 293
//         },
//         {
//           "x": "subway",
//           "y": 172
//         },
//         {
//           "x": "bus",
//           "y": 172
//         },
//         {
//           "x": "car",
//           "y": 162
//         },
//         {
//           "x": "moto",
//           "y": 244
//         },
//         {
//           "x": "bicycle",
//           "y": 182
//         },
//         {
//           "x": "horse",
//           "y": 74
//         },
//         {
//           "x": "skateboard",
//           "y": 193
//         },
//         {
//           "x": "others",
//           "y": 68
//         }
//       ]
//     }
//   ]

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
      clouds: "Clouds",
      percents: 20
    },
  ];

export const SecondGraphics = () => {
    return (
        <div style={{height: 500, width: 400}}>
        <ResponsiveBar
          data={data}
          keys={["percents"]}
          indexBy="clouds"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          maxValue={100}
          minValue={0}
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
            legend: "percents, %",
            legendPosition: "middle",
            legendOffset: -40
          }}
        />
        </div>
    );
};
//   return (
//     <div style={{height: 400}}>
//     <ResponsiveLine
//       data={data}
//       margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//       xScale={{ type: 'point' }}
//       yScale={{
//             type: 'linear',
//             min: 'auto',
//             max: 'auto',
//             stacked: true,
//             reverse: false
//       }}
//       yFormat=" >-.2f"
//       axisTop={null}
//       axisRight={null}
//       pointSize={10}
//       pointColor={{ theme: 'background' }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: 'serieColor' }}
//       pointLabelYOffset={-12}
//       useMesh={true}
//       legends={[
//                 {
//                     anchor: 'bottom-right',
//                     direction: 'column',
//                     justify: false,
//                     translateX: 100,
//                     translateY: 0,
//                     itemsSpacing: 0,
//                     itemDirection: 'left-to-right',
//                     itemWidth: 80,
//                     itemHeight: 20,
//                     itemOpacity: 0.75,
//                     symbolSize: 12,
//                     symbolShape: 'circle',
//                     symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                     effects: [
//                         {
//                             on: 'hover',
//                             style: {
//                                 itemBackground: 'rgba(0, 0, 0, .03)',
//                                 itemOpacity: 1
//                             }
//                         }
//                     ]
//                 }
//             ]}
//     />
//     </div>
//   );
// };