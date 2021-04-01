import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  return (
    <div className="main">
      
      <Header />

      <div className="mainbody">
      
      <Sidebar />
      <Body />

      </div>

      <Footer />
      
    </div>
  );
}

export default App;
