import proptypes from 'prop-types';


function List(props){

    const category = props.category;
    const itemList = props.items

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical 
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical

    //fruits.sort((a,b) => a.calories - b.calories); //numerical order
    //fruits.sort((a,b) => b.calories - a.calories); //reverse numerical order

    const lowCalFruits = itemList.filter(item => item.calories < 100);

    const listItems = itemList.map(item=> <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b> cal
                                            </li>);
    return(<>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
            </>);
    }
List.defaultProps = {
    category: "Category",
    items: [],
}

List.proptypes = {
    category: proptypes.string,
    items: proptypes.arrayOf(proptypes.shape({id: proptypes.number, name: proptypes.string, calories: proptypes.number})),

}

export default List