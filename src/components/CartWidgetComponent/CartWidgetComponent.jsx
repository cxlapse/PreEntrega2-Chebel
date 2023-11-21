import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const CartWidgetComponent = () => {
return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#030303",}} />
        <span>0</span>
    </div>
)
}

export default CartWidgetComponent; 