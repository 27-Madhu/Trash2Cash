import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./sellform.module.css";
import Img from "../all_image/sell_scarep.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const SellForm = () => {



  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }


  // Pickup Details States
  const [pickupName, setPickupName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [selectedCity, setSelectedCity] = useState("Patna");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  //for next button
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleNext = () => setShowSchedule(true);
  const handlePrevious = () => setShowSchedule(false);

  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState(null);

  // plastic Category checkboxes
  const [plasticBottleChecked, setPlasticBottleChecked] = useState(false);
  const [plasticBottleQty, setPlasticBottleQty] = useState("");

  const [mixedPlasticChecked, setMixedPlasticChecked] = useState(false);
  const [mixedPlasticQty, setMixedPlasticQty] = useState("");

  const [hdPlasticChecked, setHdPlasticChecked] = useState(false);
  const [hdPlasticQty, setHdPlasticQty] = useState("");

  // Metal subcategory states
  const [metalAluminumChecked, setMetalAluminumChecked] = useState(false);
  const [metalAluminumQty, setMetalAluminumQty] = useState("");

  const [copperChecked, setCopperChecked] = useState(false);
  const [copperQty, setCopperQty] = useState("");

  const [steelChecked, setSteelChecked] = useState(false);
  const [steelQty, setSteelQty] = useState("");

  // For Glass
  const [glassBeerBottleChecked, setGlassBeerBottleChecked] = useState(false);
  const [glassBeerBottleQty, setGlassBeerBottleQty] = useState("");
  const [mixGlassChecked, setMixGlassChecked] = useState(false);
  const [mixGlassQty, setMixGlassQty] = useState("");

  // For Paper
  const [officePaperChecked, setOfficePaperChecked] = useState(false);
  const [officePaperQty, setOfficePaperQty] = useState("");
  const [mixPaperChecked, setMixPaperChecked] = useState(false);
  const [mixPaperQty, setMixPaperQty] = useState("");
  const [newspaperChecked, setNewspaperChecked] = useState(false);
  const [newspaperQty, setNewspaperQty] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pickupDetails = {
      name: pickupName,
      contact: contactNumber,
      address: fullAddress,
      city: selectedCity,
      pincode: pincode,
      landmark: landmark || "",
    };

    const formData = new FormData();
    formData.append("pickupDetails", JSON.stringify(pickupDetails));

    formData.append("itemName", itemName);
    formData.append("itemDescription", itemDescription);
    if (itemImage) {
      formData.append("itemImage", itemImage);
    }

    // Create structured category data
    const categoryData = {};

    if (plasticBottleChecked) {
      categoryData.Plastic = categoryData.Plastic || {};
      categoryData.Plastic["Plastic Bottle"] = plasticBottleQty;
    }

    if (mixedPlasticChecked) {
      categoryData.Plastic = categoryData.Plastic || {};
      categoryData.Plastic["Mixed Plastic"] = mixedPlasticQty;
    }

    if (hdPlasticChecked) {
      categoryData.Plastic = categoryData.Plastic || {};
      categoryData.Plastic["High-Density Plastic"] = hdPlasticQty;
    }

    // Metal
    if (metalAluminumChecked) {
      categoryData.Metal = categoryData.Metal || {};
      categoryData.Metal["Metal Aluminum"] = metalAluminumQty;
    }

    if (copperChecked) {
      categoryData.Metal = categoryData.Metal || {};
      categoryData.Metal["Copper"] = copperQty;
    }

    if (steelChecked) {
      categoryData.Metal = categoryData.Metal || {};
      categoryData.Metal["Steel"] = steelQty;
    }
    if (glassBeerBottleChecked) {
      categoryData.Glass = categoryData.Glass || {};
      categoryData.Glass["Beer Bottle Glass"] = glassBeerBottleQty;
    }
    if (mixGlassChecked) {
      categoryData.Glass = categoryData.Glass || {};
      categoryData.Glass["Mix Glass"] = mixGlassQty;
    }

    if (officePaperChecked) {
      categoryData.Paper = categoryData.Paper || {};
      categoryData.Paper["Office Paper"] = officePaperQty;
    }
    if (mixPaperChecked) {
      categoryData.Paper = categoryData.Paper || {};
      categoryData.Paper["Mix Paper"] = mixPaperQty;
    }
    if (newspaperChecked) {
      categoryData.Paper = categoryData.Paper || {};
      categoryData.Paper["Newspaper"] = newspaperQty;
    }

    formData.append("categoryData", JSON.stringify(categoryData));

    try {
      const res = await axios.post(
        "http://localhost:3001/api/sell-scrap",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        alert("Scrap item submitted successfully!");
        // Reset form
        setItemName("");
        setItemDescription("");
        setItemImage(null);
        setPlasticBottleChecked(false);
        setMixedPlasticChecked(false);
        setHdPlasticChecked(false);
        setPlasticBottleQty("");
        setMixedPlasticQty("");
        setHdPlasticQty("");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting scrap.");
    }
  };

  const toggleSubcategory = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className=" ${style.main}" style={{ marginTop: "7%" }}>
      {/* Contact Us Header */}
      <h3 className="text-success text-center ">
        "Sell Your Scrap – It's Simple and Easy!"
      </h3>
      <hr />
      <div
        className={`row align-items-center justify-content-center ${styles.contactContainer}`}
      >
        <div
          className={`col-lg-5 col-md-12 text-center ${styles.imageContainer}`}
        >
          <img src={Img} alt="Location" className="img-fluid" />
        </div>
        <div className={`col-lg-7 col-md-12 mt-5 ${styles.formContainer}`}>
          <div className={` mb-5 card ${styles.card}`}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {!showSchedule ? (
                <div>
                  <h2 className="text-center">Sell Scrap</h2>
                  <div className="mb-3">
                    <label>Item Name:</label>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Description:</label>
                    <textarea
                      value={itemDescription}
                      className="form-control"
                      onChange={(e) => setItemDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label>Item Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setItemImage(e.target.files[0])}
                    />
                  </div>

                  <hr />
                  <div className="mb-3">
                    <label className="form-label">Item Category</label>
                    <div className="d-flex">
                      {/* Plastic Categories */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="plastic"
                          onChange={() => toggleSubcategory("plastic")}
                        />
                        <label className="form-check-label" htmlFor="plastic">
                          Plastic
                        </label>
                        {selectedCategories.plastic && (
                          <div className="ms-4">
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={plasticBottleChecked}
                                onChange={(e) =>
                                  setPlasticBottleChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label me-2"
                                htmlFor="plasticBottle"
                              >
                                Plastic Bottle
                              </label>
                              {plasticBottleChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={plasticBottleQty}
                                  onChange={(e) =>
                                    setPlasticBottleQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={mixedPlasticChecked}
                                onChange={(e) =>
                                  setMixedPlasticChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Mixeplastic"
                              >
                                Mixed Plastic
                              </label>
                              {mixedPlasticChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={mixedPlasticQty}
                                  onChange={(e) =>
                                    setMixedPlasticQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={hdPlasticChecked}
                                onChange={(e) =>
                                  setHdPlasticChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="High-Density Plastic"
                              >
                                High-Density Plastic
                              </label>
                              {hdPlasticChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={hdPlasticQty}
                                  onChange={(e) =>
                                    setHdPlasticQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Metal Categories */}
                      <div className="form-check ms-5">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="Metal"
                          onChange={() => toggleSubcategory("metal")}
                        />
                        <label className="form-check-label" htmlFor="Metal">
                          Metal
                        </label>

                        {selectedCategories.metal && (
                          <div className="ms-4">
                            {/* Metal Aluminum */}
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={metalAluminumChecked}
                                onChange={(e) =>
                                  setMetalAluminumChecked(e.target.checked)
                                }
                              />
                              <label className="form-check-label me-2">
                                Metal Aluminum
                              </label>
                              {metalAluminumChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={metalAluminumQty}
                                  onChange={(e) =>
                                    setMetalAluminumQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            {/* Copper */}
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={copperChecked}
                                onChange={(e) =>
                                  setCopperChecked(e.target.checked)
                                }
                              />
                              <label className="form-check-label me-2">
                                Copper
                              </label>
                              {copperChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={copperQty}
                                  onChange={(e) => setCopperQty(e.target.value)}
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            {/* Steel */}
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={steelChecked}
                                onChange={(e) =>
                                  setSteelChecked(e.target.checked)
                                }
                              />
                              <label className="form-check-label me-2">
                                Steel
                              </label>
                              {steelChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={steelQty}
                                  onChange={(e) => setSteelQty(e.target.value)}
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex">
                      {/* Glass Categories */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="glass"
                          onChange={() => toggleSubcategory("glass")}
                        />
                        <label className="form-check-label" htmlFor="glass">
                          Glass
                        </label>
                        {selectedCategories.glass && (
                          <div className="ms-4">
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={glassBeerBottleChecked}
                                onChange={(e) =>
                                  setGlassBeerBottleChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label me-2"
                                htmlFor="glassBeerBottle"
                              >
                                Beer Bottle Glass
                              </label>
                              {glassBeerBottleChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={glassBeerBottleQty}
                                  onChange={(e) =>
                                    setGlassBeerBottleQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={mixGlassChecked}
                                onChange={(e) =>
                                  setMixGlassChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="mixGlass"
                              >
                                Mix Glass
                              </label>
                              {mixGlassChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={mixGlassQty}
                                  onChange={(e) =>
                                    setMixGlassQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Paper Categories */}
                      <div className="form-check ms-5">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="paper"
                          onChange={() => toggleSubcategory("paper")}
                        />
                        <label className="form-check-label" htmlFor="paper">
                          Paper
                        </label>
                        {selectedCategories.paper && (
                          <div className="ms-4">
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={officePaperChecked}
                                onChange={(e) =>
                                  setOfficePaperChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label me-2"
                                htmlFor="officePaper"
                              >
                                Office Paper
                              </label>
                              {officePaperChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={officePaperQty}
                                  onChange={(e) =>
                                    setOfficePaperQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={mixPaperChecked}
                                onChange={(e) =>
                                  setMixPaperChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="mixPaper"
                              >
                                Mix Paper
                              </label>
                              {mixPaperChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={mixPaperQty}
                                  onChange={(e) =>
                                    setMixPaperQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>

                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={newspaperChecked}
                                onChange={(e) =>
                                  setNewspaperChecked(e.target.checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newspaper"
                              >
                                Newspaper
                              </label>
                              {newspaperChecked && (
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={newspaperQty}
                                  onChange={(e) =>
                                    setNewspaperQty(e.target.value)
                                  }
                                  className="form-control ms-2"
                                  style={{ width: "170px" }}
                                  required
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex justify-content-end mt-3">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                // Schedule Your Pickup

                <div>
                  <h3 className="text-success text-center">
                    Schedule Your Pickup
                  </h3>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={pickupName}
                      onChange={(e) => setPickupName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter your contact number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Full Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Enter full address (House No, Street, Locality)"
                      value={fullAddress}
                      onChange={(e) => setFullAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <div className="mb-3">
                      <label className="form-label">Select City</label>
                      <select
                        className="form-select"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value="Patna">Patna</option>
                        <option value="siwan">Siwan</option>
                        <option value="chhapra">Chhapra</option>
                        <option value="muz">Muzaffarpur</option>
                      </select>
                    </div>
                    <div className="mb-3 ms-5">
                      <label className="form-label">Pincode</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter your pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Nearest Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E.g., Near XYZ Mall, Opposite ABC Park"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning me-2"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                  <div className="picup mt-3 ">
                    <button
                      type="submit"
                      style={{
                        width: "250px",
                        marginLeft: "35%",
                        fontSize: "20px",
                      }}
                      className="btn btn-success"
                    >
                      {" "}
                      Pickup Request
                    </button>
                  </div>
                </div>
              )}

             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellForm;
SellForm.jsx;
