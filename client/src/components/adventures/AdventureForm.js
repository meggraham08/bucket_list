import { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { adventureConsumer } from '../../providers/adventureProvider';

const AdventureForm = ({ addAdventure, setAdd, id, title, desc, updateAdventure, setEdit }) => {
  const [adventure, setAdventure] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setAdventure({ title, desc })
    }
    // id ? setAdventure({ title, desc }) : null
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateadventure(id, adventure)
      setEdit(false)
    } else {
      addadventure(adventure)
      setAdd(false)
    }
    setAdventure({ title: '', desc: '' })
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <h1>{ id ? 'Edit' : 'Create' } adventure</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                name='title'
                value={adventure.title}
                onChange={(e) => setAdventure({...adventure, title: e.target.value })}
                type="text" 
                placeholder="Title" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description </Form.Label>
              <Form.Control 
                name='desc'
                value={adventure.desc}
                onChange={(e) => setAdventure({...adventure, desc: e.target.value })}
                type="text" 
                placeholder="Desc" 
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedAdventureForm = (props) => (
  <AdventureConsumer>
    { value => <AdventureForm {...props} {...value} /> }
  </AdventureConsumer>
)

export default ConnectedAdventureForm;