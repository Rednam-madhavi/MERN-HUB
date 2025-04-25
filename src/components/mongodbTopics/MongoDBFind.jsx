// import React from 'react'

// const MongoDBFind = () => {
//   return (
//     <div>
//       Find Data
// There are 2 methods to find and select data from a MongoDB collection, find() and findOne().

// find()
// To select data from a collection in MongoDB, we can use the find() method.

// This method accepts a query object. If left empty, all documents will be returned.

// Example
// db.posts.find()
// findOne()
// To select only one document, we can use the findOne() method.

// This method accepts a query object. If left empty, it will return the first document it finds.

// Note: This method only returns the first match it finds.

// Example
// db.posts.findOne()
// Querying Data
// To query, or filter, data we can include a query in our find() or findOne() methods.

// Example
// db.posts.find( {category: "News"} )
// Projection
// Both find methods accept a second parameter called projection.

// This parameter is an object that describes which fields to include in the results.

// Note: This parameter is optional. If omitted, all fields will be included in the results.

// Example
// This example will only display the title and date fields in the results.

// db.posts.find({}, {title: 1, date: 1})
// Notice that the _id field is also included. This field is always included unless specifically excluded.

// We use a 1 to include a field and 0 to exclude a field.

// Example
// This time, let's exclude the _id field.

// db.posts.find({}, {_id: 0, title: 1, date: 1})
// Note: You cannot use both 0 and 1 in the same object. The only exception is the _id field. You should either specify the fields you would like to include or the fields you would like to exclude.

// Let's exclude the date category field. All other fields will be included in the results.

// Example
// db.posts.find({}, {category: 0})
// We will get an error if we try to specify both 0 and 1 in the same object.

// Example
// db.posts.find({}, {title: 1, date: 0})

//     </div>
//   )
// }

// export default MongoDBFind
