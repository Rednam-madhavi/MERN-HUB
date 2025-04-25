// import React from 'react'

// const MongoDBDataAPI = () => {
//   return (
//     <div>
//       MongoDB Data API
// The MongoDB Data API can be used to query and update data in a MongoDB database without the need for language specific drivers.

// Language drivers should be used when possible, but the MongoDB Data API comes in handy when drivers are not available or drivers are overkill for the application.

// Read & Write with the MongoDB Data API
// The MongoDB Data API is a pre-configured set of HTTPS endpoints that can be used to read and write data to a MongoDB Atlas database.

// With the MongoDB Data API, you can create, read, update, delete, or aggregate documents in a MongoDB Atlas database.

// Cluster Configuration
// In order to use the Data API, you must first enable the functionality from the Atlas UI.

// From the MongoDB Atlas dashboard, navigate to Data API in the left menu.

// Select the data source(s) you would like to enable the API on and click Enable the Data API.

// Access Level
// By default, no access is granted. Select the access level you'd like to grant the Data API. The choices are: No Access, Read Only, Read and Write, or Custom Access.

// Data API Key
// In order to authenticate with the Data API, you must first create a Data API key.

// Click Create API Key, enter a name for the key, then click Generate API Key.

// Be sure to copy the API key and save it somewhere safe. You will not get another chance to see this key again.

// Sending a Data API Request
// We can now use the Data API to send a request to the database.

// In the next example, we'll use curl to find the first document in the movies collection of our sample_mflix database. We loaded this sample data in the Intro to Aggregations section.

// To run this example, you'll need your App Id, API Key, and Cluster name.

// You can find your App Id in the URL Endpoint field of the Data API page in the MongoDB Atlas UI.

// Example
// curl --location --request POST 'https://data.mongodb-api.com/app/<DATA API APP ID>/endpoint/data/v1/action/findOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: <DATA API KEY>' \
// --data-raw '{
//     "dataSource":"<CLUSTER NAME>",
//     "database":"sample_mflix",
//     "collection":"movies",
//     "projection": {"title": 1}
// }'
// Data API Endpoints
// In the previous example, we used the findOne endpoint in our URL.

// There are several endpoints available for use with the Data API.

// All endpoints start with the Base URL: https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/v1/action/

// Find a Single Document
// Endpoint
// POST Base_URL/findOne
// The findOne endpoint is used to find a single document in a collection.

// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "filter": <query filter>,
//   "projection": <projection>
// }
// Find Multiple Documents
// Endpoint
// POST Base_URL/find
// The find endpoint is used to find multiple documents in a collection.

// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "filter": <query filter>,
//   "projection": <projection>,
//   "sort": <sort expression>,
//   "limit": <number>,
//   "skip": <number>
// }
// Insert a Single Document
// Endpoint
// POST Base_URL/insertOne
// The insertOne endpoint is used to insert a single document into a collection.

// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "document": <document>
// }
// Insert Multiple Documents
// Endpoint
// POST Base_URL/insertMany
// The insertMany endpoint is used to insert multiple documents into a collection.

// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "documents": [<document>, <document>, ...]
// }
// Update a Single Document
// Endpoint
// POST Base_URL/updateOne
// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "filter": <query filter>,
//   "update": <update expression>,
//   "upsert": true|false
// }
// Update Multiple Documents
// Endpoint
// POST Base_URL/updateMany
// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "filter": <query filter>,
//   "update": <update expression>,
//   "upsert": true|false
// }
// Delete a Single Document
// Endpoint
// POST Base_URL/deleteOne
// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "filter": <query filter>
// }
// Delete Multiple Documents
// Endpoint
// POST Base_URL/deleteMany
// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "filter": <query filter>
// }
// Aggregate Documents
// Endpoint
// POST Base_URL/aggregate
// Request Body
// Example
// {
//   "dataSource": "<data source name>",
//   "database": "<database name>",
//   "collection": "<collection name>",
//   "pipeline": [<pipeline expression>, ...]
// }
//     </div>
//   )
// }

// export default MongoDBDataAPI
