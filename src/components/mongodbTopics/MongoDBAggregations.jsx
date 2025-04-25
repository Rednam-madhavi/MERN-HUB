// import React from 'react'

// const MongoDBAggregations = () => {
//   return (
//     <div>
//       Aggregation Pipelines
// Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.

// Aggregation pipelines can have one or more "stages". The order of these stages are important. Each stage acts upon the results of the previous stage.

// Example
// db.posts.aggregate([
//   // Stage 1: Only find documents that have more than 1 like
//   {
//     $match: { likes: { $gt: 1 } }
//   },
//   // Stage 2: Group documents by category and sum each categories likes
//   {
//     $group: { _id: "$category", totalLikes: { $sum: "$likes" } }
//   }
// ])
// Sample Data
// To demonstrate the use of stages in a aggregation pipeline, we will load sample data into our database.

// From the MongoDB Atlas dashboard, go to Databases. Click the ellipsis and select "Load Sample Dataset". This will load several sample datasets into your database.

// In the next sections we will explore several aggregation pipeline stages in more detail using this sample data.


//     </div>
//   )
// }

// export default MongoDBAggregations
