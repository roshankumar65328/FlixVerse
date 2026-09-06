import React from 'react'

function Dropdown({title, options, func}) {
  return (
        <div className='select'>
            <select defaultValue='0' name="format" id="format" onChange={func}>
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((o,i)=>{
                    return <option key={i} value={o} >
                              {o.toUpperCase()}
                           </option>
                })}
            </select>
        </div>
  )
}

export default Dropdown;