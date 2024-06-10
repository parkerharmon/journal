import Header from "./Header.jsx" 
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"

function App() {
  return( /* You need to enclose all of the children in a fragment as you can only return one object at a time*/
    <> 
      <Header/> 
      
      <Card/>
      <hr/>
      <Button/>
      <Footer/>
    </>
  );

}
export default App 
