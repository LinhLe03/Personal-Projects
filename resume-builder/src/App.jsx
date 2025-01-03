// import { useState } from 'react'
import './App.css'
// import InputText from '../components/InputText'
import FirstName from '../components/FirstName'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      
      {/* <InputText 
        type="text"
        
      /> */}

      <FirstName firstName={firstName} setFirstName={setFirstName} />
    </>
  )
}

export default App
