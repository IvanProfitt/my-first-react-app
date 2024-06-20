import React from 'react';
import PropTypes from 'prop-types';

function ExperienceModal({ expSubmissions, editExpSubmission, deleteExpSubmission }) {
  return (
    <div className="expInfo">
      {expSubmissions.map((expSubmission, index) => (
        <div key={index} className="expDiv">
          <h4>{expSubmission.expName}</h4>
          <h5>{expSubmission.expTitle}</h5>
          <button onClick={() => editExpSubmission(index)}>Edit</button>
          <button onClick={() => deleteExpSubmission(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

ExperienceModal.propTypes = {
  expSubmissions: PropTypes.arrayOf(
    PropTypes.shape({
      expName: PropTypes.string.isRequired,
      expTitle: PropTypes.string.isRequired,
      expStart: PropTypes.string.isRequired,
      expEnd: PropTypes.string.isRequired,
      expAdditional: PropTypes.string.isRequired,
    })
  ).isRequired,
  editExpSubmission: PropTypes.func.isRequired,
  deleteExpSubmission: PropTypes.func.isRequired,
};

export default ExperienceModal;
