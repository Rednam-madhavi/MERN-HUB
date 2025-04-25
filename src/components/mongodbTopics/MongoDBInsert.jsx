// import React from 'react'

// const MongoDBInsert = () => {
//   return (
//     <div>
//       Insert Documents
// There are 2 methods to insert documents into a MongoDB database.

// insertOne()
// To insert a single document, use the insertOne() method.

// This method inserts a single object into the database.

// Note: When typing in the shell, after opening an object with curly braces "{" you can press enter to start a new line in the editor without executing the command. The command will execute when you press enter after closing the braces.

// Example
// db.posts.insertOne({
//   title: "Post Title 1",
//   body: "Body of post.",
//   category: "News",
//   likes: 1,
//   tags: ["news", "events"],
//   date: Date()
// })
// Note: If you try to insert documents into a collection that does not exist, MongoDB will create the collection automatically.

// insertMany()
// To insert multiple documents at once, use the insertMany() method.

// This method inserts an array of objects into the database.

// Example
// db.posts.insertMany([  
//   {
//     title: "Post Title 2",
//     body: "Body of post.",
//     category: "Event",
//     likes: 2,
//     tags: ["news", "events"],
//     date: Date()
//   },
//   {
//     title: "Post Title 3",
//     body: "Body of post.",
//     category: "Technology",
//     likes: 3,
//     tags: ["news", "events"],
//     date: Date()
//   },
//   {
//     title: "Post Title 4",
//     body: "Body of post.",
//     category: "Event",
//     likes: 4,
//     tags: ["news", "events"],
//     date: Date()
//   }
// ])
//     </div>
//   )
// }

// export default MongoDBInsert
