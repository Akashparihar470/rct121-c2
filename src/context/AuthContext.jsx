import React, { Children, useState } from 'react'

export const Authcontext = React.createContext()

function AuthcontextProvider() {
 const [isauth,setAuth] = useState(false)

  return (
    <Authcontext.Provider value={[isauth,setAuth]}>
        {Children}
    </Authcontext.Provider>
  )
}

export default AuthcontextProvider