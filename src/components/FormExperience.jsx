
import PropTypes from 'prop-types';

function FormExperience({ expInfo, onChange, onSubmit }) {
  return (
    <div style={{display:'flex', flexDirection:"column"}}>
      <form  style={{display:'flex', flexDirection:"column", padding:'.5vh .5vh .5vw .5vw'}} id="schoolForm" onSubmit={onSubmit}>
        <label>
          Company Name
          <input
          style={{ margin: '6px' }}
            type="text"
            className="expName"
            name="expName"
            value={expInfo.expName || ''}
            onChange={onChange}
          />
        </label>
        <label>
          Job Title
          <input
          style={{ margin: '6px' }}
            type="text"
            className="expTitle"
            name="expTitle"
            value={expInfo.expTitle || ''}
            onChange={onChange}
          />
        </label>
        <label>
          Start Date
          <input
            style={{ margin: '6px' }}
            type="date"
            className="expStart"
            name="expStart"
            value={expInfo.expStart || ''}
            onChange={onChange}
          />
        </label>
        <label>
          End Date
          <input
          style={{ margin: '6px' }}
            type="date"
            className="expEnd"
            name="expEnd"
            value={expInfo.expEnd || ''}
            onChange={onChange}
          />
        </label>
        <label>
          Responsibilities
          <input
          style={{ margin: '6px' }}
            type="text"
            className="expAdditional"
            name="expAdditional"
            value={expInfo.expAdditional || ''}
            onChange={onChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FormExperience.propTypes = {
  expInfo: PropTypes.shape({
    expName: PropTypes.string,
    expTitle: PropTypes.string,
    expStart: PropTypes.string,
    expEnd: PropTypes.string,
    expAdditional: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormExperience;
