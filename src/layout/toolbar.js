import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const Toolbar = ({ addPanel, clearRender }) => {
  return (
    <div className='tool-bar'>
      <div className='flex'>
        <span onClick={addPanel}>
          <AiOutlineAppstoreAdd />
          Add Panel
        </span>
      </div>
      <div className='flex'>
        <i>* changes will be autosaved</i>
        <span onClick={clearRender}>
          <FaTrashAlt /> Clear
        </span>
      </div>
    </div>
  );
};

export default Toolbar;
