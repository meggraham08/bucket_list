import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AdventureConsumer } from '../../providers/AdventureProvider';
import AdventureForm from './AdventureForm';

const AdventureShow = ({ deleteAdventure }) => {
  // const [adventure, seAdventure] = useState({ title: '', desc: '' })
  const [editing, setEdit] = useState(false)

  const { userId } = useParams()

  useEffect( () => {
    axios.get(`/api/adventures/${adventureId}`)
      .then( res => setUser(res.data))
      .catch( err => console.log(err) )
  }, [])

  const { title, desc } = user
  return(
    <>
      <h1>{title} {desc}</h1>
      { editing ?
        <>
          <AdventureForm
            {...adventure}
            setEdit={setEdit}
          />
          <Button onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </>
        :
        <Button onClick={() => setEdit(true)}>
          Edit
        </Button>
      }
      <Button onClick={() => deleteAdventure(adventure.id)}>
        Delete
      </Button>

      <h4>Current Adventures</h4>
      { adventures.map( a => 
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{c.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{a.title}</Card.Subtitle>
            <Card.Text>
              {a.desc}
            </Card.Text>
            <Link to={`/adventures/${a.id}`}>
              <Card.Link>Show</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

const ConnectedAdventureShow = (props) => (
  <AdventureConsumer>
    { value => <UserShow {...props} {...value} />}
  </AdventureConsumer>
)

export default ConnectedAdventureShow;