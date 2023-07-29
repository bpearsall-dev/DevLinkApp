import { Grid, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; // added this import

function Footer() {
    return (
      <div style={{ backgroundColor: 'teal' }}>
        <div style={{ marginTop: '55px' }}></div>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <p style={{ marginLeft: '20px', fontSize: '20px', color: 'black' }}>For Dev</p>
              <List link>
                <List.Item as={Link} to="/how-it-works" style={{marginLeft: '20px', fontSize: '15px', color: 'black' }}>How it works</List.Item>
                <List.Item as={Link} to="/create-profile" style={{marginLeft: '20px', fontSize: '15px', color: 'black' }}>How to Create a profile</List.Item>
                <List.Item as={Link} to="/find-jobs" style={{marginLeft: '20px', fontSize: '15px', color: 'black' }}>Find jobs</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <p style={{ fontSize: '20px', color: 'black' }}>For Clients</p>
              <List link>
                <List.Item as={Link} to="/how-it-works" style={{fontSize: '15px', color: 'black' }}>How it Works</List.Item>
                <List.Item as={Link} to="/jobs" style={{fontSize: '15px', color: 'black' }}>How to post a job</List.Item>
                <List.Item as={Link} to="/find-dev" style={{fontSize: '15px', color: 'black' }}>Find dev</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <p style={{ fontSize: '20px', color: 'black' }}>Stay Connected</p>
              <List link horizontal>
                <List.Item as='a' style={{ color: 'black' }}><Icon name='facebook' size='huge' /></List.Item>
                <List.Item as='a' style={{ color: 'black' }}><Icon name='twitter' size='huge' /></List.Item>
                <List.Item as='a' style={{ color: 'black' }}><Icon name='instagram' size='huge' /></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' style={{ color: 'black' }}>
              <p style={{ fontSize: '24px' }}>DEVLink</p>
              <a href="/privacy-policy" style={{fontSize: '15px', color: 'black' }}>Privacy Policy</a> &nbsp;&nbsp;&nbsp; 
              <a href="/terms" style={{fontSize: '15px', color: 'black' }}>Terms</a> &nbsp;&nbsp;&nbsp; 
              <a href="/code-of-conduct" style={{fontSize: '15px', color: 'black' }}>Code of Conduct</a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}

export default Footer;
