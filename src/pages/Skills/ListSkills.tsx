import React from 'react'

const ListSkills = () => {


  return (
    <div>
      <div className='card-container'>
        {skills?.map(skill=>(
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default ListSkills