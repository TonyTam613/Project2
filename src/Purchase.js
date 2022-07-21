import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/cartContext";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const Purchase = () => {
    const {cart, setCart, removeFromCart} = useContext(CartContext);
    const removeAll = () => {
        setCart([]);
    };
    return (
      <div className="purchase" style={{
        height: "100vh"
      }}>
        <div className="container" style={{
            height: "40%",
            backgroundColor: "grey",
            padding: "5vw 10vw",
            margin: "3vw auto auto auto"
        }}>
            {cart.length === 0 ? <h1 aria-label="cart is empty message">Cart is Empty</h1> : cart.map((game) => (
                <div aria-label={`${game.title} cart item`} key={game.id} className="row" style={{marginBottom: "1vh", maxHeight: "42.6px"}}>
                    <h4 aria-label={`${game.title} cart item title`} className="col-6" style={{textAlign: "left"}}>{game.title}</h4>
                    <h4 aria-label={`${game.title} cost`} className="col-4" style={{textAlign: "right", marginRight: "1vw"}}>{game.price === 0 ? 'free' : `$${game.price}`}</h4>
                    <button aria-label="remove from cart button" className="btn btn-dark col-2" style={{maxWidth: "100px", maxHeight: "42.16px"}} onClick={() => removeFromCart(game)}>Remove</button>
                </div>
            ))}
        </div>
        <div className="row container" style={{
            height: "10%",
            padding: "5vw",
            margin: "0vw auto auto auto"
        }}>
            <div className="col-7" style={{
                backgroundColor: "grey",
                padding: "3vw 0vw"
            }}>
                <ToggleButtonGroup aria-label="payment option selector" type="radio" name="options" defaultValue={1}>
                    <ToggleButton aria-label="payment option 1" className="btn-primary" id="tbg-radio-1" value={1}>
                    Visa
                    </ToggleButton>
                    <ToggleButton aria-label="payment option 2" className="btn-primary"  id="tbg-radio-2" value={2}>
                    Paypal
                    </ToggleButton>
                    <ToggleButton aria-label="payment option 3" className="btn-primary"  id="tbg-radio-3" value={3}>
                    American Express
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="col-4" style={{
                padding: "2vw"
            }}>
                <Link to="/Confirmation"><button aria-label="checkout button" className="btn btn-dark col-6 py-3" onClick={() => removeAll()}>Confirm</button></Link>
            </div>
        </div>
      </div>
    );
  }
   
  export default Purchase;