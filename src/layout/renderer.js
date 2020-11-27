import React, { useState, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
import Fields from '../shared/fields';
import { v4 as uuidv4 } from 'uuid';
import { FaTimesCircle, FaTrashAlt } from 'react-icons/fa';
function updateRenderer(cmpLst) {
  localStorage.setItem('componentList', JSON.stringify(cmpLst));
}
const Renderer = () => {
  const [componentList, setComponentList] = useState([]);
  const [selected, setSelected] = useState({});
  const nodeRef = useRef(null);

  useEffect(() => {
    let _lst = JSON.parse(localStorage.getItem('componentList'));
    setComponentList(_lst);
  }, []);

  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      console.log('monitor', monitor);
      let _cmpLst = [...componentList];
      let _item = { ...item };
      _item.id = uuidv4();
      _item.position = { x: 0, y: 0 };
      _cmpLst.push(_item);
      setComponentList(_cmpLst);
      console.log('cmp list', _cmpLst);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const onDropStop = (e, data, itm) => {
    setComponentList((lst) => {
      let _lst = lst.map((val) => {
        let _val = val;
        if (val.id === itm.id) {
          _val = { ...val, position: { x: data.x, y: data.y } };
        }
        return _val;
      });
      updateRenderer(_lst);
      return _lst;
    });
  };

  const removeElement = (itm) => {
    setComponentList((lst) => {
      let _lst = lst.filter((val, i) => val.id !== itm.id);
      updateRenderer(_lst);
      return _lst;
    });
  };

  const clearRender = () => {
    setComponentList([])
    updateRenderer([])
  }

  return (
    <div>
      <div className='tool-bar'>
        <i>* changes will be autosaved</i>
        <span onClick={clearRender}>
          <FaTrashAlt /> Clear
        </span>
      </div>
      <div id='renderer' ref={drop} className='renderer'>
        <div nodeRef={nodeRef}>
          {componentList.reverse().map((itm, i) => (
            <Draggable
              key={itm.id}
              {...itm}
              onStop={(e, data) => onDropStop(e, data, itm)}
            >
              <div onClick={() => setSelected(itm)} className='drag-item'>
                <span className='action' onClick={() => removeElement(itm)}>
                  <FaTimesCircle />
                </span>
                <Fields {...itm}>Field</Fields>
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Renderer;
