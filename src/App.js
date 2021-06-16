import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import{Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import Incom from './pages/Incom';
import Expence from './pages/Expence';
import History from './pages/History';
function App() {
  return (
    <main className="App">
     <Header/>
     <section id="dashbord">
       <SideBar/>
       <article>
         <Switch >
           <Route path="/"component={Home} exact/>
           <Route path="/income"component={Incom} />
           <Route path="/expenses"component={Expence} />
           <Route path="/history"component={History} />

         </Switch>
       </article>
     </section>
    
    </main>
    
    
  );
}

export default App;
