const driver = require('../driver')
const session = driver.session();

const getAllNodes = async () => {
    try{
        const result = await session.run('MATCH (n) RETURN n')
        return result.records;
    }
    catch (err){
        console.log(err)
        throw err;
    }
    finally{
        console.log("Something broke")
        await session.close();
    }
}

module.exports = getAllNodes;