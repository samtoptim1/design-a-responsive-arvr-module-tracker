interface_ModuleTracker {
  moduleName: string;
  moduleId: number;
  moduleType: 'AR' | 'VR';
  responsiveness: {
    screenOrientation: 'portrait' | 'landscape';
    screenResolution: {
      width: number;
      height: number;
    };
  };
  trackingData: {
    timestamp: number;
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      alpha: number;
      beta: number;
      gamma: number;
    };
  }[];
}

interface_ARVRModules {
  AR: _ModuleTracker[];
  VR: _ModuleTracker[];
}

const moduleTrackerConfig: _ARVRModules = {
  AR: [
    {
      moduleName: 'AR_Marker_Detection',
      moduleId: 101,
      moduleType: 'AR',
      responsiveness: {
        screenOrientation: 'portrait',
        screenResolution: {
          width: 1080,
          height: 1920,
        },
      },
      trackingData: [
        {
          timestamp: 1643723400,
          position: {
            x: 0.5,
            y: 0.2,
            z: 0.1,
          },
          rotation: {
            alpha: 0.1,
            beta: 0.2,
            gamma: 0.3,
          },
        },
      ],
    },
  ],
  VR: [
    {
      moduleName: 'VR_Hand_Tracking',
      moduleId: 202,
      moduleType: 'VR',
      responsiveness: {
        screenOrientation: 'landscape',
        screenResolution: {
          width: 1440,
          height: 2960,
        },
      },
      trackingData: [
        {
          timestamp: 1643723500,
          position: {
            x: 0.7,
            y: 0.4,
            z: 0.2,
          },
          rotation: {
            alpha: 0.4,
            beta: 0.5,
            gamma: 0.6,
          },
        },
      ],
    },
  ],
};

export default moduleTrackerConfig;