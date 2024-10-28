import { useState } from 'react';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { toastAlert } from '@utils/toastAlert';
import clsx from 'clsx';
import Button from '@components/Button/Button';
import css from './BookingForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Please enter minimum 3 characters')
    .trim()
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Booking date is required'),
  comment: Yup.string().trim(),
});

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSubmit = (values, { resetForm }) => {
    toastAlert.success(
      `Dear ${values.name}! Your booking has been confirmed!`
    );

    resetForm();
    setStartDate(null);
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.field}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.field}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>

          <div className={css.field}>
            <DatePicker
              selected={startDate}
              closeOnScroll={true}
              onChange={date => {
                setStartDate(date);
                setFieldValue('date', date);
              }}
              startDate={today}
              minDate={tomorrow}
              dateFormat="MMMM d, yyyy"
              highlightDates={[today]}
              placeholderText="Booking date*"
              className={css.input}
            />
            <ErrorMessage className={css.error} name="date" component="span" />
          </div>

          <div className={css.field}>
            <Field
              className={clsx(css.input, css.comment)}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
          </div>
          <Button selfcenter type="submit">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
