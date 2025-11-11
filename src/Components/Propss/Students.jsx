import React from 'react'

// const Students = ({ std = [] }) => {
//   return (
//     <div>
//       {
//         std.map(s=><div key={s.id}>
//             <h3>Name: {s.name}</h3>
//             <p>Age: {s.age}</p>
//             <p>Grade: {s.grade}</p>
//             <p>Major: {s.major}</p>
//           </div>
//           )
//       }
//     </div>
//   )
// }

// export default Students


const Students = (props) => {
  return (
    <div>
     
      {
        props.std && props.std.map(s=><div key={s.id}>
            <h3>Name: {s.name}</h3>
            <p>Age: {s.age}</p> 
            </div>)
      }
      <p>{props.val}</p>
    </div>
  )
}

export default Students