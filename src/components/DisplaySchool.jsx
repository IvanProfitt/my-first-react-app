import PropTypes from 'prop-types';

const DisplaySchool = ({ submissions}) => {
  return (
    <div className="educationInfo">
      {submissions.map((submission, index) => (
        <div key={index} className="eduDiv">
          <h4>{submission.schoolName}</h4>
          <h5>{submission.schoolSubject}</h5>
          <p>Start Date: {submission.schoolStart}</p>
          <p>End Date: {submission.schoolEnd}</p>
          <p>Additional Info: {submission.schoolAdditional}</p>
        </div>
      ))}
    </div>
  );
};

DisplaySchool.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      schoolName: PropTypes.string.isRequired,
      schoolSubject: PropTypes.string.isRequired,
      schoolStart: PropTypes.string.isRequired,
      schoolEnd: PropTypes.string.isRequired,
      schoolAdditional: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplaySchool;
