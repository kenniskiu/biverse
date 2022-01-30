import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,Container,Nav} from 'react-bootstrap'
import WalletCard from './WalletCard';
import { Link } from 'react-router-dom';
import './App.css'

export default function NavBar(){
   return (
      <Navbar>
    <Container>
    <Navbar.Brand href="/">
      <i class="fa fa-square-o" aria-hidden="true"></i>
    </Navbar.Brand>
    <Navbar.Brand>
        <Link to="/" className="a">
        <h3 className="Bi">Bi<span className="verse">Verse</span></h3>
        </Link>
        </Navbar.Brand>
    <Nav>
      <Nav.Link><Link to="/buyland" className="links">Buyland</Link></Nav.Link>
      <Nav.Link><Link to="/trade" className="links">Trade</Link></Nav.Link>
      <Nav.Link><Link to="/blog" className="links">Blog</Link></Nav.Link>
      <Nav.Link><Link to="/discord" className="links">Discord</Link></Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <WalletCard></WalletCard>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
   );
}