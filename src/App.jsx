import Top_bar from './components/top';
import Item_Add from './components/items';
import Heading from './components/head_Section';
export default function Div() {
  return (
    <div className="flex flex-col justify-between items-center px-4">
      <Heading></Heading>
      <Top_bar />
      <Item_Add ev_name="School Going" ev_date="01-02-2002" />
      <Item_Add ev_name="Not School Going" ev_date="01-02-2004" />
    </div>
  );
}
