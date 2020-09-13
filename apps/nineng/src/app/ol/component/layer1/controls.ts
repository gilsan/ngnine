import { Attribution, defaults as defaultControls } from 'ol/control';

export const attributionControl = new Attribution({
  collapsible: true
});

export const defaultControl = defaultControls({ attribution: false }).extend([attributionControl]);