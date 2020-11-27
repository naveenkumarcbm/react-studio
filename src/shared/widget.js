import Fields from './fields';
import { FaTimesCircle } from 'react-icons/fa';
import Draggable from 'react-draggable';

const Widget = ({ onDragStop, itm, removeElement, updateLabel }) => {
  return (
    <Draggable
      key={itm.id}
      {...itm}
      onStop={(e, data) => onDragStop(e, data, itm)}
    >
      <div className='drag-item'>
        <span className='action' onClick={() => removeElement(itm)}>
          <FaTimesCircle />
        </span>
        <div className='field'>
          <Fields
            {...itm}
            defaultValue={''}
            onChange={(lbl) => updateLabel(itm, lbl)}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default Widget;
