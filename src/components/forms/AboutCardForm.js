import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { updateAboutMe } from '../../api/data/portfolioData';

const initialState = {
  bio: '',
  image: '',
};

export default function AboutCardForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        bio: obj.bio,
        image: obj.image,
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
      updateAboutMe(obj.firebaseKey, formInput).then(() => {
        history.push('/about');
        // console.warn('Items Updated', formInput);
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
        <FormGroup>
          <Label for="bio">Bio:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.bio || ''}
            type="text"
            name="bio"
            id="bio"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.image || ''}
            type="text"
            name="image"
            id="image"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

AboutCardForm.propTypes = {
  obj: PropTypes.shape({
    bio: '',
    image: '',
    firebaseKey: '',
  }),
};

AboutCardForm.defaultProps = {
  obj: {},
};
