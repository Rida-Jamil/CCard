// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.results);
      });
  }, [])

  return (
    <>
      {users.map(user => (
        <Cards
          image={user.picture.medium}
          name={user.name.first + "" + user.name.last}
          email={user.email}
          nationality={user.nat}
          age={user.dob.age}
        />
      ))}
    </>
  );
}

export default App;
