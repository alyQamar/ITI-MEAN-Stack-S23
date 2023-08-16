use FacultySystemDB

// Q1 & Q2
// Create student collection and initialize schema
db.createCollection("student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["FirstName", "LastName", "Age", "IsFired"],
      properties: {
        FirstName: {
          bsonType: "string",
          description: "The first name of the student. Must be a string and is required."
        },
        LastName: {
          bsonType: "string",
          description: "The last name of the student. Must be a string and is required."
        },
        Age: {
          bsonType: "number",
          description: "The age of the student. Must be a number and is required."
        },
        Faculty: {
          bsonType: "object",
          required: ["Name", "Address"],
          properties: {
            Name: {
              bsonType: "string",
              description: "The name of the faculty the student belongs to. Must be a string and is required."
            },
            Address: {
              bsonType: "string",
              description: "The address of the faculty. Must be a string and is required."
            }
          }
        },
        Grades: {
          bsonType: "array",
          description: "An array of objects representing the grades of the student in different courses. Each object must have CourseName, Grade, and Pass fields.",
          items: {
            bsonType: "object",
            required: ["CourseName", "Grade", "Pass"],
            properties: {
              CourseName: {
                bsonType: "string",
                description: "The name of the course. Must be a string and is required."
              },
              Grade: {
                bsonType: "string",
                description: "The grade achieved by the student in the course. Must be a string and is required."
              },
              Pass: {
                bsonType: "bool",
                description: "Indicates whether the student passed the course. Must be a boolean and is required."
              }
            }
          }
        },
        IsFired: {
          bsonType: "bool",
          description: "A flag indicating whether the student is fired from the faculty or not. Must be a boolean and is required."
        }
      }
    }
  }
})




// Q3
// Insert one document
db.student.insertOne({
  FirstName: 'Aly',
  LastName: 'Qamar',
  Age: 22,
  Faculty: {
    Name: 'Systems & Computer Engineering',
    Address: 'Example Address'
  },
  Grades: [
    {
      CourseName: 'OOP',
      Grade: 'A',
      Pass: true
    },
    {
      CourseName: 'DSA',
      Grade: 'B',
      Pass: true
    },
    {
      CourseName: 'Electronics',
      Grade: 'C',
      Pass: true
    },
    {
      CourseName: 'ABC',
      Grade: 'F',
      Pass: false
    },
  ],
  IsFired: false 
})

// Insert documents (more than 1)
db.student.insertMany([
  {    
    FirstName: 'Ahmed',
    LastName: 'Ali',
    Age: 24,
    Faculty: {
      Name: 'Computer Science',
      Address: 'Example Address'
    },
    Grades: [
      {
        CourseName: 'OOP',
        Grade: 'A',
        Pass: true
      },
      {
        CourseName: 'DSA',
        Grade: 'A',
        Pass: true
      }
    ],
    IsFired: false 
  },
  {    
    FirstName: 'Mohammed',
    LastName: 'Amr',
    Age: 27,
    Faculty: {
      Name: 'Computer Science',
      Address: 'Example Address'
    },
    Grades: [
      {
        CourseName: 'OOP',
        Grade: 'A',
        Pass: true
      },
      {
        CourseName: 'DSA',
        Grade: 'A',
        Pass: false
      }
    ],
    IsFired: true 
  }
])


   
// Q4
// Retrieve all Students
   db.student.find()

   
// Retrieve Student with specific First Name
   db.student.findOne({FirstName:"Aly"})

// Retrieve Students who his First Name=Ahmed, or Last Name= Ahmed
   db.student.find({$or:[{FirstName:"Ahmed"},{LastName:"Ahmed"}]})
   
// Retrieve Students that their First name isn't "Ahmed"
   db.student.find({FirstName:{$ne:"Ahmed"}})


// Retrieve Students with Age less than 24
   db.student.find({Age:{$lt:24}})
   
// Retrieve All fired students
   db.student.find({IsFired:true})

// Retrieve	Students with Age more than or equal to 21, and their faculty isn't NULL
   db.student.find({ Age: { $gte: 21 }, Faculty: { $ne: null } });

   
// Display student with specific First Name, and display his First Name, Last name, IsFired fields only
   db.student.findOne({ FirstName: "Aly" }, { FirstName: 1, LastName: 1, IsFired: 1, _id: 0 });

//Q5
// Update() 
   db.student.update(
   { 'FirstName': 'Aly'},
   { $set: { 'LastName': 'Qamar Eldawla' } }
   )
// Update() with Mulit option
   db.student.update(
  { 'Grades.CourseName': 'OOP' },
  { $set: { 'Grades.$.CourseName': 'Object Oriented Programming' } },
  { multi: true }
)

//Q6
// Delete Fired students
   db.student.deleteMany({IsFired:true})