import React from 'react'
const Footer = () => {
    return (
        <div>
           <div className="footer">
  
          <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor: "#FEF9EF"}}
          >
    
            <section
             class="d-flex justify-content-between p-4 text-white"
             style={{ backgroundColor: "#21D192" }}
             >
     
        <div className="me-5">
            <span>Get connected with us on social networks:</span>
        </div>
        
        <div>
            <a href="#!" className="text-white me-4">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
            <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
            <i class="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white me-4">
            <i class="fab fa-instagram"></i>
            </a>
        </div>
        
        </section>
        
    
    <section className="">
      <div class="container text-center text-md-start mt-5">
        
        <div class="row mt-3">
          
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
            <p>
              <a href="#!" class="text-dark">Groceries</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Vegetables</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Offers</a>
            </p>
            <p>
              <a href="#!" class="text-dark">New Products</a>
            </p>
          </div>
          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
            <p>
              <a href="#!" class="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Products Page</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Offer page</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Vegetables page</a>
            </p>
          </div>
          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff",height: "2px" }}
                />
            <p><i class="fas fa-home mr-3"></i> Dhaka, 1203, Bangladesh</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
   
    <div
         class="text-center p-3"
         style={{ backgroundColor: "#E5DCC3" }}
         >
      © 2020 Copyright:
     
    </div>
   
  </footer>
  
</div> 
        </div>
    )
}

export default Footer
