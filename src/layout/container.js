import Item from '../shared/item';
import { componentList } from '../util';

const Container = () => {
  return (
    <div className="grab">
      {componentList.map((itm, i) => (
        <Item key={'comp_' + i} {...itm} />
      ))}
    </div>
  );
};

export default Container;
