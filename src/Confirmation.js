import { v4 as uuidv4 } from 'uuid';

const Confirmation = () => {
  const confNum = uuidv4();
    return (
      <div className="confirmation">
        <div className="row container" style={{
            height: "100vh",
            margin: "auto"
        }}>
            <div className="container" style={{
                backgroundColor: "grey",
                margin: "2vw auto",
                height: "60%",
                padding: "10vw 2vw"
            }}>
                <h1 aria-label='confirmation message'>Your purchase has been confirmed!</h1>
                <h1 aria-label='confirmation code'>Your confirmation number is: <br/>{confNum}</h1>
            </div>
        </div>
      </div>
    );
  }
   
  export default Confirmation;