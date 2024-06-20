/* eslint-disable react/prop-types */
import Item from './Item';

const Items = ({ items }) => (
  <>
    {items.map((item, index) => {
      return (
        <Item
          name={item.name}
          Date={item.Date}
          key={index}
        />
      );
    })}
  </>
);

export default Items;