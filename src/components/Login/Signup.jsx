import { FaBoxOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useState } from "react";
import "./index.css"

const Singup = () => {
  const [packages, setpackages] = useState('');

  const onchangepackage = (e) => {
    setpackages(e.target.value)
  }

  const navigate = useNavigate();

  return (
    <div className="container-fluid parent">
      <HelmetProvider>
        <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>
        <div className="container logcontainer">
          <div className="login-box">
            <h4 className="logh2">Regester</h4>
            <form action="#">
              <div className="input-box">
                <input type="text" required />
                <label>User Name</label>
              </div>
              <div className="input-box">
                <input type="text" required />
                <label>Reflink</label>
              </div>
              <div class="radio-buttons-container mb-4">
                <div class="radio-button">
                  <input onChange={onchangepackage} name="radio-group" id="radio2" class="radio-button__input" type="radio" value={packages} />
                  <label for="radio2" class="radio-button__label">
                    <FaBoxOpen class="radio-button__custom" />

                    <i className="formparagraf">20$</i>
                  </label>
                </div>
                <div class="radio-button">
                  <input onChange={onchangepackage} name="radio-group" id="radio1" class="radio-button__input" type="radio" value={packages} />
                  <label for="radio1" class="radio-button__label">
                    <FaBoxOpen class="radio-button__custom" />
                    <i className="formparagraf">50$</i>
                  </label>
                </div>
                <div class="radio-button">
                  <input onChange={onchangepackage} name="radio-group" id="radio3" class="radio-button__input" type="radio" value={packages} />
                  <label for="radio3" class="radio-button__label">
                    <FaBoxOpen class="radio-button__custom" />

                    <i className="formparagraf">100$</i>
                  </label>
                </div>
                <div class="radio-button">
                  <input onChange={onchangepackage} name="radio-group" id="radio4" class="radio-button__input" type="radio" value={packages} />
                  <label for="radio4" class="radio-button__label">
                    <FaBoxOpen class="radio-button__custom" />

                    <i className="formparagraf">200$</i>
                  </label>
                </div>
                <input onChange={onchangepackage} name="radio-group" id="radio5" class="radio-button__input" type="radio" value={packages} />
                <label for="radio5" class="radio-button__label">
                  <FaBoxOpen class="radio-button__custom" />

                  <i className="formparagraf">500$</i>
                </label>
              </div>
              <button type="submit" className="regester" disabled>Regester</button>
              <div className="signup-link">
                <button className="cancel" onClick={() => { navigate("/") }} href="#">cancel</button>
              </div>
            </form>
          </div>
          <span style={{ "--i": "0" }} />
          <span style={{ "--i": "1" }} />
          <span style={{ "--i": "2" }} />
          <span style={{ "--i": "3" }} />
          <span style={{ "--i": "4" }} />
          <span style={{ "--i": "5" }} />
          <span style={{ "--i": "6" }} />
          <span style={{ "--i": "7" }} />
          <span style={{ "--i": "8" }} />
          <span style={{ "--i": "9" }} />
          <span style={{ "--i": "10" }} />
          <span style={{ "--i": "11" }} />
          <span style={{ "--i": "12" }} />
          <span style={{ "--i": "13" }} />
          <span style={{ "--i": "14" }} />
          <span style={{ "--i": "15" }} />
          <span style={{ "--i": "16" }} />
          <span style={{ "--i": "17" }} />
          <span style={{ "--i": "18" }} />
          <span style={{ "--i": "19" }} />
          <span style={{ "--i": "20" }} />
          <span style={{ "--i": "21" }} />
          <span style={{ "--i": "22" }} />
          <span style={{ "--i": "23" }} />
          <span style={{ "--i": "24" }} />
          <span style={{ "--i": "25" }} />
          <span style={{ "--i": "26" }} />
          <span style={{ "--i": "27" }} />
          <span style={{ "--i": "28" }} />
          <span style={{ "--i": "29" }} />
          <span style={{ "--i": "30" }} />
          <span style={{ "--i": "31" }} />
          <span style={{ "--i": "32" }} />
          <span style={{ "--i": "33" }} />
          <span style={{ "--i": "34" }} />
          <span style={{ "--i": "35" }} />
          <span style={{ "--i": "36" }} />
          <span style={{ "--i": "37" }} />
          <span style={{ "--i": "38" }} />
          <span style={{ "--i": "39" }} />
          <span style={{ "--i": "40" }} />
          <span style={{ "--i": "41" }} />
          <span style={{ "--i": "42" }} />
          <span style={{ "--i": "43" }} />
          <span style={{ "--i": "44" }} />
          <span style={{ "--i": "45" }} />
          <span style={{ "--i": "46" }} />
          <span style={{ "--i": "47" }} />
          <span style={{ "--i": "48" }} />
          <span style={{ "--i": "49" }} />
        </div>
      </HelmetProvider>
    </div>
  )
}
export default Singup;

/*
<article class="bg-secondary">
<div class="card-body text-center">
    <h3 class="text-white mt-3">Bootstrap 4 UI KIT</h3>
    <p class="h5 text-white">Components and templates  <br /> for Ecommerce, marketplace, booking websites
        and product landing pages</p>   <br />
    <p><a class="btn btn-warning" target="_blank" href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com
        <i class="fa fa-window-restore "></i></a></p>
</div>
<br /><br />
</article>
*/