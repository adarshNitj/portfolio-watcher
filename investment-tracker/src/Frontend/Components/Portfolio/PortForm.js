import React, { useState } from "react";
import './PortForm.css'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Checklist from '../Images/Checklist.jpg'

const PortForm = ({ onAddInput }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [investedPrice, setInvestedPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [symbol, setSymbol] = useState();

  const submitForm = (e) => {
    e.preventDefault();

    if (!symbol || !quantity || !investedPrice) {
      alert("Enter a valid input");
      return;
    }
    onAddInput({investedPrice, quantity, symbol});
    setInvestedPrice("");
    setQuantity("");
    setSymbol("");
  };

  const toggleForm = () => {
    setDisplayForm(!displayForm); 
  };

  return (
    <div className="portfolio_form">
      <div className="portfolio_add_form" 
      onClick={toggleForm}>
      <AddCircleOutlineIcon className="add_form_icon"/>
      <button >
       
        {displayForm ? "Close" : "AddStock"}
      </button>
      </div>
      <div className="portfolio_form_div">
      {displayForm && (
      <div className="portfolio_form_img" >
       <img src={Checklist} alt="checklist"></img>
        
        <form
          className="addStock_Portfolio_form "
          onSubmit={submitForm}
        >
          <div className="stock_port_input ">
            <label>InvestedPrice</label>
            <input
              type="text"
              name="t1"
              placeholder="invested Amount"
              value={investedPrice}
              onChange={(e) => setInvestedPrice(e.target.value)}
            />
          </div>
          <div className="stock_port_input ">
            <label> Quantity </label>
            <input
              type="text"
              value={quantity}
              placeholder="number of shares"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="stock_port_input ">
            <label>Share Symbol </label>
            <input
              type="text"
              value={symbol}
              placeholder="Share Symbol"
              onChange={(e) => setSymbol(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        </div>
      )}
     </div>
    </div>
  );
};

export default PortForm;