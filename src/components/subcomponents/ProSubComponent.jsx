import { React } from "react";
const ProSubComponent = ({data}) => {
  return (
    <>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <div className="col">
          <div className="card h-100">
            <img
              src={data.proTeamMemberPic}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <table className="table table-hover">
                <thead></thead>
                <tbody>
                  <tr>
                    <th scope="row">Phone No</th>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email Id</th>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Dl</th>
                    <td>{data.dl}</td>
                  </tr>
                  <tr>
                    <th scope="row"> Year of Experience</th>
                    <td>{data.yearOfExperience}</td>
                  </tr>
                  <tr>
                    <th scope="row"> Twitter Handle</th>
                    <td>{data.twitterHandle}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProSubComponent;
