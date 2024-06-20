import PropTypes from 'prop-types';

const DisplayExperience = ({ expSubmissions}) => {
  return (
    <div className="educationInfo">
      {expSubmissions.map((expSubmission, index) => (
        <div key={index} className="eduDiv" style={{ color:'black'}}>
          <h4>{expSubmission.expName}</h4>
          <h5>{expSubmission.expTitle}</h5>
          <p>Start Date: {expSubmission.expStart}</p>
          <p>End Date: {expSubmission.expEnd}</p>
          <p>Additional Info: {expSubmission.expAdditional}</p>
        </div>
      ))}
    </div>
  );
};

DisplayExperience.propTypes = {
  expSubmissions: PropTypes.arrayOf(
    PropTypes.shape({
      expName: PropTypes.string.isRequired,
      expTitle: PropTypes.string.isRequired,
      expStart: PropTypes.string.isRequired,
      expEnd: PropTypes.string.isRequired,
      expAdditional: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplayExperience;
