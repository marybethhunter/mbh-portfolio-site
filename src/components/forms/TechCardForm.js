import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { addNewTech } from '../../api/data/portfolioData';

const initialState = {
  logo: '',
};

export default function TechCardForm({ obj = {} }) {
  const history = useHistory();
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNewTech({ ...formInput }).then(() => {
      history.push('/tech');
    });
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        logo: obj.logo,
      });
    }
  }, [obj]);

  return (
    <div>
      <Form onSubmit={handleClick}>
        <FormGroup>
          <Label for="logo">Logo Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.logo || ''}
            type="text"
            name="logo"
            id="logo"
            placeholder="logo link..."
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

TechCardForm.propTypes = {
  obj: PropTypes.shape({}),
};

TechCardForm.defaultProps = {
  obj: {},
};
