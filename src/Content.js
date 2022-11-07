

import ItemList from "./ItemList";

const Content = ({items,handleCheck,handleDelete}) => {
    


    return (
    <>
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{marginTop:'2rem', height: '100%'}}>List is Empty</p>
        )}
    </>
    )
}

export default Content