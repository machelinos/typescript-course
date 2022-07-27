(()=>{
    enum VolumeLevels {
        min = 2,
        medium = 3,
        max = 10,
    }

    const volume: VolumeLevels = VolumeLevels.medium;
    console.log(volume);
})();