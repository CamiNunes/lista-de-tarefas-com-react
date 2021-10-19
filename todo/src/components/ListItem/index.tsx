import { useState } from 'react'; 
import * as Comp from './style';
import { Item } from '../../types/Item';

type Props = {
  item: Item;
}

export const ListItem = ({ item }: Props ) => {
  const[isChecked, setIsChecked] = useState(item.done)

  return(
    <Comp.Container>
      <input type="checkbox" checked={isChecked}/>
      <label>{item.name}</label>
    </Comp.Container>
  );
}