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
                  <div className="col-lg-5 col-sm-12 col-md-12 mb-lg-0 my-lg-3 my-sm-3 mb-0 text-center">
                    <img src={Graf1} alt="Round1" className="w-75 h- mx-" />
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-12 text-center mb-0 my-lg-3 mt-sm-0">
                    <img
                      src={Graf2}
                      alt="Round2"
                      className="w-75 h- my-2 my-lg-0"
                    />
                  </div>
                </div>
              </div>
              <div className="mx-0 w-75 mx-lg-5 my-3">
                <div className="row text-center">
                  <div className="col-lg-10 col-sm-12 col-md-12">
                    <div className=" mb-1">
                      <div className="">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
