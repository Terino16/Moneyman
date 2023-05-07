import './App.css';
import Header from './component/header';
import VideoBackground from './component/VideoBackground';
import Main from './component/main'
function App() {
  return (
    <div className="App">
    <Header />
     <div className='grid items-center justify-center '>
     <VideoBackground/>
     </div>
     <div >
     <Main/>
     </div>

    </div>

  );
}

export default App;
