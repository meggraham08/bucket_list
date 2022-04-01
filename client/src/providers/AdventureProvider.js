import React, {userState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AdventureContext = React.createContext();
export const AdventureConsumer = AdventureContext.Consumer;


const AdventureProvider = ({ children }) => {
  const [adventures, setAdventures] = useState([])

  const navigate = useNavigate();

  useEffect( () => {
    axios.get('/api/adventures')
    .then( res => setAdventures(res.data) )
    .catch(err => console.log(err))
  }, [])

  const addAdventure = (adventure) => {
    axios.post('/api/adventures' , { adventure })
    .then( res => setAdventures([...adventures, res.data]))
    .catch ( err => console.log(err))
  }

  const updateAdventure = (id, adventure) => {
    axios.put(`/api/adventures/${id}` , { adventure })
    .then( res => {
      const newUpdateAdventures = adventures.map( a => {
        if (a.id === id) {
          return res.data
        }
        return a
      })
      setAdventures(newUpdateAdventures)
      navigate('adventure')
    })
    .catch( err => console.log(err))
  }

  const deleteAdventure = (id) => {
    axios.delete(`/api/adventures/${id}`)
    .then( res => {
      setAdventures(adventures.filter( a => a.id !== id))
      navigate('/adventures')
    })
    .catch( err => console.log(err))
  }


  return (

    <AdventureContext.Provider valye ={{
      adventures,
      addAdventure,
      updateAdventure,
      deleteAdventure
    }}>

      {children}
    </AdventureContext.Provider>
  )
}

export default AdventureProvider;