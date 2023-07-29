import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

function FeaturedFreelancers() {
  const featuredFreelancers = [
    {
      id: 1,
      name: 'Amber Ryan',
      image: 'https://img.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg?size=626&ext=jpg',
      expertise: 'Swift Developer',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Stevens',
      image: 'https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186162.jpg?size=626&ext=jpg',
      expertise: 'React Developer',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Paul Woods',
      image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
      expertise: 'Java Developer',
      rating: 4.8
    }
  ];

  const navigate = useNavigate();

  const handleCardClick = (freelancerId) => {
    navigate(`/freelancer/${freelancerId}`);
  };

  return (
    <div>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', margin: '40px 0' }}>Featured Freelancers</h2>
      <Grid columns={3} divided>
        <Grid.Row>
          {featuredFreelancers.map((freelancer) => (
            <Grid.Column key={freelancer.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card onClick={() => handleCardClick(freelancer.id)} style={{ background: 'teal' }}>
                <Image src={freelancer.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{freelancer.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{freelancer.expertise}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Icon name='star' color='yellow' />
                  {freelancer.rating}
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

export default FeaturedFreelancers;
