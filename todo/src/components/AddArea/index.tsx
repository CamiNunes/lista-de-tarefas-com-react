import * as Comp from './style';

export const AddArea = () => {
  return(
    <Comp.Container>
      <div className="image">➕</div>
      <input type="text" placeholder="Adicione uma Tarefa"/>
    </Comp.Container>  
  );
}