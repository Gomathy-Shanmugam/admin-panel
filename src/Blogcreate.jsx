import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blogcreate() {
  const navigate = useNavigate();
  let initialValues = {
    title: "",
    content: "",
    age: "",
    password: "",
  };

  // let validate = (values) => {
  //   if(values.title==="" ){
  //     return {title : "Title is required"}
  //   }
  //   elif(values.content==="" );
  //   {
  //     return {content : "Content is required"}
  //   }
  //   else(values.age==="" );
  //   {
  //     return {content : "Age is required"}
  //   }
  // };

  let validate = (values) => {
    const errors = {};

    if (values.title === "") {
      errors.title = "Title is required";
    }

    if (values.content === "") {
      errors.content = "Content is required";
    }

    if (values.age === "") {
      errors.age = "Age is required";
    }
    if (values.password === "") {
      errors.password = "Enter password";
    }

    return errors;
  };

  let onSubmit = async (values) => {
    try {
      await axios.post(
        "https://660d1b103a0766e85dbf94e0.mockapi.io/api/data",
        values
       
      );
      navigate("/portal/blogs")
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="p-5">
            <div className="text-center">
              <h4 className="h4 text-grey">Create Blog!</h4>
            </div>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        className={`form-control form-control user ${
                          errors.title && "border-danger"
                        }`}
                        placeholder="blog-title"
                        id="firstname"
                      ></input>
                      {errors.title && <div>{errors.title}</div>}
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        className={`form-control form-control user ${
                          errors.age && "border-danger"
                        }`}
                        placeholder="Enter your age"
                        id="age"
                      ></input>
                      {errors.age && <div>{errors.age}</div>}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        className={`form-control form-control user ${
                          errors.password && "border-danger"
                        }`}
                        placeholder="Enter password"
                        id="password"
                      ></input>
                      {errors.password && <div>{errors.password}</div>}
                    </div>
                    <div className="form-group">
                      <textarea
                        type="text"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        className={`form-control form-control user ${
                          errors.content && "border-danger"
                        }`}
                        placeholder="blog-description"
                        id="lastname"
                      ></textarea>
                      {errors.content && <div>{errors.content}</div>}
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-user btn-block "
                      value="Create Blog"
                    ></input>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogcreate;
