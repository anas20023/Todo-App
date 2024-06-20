/* eslint-disable react/prop-types */
import Item from './Item';

const Items = ({ items }) => (
  <>
    {items.map((item, index) => {
      return (
        <Item
          key={index}
          eventName={item.name}
          eventDate={item.Date}
        />
      );
    })}
  </>
);

export default Items;