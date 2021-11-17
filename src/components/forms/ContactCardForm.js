import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { updateContactInfo } from '../../api/data/portfolioData';

const initialState = {
  email: '',
  linkedIn: '',
  github: '',
  name: '',
  phone: '',
};

export default function ContactCardForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        email: obj.email,
        linkedIn: obj.linkedIn,
        github: obj.github,
        name: obj.name,
        phone: obj.phone,
      });
      // console.warn(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateContactInfo(obj.firebaseKey, formInput).then(() => {
        history.push('/contact');
        // console.warn('Items Updated', formInput);
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.name || ''}
            type="text"
            name="name"
            id="name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="linkedIn">LinkedIn Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.linkedIn || ''}
            type="text"
            name="linkedIn"
            id="linkedIn"
          />
        </FormGroup>
        <FormGroup>
          <Label for="github">Github Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.github || ''}
            type="text"
            name="github"
            id="github"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.email || ''}
            type="text"
            name="email"
            id="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.phone || ''}
            type="text"
            name="phone"
            id="phone"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

ContactCardForm.propTypes = {
  obj: PropTypes.shape({
    name: '',
    email: '',
    firebaseKey: '',
    github: '',
    linkedIn: '',
    phone: '',
  }),
};

ContactCardForm.defaultProps = {
  obj: {},
};
