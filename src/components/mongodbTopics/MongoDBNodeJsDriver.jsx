// import React from 'react'

// const MongoDBNodeJsDriver = () => {
//   return (
//     <div>
//       Node.js Database Interaction
// For this tutorial, we will use a MongoDB Atlas database. If you don't already have a MongoDB Atlas account, you can create one for free at MongoDB Atlas.

// We will also use the "sample_mflix" database loaded from our sample data in the Intro to Aggregations section.

// MongoDB Node.js Driver Installation
// To use MongoDB with Node.js, you will need to install the mongodb package in your Node.js project.

// Use the following command in your terminal to install the mongodb package:

// npm install mongodb
// We can now use this package to connect to a MongoDB database.

// Create an index.js file in your project directory.

// index.js

// const { MongoClient } = require('mongodb');
// Connection String
// In order to connect to our MongoDB Atlas database, we'll need to get our connection string from the Atlas dashboard.

// Go to Database then click the CONNECT button on your Cluster.

// Choose Connect your application then copy your connection string.

// Example:
// mongodb+srv://<username>:<password>@<cluster.string>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// You will need to replace the <username>, <password>, and <cluster.string> with your MongoDB Atlas username, password, and cluster string.

// Connecting to MongoDB
// Let's add to our index.js file.

// index.js

// const { MongoClient } = require('mongodb');

// const uri = "<Your Connection String>";
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db('sample_mflix');
//     const collection = db.collection('movies');

//     // Find the first document in the collection
//     const first = await collection.findOne();
//     console.log(first);
//   } finally {
//     // Close the database connection when finished or an error occurs
//     await client.close();
//   }
// }
// run().catch(console.error);
// Run this file in your terminal.

// node index.js
// You should see the first document logged to the console.

// CRUD & Document Aggregation
// Just as we did using mongosh, we can use the MongoDB Node.js language driver to create, read, update, delete, and aggregate documents in the database.

// Expanding on the previous example, we can replace the collection.findOne() with find(), insertOne(), insertMany(), updateOne(), updateMany(), deleteOne(), deleteMany(), or aggregate().

// Give some of those a try.
//     </div>
//   )
// }

// export default MongoDBNodeJsDriver
