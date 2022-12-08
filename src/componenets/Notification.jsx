import React from 'react'
import Typography from '@mui/material/Typography';

const Notification = ({user}) => {
  return (
    <div>
        {user && user.ownedPGS.map((item)=>(
            
             <Typography textAlign="center">{item.message}</Typography>
        ))}



            
    </div>
  )
}

export default Notification