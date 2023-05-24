import React from 'react'
import './Form.css'
import { useState } from 'react'
import {Link} from "react-router-dom"


 const regexEmail=  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


export default function Form({login}) {
const [inputs, setInputs ] = useState({
  email:"",
  password:""
})

const [errors, setErrors ] = useState({
  email:"",
  password:""
})

function validate(inputs){
  const errors={}
  if (!inputs.email){      // si el campo esta vacio
    errors.email ="debe haber un email"
  }
  else if(!inputs.password){  //campo vacio
    errors.password ="debe haber un password"
  }
  else if(!regexEmail.test(inputs.email)){          
    errors.email ="debe ser un email valido"
  }
  else if(!regexPassword.test(inputs.password)){          
    errors.password ="debe contener 8 caracteres, mayuscula, minuscula y numero"
  }
  return errors;
}
function handleChange (e){
  setInputs({
    ...inputs,
   [e.target.name]: e.target.value
  })
  setErrors(
   validate ({
    ...inputs,
   [e.target.name]: e.target.value
  })
  )}
  function handleSubmit(e){
e.prevent.default()
const aux = Object.keys(errors)
if (aux.length===0){
  
   setInputs ({
      email:"",
      password:""
    })
    setErrors ({
      email:"",
      password:""
    })
    login(inputs)
    return alert("okkkkk")


  }
   return alert("error ups")
}
  return (
    <div className='content-form'> 
      <div className='portal'></div>
       <form action="" className='form' onSubmit={handleSubmit}>
        <label >Email</label>
        <input name='email' onChange={handleChange} value={inputs.email} placeholder='Escribe tu email' />
        <p className='danger'> {errors.email} </p>

        <label >Password</label>

        <input  
        name='password' 
        onChange={handleChange} 
        value={inputs.password} 
        placeholder='Escribe tu Contraseña' />

<p className='danger'> {errors.password} </p>

      {
        Object.keys(errors).length ===0 ?(
           <Link to="/home">
            <button type='submit'>Ingresar</button>
          </Link>
        ):"null"
      }
        
        
    </form>
    </div>
  
  )
}
