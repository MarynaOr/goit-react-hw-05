import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleChangeQuery, query }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    handleChangeQuery(values.query);
    resetForm();
    // handleClearQuery()
  };

  // title

  return (
    <>
      <Formik
        // key={query}
        initialValues={initialValues}
        // onChange={handleChangeQuery}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field placeholder="пошук фільмів..." type="search" name="query" />
          <button type="submit">Пошук</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
