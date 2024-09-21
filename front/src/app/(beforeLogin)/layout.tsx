import React from 'react'

type Props = { children: React.ReactNode, modal: React.ReactNode,  modal2: React.ReactNode }

const BeforeLoginLayout = ({ children, modal, modal2}: Props) => {
  return (
    <div>
      
      <h2>BeforeLogin Layout</h2>
      <div style={{ border: "1px solid #777" }}>
         children
         {children}
      </div>
      <br /><br />
      <div style={{ border: "1px solid #777" }}>
         modal
         {modal}
      </div>

      <br /><br />
      <div style={{ border: "1px solid #777" }}>
         modal2
         {modal2}
      </div>

      <br /><br />
      <div style={{ border: "1px solid #777" }}>
         페레럴 hoho?
      </div>
    </div>
  )
}

export default BeforeLoginLayout