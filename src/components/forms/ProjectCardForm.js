import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { addNewProject, updateProject } from '../../api/data/portfolioData';

const initialState = {
  deployedLink: '',
  projectDescription: '',
  projectImage: '',
  projectName: '',
  repoLink: '',
};

export default function ProjectCardForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        deployedLink: obj.deployedLink,
        projectDescription: obj.projectDescription,
        projectImage: obj.projectImage,
        projectName: obj.projectName,
        repoLink: obj.repoLink,
      });
      // console.warn(obj);
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateProject(obj.firebaseKey, formInput).then(() => {
        history.push('/projects');
      });
    } else {
      addNewProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/projects');
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
        <FormGroup>
          <Label for="projectName">Project Name:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.projectName || ''}
            type="text"
            name="projectName"
            id="projectName"
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectDescription">Project Description:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.projectDescription || ''}
            type="text"
            name="projectDescription"
            id="projectDescription"
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectImage">Project Screenshot Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.projectImage || ''}
            type="text"
            name="projectImage"
            id="projectImage"
          />
        </FormGroup>
        <FormGroup>
          <Label for="deployedLink">Deployed Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.deployedLink || ''}
            type="text"
            name="deployedLink"
            id="deployedLink"
          />
        </FormGroup>
        <FormGroup>
          <Label for="repoLink">Repo Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.repoLink || ''}
            type="text"
            name="repoLink"
            id="repoLink"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

ProjectCardForm.propTypes = {
  obj: PropTypes.shape({
    deployedLink: '',
    projectName: '',
    projectDescription: '',
    projectImage: '',
    repoLink: '',
    firebaseKey: '',
  }),
};

ProjectCardForm.defaultProps = {
  obj: {},
};
