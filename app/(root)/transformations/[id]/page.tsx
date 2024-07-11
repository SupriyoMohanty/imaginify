import React from 'react'

const TransformationsPage = () => {
  return (
    <div>TransformationsPage</div>
  )
}

export default TransformationsPage

//localhost:3000/transformations/[id]......so we have to use dynamic routes from nextJS...so wrap by [] rather than {} then we can get that as params

//so make a folder [id]...move this page in to it so that we can access id as params

//http://localhost:3000/transformations/1