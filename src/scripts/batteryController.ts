let active = false;
const listeners: Array<(v: boolean) => void> = [];

export const subscribeBatteryActive = (cb: (v: boolean) => void) => {
  listeners.push(cb);

  cb(active);
  return () => {
    const i = listeners.indexOf(cb);
    if (i >= 0) listeners.splice(i, 1);
  };
};

export const setBatteryActive = (v: boolean) => {
  if (active === v) return;
  active = v;
  listeners.forEach((l) => l(active));
};

export const BatteryActive = () => setBatteryActive(!active);

export const getBatteryActive = () => active;