class DeviceSchema{
    constructor({lattitude = 0, longitude = 0, fcm = "N/A"}){
        this.lattitude = lattitude,
        this.longitude = longitude,
        this.fcm = fcm 
    }
}

module.exports = DeviceSchema