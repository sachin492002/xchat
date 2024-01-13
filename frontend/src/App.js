
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SuggestionBar/Sidebar";
import Posts from "./components/Posts/Posts";


function App() {
  return (
    <div className="App">
        <div className='flex md:flex-col  w-full'>
         <Navbar/>
            <div className='md:inline-flex'>
            <Sidebar/>
                <Posts/>
            </div>
        </div>
    </div>
  );
}

export default App;
