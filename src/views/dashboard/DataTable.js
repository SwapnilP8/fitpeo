import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

function DataTable() {
  const styles = {
    image: {
      height: '50px',
      width: '50px',
      borderRadius: '5px',
    },
  }
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <td scope="col">
            <p>Product Name</p>
          </td>
          <td scope="col" className="cent_text">
            Stock
          </td>
          <td scope="col" className="cent_text">
            Price
          </td>
          <td scope="col" className="cent_text">
            Total Sales
          </td>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div style={{ width: '18%' }}>
                <img src={require('../../images/moon.jpg')} alt="" style={styles.image} />
              </div>
              <div className="ms-3">
                <p className="fw-bold mb-1">Abstract 3D</p>
                <p className="text-muted mb-0 lor_t">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
              </div>
            </div>
          </td>
          <td className="cent_text">
            <p className="text-muted mb-0 tab_text">32 in stock</p>
          </td>

          <td className="cent_text tab_text">
            <b>$ 45.99</b>
          </td>
          <td className="cent_text">
            <p className="text-muted mb-0 tab_text">20</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div style={{ width: '18%' }}>
                <img src={require('../../images/moon.jpg')} alt="" style={styles.image} />
              </div>
              <div className="ms-3">
                <p className="fw-bold mb-1">Abstract 3D</p>
                <p className="text-muted mb-0 lor_t">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
              </div>
            </div>
          </td>
          <td className="cent_text">
            <p className="text-muted mb-0 tab_text">32 in stock</p>
          </td>

          <td className="cent_text tab_text">
            <b>$ 45.99</b>
          </td>
          <td className="cent_text">
            <p className="text-muted mb-0 tab_text">20</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div style={{ width: '18%' }}>
                <img src={require('../../images/moon.jpg')} alt="" style={styles.image} />
              </div>
              <div className="ms-3">
                <p className="fw-bold mb-1">Abstract 3D</p>
                <p className="text-muted mb-0 lor_t">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
              </div>
            </div>
          </td>
          <td className="cent_text">
            <p className="text-muted mb-0 tab_text">32 in stock</p>
          </td>

          <td className="cent_text tab_text">
            <b>$ 45.99</b>
          </td>
          <td className="cent_text">
            <p className="text-muted mb-0 tab_text">20</p>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  )
}
export default DataTable
