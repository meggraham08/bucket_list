import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import { AdventureConsumer } from '../../providers/AdventureProvider';

const AdventureList = () => (
  <AdventureConsumer>
    { value => (
      <>
        <ListGroup>
          { value.adventures.map( a => 
            <ListGroup.Item key={a.id}>
              {a.title} {a.desc}
              <Link to={`/adventures/${a.id}`}>
                <Button variant="info">Show</Button>
              </Link>
            </ListGroup.Item>
          )}
        </ListGroup>
      </>
    )}
  </AdventureConsumer>
)

export default AdventureListl