import Header from "./Header.jsx" 
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"

function App() {

  const fruits = [{id:1, name:"apple", calories: 66}, 
                    {id:2, name:"banana", calories: 100}, 
                    {id:3, name: "orange", calories: 45}, 
                    {id:4, name: "pineapple", calories: 37}];

  const vegatables = [{id:5, name:"potatoes", calories: 110}, 
                    {id:6, name:"celery", calories: 15}, 
                    {id:7, name: "carrots", calories: 25}, 
                    {id:8, name: "corn", calories: 63}];

  return( /* You need to enclose all of the children in a fragment as you can only return one object at a time*/
    <> 
      <Header/> 
      <UserGreeting isLoggedIn={true} username="Parker"/>
      <Card/>

      <hr/>
      <Button/>
      
      <Student name="Parker" age={22} isStudent={true}/>
      <Student name="Bob" age={200} isStudent={false}/>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegatables.length > 0 ? <List items={vegatables} category="Vegatables"/> : null}
      <Food/>
      <Footer/>
    </>
  );

}
export default App 
