import React from 'react'
import useFormData from './useFormData';


export default function FormData() {
    const initialData={
        email:"",
        password:"",
        cpassword:""
    }
 const {data,ResetForm,HandleChange,HandleSubmit}=useFormData(initialData);
  return (
    <form onSubmit={HandleSubmit}>
    <input type="email" placeholder='email' name='email' value={data.email} onChange={HandleChange}/>
            <br /><br />
    <input type="password" name='password' placeholder='password' value={data.password} onChange={HandleChange} />
    <br />
    <input type="password" name='cpassword' placeholder='confirm password' value={data.cpassword} onChange={HandleChange} />
    <br />
<button type='submit'>submit</button>
<button type='button' onClick={ResetForm}>reset</button>

    </form>
  )
}
