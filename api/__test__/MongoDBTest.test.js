const { MongoClient } = require("mongodb");
require("dotenv/config");
const collectionFixtures = [
  {
    name: "1",
    typeDrug: "ggggggggg",
    amount: 15,
    price: 5,
    localization: "Ambato, centro",
  },
  {
    name: "2",
    typeDrug: "ggggggggg",
    amount: 15,
    price: 5,
    localization: "Ambato, centro",
  },
  {
    name: "3",
    typeDrug: "ggggggggg",
    amount: 15,
    price: 5,
    localization: "Ambato, centro",
  },
];
describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
    await db.collection("drugs").deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });
  test("should insert many doc into collection", async () => {
    const drugs = db.collection("drugs");

    await drugs.insertMany(collectionFixtures);
  });
  test("should insert one doc into collection", async () => {
    const drugs = db.collection("drugs");
    const mockDrug = {
      name: "8",
      typeDrug: "ggggggggg",
      amount: 15,
      price: 5,
      localization: "Ambato, centro",
    };
    await drugs.insertOne(mockDrug);
    const insertedDrug = await drugs.findOne({
      name: "8",
    });
    expect(insertedDrug).toEqual(mockDrug);
  });
  test("should delete one doc in collection", async () => {
    const drugs = db.collection("drugs");
    const mockDrug = {
      name: "2",
      typeDrug: "ggggggggg",
      amount: 15,
      price: 5,
      localization: "Ambato, centro",
    };
    await drugs.deleteOne(mockDrug);

    expect(collectionFixtures.length).toEqual(3);
  });
});
