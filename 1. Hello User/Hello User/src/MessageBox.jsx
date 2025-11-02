import React from 'react'

export default function MessageBox({userName , backgroundColor}) {
    let styles = {backgroundColor: backgroundColor}
  return (
    <div>
        <h1 style={styles}>{userName}</h1>
        
    </div>
  )
}
