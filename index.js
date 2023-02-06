const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="congrats">Congratulations</h1>
    <div className="sub-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <p className="heading">Kiran V</p>
      <p className="para">
        BNR institution of computer education and Technology, Khammam.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
