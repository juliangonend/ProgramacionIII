
import { Button, Form } from 'react-bootstrap'
import styles from "./Login.module.css"
import { FormEvent, useState } from 'react'
import { useForm } from '../../../hooks/useForms'
import { useAppDispatch } from '../../../hooks/redux'
import { setLogin } from '../../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const [showPass, setShowPass] = useState(false)
  const [wrongPassword,setWrongPassword]= useState(false)
  const {values, handleChange}= useForm({
    user:"",
    password:""
  });
  const {user,password}= values
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const handleSubmitForm =async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const response = await fetch("/user.json")
    const userData = await response.json();
    const userFound= userData.users.find((u : {username:string ; password:string})=> u.username == user && u.password == password );
    if(userFound){
      dispatch(setLogin(user))
      navigate("/")
    }else{
        setWrongPassword(true)
    }
  }
  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
          <div>{wrongPassword ? <p>Usuario o Contraseña incorrecta !!</p> : null}</div>
          <span class="material-symbols-outlined" style={{fontSize:"10vh"}}>
          group
          </span>
          <Form className='' onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3" >
            <Form.Label>Usuario</Form.Label>
            <Form.Control 
              name='user' 
              type="text" 
              value={user}
              onChange={handleChange}
              placeholder="Usuario" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            name='password'
            type={showPass ? 'text' : 'password'} 
            value={password}
            onChange={handleChange}
            placeholder="Contraseña" />
          </Form.Group>
          <Form.Check 
            onChange={() =>{
              setShowPass(!showPass)
            }
            }
            type="switch"
            id="custom-switch"
            label="Mostrar Contraseña"
          />
          <div className="d-flex justify-content-center align-items-center mt-2">
          <Button type='submit' variant="primary">Primary</Button>{' '}
    
          </div>
        </Form></div>
    </div>
  )
}
