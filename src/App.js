import './App.css';
import Header from './components/Header.js';
import Item from './components/item.js'
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemContainer">
         <Item 
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/models/design"
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/inventory/new/ms"
          twoButtons="true"
          first
        />
        
        <Item 
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/modely/design"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/modely"
          twoButtons="true"
        />

        <Item 
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/model3/design"
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/inventory/new/m3"
          twoButtons="true"
        />

        <Item 
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/modelx/design"
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/inventory/new/mx"
          twoButtons="true"
        />

        <Item 
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/solarpanels"
          twoButtons="true"
        />

        <Item 
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink="https://www.tesla.com/solarroof/design"
          rightBtnTxt="LEARN MORE"
          rightBtnLink="https://www.tesla.com/solarroof"
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
