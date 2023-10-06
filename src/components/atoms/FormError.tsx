interface FormErrorProps {
    message: string|null;
}
  
const FormErrors = (props: FormErrorProps) => {
    return props.message ? <span className="py-8 text-sm text-red-800">{props.message}</span> : null;
}

export default FormErrors;