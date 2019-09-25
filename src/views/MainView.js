import React, {useContext} from 'react'
import { AppContext } from 'context/App.context';



const MainView = () => {
  const [store] = useContext(AppContext);
    return (
      <div>
        {store.subject}
        <div>
          {store.pros.map(item => (
            <li key={item.title}>{item.title} {item.value}</li>
          ))}
        </div>
        <br></br>
        <div>
          {store.cons.map(item => (
            <li key={item.title}>{item.title} {item.value}</li>
          ))}
        </div>
      </div>
    );
}

export default MainView