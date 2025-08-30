import React from 'react'
import Jobs from '../pages/Jobs'
import { Outlet } from 'react-router-dom'

function JobsLayout() {
  return (
    <div>
      <h1>Jobs</h1>
      <p>List of all the Job openings will be shown here.</p>
      <Outlet/>
    </div>
  )
}

export default JobsLayout