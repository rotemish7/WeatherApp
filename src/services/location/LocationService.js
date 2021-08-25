
export const defaultLocation = { latitude: 32.109333, longitude: 34.855499 };


function getLocation() {
  return new Promise(function (reject, resolve) {
    navigator.geolocation.getCurrentPosition(reject, resolve);
  });
}

export const locationService = {
  getLocation,
};
