import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css'
import {useFormik} from 'formik';
import * as Yup from 'yup'

function ArticleDetail({ article }) {

  const onConfirm = event => {
    localStorage.setItem('firstName',formik.values.firstName);
    localStorage.setItem("lastname", formik.values.lastName);
    localStorage.setItem("email",formik.values.email);
    localStorage.setItem("phone",formik.values.phone);
    localStorage.setItem("city",formik.values.city);
    localStorage.setItem("country",formik.values.country)
  }


  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    city: Yup.string().required('Required'),  
    country: Yup.string().required('Required')  

  });

  const formik = useFormik({
    initialValues: {
      firstName: article.name.first,
      lastName: article.name.last,
      email: article.email,
      phone: article.phone,
      city: article.location.city,
      country: article.location.country,
    },
    validationSchema,
    onSubmit: values => {
    console.log(values)
    }
  })

  if (!article) {
 
    return null;

  } 
  
  return (
    <div>
      <p>First name: </p>
      <input 
       className="inputs"
       id="firstName"
       name="firstName"
       className="inputs" 
       type="text"
       value={formik.values.firstName}
       isTouched={formik.touched.firstName !== undefined}
       onBlur={formik.handleBlur}
       hasError={formik.touched.firstName !== undefined
                ? formik.errors.firstName !== undefined
                  ? '*' + formik.errors.firstName
                  : null
                : null}
              onChange={formik.handleChange}
       />
      <br/>
      <br/>
      <p>Last name:</p>
     <input
       id="lastName"
       name="lastName"
       className="inputs" 
       type="text"
       isTouched={formik.touched.lastName !== undefined}
       onBlur={formik.handleBlur}
       value={formik.values.lastName}
      hasError={formik.touched.lastName !== undefined
                ? formik.errors.lastName !== undefined
                  ? '*' + formik.errors.lastName
                  : null
                : null}
              onChange={formik.handleChange}
       />     
     
      <br/>
      <br/>
      <p>Email:</p>
      <input
      className="inputs"
      id="email"
      name="email"
      type="text"
      isTouched={formik.touched.email !== undefined}
      onBlur={formik.handleBlur}
      value={formik.values.email}
       hasError={formik.touched.email !== undefined
               ? formik.errors.email !== undefined
                 ? '*' + formik.errors.email
                 : null
               : null}
             onChange={formik.handleChange}/>
      <br/>
      <br/>
      <p>Phone: </p>
      <input
       className="inputs"
        id="phone"
        name="phone"
        type="text"
        isTouched={formik.touched.phone !== undefined}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
         hasError={formik.touched.phone !== undefined
                 ? formik.errors.phone !== undefined
                   ? '*' + formik.errors.phone
                   : null
                 : null}
               onChange={formik.handleChange}
       />
      <br/>
      <br/>
      <p>City:</p>
      <input 
      className="inputs" 
      id="city"
      name="city"
      className="inputs" 
      type="text"
      isTouched={formik.touched.city !== undefined}
      onBlur={formik.handleBlur}
      value={formik.values.city}
      hasError={formik.touched.city !== undefined
               ? formik.errors.city !== undefined
                 ? '*' + formik.errors.city
                 : null
               : null}
             onChange={formik.handleChange}/>
      <br/>
      <br/>
      <p>Country:</p>
      <input 
      className="inputs"
       id="country"
       name="country"
       className="inputs" 
       type="text"
       isTouched={formik.touched.country!== undefined}
       onBlur={formik.handleBlur}
       value={formik.values.country}
       hasError={formik.touched.country !== undefined
                ? formik.errors.country !== undefined
                  ? '*' + formik.errors.country
                  : null
                : null}
              onChange={formik.handleChange}
       />
      <br/>
      <br/>
      <button 
       onClick={onConfirm} className="btn-accept">Accept</button>
    </div>
  );
}

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleDetail;