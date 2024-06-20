import Top_bar from './components/top';
import Items from './components/items';
import Heading from './components/head_Section';
export default function Div() {
  const itemarr = [{
    name: "Going To School",
    Date: "10-20-2003"
  },
  {
    name: "Going To College",
    Date: "10-20-2003"
  },
  {
    name: "Going To University",
    Date: "10-20-2003"
  },
  ]
  return (
    <div className="flex flex-col justify-between items-center px-4">
      <Heading></Heading>
      <Top_bar />
      <Items items={itemarr} />
      <Items items={itemarr} />
    </div>
  );
}
