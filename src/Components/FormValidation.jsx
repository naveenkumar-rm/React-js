import { useFormik } from 'formik'
import React from 'react'
import { Button } from 'react-bootstrap'
import * as Yup from "yup";

const FormValidation = () => {

    const initialValues= {
        'name': '',
        'email': '',
        'Phonenumber': '',
        'password': ''  
    }

   

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  Phonenumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => console.log(values)

    })
    return (
        <div style={{textAlign:'center'}}>
            <h1>Form Validation</h1>
            <form onSubmit={formik.handleSubmit}>
                <input placeholder='Name' name='name' value={formik.values.name } onChange={formik.handleChange} /><br/><br/>
                {formik.errors.name && <p className='text-danger'>{formik.errors.name}</p>}
                <input placeholder='Email' name='email' value={formik.values.email } onChange={formik.handleChange} /><br/><br/>
                {formik.errors.email && <p className='text-danger'>{formik.errors.email}</p>}
                <input placeholder='Phonenumber' name='Phonenumber' value={formik.values.Phonenumber} onChange={formik.handleChange} /><br/><br/>
                {formik.errors.Phonenumber && <p className='text-danger'>{formik.errors.Phonenumber}</p>}
                <input placeholder='Password' name='password' value={formik.values.password} onChange={formik.handleChange} /><br/><br/>
                {formik.errors.password && <p className='text-danger'>{formik.errors.password}</p>}
                
                <Button type="submit" >Summit</Button>
            </form>
        </div>
    )
}

export default FormValidation
