import { useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';

function Header() {
  const { setCurrentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <Menu stackable={false} style={{ backgroundColor: 'lightgrey', textAlign: 'left' }}>
      <Menu.Item>
        <Link to="/">DevLink Marketplace</Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Link to="/find-dev">Find DEV</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/find-jobs">Find Jobs</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/Login">Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/CreateAccount">Create Account</Link>
        </Menu.Item>
        <Menu.Item onClick={handleSignOut}>
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
