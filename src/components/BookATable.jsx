import React from 'react';
import './BookATable.css'
import chefLogo from '../assets/logo.png';

function BookATable() {
  return (
    
  <div className="container">
  {/* <!-- Sidebar Panel --> */}
  <div className="sidebar">
    <div className="logo">
      <img src={chefLogo} alt="Logo" />
    </div>
    <div className="menu">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li ><a href="#">Menu</a></li>
        <div className="side">
          <li><a href="#">Dining Areas</a></li>
          <button>5</button>
        </div>

      </ul>
    </div>

    <button className="new-order">
      <i className="fas fa-circle-plus"></i><a href="back.html">New Order</a>
    </button>
    <div className="bottom-menu">
      <ul>
        <li><i className="fas fa-gear"></i>Settings</li>
        <li><i className="far fa-life-ring"></i>Help</li>
      </ul>
    </div>
  </div>

  {/* <!-- Content Panel --> */}
  <main className="content">
    <div className="top-bar">
      <div className="content-info">
        <i className="fa-solid fa-arrow-left"></i>
        <div className="nav-arrow">
          <h6>Dining Areas</h6>
          <h4>Main Hall</h4>
        </div>
        <h5>3 Waiters ---- 12 tables</h5>
      </div>

      <div className="user-info">
        <div className="role">
          <h4>sheik</h4>
          <h6>waiter</h6>
        </div>
        <img src="images/profile.png" alt="User Photo" />
      </div>
    </div>

    {/* <!-- Dining table content --> */}
    <div className="linktodown">
      <div className="front-hall">

        <div className="four">


          <div className="dropdown">
            <button className="dropbtn">
              <div className="t1-4">
                <a href="#">
                  <img src="images/four.png" alt="" /></a>
                <div className="table-info">
                  <h4>01</h4>
                  <h5>Vacant</h5>
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
              <a href="back.html">
                <i className="fas fa-circle-plus"></i>New Order</a>

              <a href="#">
                <i className="fa-regular fa-calendar-days"></i>Reservation</a>

            </div>

          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <div className="t1-4">
                <a href="#"><img src="images/four.png" alt="" /></a>
                <div className="table-info">
                  <h4>02</h4>
                  <h5>Vacant</h5>
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
              <a href="back.html">
                <i className="fas fa-circle-plus"></i>New Order</a>

              <a href="#">
                <i className="fa-regular fa-calendar-days"></i>Reservation</a>

            </div>

          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <div className="t1-4">
                <a href="#"><img src="images/four.png" alt="" /></a>
                <div className="table-info">
                  <h4>03</h4>
                  <h5>Reserved</h5>
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
              <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
              <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
            </div>

          </div>
        </div>

        <div className="two">
          {/* <!-- ------------------------------------------------ --> */}
          <div className="dropdown">
            <button className="dropbtn">
              <div className="t1-2">
                <a href="#"><img src="images/two.png" alt="" /></a>
                <div className="table-info">
                  <h4>04</h4>
                  <h5>Occupied</h5>
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
              <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
              <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
            </div>

          </div>
          {/* <!-- ----------------------- --> */}

          <div className="dropdown">
            <button className="dropbtn">
              <div className="t1-2">
                <a href="#"><img src="images/two.png" alt="" /></a>
                <div className="table-info">
                  <h4>05</h4>
                  <h5>Reserved</h5>
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
              <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
              <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
            </div>

          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <div className="t1-2">
                <a href="#"><img src="images/two.png" alt="" /></a>
                <div className="table-info">
                  <h4>07</h4>
                  <h5>Vacant</h5>
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
              <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
              <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
            </div>

          </div>
        </div>


        <div className="bar">
          <a href=""><img src="images/bar_edit.png" alt="" /></a>
        </div>

      </div>
    </div>
    
    <div className="four-last">

      <div className="dropdown">
        <button className="dropbtn">
          <div className="t2-4">
            <a href="#"><img src="images/four.png" alt="" /></a>
            <div className="table-info">
              <h4>08</h4>
              <h5>Occupied</h5>
            </div>
          </div>
        </button>
        <div className="dropdown-content">
          <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
          <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
          <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
        </div>

      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <div className="t2-4">
            <a href="#"><img src="images/four.png" alt="" /></a>
            <div className="table-info">
              <h4>09</h4>
              <h5>Reserved</h5>
            </div>
          </div>
        </button>
        <div className="dropdown-content">
          <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
          <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
          <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
        </div>

      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <div className="t2-4">
            <a href="#"><img src="images/four.png" alt="" /></a>
            <div className="table-info">
              <h4>10</h4>
              <h5>Vacant</h5>
            </div>
          </div>
        </button>
        <div className="dropdown-content">
          <a href="#"><i className="fa-solid fa-lock"></i>Occupy</a>
          <a href="back.html"><i className="fas fa-circle-plus"></i>New Order</a>
          <a href="#"><i className="fa-regular fa-calendar-days"></i>Reservation</a>
        </div>

      </div>
    </div>


  </main>
</div>
  );
}

export default BookATable;
