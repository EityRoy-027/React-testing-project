export const Practice = () =>{
    

const Students =[4];

return (


<>


{/* <p>{Students.length && "No Students found"}</p>

<p>{Students.length===0 && "No Students found"}</p>

<p>{Students.length===1 && "No Students found"}</p> */}

<p>{!Students.length && "No Students found"}</p>

<p>Number of Students : {Students.length}</p>

</>


)


} 