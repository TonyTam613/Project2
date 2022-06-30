import { Link } from "react-router-dom";


const Purchase = () => {
    return (
      <div className="purchase" style={{
        height: "100vh"
      }}>
        <div className="row container" style={{
            height: "40%",
            backgroundColor: "grey",
            padding: "5vw",
            margin: "3vw auto auto auto"
        }}>
            <h1>purchase summary</h1>
        </div>
        <div className="row container" style={{
            height: "10%",
            padding: "5vw",
            margin: "0vw auto auto auto"
        }}>
            <div className="col-7" style={{
                backgroundColor: "grey",
                padding: "4vw 2vw"
            }}>
                <h1>select payment method</h1>
            </div>
            <div className="col-4" style={{
                padding: "2vw"
            }}>
                <Link to="/Confirmation" style={{
                    backgroundColor: "grey",
                    color: "white",
                    borderRadius: "15px",
                    textDecoration: "none",
                    padding: "2vw"
                }}>confirm</Link>
            </div>
        </div>
      </div>
    );
  }
   
  export default Purchase;