import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

function FeaturedCustomers() {
  const featuredCustomers = [
    {
      id: 1,
      name: 'Kiera Knight',
      image: 'https://img.freepik.com/free-photo/human-face-expressions-emotions-positive-joyful-young-beautiful-female-with-fair-straight-hair-casual-clothing_176420-15188.jpg?size=626&ext=jpg',
      expertise: 'Angular Customer',
      rating: 5
    },
    {
      id: 2,
      name: 'Tiffany Saunder',
      image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg',
      expertise: 'React Customer',
      rating: 5
    },
    {
      id: 3,
      name: 'Blake Roberts',
      image: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg',
      expertise: 'React Customer',
      rating: 5
    }
  ];

  const navigate = useNavigate();

  const handleCardClick = (customerId) => {
    navigate(`/customer/${customerId}`);
  };

  return (
    <div>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', margin: '40px 0' }}>Featured Customers</h2>
      <Grid columns={3} divided centered>
        <Grid.Row>
          {featuredCustomers.map((customer) => (
            <Grid.Column key={customer.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card onClick={() => handleCardClick(customer.id)} style={{ backgroundColor: 'coral' }}>
                <Image src={customer.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{customer.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{customer.expertise}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Icon name='star' color='yellow' />
                  {customer.rating}
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" width={16}>
            <div style={{ margin: '40px 0' }}>
              <Button as={Link} to="/find-dev" size="huge" primary>
                See More
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default FeaturedCustomers;
