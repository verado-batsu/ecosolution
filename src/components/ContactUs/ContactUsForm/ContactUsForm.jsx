import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ArrowRightIcon } from 'assets/images/contact-us/icons';

import styles from './ContactUsForm.module.scss';
const {
    contactForm,
    contactLabelsWrapper,
    contactFormLabel,
    contactFormTitle,
    contactFormInput,
    contactFormInputError,
    contactFormError,
    contactFormSubmit,
    disabled,
    contactFormText,
    contactSubmitIconWrapper,
    contactFormArrowIcon,
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
        Notify.success(`Form submitted`);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userSchema}
        >
            {({ errors, touched }) => {
                const isError = Object.keys(errors).length !== 0;
                let isNameError = false;
                let isEmailError = false;
                let isPhoneError = false;

                Object.keys(errors).forEach(errorName => {
                    Object.keys(touched).forEach(touch => {
                        if (errorName === 'name' && touch === 'name') {
                            isNameError = true;
                        }

                        if (errorName === 'email' && touch === 'email') {
                            isEmailError = true;
                        }

                        if (errorName === 'phone' && touch === 'phone') {
                            isPhoneError = true;
                        }
                    });
                });

                return (
                    <Form className={contactForm}>
                        <div className={contactLabelsWrapper}>
                            <label className={contactFormLabel}>
                                <span className={contactFormTitle}>
                                    * Full name:
                                </span>
                                <Field
                                    className={
                                        isNameError
                                            ? `${contactFormInput} ${contactFormInputError}`
                                            : contactFormInput
                                    }
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
                                <span className={contactFormTitle}>
                                    * E-mail:
                                </span>
                                <Field
                                    className={
                                        isEmailError
                                            ? `${contactFormInput} ${contactFormInputError}`
                                            : contactFormInput
                                    }
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
                                <span className={contactFormTitle}>
                                    * Phone:
                                </span>
                                <Field
                                    className={
                                        isPhoneError
                                            ? `${contactFormInput} ${contactFormInputError}`
                                            : contactFormInput
                                    }
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
                                <span className={contactFormTitle}>
                                    Message:
                                </span>
                                <Field
                                    className={contactFormText}
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
                                    className={contactFormArrowIcon}
                                />
                            </div>
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
