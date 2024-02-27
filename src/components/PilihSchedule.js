import React, { useState } from 'react';
import '../assets/style/pilih-schedule.css';

function App() {
    const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
    const waktu = ["07:00 - 09.00", "08:00 - 10.00", "09:00 - 11.00", "10:00 - 12.00", "11:00 - 13.00", "12:00 - 14.00", "13:00 - 15.00", "14:00 - 16.00", "15:00 - 17.00"];
     
    const [selectedWaktu, setSelectedWaktu] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleCheckbox = (day, time) => {
        if (!isSaved) { 
            const isExist = selectedWaktu.some(({ hari, waktu }) => hari === day && waktu === time);
            if (isExist) {
                setSelectedWaktu(selectedWaktu.filter(item => !(item.hari === day && item.waktu === time)));
            } else {
                setSelectedWaktu([...selectedWaktu, { hari: day, waktu: time }]);
            }
        }
    };

    const handleSave = () => {
        // Tampilkan alert untuk konfirmasi
        const isConfirmed = window.confirm("Apakah Anda yakin untuk menyimpan?");
        if (isConfirmed) {
            setIsSaved(true); 
            setShowModal(true); 
        }
    };

    const handleEdit = () => {
        const isConfirmed = window.confirm("Apakah Anda yakin untuk mengedit?");
        if (isConfirmed) {
            setIsSaved(false); 
        }
    };


    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container" style={{ paddingTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <nav className="navbar">
                <span className="navbar-brand">INI NAVBAR</span>
            </nav>
            <h2 style={{ marginBottom: '20px' }}>Pilih Waktu yang Kosong</h2>
            <div className="table-wrapper">
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
                                                checked={selectedWaktu.some(({ hari: selectedHari, waktu: selectedWaktu }) => selectedHari === day && selectedWaktu === jam)}
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
                <div className="button-wrapper">
                    {!isSaved && <button className="btn btn-save" onClick={handleSave}>Save</button>}
                    {isSaved && <button className="btn btn-edit" onClick={handleEdit}>Edit</button>}
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {selectedWaktu.map(({ hari, waktu }, index) => (
                            <li key={index}>
                                {hari}
                                <br />
                                {waktu}
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
