// import sequelize
import { Sequelize } from "sequelize";

// create env variables to create DB connection

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

// create new sequelize instance
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

// create connection
const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL");
  } catch (error) {
    console.log("Error coneccting to MySQL: ", error);
  }
};

// export db conection and sequelize connection
export { dbConnect, sequelize };
