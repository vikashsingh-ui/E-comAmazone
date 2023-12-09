import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/Toofan/1500x600_EN_JPN._CB664643376_.jpg"
            alt=""
          />

          <div className="home_row">
            <Product
              id="1"
              title="Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Red)"
              price={1149.0}
              image="https://images-na.ssl-images-amazon.com/images/I/61w-gHrjWyL._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="2"
              title="Harman Kardon Omni 20+ Premium Wireless HD 60W Loudspeaker with Built-in Chromecast (White)"
              price={10445.0}
              image="https://images-na.ssl-images-amazon.com/images/I/91ZwEwLRQEL._SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="3"
              title='HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX '
              price={91713.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
              rating={4}
            />
            <Product
              id="4"
              title="HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports, AMD FreeSync(3KS61AA) "
              price={11868.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71yYGgCG%2BhL._SL1500_.jpg"
              rating={3}
            />
            <Product
              id="5"
              title="HP Pavilion Ryzen 5 AIO 23.5 FHD Touchscreen Desktop (16 GB/512 GB SSD+1 TB HDD/Vega 8 Graphics/Win 10 Home/Snowflake White/5.59kg), 24-xa1018in "
              price={89990.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71-eH5yT6FL._SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="6"
              title="ASUS VivoBook P4 (P4103FA)-14 inch Notebook (Intel i5-10210U Processor, 8GB RAM, 512GB PCIE, DOS)-P4103FA-EB501 "
              price={61235.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71lL1DJdYbL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="7"
              title="Dell XPS 7390 13.3-inch (33.78 cms) UHD Display Thin & Light Laptop (10th Gen Core i7-10510U/16GB/512GB SSD/Win 10 + MS Office/Integrated Graphics), Silver  "
              price={11868.0}
              image="https://images-na.ssl-images-amazon.com/images/I/610o0lI8IFL._SL1000_.jpg"
              rating={4}
            />
            <Product
              id="8"
              title="https://images-na.ssl-images-amazon.com/images/I/610o0lI8IFL._SL1000_.jpg"
              price={25499.0}
              image="https://images-na.ssl-images-amazon.com/images/I/31feqxrzJFL.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="9"
              title="HP Envy Urban 14 Tote Bag with RFID Blocking Pockets (Grey) "
              price={2850.0}
              image="https://images-na.ssl-images-amazon.com/images/I/91FmlFuMlwL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="10"
              title="Lenovo B530 15.6 Inches Durable Water Repellent Design Laptop Urban Backpack with Power Bank Pocket Charger Opening and Adjustable Straps  "
              price={1400.0}
              image="https://images-na.ssl-images-amazon.com/images/I/51jlyoWsDlS._SL1000_.jpg"
              rating={3}
            />
          </div>
          <div className="home_row">
            <Product
              id="11"
              title="SIDDHANAM Trendy Pink Gold Cotton Printed Casual wear top "
              price={499.0}
              image="https://images-na.ssl-images-amazon.com/images/I/81zp%2BlDtvZL._UL1500_.jpg"
              rating={4}
            />
            <Product
              id="12"
              title="Safana Womens Regular fit Top  "
              price={637.0}
              image="https://images-na.ssl-images-amazon.com/images/I/81g3Yrm4BtL._UL1500_.jpg"
              rating={4}
            />
            <Product
              id="13"
              title="Scott International Men Regular Fit T-Shirt (Pack of 3) "
              price={519.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71vp8Lec9JL._UL1500_.jpg"
              rating={4}
            />
          </div>

          <div className="home_row">
            {/* product  */}
            <Product
              id="14"
              title="TCL TS3015 2.1 Channel Home Theater Sound Bar with Wireless Subwoofer (180W Peak Audio Power Output, Bluetooth Connectivity) "
              price={8499.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71sQ8YUByTL._SL1500_.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
