

const Home = () => {
  return (
    <div className="home">
      <div className="container-sm" style={{
        backgroundColor: "#D9D9D9",
        padding: "12vw 5vw",
        marginTop: "3.5vw"
      }}>
        <h1>Featured Games</h1>
      </div>
      <div className="container-sm" style={{
        backgroundColor: "#D9D9D9",
        padding: "3vw 5vw",
        marginTop: "1vw"
      }}>
        <h1>Special Offers</h1>
      </div>
      <div className="container-sm" style={{
        backgroundColor: "#D9D9D9",
        padding: "15vw 5vw",
        marginTop: "4vw",
        marginBottom: "5vw",
        width: "50%"
      }}>
        <h1>Popular Games</h1>
      </div>
    </div>
  );
}
 
export default Home;