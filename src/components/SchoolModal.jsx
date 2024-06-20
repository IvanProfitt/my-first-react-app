import PropTypes from 'prop-types';

function SchoolModal({ submissions, editSubmission, deleteSubmission }) {
  return (
    <div className="educationInfo">
      {submissions.map((submission, index) => (
        <div key={index} className="eduDiv">
          <h4>{submission.schoolName}</h4>
          <h5>{submission.schoolSubject}</h5>
          <button onClick={() => editSubmission(index)}>Edit</button>
          <button onClick={() => deleteSubmission(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

SchoolModal.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      schoolName: PropTypes.string.isRequired,
      schoolSubject: PropTypes.string.isRequired,
      schoolStart: PropTypes.string.isRequired,
      schoolEnd: PropTypes.string.isRequired,
      schoolAdditional: PropTypes.string.isRequired,
    })
  ).isRequired,
  editSubmission: PropTypes.func.isRequired,
  deleteSubmission: PropTypes.func.isRequired,
};

export default SchoolModal;
