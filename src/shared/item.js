import { useDrag } from 'react-dnd';

const Item = (props) => {
  const [, drag] = useDrag({
    item: { type: 'COMPONENT', data: props },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className='itm-container'>
      <span>{props.icon}</span>
      <b>{props.label}</b>
    </div>
  );
};

export default Item;
