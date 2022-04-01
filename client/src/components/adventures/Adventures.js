import { useState } from 'react';
import AdventureForm from './AdventureForm';
import AdventureList from './AdventureList';
import { Button } from 'react-bootstrap';

const Adventures = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>  
      {
        adding ?
          <>
            <AdventureForm 
              setAdd={setAdd} 
            />
            <Button onClick={() => setAdd(false)}>Cancel</Button>
          </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }
      <h1>All Adventures</h1>
      <AdventureList />
    </>
  )
}

export default Adventures;