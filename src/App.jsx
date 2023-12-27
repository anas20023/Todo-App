import Top_bar from './top';
import Item_Add from './items';
import Item_Add_2 from './item_2';
import Heading from './head_Section';
export default function Div() {
  return (
    <div className="flex flex-col justify-between items-center px-4">
      <Heading></Heading>
      <Top_bar />
      <Item_Add/>
      <Item_Add_2/>
    </div>
  );
}
