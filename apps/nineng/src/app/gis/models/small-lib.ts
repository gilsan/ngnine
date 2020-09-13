
export interface SmallLib {
  service: {
    name: string;
    version: number;
    operation: string;
    time: number;
  };
  status: string;
  record: {
    total: number;
    current: number;
  };

  page: {
    total: number;
    current: number;
    size: number;
  };

};

export interface IFeature {
  "type": string;
  "features": [];
};