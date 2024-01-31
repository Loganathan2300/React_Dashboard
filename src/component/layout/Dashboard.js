import React from "react";
import Graf1 from "../../Assest/Round1.jpeg";
import Graf2 from "../../Assest/Round2.jpeg";
function Dashboard() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="">
            <div className="col-lg-8 col-md-12 col-sm-12 w-100">
              <div className="mb-0">
                <div className="row bg-white">
                  <div className="col-lg-5 col-sm-12 col-md-12 mb-0 my-2 text-center">
                    <img src={Graf1} alt="Round1" className="w-75 h-75 mx-" />
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-12 text-center mb-0 my-3">
                    <img src={Graf2} alt="Round2" className="w-75 h-75 my-2 my-lg-0"/>
                  </div>
                </div>
              </div>
              {/* <div className='card'>
          <div className="row my-4">
            <div className="col-lg-8 col-sm-12 col-md-12">
            <h3 className="mx-2 my-2 ">FTS</h3>
                <table className="borde mx-lg-5 mb-lg-2 mx-2">
                      <thead>
                        <tr>
                          <th>ENAME</th>
                          <th>DESINGNATION</th>
                          <th>SAL</th>
                          <th>COMM</th>
                          <th>Address</th>
                          <th>City</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tamil</td>
                          <td>Manager</td>
                          <td>4.5L</td>
                          <td>25,000</td>
                          <td>Ak</td>
                          <td>Sankari</td>
                        </tr>
                        <tr>
                        <td>Tamil</td>
                          <td>Manager</td>
                          <td>4.5L</td>
                          <td>25,000</td>
                          <td>Ak</td>
                          <td>Sankari</td>
                        </tr>
                        <tr>
                        <td>Tamil</td>
                          <td>Manager</td>
                          <td>4.5L</td>
                          <td>25,000</td>
                          <td>Ak</td>
                          <td>Sankari</td>
                        </tr>
                        <tr>
                        <td>Tamil</td>
                          <td>Manager</td>
                          <td>4.5L</td>
                          <td>25,000</td>
                          <td>Ak</td>
                          <td>Sankari</td>
                        </tr>
                        <tr>
                        <td>Tamil</td>
                          <td>Manager</td>
                          <td>4.5L</td>
                          <td>25,000</td>
                          <td>Ak</td>
                          <td>Sankari</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                        </tr>
                      </tfoot>
                 </table>
            </div>
          </div>
          </div> */}
            <div className="mx- my- mb-1">
              <div className="card"> 
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    {/* <th scope="col">Phone</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    {/* <td>9876543210</td> */}
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    {/* <td>9876543211</td> */}
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Galaxy</td>
                    <td>@twitter</td>
                    {/* <td>9876543212</td> */}
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>aarav</td>
                    <td>Galaxy</td>
                    <td>@Krish</td>
                    {/* <td>9876543213</td> */}
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Shanth</td>
                    <td>Galaxy</td>
                    <td>@Krithik</td>
                    {/* <td>9876543214</td> */}
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Gokul</td>
                    <td>Galaxy</td>
                    <td>@Krishnan</td>
                    {/* <td>9876543216</td> */}
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h4>Content</h4> */}
        {/* <img src={Round} alt="" /> */}
        {/* <img src={Graf} alt="FTS Logo" width="60" height="40"></img> */}
        {/* <img src={Round} alt="Round" srcset="" /> */}
      </div>
    </div>
  );
}

export default Dashboard;
