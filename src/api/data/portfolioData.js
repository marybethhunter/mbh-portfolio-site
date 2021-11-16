import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// project promises
const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getAllProjects().then(resolve))
    .catch(reject);
});

const addNewProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/projects.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllProjects().then(resolve);
        });
    })
    .catch(reject);
});

const updateProject = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/projects/${obj.firebaseKey}.json`, obj)
    .then(() => getAllProjects().then(resolve))
    .catch(reject);
});

// about me promises
const getAboutMe = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/about.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const updateAboutMe = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/about/${obj.firebaseKey}.json`, obj)
    .then(() => getAboutMe().then(resolve))
    .catch(reject);
});

// contact me promises
const getContactInfo = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/contact.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const updateContactInfo = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/contact/${obj.firebaseKey}.json`, obj)
    .then(() => getContactInfo().then(resolve))
    .catch(reject);
});

// technologies promises
const getAllTechUsed = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteTech = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/tech/${firebaseKey}.json`)
    .then(() => getAllTechUsed().then(resolve))
    .catch(reject);
});

const addNewTech = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/tech.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/tech/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllTechUsed().then(resolve);
        });
    })
    .catch(reject);
});

export {
  getAllProjects,
  deleteProject,
  addNewProject,
  updateProject,
  getAboutMe,
  updateAboutMe,
  getContactInfo,
  updateContactInfo,
  getAllTechUsed,
  deleteTech,
  addNewTech,
};
