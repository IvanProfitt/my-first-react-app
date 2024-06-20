
import PropTypes from 'prop-types';

function FormGeneral({ generalInfo, onChange, onSubmit }) {
  return (
    <form id="genForm" onSubmit={onSubmit}>
      <label>
        First Name
        <input
          type="text"
          className="firstName"
          name="firstName"
          value={generalInfo?.firstName || ''}
          onChange={onChange}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          className="lastName"
          name="lastName"
          value={generalInfo?.lastName || ''}
          onChange={onChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          className="email"
          name="email"
          value={generalInfo?.email || ''}
          onChange={onChange}
        />
      </label>
      <label>
        Phone Number
        <input
          type="number"
          className="phoneNum"
          name="phoneNum"
          value={generalInfo?.phoneNum || ''}
          onChange={onChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

FormGeneral.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNum: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormGeneral;
