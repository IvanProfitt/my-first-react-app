import React from 'react';
import PropTypes from 'prop-types';

function FormSchool({ eduInfo, onChange, onSubmit }) {
  return (
    <div>
      <form id="schoolForm" onSubmit={onSubmit}>
        <label>
          School Name
          <input
            type="text"
            className="schoolName"
            name="schoolName"
            value={eduInfo.schoolName || ''}
            onChange={onChange}
          />
        </label>
        <label>
          Study Subject
          <input
            type="text"
            className="schoolSubject"
            name="schoolSubject"
            value={eduInfo.schoolSubject || ''}
            onChange={onChange}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            className="schoolStart"
            name="schoolStart"
            value={eduInfo.schoolStart || ''}
            onChange={onChange}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            className="schoolEnd"
            name="schoolEnd"
            value={eduInfo.schoolEnd || ''}
            onChange={onChange}
          />
        </label>
        <label>
          Additional Info
          <input
            type="text"
            className="schoolAdditional"
            name="schoolAdditional"
            value={eduInfo.schoolAdditional || ''}
            onChange={onChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {eduInfo.schoolName && (
        <div>
          <h3>{eduInfo.schoolName}</h3>
          <button onClick={() => onSubmit({ ...eduInfo })}>Edit</button>
          <button onClick={() => onSubmit(null)}>Delete</button>
        </div>
      )}
    </div>
  );
}

FormSchool.propTypes = {
  eduInfo: PropTypes.shape({
    schoolName: PropTypes.string,
    schoolSubject: PropTypes.string,
    schoolStart: PropTypes.string,
    schoolEnd: PropTypes.string,
    schoolAdditional: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormSchool;
