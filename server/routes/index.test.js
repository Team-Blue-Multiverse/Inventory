// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { sequelize } = require("../db");
const { Item } = require("../models/Item");
const app = require("../app");
const seedData = require("../seedData");
