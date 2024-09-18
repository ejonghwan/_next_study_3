import React from 'react'

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex' }}>
      <header style={{ width: '300px' }}>
        <nav>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

    </div>
  )
}

export default AfterLoginLayout