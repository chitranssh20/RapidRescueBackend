const db = require('neo4j-driver')
require('dotenv').config();

const driver = db.driver(process.env.NEO4J_URI, db.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD));

module.exports = driver;
