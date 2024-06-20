import React, { useState } from 'react';
import './App.css';
import FormGeneral from './components/FormGeneral';
import DisplayGeneral from './components/DisplayGeneral';
import FormSchool from './components/FormSchool';
import DisplaySchool from './components/DisplaySchool';
import SchoolModal from './components/SchoolModal';

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

  const [submissions, setSubmissions] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [showModa, setShowModal] = useState(false);

  const changeGenData = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generalSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const changeEduData = (e) => {
    const { name, value } = e.target;
    setEduInfo((prevState) => ({
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
  };

  const editSubmission = (index) => {
    setIsEditing(index);
    setEduInfo(submissions[index]);
  };

  const deleteSubmission = (index) => {
    setSubmissions(submissions.filter((_, i) => i !== index));
  };


  return (
    <>
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
        />
      </div>
      <div id="right" className='resumeDiv'>
        <div className="genInfoDiv">
        <DisplayGeneral generalInfo={generalInfo}
        onChange={changeGenData} />
        </div>
        <DisplaySchool
        submissions={submissions}
        editSubmission={editSubmission}
        deleteSubmission={deleteSubmission}
         />


        <div className='educationInfo'>
          <div className="eduDiv">
          <h4>School Name</h4>
          <h5>School Subject</h5>
          <p>Start and end date</p>
          <p>Additional info</p>
          </div>

          <div className="eduDiv">
          <h4>School Name</h4>
          <h5>School Subject</h5>
          <p>Start and end date</p>
          <p>Additional info</p>
          </div>
          
        </div>

        <div className="experienceInfo">
          <div className='expDiv'>
            <h3>Company Name</h3>
            <h4>Job Title</h4>
            <p>Start and end date</p>
            <p>Responsibilities</p>
          </div>
          <div className='expDiv'>
            <h3>Company Name</h3>
            <h4>Job Title</h4>
            <p>Start and end date</p>
            <p>Responsibilities</p>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default App;
