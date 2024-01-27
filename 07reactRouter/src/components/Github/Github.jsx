import React, { useEffect, useState } from 'react'

function Github() {
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://github.com/users/amq001')
  //   .then(response=>response.json)
  //   .then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://github.com/users/amq001')
  return response.json()
}
