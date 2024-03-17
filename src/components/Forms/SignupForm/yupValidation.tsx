import * as yup  from "yup"

const phoneNumberRegex=/^[0-9]{10}/;
const emailRegex= /^[A-Za-z0-9._]+@[A-Za-z]+\.[a-zA-Z]{2,}$/
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$#!%^&*])[A-Za-z\d@$#!%^&*]{8,}$/

const YupValidation=yup.object().shape({
    email: yup
    .string()
    .required('Enter your Email')
    .matches(emailRegex,'Enter a valid Emaill'),

    phoneNumber: yup
    .string()
    .matches(phoneNumberRegex,'Enter a valid phone number')
    .max(10,'Invalid phone number')
    .required('Please enter your Phone Number'),

    password: yup.string().matches(passwordRegex,'Password must be of 8 characters')
    .required('Password Required'),

    confirmPassword: yup.string().oneOf([yup.ref("password")],'Password does not match')
    .required('Please Confirm your Password')


})

export default YupValidation

