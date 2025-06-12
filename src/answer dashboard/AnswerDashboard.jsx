import React from 'react'
import { useLocation } from 'react-router-dom'

const AnswerDashboard = () => {
    let location = useLocation();
    let state = location.state;
    console.log(state);
    
  return (
    <div>

        dashboard
      
    </div>
  )
}

export default AnswerDashboard
