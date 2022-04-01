import { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { AdventureConsumer } from '../../providers/AdventureProvider';

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
      updateAdventure(id, adventure)
      setEdit(false)
    } else {
      addAdventure(adventure)
      setAdd(false)
    }
    setAdventure({ title: '', desc: '' })
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <h1>{ id ? 'Edit' : 'Create' } Adventure</h1>
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