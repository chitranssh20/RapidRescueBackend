class deviceSchema {
    constructor({lattitude, longitude, fcm = "N/A" }){
        console.log("lattitude is : ", lattitude )
        console.log("Longitude is : ", longitude )
        console.log("FCM is : ", fcm )
        this.lattitude = lattitude,
        this.longitude = longitude,
        this.fcm = fcm 
    }
}

module.exports = deviceSchema