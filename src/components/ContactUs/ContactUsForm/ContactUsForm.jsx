import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { ArrowRightIcon } from 'assets/images/contact-us/icons';

import styles from './ContactUsForm.module.scss';
const {
    contactForm,
    contactLabelsWrapper,
    contactFormLabel,
    contactFormTitle,
    contactFormInput,
    contactFormError,
    contactFormSubmit,
    disabled,
    contactFormText,
    contactSubmitIconWrapper,
    contactFromArrowIcon,
} = styles;

const userSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required().typeError('Phone must be a number'),
});

export function ContactUsForm() {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    function handleSubmit(person, { resetForm }) {
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userSchema}
        >
            {({ errors }) => {
                const isError = Object.keys(errors).length !== 0;
                return (
                    <Form className={contactForm}>
                        <div className={contactLabelsWrapper}>
                            <label className={contactFormLabel}>
                                <p className={contactFormTitle}>Full name:</p>
                                <Field
                                    className={contactFormInput}
                                    type="text"
                                    name="name"
                                    placeholder="John Rosie"
                                />
                                <ErrorMessage
                                    className={contactFormError}
                                    component="p"
                                    name="name"
                                />
                            </label>
                            <label className={contactFormLabel}>
                                <p className={contactFormTitle}>E-mail:</p>
                                <Field
                                    className={contactFormInput}
                                    type="email"
                                    name="email"
                                    placeholder="johnrosie@gmail.com"
                                />
                                <ErrorMessage
                                    className={contactFormError}
                                    component="p"
                                    name="email"
                                />
                            </label>
                            <label className={contactFormLabel}>
                                <p className={contactFormTitle}>Phone:</p>
                                <Field
                                    className={contactFormInput}
                                    type="text"
                                    name="phone"
                                    placeholder="380961234567"
                                />
                                <ErrorMessage
                                    className={contactFormError}
                                    component="p"
                                    name="phone"
                                />
                            </label>
                            <label className={contactFormLabel}>
                                <p className={contactFormTitle}>Message:</p>
                                <Field
                                    className={contactFormText}
                                    type="text"
                                    name="message"
                                    placeholder="Your message"
                                    as="textarea"
                                />
                            </label>
                        </div>
                        <button
                            className={
                                isError
                                    ? `${contactFormSubmit} ${disabled}`
                                    : contactFormSubmit
                            }
                            type="submit"
                            disabled={isError}
                        >
                            <span>Send</span>
                            <div className={contactSubmitIconWrapper}>
                                <ArrowRightIcon
                                    className={contactFromArrowIcon}
                                />
                            </div>
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
