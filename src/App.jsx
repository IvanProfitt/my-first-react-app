import React, { useState } from 'react';
import './App.css';
import FormGeneral from './components/FormGeneral';
import DisplayGeneral from './components/DisplayGeneral';
import FormSchool from './components/FormSchool';
import DisplaySchool from './components/DisplaySchool';
import SchoolModal from './components/SchoolModal';
import FormExperience from './components/FormExperience';
import ExperienceModal from './components/ExperienceModal';
import DisplayExperience from './components/DisplayExperience';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: ''
  });

  const [eduInfo, setEduInfo] = useState({
    schoolName: '',
    schoolSubject: '',
    schoolStart: '',
    schoolEnd: '',
    schoolAdditional: ''
  });

  const [expInfo, setExpInfo] = useState({
    expName: '',
    expTitle: '',
    expStart: '',
    expEnd: '',
    expAdditional: ''
  });

  const [submissions, setSubmissions] = useState([]);
  const [expSubmissions, setExpSubmissions] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [showEduModal, setShowEduModal] = useState(false);
  const [showExpModal, setShowExpModal] = useState(false);

  const changeGenData = (e) => {
    const { name, value } = e.target;
    setGeneralInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generalSubmit = (e) => {
    e.preventDefault();
  };

  const changeEduData = (e) => {
    const { name, value } = e.target;
    setEduInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const eduSubmit = (e) => {
    e.preventDefault();
    if (isEditing !== null) {
      setSubmissions(submissions.map((submission, index) =>
        index === isEditing ? eduInfo : submission
      ));
      setIsEditing(null);
    } else {
      setSubmissions([...submissions, eduInfo]);
    }
    setEduInfo({
      schoolName: '',
      schoolSubject: '',
      schoolStart: '',
      schoolEnd: '',
      schoolAdditional: ''
    });
    setShowEduModal(false);
  };

  const editSubmission = (index) => {
    setIsEditing(index);
    setEduInfo(submissions[index]);
    setShowEduModal(true);
  };


  const deleteSubmission = (index) => {
    setSubmissions(submissions.filter((_, i) => i !== index));
  };

  const changeExpData = (e) => {
    const { name, value } = e.target;
    setExpInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const expSubmit = (e) => {
    e.preventDefault();
    if (isEditing !== null) {
      setExpSubmissions(expSubmissions.map((submission, index) =>
        index === isEditing ? expInfo : submission
      ));
      setIsEditing(null);
    } else {
      setExpSubmissions([...expSubmissions, expInfo]);
    }
    setExpInfo({
      expName: '',
      expTitle: '',
      expStart: '',
      expEnd: '',
      expAdditional: ''
    });
    setShowExpModal(false);
  };

  const editExpSubmission = (index) => {
    setIsEditing(index);
    setExpInfo(expSubmissions[index]);
    setShowExpModal(true);
  };

  const deleteExpSubmission = (index) => {
    setExpSubmissions(expSubmissions.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <div id="left" className="formDiv">
        <FormGeneral
          generalInfo={generalInfo}
          onChange={changeGenData}
          onSubmit={generalSubmit}
        />
        <FormSchool
          eduInfo={eduInfo}
          onChange={changeEduData}
          onSubmit={eduSubmit}
          editSubmission={editSubmission}
          deleteSubmission={deleteSubmission}
        />
        <SchoolModal
          eduInfo={eduInfo}
          editSubmission={editSubmission}
          deleteSubmission={deleteSubmission}
          submissions={submissions}
          showModal={showEduModal}
          setShowModal={setShowEduModal}
        />

        <FormExperience
          expInfo={expInfo}
          onChange={changeExpData}
          onSubmit={expSubmit}
          editExpSubmission={editExpSubmission}
          deleteExpSubmission={deleteExpSubmission}
        />
        <ExperienceModal
          expSubmissions={expSubmissions}
          editExpSubmission={editExpSubmission}
          deleteExpSubmission={deleteExpSubmission}
          showModal={showExpModal}
          setShowModal={setShowExpModal}
        />
      </div>

      <div id="right" className='resumeDiv'>
        <div className="genInfoDiv">
          <DisplayGeneral style={{color: 'black'}} generalInfo={generalInfo} />
        </div>
        <DisplaySchool submissions={submissions} />
        <DisplayExperience expSubmissions={expSubmissions} />
      </div>
    </div>
  );
}

export default App;
