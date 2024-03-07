const driver = require('../driver')
const { DEFAULT_LATTITUDE, DEFAULT_LONGITUDE } = require('../../constant');

const session = driver.session();

const addMocdataPoints = (lattitude, longitude) => {
    
}

const addNewDevice = async (lattitude = DEFAULT_LATTITUDE, longitude = DEFAULT_LONGITUDE ) => {
    try{
        const result = await session.run(`CREATE (n: NotAlert  {lattitude : ${lattitude} , longitude: ${longitude} }) `);
        console.log(result);
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