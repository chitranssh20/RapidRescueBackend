const driver = require('../driver')
const geolib = require('geolib')
const deviceSchema = require('../Schema')
const { DEFAULT_LATTITUDE, DEFAULT_LONGITUDE } = require('../../constant');


const createMockDataPoint = (lattitude, longitude) => {
    // Bearing is direction of a point relative to another
    const bearing = Math.random()*360;
    const distance = Math.random()*1000;
    const mockDataPoint = geolib.computeDestinationPoint({latitude : lattitude , longitude : longitude } , distance, bearing)
    const newPoint = new deviceSchema({lattitude: mockDataPoint.latitude, longitude: mockDataPoint.longitude})
    console.log("New point is : ", newPoint);
    console.log("mock point : " , mockDataPoint )
    return mockDataPoint;
}

const addMocdataPoints = async (lattitude, longitude) => {
    let mockDataPoints = ``;
    for(let i = 0; i < 8; i++ ){
        const mockPoint = createMockDataPoint(lattitude, longitude)
        mockDataPoints += `, (n${i} : Normal  {lattitude: ${mockPoint.latitude} , longitude: ${mockPoint.longitude} , fcm: "N/A" })`
    }
    return mockDataPoints;
}

const addNewDevice = async (lattitude = DEFAULT_LATTITUDE, longitude = DEFAULT_LONGITUDE ) => {
    const session = driver.session();

    try{
        const mockDataPoints =  await addMocdataPoints(lattitude, longitude);
        const result = await session.run(`CREATE (n: NotAlert  {lattitude : ${lattitude} , longitude: ${longitude} }) ${mockDataPoints} `);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
    finally{
        await session.close();
    }

}

module.exports = addNewDevice;