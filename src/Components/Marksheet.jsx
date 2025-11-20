import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { number } from 'yup'

const Marksheet = () => {
    const [Student, setStudent] = useState({})
    const [total, settotal] = useState(0)
    const [average, setaverage] = useState(0)
    const [grade, setgrade] = useState("")
    const initialValues = {
        'name': '',
        'tamil': '',
        'english': '',
        'maths': '',
        'science': '',
        'social': ''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: values => console.log(values)
    })
    function Submit() {
        setStudent(formik.values);
    }
    function totalfun() {
        settotal(
            Number(formik.values.tamil) +
            Number(formik.values.english) +
            Number(formik.values.maths) +
            Number(formik.values.science) +
            Number(formik.values.social)
        );
    }
    function averagefun() {
        setaverage((Number(formik.values.tamil) +
            Number(formik.values.english) +
            Number(formik.values.maths) +
            Number(formik.values.science) +
            Number(formik.values.social)) / 5);
    }
    function gradefun() {
        let avg = (Number(formik.values.tamil) +
            Number(formik.values.english) +
            Number(formik.values.maths) +
            Number(formik.values.science) +
            Number(formik.values.social) / 5);

        let g = "";
        if (avg >= 90) g = "A+";
        else if (avg >= 80) g = "A";
        else if (avg >= 70) g = "B";
        else if (avg >= 60) g = "C";
        else if (avg >= 50) g = "D";
        else g = "Fail";
        setgrade(g);
    }
return (
    <div style={{ textAlign: "center" }}>
        <input placeholder='Student name' name='name' value={formik.values.name} onChange={formik.handleChange} /><br /><br />
        <input placeholder='Tamil Mark' name='tamil' value={formik.values.tamil} onChange={formik.handleChange} /><br /><br />
        <input placeholder='English Mark' name='english' value={formik.values.english} onChange={formik.handleChange} /><br /><br />
        <input placeholder='Maths Mark' name='maths' value={formik.values.maths} onChange={formik.handleChange} /><br /><br />
        <input placeholder='Science Mark' name='science' value={formik.values.science} onChange={formik.handleChange} /><br /><br />
        <input placeholder='Social Science Marks' name='social' value={formik.values.social} onChange={formik.handleChange} /><br /><br />
        <Button onClick={Submit} className='m-3'>Submit</Button>
        <Button onClick={totalfun} className='m-3'>Total</Button>
        <Button onClick={averagefun} className='m-3'>Average</Button>
        <Button onClick={gradefun} className='m-3'>Grade</Button>
        <h3>{JSON.stringify(Student)}</h3>
        <h3>Total Mark:{total}</h3>
        <h3>Average Mark:{average}</h3>
        <h3>Grade:{grade}</h3>
    </div>

)
}

export default Marksheet
