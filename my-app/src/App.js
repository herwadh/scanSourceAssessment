import './App.css';
import OldComponent from './OldComponent';
import NewComponent from './NewComponent';
import SearchComponent from './SearchComponent';

const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

function App() {
  return (
    <div>
       <h1>Making Mootools and React Talk</h1>
          
      <NewComponent />
    
      <h2>Simple React Search Component</h2>
      <div class="content">
      <SearchComponent data = {data}/>
      </div>
    </div>
  );
}

export default App;
