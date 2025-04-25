// import React from 'react'

// const MongoDBUpdate = () => {
//   return (
//     <div>
//       Update Document
// To update an existing document we can use the updateOne() or updateMany() methods.

// The first parameter is a query object to define which document or documents should be updated.

// The second parameter is an object defining the updated data.

// updateOne()
// The updateOne() method will update the first document that is found matching the provided query.

// Let's see what the "like" count for the post with the title of "Post Title 1":

// Example
// db.posts.find( { title: "Post Title 1" } ) 
// Now let's update the "likes" on this post to 2. To do this, we need to use the $set operator.

// Example
// db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } ) 
// Check the document again and you'll see that the "like" have been updated.

// Example
// db.posts.find( { title: "Post Title 1" } ) 
// Insert if not found
// If you would like to insert the document if it is not found, you can use the upsert option.

// Example
// Update the document, but if not found insert it:

// db.posts.updateOne( 
//   { title: "Post Title 5" }, 
//   {
//     $set: 
//       {
//         title: "Post Title 5",
//         body: "Body of post.",
//         category: "Event",
//         likes: 5,
//         tags: ["news", "events"],
//         date: Date()
//       }
//   }, 
//   { upsert: true }
// )
// updateMany()
// The updateMany() method will update all documents that match the provided query.

// Example
// Update likes on all documents by 1. For this we will use the $inc (increment) operator:

// db.posts.updateMany({}, { $inc: { likes: 1 } })
// Now check the likes in all of the documents and you will see that they have all been incremented by 1.


//     </div>
//   )
// }

// export default MongoDBUpdate
