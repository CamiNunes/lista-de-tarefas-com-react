import { useState } from 'react'; 
import * as Comp from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from  './components/AddArea';

const App =() => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Estudar CSS', done: false },
    {id: 2, name: 'Estudar Javascript', done: true },
  ]);

  return(
    <Comp.Container>
        <Comp.Area>
          <Comp.Header>Lista de Tarefas</Comp.Header>
          <AddArea/>
          {list.map((item, index)=> (
            <ListItem key={index} item={item}/>
          ))}
        </Comp.Area>
    </Comp.Container>
  );
}

export default App;
