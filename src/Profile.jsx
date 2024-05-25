import React, { useContext } from 'react'
import UserContext from './UserContext'
import { useFormik } from 'formik'

function Profile() {
    const user = useContext(UserContext)
    const formik = useFormik({
        initialValues : {
            name:"",
        },
        onSubmit : (values) => {
            user.setname(values.name);
        }
    })
  return (
    <div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <label>username</label>
                    <input type='text' className='form-control' name="name" value = {formik.values.name} onChange={formik.handleChange}></input>
                    <input type="submit" value={"submit"} className='btn btn-primary'></input>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
