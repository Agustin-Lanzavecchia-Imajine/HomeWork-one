import { Form } from 'react-bootstrap';

const Input = ({ name, value, error, touched, placeholder, onChange, ...rest }) => {
  return (
    <Form.Group>
      <Form.Control
        className='m-1 input'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      <Form.Text className='text-danger'>{error && <h5>{error}</h5>}</Form.Text>
    </Form.Group>
  );
};

export default Input;
