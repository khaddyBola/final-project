
function App() {
  return (
    <div className="heading">
        <h1 className="header">Ecosystem</h1>
        <h2 className="header-2">Payment <span>Ecosystem</span></h2>
        <p className="header-text"> 
        Officia dignissimos incidunt nisi ipsam minima dolore. <br />
        Animi facilis exercitationem quam, perspiciatis illum,  <br />
        ipsum dolorem corrupti nisi necessitatibus impedit ea consequatur hic!Lorem ipsum dolor sit,  <br />
        amet consectetur adipisicing elit. Officia dignissimos incidunt nisi ipsam minima dolore. Animi facilis exercitationem quam, perspiciatis illum, <br />
        </p>

    <div className="container grid grid--3-cols">
        <div className="peru">
          <img src="/images/E-wallet.png" alt="" className="p-Img"/> 
          <h1 className="logo-name">E-Wallet</h1>
          <p>Lorem ipsum dolor sit, amet consectetur<br />
          Lorem ipsum dolor sit, amet consectetur </p>
      </div>

        <div className="peru para">
          <img src="/images/payment.jpg" alt="" className="p-Img"/> 
          <h1 className="logo-name">Payment Gateway</h1>
          <p>Lorem ipsum dolor sit, amet consectetur<br />
          Lorem ipsum dolor sit, amet consectetur 
          </p>
        </div>

        <div className="peru">
          <img src="/images/point of sales.png" alt="POS" className="p-Img"/> 
          <h1 className="logo-name">Point of Sales</h1>
          <p>Lorem ipsum dolor sit, amet consectetur <br />
          Lorem ipsum dolor sit, amet consectetur
          </p>
        </div>
      </div>

      <section className="sectionTestimonials" id="Testimonial">
            <div className="container">
                <h2 className="subHeading">Benefits</h2>
                <h1 className="headingSecondary"> <span>Benefits</span> Using E-Wallet <br /> Paylite For You</h1>
                <p className="text">Lorem ipsum dolor sit, amet consectetur amet consectetur. <br />
                  Lorem ipsum dolor sit, amet consectetur.
                  Lorem ipsum dolor sit, <br /> amet consectetur.
                  Lorem ipsum dolor sit,  amet consectetur. 
                </p>
                <div className="testimonials">
                    <figure className="testimonial">
                        <img src="/images/payBill.jpeg" alt="" className="testimonialImg" />
                        <h1 className="testimonialName">Pay Bill</h1>
                        <blockquote className="testimonialText">Lorem ipsum dolor sit <br /> Lorem ipsum dolor sit </blockquote>
                        {/* <cite class="testimonialName">Ben Hadley</cite> */}
                    </figure>

                    <figure className="testimonial">
                        <img src="images/membership.jpeg" alt="" className="testimonialImg" />
                        <h1 className="testimonialName">Membership</h1>
                        <p class="testimonialText">Lorem ipsum dolor sit<br />Lorem ipsum dolor sit </p>
                        {/* <cite class="testimonialName">Dave Bryson</cite> */}
                    </figure>

                    <figure className="testimonial">
                        <img src="images/withdraw.png" alt="" className="testimonialImg" />
                        <h1 className="testimonialName">Withdraw</h1>
                        <blockquote className="testimonialText">Lorem ipsum dolor sit <br /> Lorem ipsum dolor sit</blockquote>
                        {/* <cite class="testimonialName">Hannah Smith</cite> */}
                    </figure>

                    <figure className="testimonial">
                        <img src="images/img-invest.png" alt="" className="testimonialImg" />
                        <h1 className="testimonialName">Investment</h1>
                        <blockquote className="testimonialText">Lorem ipsum dolor sit <br /> Lorem ipsum dolor sit</blockquote>
                        {/* <cite class="testimonialName">Steve Miller</cite> */}
                    </figure>
                </div>
            </div>

            <div className="gallery">
                <figure className="galleryItems">
                    <img src="images/hero-img-removebg-.jpg" alt=""  className="hero-img"/>
                </figure>
              </div>  
         </section>   
       
      
    </div>
  )
}

export default App;