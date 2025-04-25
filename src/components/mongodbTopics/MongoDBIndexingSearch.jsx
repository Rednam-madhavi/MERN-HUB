// import React from 'react'

// const MongoDBIndexingSearch = () => {
//   return (
//     <div>
//       Indexing & Search
// MongoDB Atlas comes with a full-text search engine that can be used to search for documents in a collection.

// Atlas Search is powered by Apache Lucene.

// Creating an Index
// We'll use the Atlas dashboard to create an index on the "sample_mflix" database from the sample data that we loaded in the Intro to Aggregations section.

// From the Atlas dashboard, click on your Cluster name then the Search tab.
// Click on the Create Search Index button.
// Use the Visual Editor and click Next.
// Name your index, choose the Database and Collection you want to index and click Next.
// If you name your index "default" you will not have to specify the index name in the $search pipeline stage.
// Choose the sample_mflix database and the movies collection.
// Click Create Search Index and wait for the index to complete.
// Running a Query
// To use our search index, we will use the $search operator in our aggregation pipeline.

// Example
// db.movies.aggregate([
//   {
//     $search: {
//       index: "default", // optional unless you named your index something other than "default"
//       text: {
//         query: "star wars",
//         path: "title"
//       },
//     },
//   },
//   {
//     $project: {
//       title: 1,
//       year: 1,
//     }
//   }
// ])
// The first stage of this aggregation pipeline will return all documents in the movies collection that contain the word "star" or "wars" in the title field.

// The second stage will project the title and year fields from each document.


//     </div>
//   )
// }

// export default MongoDBIndexingSearch
