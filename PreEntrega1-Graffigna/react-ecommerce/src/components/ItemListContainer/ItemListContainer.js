import './itemlistcontainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
        <h2 className="greetingFont">{greeting}</h2>
        </div>
    );
    }

export default ItemListContainer;