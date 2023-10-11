import logo from "../assets/img/icons/logo.png";
import coverPage from "../assets/img/icons/book.png";
import zoomInIcon from "../assets/img/icons/zoom-in.svg";
import zoomOutIcon from "../assets/img/icons/zoom-out.svg";
import bookMarkIcon from "../assets/img/icons/bookmark.svg";
import bookIcon from "../assets/img/icons/book.svg";
import copyIcon from "../assets/img/icons/copy.svg";
import prevIcon from "../assets/img/icons/prev.svg";
import nextIcon from "../assets/img/icons/next.svg";
import closeBtn from "../assets/img/icons/close.svg";
import { useEffect, useState } from "react";

const BookReadMode = ({active,setActiveRead, bookName}) => {
    
    const [doublePageMode, setDoublePageMode] = useState(false)

    // left and right button click to change page

let right = document.querySelectorAll(".book-section .right");
let si = right.length;
let z = 1;
function turnRight() {
  if (!si <= 0) {
    if (si >= 1) {
      si--;
    } else {
      si = right.length - 1;
      function sttmot(i) {
        setTimeout(function () {
          right[i].style.zIndex = "auto";
        }, 300);
      }
      for (var i = 0; i < right.length; i++) {
        right[i].className = "right";
        sttmot(i);
        z = 1;
      }
    }
    right[si].classList.add("flip");
    z++;
    right[si].style.zIndex = z;
  }
}
function turnLeft() {
  if (si == right.length) {
    return;
  }
  if (si < right.length) {
    si++;
  } else {
    si = 1;
    for (var i = right.length - 1; i > 0; i--) {
      right[i].classList.add("flip");
      right[i].style.zIndex = right.length + 1 - i;
    }
  }
  right[si - 1].className = "right";
  setTimeout(function () {
    right[si - 1].style.zIndex = "auto";
  }, 350);
}

// zoom in zoom out function 

function zoomInOut () {
    let zoomLevel = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];
    let currentZoom = 9;
  
    document
      .querySelector(".book-read-menu-section #zoom-in-btn")
      .addEventListener("click", function () {
        if (currentZoom < zoomLevel.length - 1) {
          currentZoom++;
          updateZoom();
        }
      });
  
    document
      .querySelector(".book-read-menu-section #zoom-out-btn")
      .addEventListener("click", function () {
        if (currentZoom > 0) {
          currentZoom--;
          updateZoom();
        }
      });
  
    function updateZoom() {
      document.querySelector(".book-read-section .book-wrapper").style.zoom =
        zoomLevel[currentZoom] + "%";
      document.querySelector(".book-read-section .book-section").style.zoom =
        zoomLevel[currentZoom] + "%";
    }
  }
const openDoublePageMode = () =>{
    setDoublePageMode(!doublePageMode);
   setTimeout(() => {
    turnRight()
   }, 500);
 }
 useEffect(()=>{
  if(document){
    zoomInOut()
  }
 },[document])
  return (
    <>
      <section className={active ?"book-read-menu-section active": "book-read-menu-section"}>
        <div className="top-fixed-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="left">
                    <img src={logo} alt="logo" />
                    <button  className="button-toggle">
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                  <div className="middle ">
                    <select className="d-none font-cover-select">
                      <option data-display="Font cover">Font cover</option>
                      <option>01. Opening</option>
                      <option>02. Family of imran</option>
                      <option>03. The spolis of</option>
                      <option>04. Lorem ipsum dolor.</option>
                      <option>
                        05. Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Incidunt aperiam facere unde, a expedita
                        blanditiis magnam velit corrupti quia quos?
                      </option>
                    </select>
                    <select className="translate-to d-none">
                      <option data-display="Translate to">Translate to</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>Urdu</option>
                      <option>Arabic</option>
                    </select>
                    <h2 style={{textTransform:"uppercase"}} className="book-title">{bookName}</h2>
                    <form className="d-none search-form">
                      <input type="text" placeholder="Search in the book" />
                      <i className="fa-solid fa-magnifying-glass" />
                    </form>
                  </div>
                  <div className="right flex-wrap">
                    <div className={doublePageMode ? "next-prev text-nowrap" :"d-none next-prev text-nowrap"}>
                      <button data-toggle="tooltip" title="Go Previous Page" id="prev-btn" onClick={turnLeft}>
                        <img src={prevIcon} alt="icon" />
                      </button>
                      <button  data-toggle="tooltip" title="Go Next Page" id="next-btn" onClick={turnRight}>
                        <img src={nextIcon} alt="icon" />
                      </button>
                    </div>
                    <div className="zoom text-nowrap">
                      <button  data-toggle="tooltip" title="Zoom In" id="zoom-in-btn">
                        <img src={zoomInIcon} alt="icon" />
                      </button>
                      <button  data-toggle="tooltip" title="Zoom Out" id="zoom-out-btn">
                        <img src={zoomOutIcon} alt="icon" />
                      </button>
                    </div>
                    <button className="d-none" id="book-mark">
                      <img src={bookMarkIcon} alt="icon" />
                    </button>
                    <div className="copy-read">
                      <button className="d-none" id="copy">
                        <img src={copyIcon} alt="icon" />
                      </button>
                      <button data-toggle="tooltip" title="Toggle book mode." onClick={openDoublePageMode} id="book-read-double-page">
                        <img src={bookIcon} alt="icon" />
                      </button>
                      
                    </div>
                    <button onClick={()=> setActiveRead(false)} className="ml-5"  id="copy">
                        <img src={closeBtn} alt="icon" />
                      </button>
                    <select className="others d-none">
                      <option className="show-others" />
                      <option>Share</option>
                      <option>Embed</option>
                      <option>Buy this book</option>
                      <option>Find a library</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={active ? "book-read-section active" : "book-read-section"}>
        {/* single page mode  */}
        <ul className={doublePageMode ? "d-none book-wrapper" :"book-wrapper"}>
          <li className="page-wrapper">
            <div className="cover-page page">
              <img src={coverPage} alt="img" />
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page d-flex flex-column-reverse">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page d-flex flex-column-reverse">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page d-flex flex-column-reverse">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page d-flex flex-column-reverse">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
          <li className="page-wrapper">
            <div className="page">
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus quasi dolore minima eveniet ad nobis ea quis
                possimus, aspernatur necessitatibus sunt debitis cum autem
                voluptatem, impedit quibusdam? Libero, placeat. Ullam similique
                ea dignissimos fugiat reprehenderit labore nulla? Aperiam totam
                ea neque voluptates sint quisquam facere libero natus iure quo?
              </p>
              <p className="text">
                و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد
                أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب
                الألم الذي ربما تنجم عنه بعض المتعة ؟
              </p>
            </div>
          </li>
        </ul>
        {/* double page mode  */}
        <div className={doublePageMode ? " book-section double-page-mode" :"d-none book-section double-page-mode"}>
          <div className="container">
            <div className="right">
              <figure className="back" id="back-cover" />
              <figure className="front d-flex h-100 align-items-center justify-content-center">
                <h2>The End</h2>
              </figure>
            </div>
            <div className="right">
              <figure className="back">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
              <figure className="front">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
            </div>
            <div className="right">
              <figure className="back">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
              <figure className="front">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
            </div>
            <div className="right">
              <figure className="back">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
              <figure className="front">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
            </div>
            <div className="right">
              <figure className="back">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
              <figure className="front">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
            </div>
            <div className="right">
              <figure className="back">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
              <figure className="front">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
            </div>
            <div className="right">
              <figure className="back">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
              <figure className="front">
                <div className="page-content">
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                  <p className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus quasi dolore minima eveniet ad nobis ea
                    quis possimus, aspernatur necessitatibus sunt debitis cum
                    autem voluptatem, impedit quibusdam? Libero, placeat. Ullam
                    similique ea dignissimos fugiat reprehenderit labore nulla?
                    Aperiam totam ea neque voluptates sint quisquam facere
                    libero natus iure quo?
                  </p>
                  <p className="text">
                    و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من
                    أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص
                    ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر
                    أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟
                  </p>
                </div>
              </figure>
            </div>
            <div className="right">
              <figure className="back" />
              <figure
                className="front"
                id="cover"
                style={{
                  backgroundImage: 'url("./assets/img/icons/book.png")',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookReadMode;
