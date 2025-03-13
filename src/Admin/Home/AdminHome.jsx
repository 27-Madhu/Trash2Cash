  import React from "react";
  import Card from 'react-bootstrap/Card';
  const AdminHome = () => {
    return (
      <div className="">
        <h2 className="text-center" style={{backgroundColor:'orange',padding:'7px 0px'}}>Welcome to Admin Dashboard</h2>
        <div className="row ms-5 mt-5">
          <Card style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title style={{color:'orange'}}><strong>Total Registered Users</strong></Card.Title>
              <Card.Text>
                600 User Register
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  className ="ms-2"style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title style={{color:'orange'}}> <strong>Total  Scrap Rate Entries</strong></Card.Title>
              <Card.Text>
              3 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className ="ms-2" style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title style={{color:'orange'}}><strong>Active Orders / Transactions</strong></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="row ms-5 mt-5">
          <Card style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title style={{color:'orange'}}><strong>Total Paytm For Scrap</strong></Card.Title>
              <Card.Text>
                600 User Register
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  className ="ms-2"style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title style={{color:'orange'}}> <strong>Total  Collect Scrap</strong></Card.Title>
              <Card.Text>
              3 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className ="ms-2" style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title style={{color:'orange'}}><strong>Active Orders / Transactions</strong></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      

      </div>
    );
  };

  export default AdminHome;
