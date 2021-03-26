import React from 'react'

function Navbuttons(props) {
    return (
    <div className={props.classname}>
      <ul>{props.value}</ul> 
</div>
    )
}

export default Navbuttons
