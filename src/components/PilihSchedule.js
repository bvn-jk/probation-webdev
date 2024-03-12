import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext.js";
import NavbarP from "./Navbar";

const apiURL = "http://localhost:3005/selected-schedule";

function PilihSchedule() {
  const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  const waktu = [
    "07:00 - 09.00",
    "08:00 - 10.00",
    "09:00 - 11.00",
    "10:00 - 12.00",
    "11:00 - 13.00",
    "12:00 - 14.00",
    "13:00 - 15.00",
    "14:00 - 16.00",
    "15:00 - 17.00",
  ];

  const { user } = useContext(AuthContext);
  const { username } = user;

  const [selectedWaktu, setSelectedWaktu] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const loadData = () => {
    axios
    .get(apiURL)
      .then((response) => {
        const data = response.data.length > 0 ? response.data : generateDefaultData();
        setSelectedWaktu(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Gagal memuat data:", error);
      });
  };
  
  const generateDefaultData = () => {
    const defaultData = [];
    hari.forEach((day) => {
      waktu.forEach((time) => {
        defaultData.push({ hari: day, waktu: time });
      });
    });
    console.log(defaultData);
    return defaultData;
  };

  useEffect(() => {
    loadData();
  }, []);

  const toggleCheckbox = (day, time) => {
    const updatedSelectedWaktu = selectedWaktu.some(
      ({ hari: selectedHari, waktu: selectedWaktu }) =>
        selectedHari === day && selectedWaktu === time
    )
      ? selectedWaktu.filter(
          ({ hari: selectedHari, waktu: selectedWaktu }) =>
            !(selectedHari === day && selectedWaktu === time)
        )
      : [...selectedWaktu, { hari: day, waktu: time }];
    setSelectedWaktu(updatedSelectedWaktu);
  };

  const handleSave = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin untuk menyimpan?");
    const scheduleArray = {
      id: 0,
      username: username,
      jadwal: hari.map((day) => ({
        [day]: waktu.reduce((acc, cur) => {
          acc[cur] = selectedWaktu.some(
            ({ hari: selectedDay, waktu: selectedTime }) =>
              selectedDay === day && selectedTime === cur
          )
            ? 1
            : 0;
          return acc;
        }, {}),
      })),
    };

    if (isConfirmed) {
      setIsSaved(true);

      axios
        .put(apiURL + "/" + scheduleArray.id, scheduleArray, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Response:", response);
          console.log("Data berhasil diupdate di server.");
          setIsSaved(true);
        })
        .catch((error) => {
          console.error("Gagal menyimpan data ke server:", error);
        });
    }
  };

  const handleEdit = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin untuk mengedit?");
    if (isConfirmed) {
      setIsSaved(false);
    }
  };
  

  return (
    <>
      <NavbarP />
      <div
        className="container"
        style={{
          padding: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Pilih Waktu yang Kosong</h1>
        <div className="table-wrapper">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Waktu</th>
                  {hari.map((day, index) => (
                    <th key={index}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {waktu.map((jam, index) => (
                  <tr key={index}>
                    <td>{jam}</td>
                    {hari.map((day, index) => (
                      <td key={index}>
                        <span className="custom-checkbox">
                          <input
                            type="checkbox"
                            id={`checkbox${index}${jam}`}
                            checked={selectedWaktu.some(
                              ({ hari: selectedHari, waktu: selectedWaktu }) =>
                                selectedHari === day && selectedWaktu === jam
                            )}
                            onChange={() => toggleCheckbox(day, jam)}
                          />
                          <label htmlFor={`checkbox${index}${jam}`}></label>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="button-wrapper">
            {!isSaved && (
              <button className="btn btn-save" onClick={handleSave}>
                Save
              </button>
            )}
            {isSaved && (
              <button className="btn btn-edit" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PilihSchedule;
