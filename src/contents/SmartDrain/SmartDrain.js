import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Wavify from 'react-wavify'; // Import the Wavify library
import './SmartDrain.css';

const SmartDrain = () => {
  // State to control the water level (initially 60%)
  const [waterLevel, setWaterLevel] = useState(60);

  // Function to increase water level (up to a maximum of 100%)
  const increaseWaterLevel = () => {
    if (waterLevel < 100) {
      setWaterLevel(waterLevel + 10); // Increase by 10%
    }
  };

  // Function to decrease water level (down to a minimum of 0%)
  const decreaseWaterLevel = () => {
    if (waterLevel > 0) {
      setWaterLevel(waterLevel - 10); // Decrease by 10%
    }
  };

  // Determine the color of "d" based on the water level
  const textColor = waterLevel < 30 ? 'black' : 'white';

  return (
    <Container fluid className="smart-drain-system">
      {/* Title Section */}
      <Row>
        <Col>
          <h1 className="text-center my-4">SMART DRAIN WATER SYSTEM</h1>
        </Col>
      </Row>

      {/* Main Section: Create a Parent Card to wrap Water Tank and Sensors */}
      <Card className="parent-card">
        <Row>
          {/* Water Tank Diagram */}
          <Col md={{ span: 5, offset: 1 }} className="d-flex justify-content-center"> {/* Center the tank */}
            <Card.Body className="tank-container">
              <div className="water-tank-container"> {/* New container for water tank */}
                <div className="water-tank">
                  <Wavify
                    fill="#00aaff"
                    paused={false}
                    options={{
                      height: 2.5,
                      amplitude: 12.5,
                      speed: 0.20,
                      points: 3,
                    }}
                    style={{ 
                    height: `${Math.max(waterLevel, 14.1)}%`, 
                    position: 'absolute',
                    bottom: 0,
                    width: '100.2%' }} // Adjust wave height based on water level Remove 15 on height to be able to remove all the water on decrease
                  />

                  {/* 'd' inside the water */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: `${waterLevel / 7.5}%`, // Adjust the position dynamically based on water level
                      left: '7.5px',
                      color: textColor, // Change text color based on water level
                      fontSize: '20px',
                      zIndex: 1,
                    }}
                  >
                    d
                  </div>

                  {/* Vertical measurement with arrows -- 450 -- */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-50px', // Move left to position the arrow and measurement
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: 'black',
                    }}
                  >
                    {/* Custom upward arrow */}
                    <div
                      style={{
                        width: '2px',
                        height: '40px', // Length of the arrow line (can be increased or decreased)
                        backgroundColor: 'black',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          content: '',
                          position: 'absolute',
                          top: '-10px', // Position of the arrowhead
                          left: '-5px',
                          borderLeft: '5px solid transparent',
                          borderRight: '5px solid transparent',
                          borderBottom: '10px solid black',
                        }}
                      ></div>
                    </div>

                    <span>450</span>

                    {/* Custom downward arrow */}
                    <div
                      style={{
                        width: '2px',
                        height: '40px', // Length of the arrow line (can be increased or decreased)
                        backgroundColor: 'black',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          content: '',
                          position: 'absolute',
                          bottom: '-10px', // Position of the arrowhead
                          left: '-5px',
                          borderLeft: '5px solid transparent',
                          borderRight: '5px solid transparent',
                          borderTop: '10px solid black',
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Horizontal measurement at the bottom -- 750 --*/}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-55px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      color: 'black',
                    }}
                  >
                    {/* Left arrow */}
                    <div
                      style={{
                        width: '90px', // Length of the arrow line
                        height: '2px',
                        backgroundColor: 'black',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          content: '',
                          position: 'absolute',
                          left: '-10px',
                          top: '-5px',
                          borderTop: '5px solid transparent',
                          borderBottom: '5px solid transparent',
                          borderRight: '10px solid black',
                        }}
                      ></div>
                    </div>

                    <span style={{ margin: '0 5px' }}>750</span>

                    {/* Right arrow */}
                    <div
                      style={{
                        width: '90px', // Length of the arrow line
                        height: '2px',
                        backgroundColor: 'black',
                        position: 'relative',
                      }}
                    >
                        <div
                          style={{
                            content: '',
                            position: 'absolute',
                            right: '-10px',
                            top: '-5px',
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            borderLeft: '10px solid black',
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Bottom internal width measurement -- 600 --*/}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-22.5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                      }}
                    >
                        {/* Left arrow */}
                        <div
                          style={{
                            width: '60px', // Length of the arrow line
                            height: '2px',
                            backgroundColor: 'black',
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              content: '',
                              position: 'absolute',
                              left: '-10px',
                              top: '-5px',
                              borderTop: '5px solid transparent',
                              borderBottom: '5px solid transparent',
                              borderRight: '10px solid black',
                            }}
                          ></div>
                        </div>

                        <span style={{ margin: '0 5px' }}>600</span>

                        {/* Right arrow */}
                        <div
                          style={{
                            width: '60px', // Length of the arrow line
                            height: '2px',
                            backgroundColor: 'black',
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              content: '',
                              position: 'absolute',
                              right: '-10px',
                              top: '-5px',
                              borderTop: '5px solid transparent',
                              borderBottom: '5px solid transparent',
                              borderLeft: '10px solid black',
                            }}
                          ></div>
                        </div>
                      </div>
                  </div>

                    {/* Floating div for visual effect (top) */}
                <div className="floating-div-top">
                  <div className="extra-border-top"></div> {/* Extra border at the top with vertical lines */}
                </div>

                  {/* Floating div for visual effect */}
                  <div className="floating-div">
                    <div className="extra-border"></div> {/* Example border extension */}
                  </div>
              </div> {/* Close water-tank-container */}
            </Card.Body>
             
            <br></br>

             {/* Buttons moved below the tank */}
           <div className="buttonIncreaseDecrease">
             <Button variant="primary" onClick={increaseWaterLevel} className="mx-2">
               Increase Water Level
             </Button>
             <Button variant="danger" onClick={decreaseWaterLevel} className="mx-2">
               Decrease Water Level
             </Button>
           </div>
          </Col>

          {/* Sensor Info */}
          <Col md={6}>
            {/* Sensor 01 */}
            <Card className="sensor-card mb-4">
              <Card.Body>
                <div className="sensor-header">
                  <h5 className="sensor-title">SENSOR 01</h5>
                </div>
                <div className="sensor-info">
                  <div className="sensor-labels">
                    <p><strong>SPEED :</strong></p>
                    <p><strong>FLOW RATE :</strong></p>
                    <p><strong>WATER DEPTH :</strong></p>
                  </div>
                </div>
                <p className="battery-label">BATTERY LEVEL :</p>
                <div className="sensor-values">
                  <p><strong>DATE :</strong></p>
                  <p><strong>TIME :</strong></p>
                </div>
              </Card.Body>
            </Card>

            {/* Sensor 02 */}
            <Card className="sensor-card">
              <Card.Body>
                <div className="sensor-header">
                  <h5 className="sensor-title">SENSOR 02</h5>
                </div>
                <div className="sensor-info">
                  <div className="sensor-labels">
                    <p><strong>SPEED :</strong></p>
                    <p><strong>FLOW RATE :</strong></p>
                    <p><strong>WATER DEPTH :</strong></p>
                  </div>
                </div>
                <p className="battery-label">BATTERY LEVEL :</p>
                <div className="sensor-values">
                  <p><strong>DATE :</strong></p>
                  <p><strong>TIME :</strong></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Graph Section */}
      <Row className="mt-5">
        <Col>
          <h4 className="text-center">GRAPH 01 - DAY CHART</h4>
          <div className="graph-placeholder" style={{ height: '200px', border: '1px solid black' }}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default SmartDrain;
