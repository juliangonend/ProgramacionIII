
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/redux'
import { setLogout } from '../../../../redux/slices/auth';

export const Header = () => {
  const dispatch = useAppDispatch();
    const handleLogOut=()=>{
        dispatch(setLogout());
    }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand > <Link to={'/'} className='nav-link'>
          Inicio
          </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
                <Link to={'/search'} className='nav-link'>
                Buscar Heroe
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={'/dcheroes'} className='nav-link'>
                    DC Heroes
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={'/marvelHeroes'} className='nav-link'>
                Marvel Heroes
                </Link>
            </Nav.Item>
          </Nav>
          <Navbar.Collapse className='d-flex justify-content-end gap4 '>
            <Navbar.Text>
                Ingresado como : Admin 
            </Navbar.Text>
            <Nav.Item>
                <div className='d-flex justify-content-end gap4 aling-items-center'
                onClick={handleLogOut}>
                    <span
                       style={{color:"#fff"}}
                        className="material-symbols-outlined"
                      >
                          logout
                    </span>
                </div>
           
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
