const Contact = () => {
    return ( 
        <div style={{minHeight: "74.1vh"}}>
            <div className="container-sm" style={{
                backgroundColor: "#D9D9D9",
                padding: "2vw 4vw",
                marginTop: "3vw",
                marginBottom: "2vw",
                maxHeight: "765px",
                textAlign: "left"
            }}>
                <h2 aria-label="phone number">Phone number: 613-333-3333</h2>
                <h2 aria-label="email">Email: EngineGames@gmail.com</h2>
                <h2 aria-label="address">Address: 333 realStreet, Ottawa, Ontario, Canada</h2>
            </div>
        </div>
    );
}
 
export default Contact;