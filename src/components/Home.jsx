import React from "react";
import Img1 from "../img/1.jpg";
import Img2 from "../img/2.jpg";
import Img3 from "../img/3.jpg";
import Img4 from "../img/4.jpg";
import Img5 from "../img/5.jpg";
import Img6 from "../img/6.jpg";
import Img7 from "../img/7.jpg";
import Img8 from "../img/8.jpg";

const Home = () => {
  return (
    <div className="columns-4 mt-10 mr-20 mb-20 ml-20">
      {/* CARD 1 */}
      <div class="  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img1} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            "Torta Whisky Jack Daniel's"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta hojarasca, manjar, crema pastelera y frambuesa.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div class="  mt-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img2} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          "Torta Whisky Jack Daniel's"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta hojarasca, manjar, crema pastelera y frambuesa. Una torta
            clásica pero decorada con los toques modernos de Magda pasteleria.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div class="  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img3} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            "Torta de Chocolate"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta con húmedo bizcocho y ganache de chocolate. 
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div class=" mt-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img4} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            Torta con Tematica "Whisky Jack Daniel's"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta hojarasca, manjar, crema pastelera y frambuesa. Una torta
            clásica pero decorada con los toques modernos de Magda pasteleria.
          </p>
        </div>
      </div>

      {/* CARD 5 */}
      <div class="  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img5} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          "Torta Baby Shower"
          </h5>
          <p class="mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
          Torta de bizcocho y relleno de chocolate.
          </p>
        </div>
      </div>

      {/* CARD 6 */}
      <div class=" mt-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img6} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2  text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            Torta con Tematica "Whisky Jack Daniel's"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta hojarasca, manjar, crema pastelera y frambuesa. Una torta
            clásica pero decorada con los toques modernos de Magda pasteleria.
          </p>
        </div>
      </div>

      {/* CARD 7 */}
      <div class="  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img7} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            Torta con Tematica "Whisky Jack Daniel's"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta hojarasca, manjar, crema pastelera y frambuesa. Una torta
            clásica pero decorada con los toques modernos de Magda pasteleria.
          </p>
        </div>
      </div>

      {/* CARD 8 */}
      <div class=" mt-5  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={Img8} alt="" />
        <div class="p-5 bg-[#f4f4f2]">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            Torta con Tematica "Whisky Jack Daniel's"
          </h5>
          <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            Torta hojarasca, manjar, crema pastelera y frambuesa. Una torta
            clásica pero decorada con los toques modernos de Magda pasteleria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
