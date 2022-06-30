

const Details = () => {
    return (
      <div className="details">
        <div className="container row" style={{
            margin: "auto",
            height: "100vh",
            paddingBottom: "2vw"
        }}>
            <div className="col-8">
                <div className="row" style={{
                    backgroundColor: "grey",
                    margin: "2vw 0vw",
                    padding: "2vw 0vw",
                    height: "60%"
                }}>
                    <h1>game preview/images</h1>
                </div>
                <a href="/Project2/Purchase" style={{
                    textDecoration: "none",
                    color: "black"
                }}>
                    <div className="row" style={{
                        backgroundColor: "grey",
                        margin: "2vw 0vw",
                        padding: "2vw 0vw",
                        height: "30%"
                    }}>
                        <h1>game specifications and description. Add to cart button will also be here, click here to purchase</h1>
                    </div>
                </a>
            </div>
            <div className="col-4" style={{
                backgroundColor: "grey",
                margin: "2vw 0vw 1vw 0vw",
                padding: "2vw 0vw",
                height: "100%"
            }}>
                <h1>game categories/ratings and icon</h1>
            </div>
        </div>
      </div>
    );
  }
   
  export default Details;