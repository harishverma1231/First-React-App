import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {

const settings={
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
}




  return (
    <>
    <header className="container-fluid pb-3 mybg">
    <div className="container-lg p-lg-0">
    <nav className="navbar navbar-expand-lg bg-body-transparent">
      <a className="navbar-brand d-md-block mt-3" href="#/"><img alt="smdsbb"
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Logo.png?v=1672740015" /></a>

      <form className="d-flex ms-5 d-md-flex d-lg-none d-sm-none d-none mt-3 ms-auto" role="search">
        <button className="btn border-0" type="submit">Login</button>
        <button className="btn btn-primary d-flex align-items-center ms-2 border-0 btn_bg='true'"
          type="button">Try Whitepace free<i className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path 
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></i></button>
      </form>

      <button className="navbar-toggler bg-body-transparent mt-3 ms-lg-auto border-0 p-0 ms-3 me-2" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-light filter_invert"></span>
      </button>

      <div className="collapse navbar-collapse mt-4" id="navbarTogglerDemo01">
        <a className="navbar-brand d-md-none d-sm-none d-none" href="#/"><img alt="smdsbb"
            src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Logo.png?v=1672740015" /></a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light" href="#/" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="#/">Action</a></li>
              <li><a className="dropdown-item" href="#/">Another action</a></li>
              <li><a className="dropdown-item" href="#/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light" href="#/" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#/">Action</a></li>
              <li><a className="dropdown-item" href="#/">Another action</a></li>
              <li><a className="dropdown-item" href="#/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light" href="#/" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Resources
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#/">Action</a></li>
              <li><a className="dropdown-item" href="#/">Another action</a></li>
              <li><a className="dropdown-item" href="#/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light" href="#/" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Pricing
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#/">Action</a></li>
              <li><a className="dropdown-item" href="#/">Another action</a></li>
              <li><a className="dropdown-item" href="#/">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex ms-lg-5 d-md-none d-lg-flex me-2" role="search">
          <button className="btn border-0 yellow_bg" type="submit">Login</button>
          <button className="btn btn-primary border-0 d-flex align-items-center ms-2 btn_bg='true'"
            type="button">Try Whitepace free<i className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path 
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></i></button>
        </form>
      </div>
    </nav>
    </div>
  </header>
  
  <section className="container-fluid mybg">
      <div className="m-auto container pt-5 pb-5">
      <div className="d-flex justify-content-center align-items-center row">
        <div className="col-md-5 text-md-start text-center">
          <h1 className="text-light fs-1 fw-bolder">Get More Done with whitepace</h1>
          <p className="mt-4 text-light">Project management software that enables your teams to collaborate, plan, analyze
            and manage everyday tasks</p>
          <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
          btn_bg='true'  type="button">Try Whitepace free<i
              className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path 
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></i>
          </button>
        </div>
        <div className="col-md-7 mt-5 mt-md-0 pb-5">
          <img alt="smdsbb" className="container-fluid p-0" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Image-container.png?v=1672655906"></img>
        </div>
      </div>
      </div>
    </section>


     <section className="m-auto container mt-5 pb-5">
    <div className="d-flex justify-content-center align-items-center row">
      <div className="col-md-6 text-md-start text-center mt-5 p-5">
        <h1 className="text-dark fs-1 fw-bolder">Project Management</h1>
        <p className="mt-4 text-dark">Images, videos, PDFs and audio files are supported. Create math expressions and
          diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
        btn_bg='true'  type="button">Get Started<i
            className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path 
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></i>
        </button>
      </div>
      <div className="col-md-6 mt-5 mt-md-0 p-0">
        <img alt="smdsbb" className="container-fluid p-0 mt-5"
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Image-container.png?v=1672655906"></img>
      </div>
    </div>
  </section>

  <section className="m-auto container mt-5 pb-5">
    <div className="d-flex justify-content-center align-items-center row">
      <div className="col-md-6 text-md-start text-center mt-5 order-md-2 p-5">
        <h1 className="text-dark fs-1 fw-bolder">Work together</h1>
        <p className="mt-4 text-dark">With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
        </p>
        <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
        btn_bg='true'  type="button">Try it now<i
            className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path 
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></i>
        </button>
      </div>
      <div className="col-md-6 mt-5 mt-md-0 p-0 order-md-1">
        <img alt="smdsbb" className="container-fluid p-0 mt-5"
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Work_Together_Image.png?v=1672727445"></img>
      </div>
    </div>
  </section>

  <div className="container-fluid mybg">
    <section className="m-auto container mt-5 pb-5 p-0">
      <div className="d-flex justify-content-center align-items-center row">
        <div className="col-md-6 text-md-start text-center mt-5 p-md-5">
          <h1 className="text-light fs-1 fw-bolder">Use as Extension</h1>
          <p className="mt-4 text-light">Use the web clipper extension, available on Chrome and Firefox, to save web pages
            or take screenshots as notes.
          </p>
          <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
          btn_bg='true'  type="button">Let’s Go<i
              className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path 
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></i>
          </button>
        </div>
        <div className="col-md-6 mt-md-5 mt-md-0 p-4 p-md-5">
          <img alt="smdsbb" className="container-fluid p-0 mt-5"
            src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Image-container.png?v=1672655906"></img>
        </div>
      </div>
    </section>
  </div>


  <section className="m-auto container mt-5 pb-5">
    <div className="d-flex justify-content-center align-items-center row">
      <div className="col-md-6 text-md-start text-center mt-5 order-md-2 p-5">
        <h1 className="text-dark fs-1 fw-bolder">Customise it to your needs</h1>
        <p className="mt-4 text-dark">Customise the app with plugins, custom themes and multiple text editors (Rich Text or
          Markdown). Or create your own scripts and plugins using the Extension API.</p>
        <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
        btn_bg='true'  type="button">Let’s Go<i
            className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path 
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></i>
        </button>
      </div>
      <div className="col-md-6 mt-5 mt-md-0 p-0 order-md-1">
        <img alt="smdsbb" className="container-fluid p-0 mt-5"
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Image-container.png?v=1672655906"></img>
      </div>
    </div>
  </section>



  <section className="m-auto container mt-5 p-0 pb-5">
    <div className="col text-center mt-5 px-5 py-5">
      <h1 className="text-dark fs-1 fw-bolder">Choose Your Plan</h1>
      <p className="mt-4 text-dark">Whether you want to get organized, keep your personal life on track, or boost workplace
        productivity, Evernote has the right plan for you.</p>
    </div>

    <div className="desktop_view row mt-5 d-lg-block d-none">
      <div className="d-flex align-items-center">
        <div className="px-5 border border-warning rounded py-5">
          <h1 className="pt-3">Free</h1>
          <h1 className="py-3">$0</h1>
          <p className="py-3">Capture ideas and find them quickly</p>
          <div>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Sync unlimited devices</p>
            </span>
            <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">10 GB monthly uploads</p>
            </span>
            <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Customize Home dashboard and access extra widgets</p>
            </span>
            <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Connect primary Google Calendar account</p>
            </span>
            <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">200 MB max. note size</p>
            </span>
            <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Add due dates, reminders, and notifications to your tasks</p>
            </span>
          </div>
          <button type="button" className="btn btn-outline-warning mt-3">Get Started</button>
        </div>


       <div className="active py-5 px-5 mx-4 rounded mybg">
          <div className="py-5">
            <h1 className="text-light p1-3 fs-2">Personal</h1>
            <h1 className="text-warning py-3 fs-1">$11.99</h1>
            <p className="text-light py-3 fs-5">Keep home and family on track</p>
            <div>
              <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                  src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                <p className="m-0 text-light fs-5 ms-3">Sync unlimited devices</p>
              </span>
              <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                  src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                <p className="m-0 text-light fs-5 ms-3">10 GB monthly uploads</p>
              </span>
              <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                  src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                <p className="m-0 text-light fs-5 ms-3">Customize Home dashboard and access extra widgets</p>
              </span>
              <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                  src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                <p className="m-0 text-light fs-5 ms-3">Connect primary Google Calendar account</p>
              </span>
              <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                  src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                <p className="m-0 text-light fs-5 ms-3">200 MB max. note size</p>
              </span>
              <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                  src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                <p className="m-0 text-light fs-5 ms-3">Add due dates, reminders, and notifications to your tasks</p>
              </span>
            </div>
            <button type="button" className="btn btn-primary mt-3 btn_bg='true'">Get
              Started</button>
          </div>
        </div>


        <div className="px-5 border border-warning rounded py-5">
          <h1 className="p1-3">Organization</h1>
          <h1 className="py-3">$49.99</h1>
          <p className="py-3">Capture ideas and find them quickly</p>
          <div>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Sync unlimited devices</p>
            </span>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">10 GB monthly uploads</p>
            </span>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Customize Home dashboard and access extra widgets</p>
            </span>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Connect primary Google Calendar account</p>
            </span>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">200 MB max. note size</p>
            </span>
            <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
              <p className="m-0 ms-3">Add due dates, reminders, and notifications to your tasks</p>
            </span>
          </div>
          <button type="button" className="btn btn-outline-warning mt-3">Get Started</button>
        </div>
      </div>
    </div>



    <div id="myCarousel1" className="mobile_view row g-0 mt-5 d-lg-none d-block carousel slide" data-ride="carousel">


      <div className="carousel-inner w-100" role="listbox">
        <div className="carousel-item active">
          <div className="px-5 py-5 card card-body border border-warning">
            <div className="py-5">
              <h1 className="fs-2">Free</h1>
              <h1 className="py-3 fs-1">$0</h1>
              <p className="py-3 fs-5">Capture ideas and find them quickly</p>
              <div>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 fs-5 ms-3">Sync unlimited devices</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 fs-5 ms-3">10 GB monthly uploads</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 fs-5 ms-3">Customize Home dashboard and access extra widgets</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 fs-5 ms-3">Connect primary Google Calendar account</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 fs-5 ms-3">200 MB max. note size</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 fs-5 ms-3">Add due dates, reminders, and notifications to your tasks</p>
                </span>
              </div>
              <button type="button" className="btn btn-outline-warning mt-3">Get Started</button>
            </div>
          </div>
        </div>

         <div className="carousel-item">
          <div className="py-5 px-5 mybg border_background border">
            <div className="py-5">
              <h1 className="text-light p1-3 fs-2">Personal</h1>
              <h1 className="text-warning py-3 fs-1">$11.99</h1>
              <p className="text-light py-3 fs-5">Keep home and family on track</p>
              <div>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 text-light fs-5 ms-3">Sync unlimited devices</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 text-light fs-5 ms-3">10 GB monthly uploads</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 text-light fs-5 ms-3">Customize Home dashboard and access extra widgets</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 text-light fs-5 ms-3">Connect primary Google Calendar account</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 text-light fs-5 ms-3">200 MB max. note size</p>
                </span>
                <span className="d-flex align-items-center py-3"><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_06f32406-7a8f-4946-97ea-7ece2dbee35f.png?v=1672743672"></img>
                  <p className="m-0 text-light fs-5 ms-3">Add due dates, reminders, and notifications to your tasks</p>
                </span>
              </div>
              <button type="button" className="btn btn-primary mt-3 btn_bg='true'">Get Started</button>
            </div>
          </div>
        </div>

         <div className="carousel-item">
          <div className="px-5 py-5 border border-warning">
            <div className="py-5">
              <h1 className="p1-3 fs-2">Organization</h1>
              <h1 className="py-3 fs-1">$49.99</h1>
              <p className="py-3 fs-5">Capture ideas and find them quickly</p>
              <div>
                <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
                  <p className="m-0 ms-3 fs-5">Sync unlimited devices</p>
                </span>
                <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
                  <p className="m-0 ms-3 fs-5">10 GB monthly uploads</p>
                </span>
                <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
                  <p className="m-0 ms-3 fs-5">Customize Home dashboard and access extra widgets</p>
                </span>
                <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
                  <p className="m-0 ms-3 fs-5">Connect primary Google Calendar account</p>
                </span>
                <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
                  <p className="m-0 ms-3 fs-5">200 MB max. note size</p>
                </span>
                <span className="d-flex align-items-center py-3 "><img alt="smdsbb"
                    src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon.png?v=1672740135"></img>
                  <p className="m-0 ms-3 fs-5">Add due dates, reminders, and notifications to your tasks</p>
                </span>
              </div>
              <button type="button" className="btn btn-outline-warning mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="text-center mt-4 d-lg-none d-block">
      <span id="first" data-bs-target="#myCarousel1" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" className="active first bg-dark border-5 border-dark rounded px-1 mx-2 text-center">O</span>
      <span id="second" data-bs-target="#myCarousel1" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2" className="second bg-dark border-5 border-dark rounded px-1 mx-2 text-center">O</span>
      <span id="third" data-bs-target="#myCarousel1" data-bs-slide-to="2" aria-current="true" aria-label="Slide 3" className="third bg-dark border-5 border-dark rounded px-1 mx-2 text-center">O</span>
    </div>

  </section>



  <section className="m-auto container-fluid mt-5 mybg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-9 text-center mt-5 p-5 px-5">
          <h1 className="text-light fs-1 fw-bolder ">Your work, everywhere you are</h1>
          <p className="text-light mt-5">Access your notes from your computer, phone or tablet by synchronising with various
            services, including
            whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal
            app is also available!</p>
          <button className="btn btn-primary border-0 d-flex align-items-center mx-auto my-5  btn_bg='true'"
            type="button">Try Taskey<i className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path 
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></i>
          </button>
        </div>
      </div>
    </div>
  </section>



  <section className="m-auto container mt-5 pb-5">
    <div className="d-flex justify-content-center align-items-center row">
      <div className="col-md-7 text-md-start text-center mt-5 g-0">
        <h1 className="fs-1 fw-bolder">100% your data</h1>
        <p className="mt-4">The app is open source and your notes are saved to an open format, so you'll always have access
          to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access
          them.</p>
        <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
        btn_bg='true'  type="button">Read more<i
            className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path 
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></i>
        </button>
      </div>
      <div className="col-md-5 mt-5 p-0 mt-md-0 g-0">
        <img alt="smdsbb" className="container-fluid p-0 mt-5"
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Element.png?v=1672745835"></img>
      </div>
    </div>
  </section>



  <section className="m-auto container">
    <div className="row text-center mt-5 pt-xxl-5 mb-4">
      <h1 className="col text-dark fs-1 fw-bolder">Our sponsors</h1>
    </div>
    <div className="row g-0 text-center">
      <div className="col-xxl g-0 me-xxl-5 my-5"><img alt="smdsbb" className=""
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group.png?v=1672746614"></img></div>
      <div className="col-xxl g-0 mx-xxl-5 my-5"><img alt="smdsbb" className=""
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/microsoft_1.png?v=1672746614"></img></div>
      <div className="col-xxl g-0 mx-xxl-5 my-5"><img alt="smdsbb" className=""
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Slack_Technologies_Logo_1.png?v=1672746614"></img></div>
      <div className="col-xxl g-0 ms-xxl-5 my-5"><img alt="smdsbb" className=""
          src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_246.png?v=1672746614"></img></div>
    </div>
  </section>



  <div className="container-fluid mybg">
    <section className="m-auto container mt-2 pb-5">
      <div className="d-flex justify-content-center align-items-center row">

        <div className="col-md-5 mt-5 mt-md-0 p-5">
          <img alt="smdsbb" className="container-fluid p-0 mt-5"
            src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Apps.png?v=1672747614"></img>
        </div>

        <div className="col-md-7 text-md-start text-center mt-5 p-5">
          <h1 className="text-light fs-1 fw-bolder">Work with Your Favorite Apps Using whitepace</h1>
          <p className="mt-4 text-light">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with
            Zapier to have all the tools you need for your project success.</p>
          <button className="btn btn-primary border-0 d-flex align-items-center mx-auto ms-md-0 mt-5"
          btn_bg='true'  type="button">Read more<i
              className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path 
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></i>
          </button>
        </div>

      </div>
    </section>
  </div>


  <section className="m-auto container mt-5 pb-5">
    <div className="col text-center mt-5 px-md-5 py-5">
      <h1 className="text-dark fs-1 fw-bolder">What Our Clients Says</h1>
      <div className="row g-0">
        <Slider id="myCarousel" className="w-100 g-0 slide container" {...settings}>
            <div className="myclasss border-0 rounded-0">
              <div className="col">
                <div className="card card-body border border-light rounded-3 mx-2 px-4 pb-5 btn_bg">
                  <div className="text-start">
                    <img alt="smdsbb" className="py-4 mt-2" width="70px"
                      src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_04a6a923-4702-46d5-b115-062360b99537.png?v=1672812684"></img>
                    <p className="text-light border-bottom pb-5">Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.</p>
                  </div>
                  <div className="d-xxl-flex align-items-center justify-content-center text-start">
                    <img alt="smdsbb" className="" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Avater1.png?v=1672812971"></img>
                    <div className="text-start ms-xxl-4">
                      <h5 className="">Oberon Shaw, MCH</h5>
                      <p className="text-light p-0 m-0">Head of Talent Acquisition, North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="myclasss border-0 rounded-0">
              <div className="col">
                <div className="card card-body border border-light rounded-3 mx-2 px-4 pb-5 btn_bg">
                  <div className="text-start">
                    <img alt="smdsbb" className="py-4 mt-2" width="70px"
                      src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_04a6a923-4702-46d5-b115-062360b99537.png?v=1672812684"></img>
                    <p className="text-light border-bottom pb-5">Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.</p>
                  </div>
                  <div className="d-xxl-flex align-items-center justify-content-center text-start">
                    <img alt="smdsbb" className="" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Avater.png?v=1672812971"></img>
                    <div className="text-start ms-xxl-4">
                      <h5 className="">Oberon Shaw, MCH</h5>
                      <p className="text-light p-0 m-0">Head of Talent Acquisition, North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="myclasss border-0 rounded-0">
              <div className="col">
                <div className="card card-body border border-light rounded-3 mx-2 px-4 pb-5 btn_bg">
                  <div className="text-start">
                    <img alt="smdsbb" className="py-4 mt-2" width="70px"
                      src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_04a6a923-4702-46d5-b115-062360b99537.png?v=1672812684"></img>
                    <p className="text-light border-bottom pb-5">Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.</p>
                  </div>
                  <div className="d-xxl-flex align-items-center justify-content-center text-start">
                    <img alt="smdsbb" className="" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Avater2.png?v=1672812971"></img>
                    <div className="text-start ms-xxl-4">
                      <h5 className="">Oberon Shaw, MCH</h5>
                      <p className="text-light p-0 m-0">Head of Talent Acquisition, North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="myclasss border-0 rounded-0">
              <div className="col">
                <div className="card card-body border border-light rounded-3 mx-2 px-4 pb-5 btn_bg">
                  <div className="text-start">
                    <img alt="smdsbb" className="py-4 mt-2" width="70px"
                      src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_04a6a923-4702-46d5-b115-062360b99537.png?v=1672812684"></img>
                    <p className="text-light border-bottom pb-5">Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.</p>
                  </div>
                  <div className="d-xxl-flex align-items-center justify-content-center text-start">
                    <img alt="smdsbb" className="" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Avater1.png?v=1672812971"></img>
                    <div className="text-start ms-xxl-4">
                      <h5 className="">Oberon Shaw, MCH</h5>
                      <p className="text-light p-0 m-0">Head of Talent Acquisition, North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="myclasss border-0 rounded-0">
              <div className="col">
                <div className="card card-body border border-light rounded-3 mx-2 px-4 pb-5 btn_bg">
                  <div className="text-start">
                    <img alt="smdsbb" className="py-4 mt-2" width="70px"
                      src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_04a6a923-4702-46d5-b115-062360b99537.png?v=1672812684"></img>
                    <p className="text-light border-bottom pb-5">Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.</p>
                  </div>
                  <div className="d-xxl-flex align-items-center justify-content-center text-start">
                    <img alt="smdsbb" className="" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Avater.png?v=1672812971"></img>
                    <div className="text-start ms-xxl-4">
                      <h5 className="">Oberon Shaw, MCH</h5>
                      <p className="text-light p-0 m-0">Head of Talent Acquisition, North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="myclasss border-0 rounded-0">
              <div className="col">
                <div className="card card-body border border-light rounded-3 mx-2 px-4 pb-5 btn_bg">
                  <div className="text-start">
                    <img alt="smdsbb" className="py-4 mt-2" width="70px"
                      src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_04a6a923-4702-46d5-b115-062360b99537.png?v=1672812684"></img>
                    <p className="text-light border-bottom pb-5">Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.</p>
                  </div>
                  <div className="d-xxl-flex align-items-center justify-content-center text-start">
                    <img alt="smdsbb" className="" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Avater2.png?v=1672812971"></img>
                    <div className="text-start ms-xxl-4">
                      <h5 className="">Oberon Shaw, MCH</h5>
                      <p className="text-light p-0 m-0">Head of Talent Acquisition, North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>


    </div>
  </section>


  <footer className="container-fluid mybg">
    <div className="m-auto container mt-5 pb-5">
      <div className="d-lg-flex justify-content-center align-items-center row">
        <div className="col-lg-5 text-lg-center mt-5 py-5">
          <h1 className="text-light fs-1 fw-bolder">Try Whitepace today</h1>
          <p className="mt-4 text-light">Get started for free.Add your whole team as your needs grow.</p>
          <button className="btn btn-primary border-0 d-flex align-items-center mx-lg-auto mt-4 btn_bg"
            type="button">Try Taskey free<i className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path 
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></i>
          </button>
          <p className="mt-4 text-light">On a big team? Contact sales</p>
          <div className="d-flex justify-content-lg-around justify-content-start mx-lg-5">
            <div><img alt="smdsbb" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group_ba718c01-b8e9-4a66-bf78-e69965d0adf8.png?v=1672748169"></img></div>
            <div className="mx-4 mx-lg-0"><img alt="smdsbb" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group1.png?v=1672748168"></img></div>
            <div><img alt="smdsbb" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Group2.png?v=1672748169"></img></div>
          </div>
        </div>
      </div>
    </div>


    <div className="container m-auto">
      <div className="row">
        <div
          className="d-lg-flex align-items-start justify-content-center text-center text-sm-start text-light un-list border-bottom border-1 border-primary pb-5 mb-4 p-0 px-3 px-lg-0">
          <div className="col px-lg-5 pt-1">
            <div><img alt="smdsbb" className="mb-3" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Logo.png?v=1672740015"></img>
            </div>
            <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
          </div>
          <div className="col my-5 my-lg-0">
            <h2 className="mb-3 mb-lg-3">Product</h2>
            <ul className="list-unstyled">
              <li>Overview</li>
              <li className="my-3 my-lg-0">Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>
          <div className="col my-5 my-lg-0">
            <h2 className="mb-3 mb-lg-3">Resources</h2>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li className="my-3 my-lg-0">Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className="col my-5 my-lg-0">
            <h2 className="mb-3 mb-lg-3">Company</h2>
            <ul className="list-unstyled">
              <li>About us</li>
              <li className="my-3 my-lg-0">Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
          <div className="col">
            <h1 className="mb-3 mb-lg-3">Try It Today</h1>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button className="btn btn-primary border-0 mx-auto mx-sm-0 d-flex align-items-center mt-4 btn_bg='true'"
              type="button">Try Taskey free<i className="bi bi-arrow-right d-flex align-items-center mt-1 "><svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path 
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></i>
            </button>
          </div>
        </div>
      </div>

      <div className="row pb-4">
        <div className="col-lg-6 mb-4 mb-lg-0 p-0 m-auto">
          <ul className="text-center mb-2 mb-lg-0 d-md-flex align-items-center justify-content-between list-unstyled">
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle text-light" href="#/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                🌐 English
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#/">Punjabi</a></li>
                <li><a className="dropdown-item" href="#/">Hindi</a></li>
                <li><a className="dropdown-item" href="#/">Bhojpuri kaisan ba</a></li>
              </ul>
            </li>

            <li className="text-light pt-3 pt-md-0">Terms & privacy</li>
            <li className="text-light pt-3 pt-md-0">Security</li>
            <li className="text-light pt-3 pt-md-0">Status</li>
            <li className="text-light pt-3 pt-md-0">©2021 Whitepace LLC.</li>
          </ul>
        </div>

        <div
          className="col-lg-6 ms-auto d-md-flex align-items-center justify-content-lg-end justify-content-start text-center">
          <img alt="smdsbb" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Icon_11.png?v=1672773460"></img>
          <img alt="smdsbb" className="mx-4" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Vector2.png?v=1672773176"></img>
          <img alt="smdsbb" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/Linkedin.png?v=1672773460"></img>
        </div>

      </div>
    </div>
  </footer>

  </>
  );
}

export default App;
