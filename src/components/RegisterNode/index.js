import { Graph, Shape, Edge } from '@antv/x6';
import '@antv/x6-react-shape';
import {
  FlowProcessTechnologyElement,
  FlowAuxiliaryProcessElement,
  FlowSizeMeasurementElement,
  FlowStartElement,
  FlowOEE,
  FlowInfoMessag,
} from '../NodeElement';
import {
  FLOW_START_NODE_WIDTH,
  FLOW_START_NODE_HEIGHT,
  NODE_ZINDEX,
} from '../NodeElement/constant';

const ports = {
  groups: {
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'right',
    },
    {
      group: 'top',
    },
    {
      group: 'left',
    },
  ],
};

Graph.registerReactComponent(
  'FlowProcessTechnologyElement',
  <FlowProcessTechnologyElement />,
  true,
);
Graph.registerReactComponent(
    'FlowAuxiliaryProcessElement',
    <FlowAuxiliaryProcessElement />,
    true,
  );
  Graph.registerReactComponent(
    'FlowSizeMeasurementElement',
    <FlowSizeMeasurementElement />,
    true,
  );
  
Graph.registerReactComponent('FlowStartRect', <FlowStartElement />, true);
Graph.registerReactComponent('FlowEndElement', <FlowStartElement />, true);
Graph.registerReactComponent('FlowOEE', <FlowOEE />, true);
Graph.registerReactComponent('FlowInfoMessag', <FlowInfoMessag />, true);



export const CustomRect = Graph.registerNode(
  'custom-rect',
  {
     inherit: 'circle',
    width: 50,
    height: 50,
  
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
  
    },
    ports: { ...ports },
  },
  true,
);

export const FlowStartRect = Graph.registerNode(
  'flow-start-rect',
  {
    inherit: 'react-shape',
    component: 'FlowStartRect',
    width: FLOW_START_NODE_WIDTH,
    height: FLOW_START_NODE_HEIGHT,
    zIndex: NODE_ZINDEX,
    data: {
      portsLight: true,
    },
    ports: {
      groups: {
        right: {
          position: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
      },
      items: [
        {
          group: 'right',
        },
      ],
    },
  },
  true,
);
export const FlowEndRect = Graph.registerNode(
  'flow-end-rect',
  {
    inherit: 'react-shape',
    component: 'FlowEndElement',
    width: FLOW_START_NODE_WIDTH,
    height: FLOW_START_NODE_HEIGHT,
    zIndex: NODE_ZINDEX,
    data: {
      portsLight: true,
    },
    ports: {
      groups: {
        left: {
          position: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
      },
      items: [
        {
          group: 'left',
        },
      ],
    },
  },
  true,
);
export const ProcessingTechnology = Graph.registerNode(
  'processing-technology',
  {
    inherit: 'react-shape',
    component: 'FlowProcessTechnologyElement',
    width: 80,
    height: 60,
    zIndex: NODE_ZINDEX,
    icon: 'icon-yly_jiagong',
    data: {
      portsLight: true,
    },
    ports: { ...ports },
  },
  true,
);
export const FlowOEERect = Graph.registerNode(
    'flow-OEE',
    {
      inherit: 'react-shape',
      component: 'FlowOEE',
      width: 100,
      height: 90,
      zIndex: NODE_ZINDEX,
      data: {
        portsLight: true,
      },
      ports: { ...ports },
    },
    true,
  );
export const AuxiliaryProcess = Graph.registerNode(
    'auxiliary-process',
    {
      inherit: 'react-shape',
      component: 'FlowAuxiliaryProcessElement',
      width: 80,
      height: 60,
      zIndex: NODE_ZINDEX,
      icon: 'icon-fuzhu_xiezhu',
      data: {
        portsLight: true,
      },
      ports: { ...ports },
    },
    true,
  );

  export const SizeMeasurement = Graph.registerNode(
    'size-measurement',
    {
      inherit: 'react-shape',
      component: 'FlowSizeMeasurementElement',
      width: 80,
      height: 60,
      zIndex: NODE_ZINDEX,
      icon: 'icon-zhiliangjiance',
      data: {
        portsLight: true,
      },
      ports: { ...ports },
    },
    true,
  );

  export const FlowInfomessag = Graph.registerNode(
    'flow-infomessag',
    {
      inherit: 'react-shape',
      component: 'FlowInfoMessag',
      width: 80,
      height: 60,
      zIndex: NODE_ZINDEX,
      icon: 'icon-zhiliangjiance',
      data: {
        portsLight: true,
      },
      ports: { ...ports },
    },
    true,
  );
  

export const CustomQuality = Graph.registerNode(
  'custom-quality',
  {
    inherit: 'rect',
    width: 70, // Number，可选，节点大小的 width 值
    height: 40,
    attrs: {
      body: {
        strokeWidth: 2,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        color: '#262626',
        fontWeight: 500,
      },
    },
    ports: { ...ports },
  },
  true,
);

  export const AuxiliaryRect = Graph.registerNode(
    'auxiliary-rect',
    {
      inherit: 'rect',
      width: 70, // Number，可选，节点大小的 width 值
      height: 40,
      attrs: {
        body: {
          strokeWidth: 2,
          stroke: '#84af9b',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          color: '#262626',
          fontWeight: 500,
        },
      },
      ports: { ...ports },
    },
    true,
  );


  

export const NormalManhattanRound = Graph.registerEdge(
  'normal-manhattan-round',
  {
    inherit: Edge,

    zIndex: 0,
  },
  true,
);
