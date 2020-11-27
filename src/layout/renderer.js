import React, { useState, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import Toolbar from './toolbar';
import Widget from '../shared/widget';
function updateRenderer(cmpLst) {
  localStorage.setItem('componentList', JSON.stringify(cmpLst));
}
const Renderer = () => {
  const [componentList, setComponentList] = useState([]);
  const nodeRef = useRef(null);

  useEffect(() => {
    let _lst = JSON.parse(localStorage.getItem('componentList')) || [];
    setComponentList(_lst);
  }, []);

  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      let _cmpLst = [...componentList];
      let _item = { ...item };
      _item.id = uuidv4();
      _item.position = { x: 0, y: 0 };
      _cmpLst.push(_item);
      setComponentList(_cmpLst);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const onDragStop = (e, data, itm) => {
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
    if (window.confirm('Are you sure to clear all components?')) {
      setComponentList([]);
      updateRenderer([]);
    }
  };

  const addPanel = () => {
    alert('Yet to Implement');
  };

  const updateLabel = (itm, lbl) => {
    let _label = lbl.target ? lbl.target.value : lbl;
    setComponentList((lst) => {
      let _lst = lst.map((val) => {
        let _val = val;
        if (val.id === itm.id) {
          _val.label = _label;
        }
        if (lbl.target) _val.defaultValue = lbl.target.value;

        return _val;
      });
      updateRenderer(_lst);
      return _lst;
    });
  };

  return (
    <div>
      <Toolbar clearRender={clearRender} addPanel={addPanel} />
      <div id='renderer' ref={drop} className='renderer'>
        <div nodeRef={nodeRef}>
          {componentList?.map((itm, i) => (
            <Widget
              key={itm.id}
              itm={itm}
              onDragStop={onDragStop}
              removeElement={removeElement}
              updateLabel={updateLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Renderer;
