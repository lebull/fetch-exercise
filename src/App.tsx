import { useEffect, useState } from 'react';
import './App.css';
import { ItemType, ItemGroupType } from "./data/types";
import { getItemGroups } from "./data/api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Fetch coding exercise
      </header>
      <div>
        <ItemList />
      </div>
    </div>
  );
}

const ItemList = () => {
  const [state, setstate] = useState({
    loading: true,
    error: null,
    itemGroups: [] as ItemGroupType[],
  });

  useEffect(() => {
    getItemGroups(true).then(itemGroups => {
      setstate({
        loading: false,
        error: null,
        itemGroups: itemGroups,
      })
    }).catch(error => {
      setstate({
        loading: false,
        error: error,
        itemGroups: []
      })
    })
  }, [])

  if(state.loading){
    return <div>Loading...</div>
  }

  if(state.error){
    return <div>There was a problem fetching items.</div>
  }

  if(state.itemGroups.length <= 0){
    return <div>No items found</div>
  }

  return <div>
    {state.itemGroups.map(itemGroup => <ItemGroup key={itemGroup.id} itemGroup={itemGroup} />)}
  </div>
}

interface ItemGroupProps {
  itemGroup: ItemGroupType
}
const ItemGroup = ({itemGroup}: ItemGroupProps) => 
  <div>
    {  itemGroup.items.map((item) => <Item key={item.id} item={item}/>)}
  </div>

interface ItemProps {
  item: ItemType
}
const Item = ({item}: ItemProps) => <div>{item.name}</div>

export default App;