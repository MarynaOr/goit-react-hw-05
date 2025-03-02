import { Field, Form, Formik } from "formik";
import s from './SearchBar.module.css'

const SearchBar = ({handleChangeQuery, query}) => {


  const handleSubmit = (value) =>{
   console.log(value);
   handleChangeQuery( value.query)
   

  }

  // title



   const initialValues ={
    query,
   }
  return (
    <>
      <Formik 
      initialValues={initialValues}
      // onChange={handleChangeQuery}
      onSubmit={handleSubmit}
      >
        <Form className={s.form}>
            <Field
            placeholder='пошук фільмів...'
            type='text'
            name='query'
            />
            <button type="submit">Пошук</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;