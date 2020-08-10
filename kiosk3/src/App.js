import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Pepper",
      veg1Img:
        "https://images.pexels.com/photos/870808/pexels-photo-870808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      pepperQuantity: 50,

      veg2: "Tomatoes",
      veg2Img:
        "https://images.pexels.com/photos/3938343/pexels-photo-3938343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      tomatoesQuantity: 30,

      veg3: "Carrots",
      veg3Img:
        "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      carrotsQuantity: 50,

      type2: "Fruits",

      fruit1: " Pawpaws",
      fruit1Img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw-MRv0IbwU1zjIU-XTP_sf5YMjk6_kLdjRA&usqp=CAU",
      pawpawsQuantity: 200,

      fruit2: "RedBerries",
      fruit2Img:
        "https://images.pexels.com/photos/141814/pexels-photo-141814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      RedBerrziesQuantity: 50,

      fruit3: "BlueBerries",
      BlueberriesImg:
        "https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        BlueBerriesQuantity: 30,
    

      
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>GREEN's KIOSK</h1>
        <h> Welcome To  My Fruits And {this.state.type1} </h>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg3Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Carrots</h5>
              <p> Kes 100{this.state.carrotsImgPrice}</p>
              <p> Quantity {this.state.carrotsQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Pepper </h5>
              <p> Kes 300{this.state.pepperImgPrice}</p>
              <p> Quantity {this.state.pepperQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Tomatoes</h5>
              <p> Kes 50{this.state.tomatoesImgPrice}</p>
  
              <p> Quantity  {this.state.tomatoesQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.fruit1Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Pawpaws</h5>
              <p> Kes 70{this.state.pawpawsaImgPrice}</p>
              <p> Quantity {this.state.pawpawsQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.fruit2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Redberries</h5>
              <p> Kes 150{this.state.RedBerriesImgPrice}</p>
              <p> Quantity {this.state.RedBerriesQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>


          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.BlueberriesImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Blueberries</h5>
              <p> Kes 60  {this.state.BlueBerriesImgPrice}</p>
              <p> Quantity {this.state.BlueBerriesQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
[</section>
      </div>
    );
  }
}

export default App;