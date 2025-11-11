import React from 'react'
import Students from './Students'
import Department from './Departsment'
import { Button } from 'react-bootstrap'
const Parent = () => {
  let Studentslist =  [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grade: "A",
    major: "Computer Science"
  },
  {
    id: 2,
    name: "Brian Lee",
    age: 22,
    grade: "B+",
    major: "Mechanical Engineering"
  },
  {
    id: 3,
    name: "Catherine Smith",
    age: 19,
    grade: "A-",
    major: "Mathematics"
  },
  {
    id: 4,
    name: "David Kim",
    age: 21,
    grade: "B",
    major: "Business Administration"
  },
  {
    id: 5,
    name: "Ella Rodriguez",
    age: 20,
    grade: "A",
    major: "Psychology"
  }
]

let Departments= [
  "Computer Science",
  "Mechanical Engineering",
  "Mathematics",
  "Business Administration",
  "Psychology",
  "Electrical Engineering",
  "Biology",
  "Economics",
  "English Literature",
  "Civil Engineering"
]


  return (
    <div>
     <Students std = {Studentslist} val='hello' />
     <Department>
      {
        Departments.map(dep=><Button className='m-3'>{dep}</Button>)
      }
     </Department>
    </div>
  )
}

export default Parent
