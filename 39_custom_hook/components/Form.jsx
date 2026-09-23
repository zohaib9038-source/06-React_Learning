import React from 'react'
import useForm from './useForm'

export default function Form() {
    const initialvlaue={
        email:"",
        password:""
    }
    function onsubmit(values){
        console.log("form submited...",values)
    }
    const {values,reset,Handlesubmit,handleChange}=useForm(initialvlaue,onsubmit);
  return (
    <div>
        <form onSubmit={Handlesubmit}>
            <input type="email" placeholder='email' name='email' value={values.email} onChange={handleChange}/>
            <br /><br />
            <input type="password" name='password' placeholder='password' value={values.password} onChange={handleChange} />
<br />
<button type='submit'>submit</button>
<button onClick={reset}>reset</button>
        </form>

    </div>
  )
}
