import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles/index.css'
import axios from 'axios'
import Blog from './components/Blog/Blog'

function App(articles) {
  var [articles, setUsers] = useState([]);
  var [isOrdenated, setIsOrdenated] = useState();

  useEffect(() => {
    if (localStorage.getItem("array") == null) {
      const obtainDatas = async () => {
        const data = await axios('https://randomuser.me/api/?results=30');
        setUsers(data.data.results.sort((a, b) => a.name.first.localeCompare(b.name.first)));
        localStorage.setItem("array", JSON.stringify(data));
      };

      obtainDatas();

    } else {
      const obtainStorage = async () => {
       let arrayStorage = JSON.parse(localStorage.getItem("array"));
       setUsers(arrayStorage.data.results.sort((a, b) => a.name.first.localeCompare(b.name.first)));
            };
            obtainStorage();
          }
        }, []);

        
  const sortByName = () => {
    setIsOrdenated(true)
    if (isOrdenated == true) {
      const NewUsers = [...articles]
      setUsers(NewUsers.sort((a, b) => b.name.first.localeCompare(a.name.first)));
      document.getElementById('btn').textContent = `Sort by A-Z`
      setIsOrdenated(false)

    } else if (isOrdenated == false) {
      const NewUsers = [...articles]
      document.getElementById('btn').textContent = `Sort by Z-A`
      setUsers(NewUsers.sort((a, b) => a.name.first.localeCompare(b.name.first)));
    }
  }

  return (
    <div className="App">
     <div class="header">
      <h1>WORLD PROFILES</h1>
       </div>
      <button className="btn-sort" id="btn" onClick={() => sortByName()}>Sort By A-Z </button>
      <Blog articles={articles} />
    </div>
  );
}

export default App;

