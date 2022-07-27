"use strict";
(() => {
    let VolumeLevels;
    (function (VolumeLevels) {
        VolumeLevels[VolumeLevels["min"] = 2] = "min";
        VolumeLevels[VolumeLevels["medium"] = 3] = "medium";
        VolumeLevels[VolumeLevels["max"] = 10] = "max";
    })(VolumeLevels || (VolumeLevels = {}));
    const volume = VolumeLevels.medium;
    console.log(volume);
})();
