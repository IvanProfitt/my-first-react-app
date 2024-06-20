
import PropTypes from 'prop-types';

function FormDisplay({ generalInfo }) {
  return (
    <div style={{color:'black'}} className="form-display">
      <p >{generalInfo.firstName}</p>
      <p>{generalInfo.lastName}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phoneNum}</p>
    </div>
  );
}

FormDisplay.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNum: PropTypes.string
  }).isRequired
};

export default FormDisplay;
