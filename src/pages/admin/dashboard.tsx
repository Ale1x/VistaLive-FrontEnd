import React, { useState, useEffect } from 'react';
import { createWebcam, updateWebcam, deleteWebcam, fetchWebcams } from '../../services/webcamService';
import WebcamForm from '../../components/WebcamForm';

const Dashboard = () => {
  const [webcams, setWebcams] = useState([]);
  const [editingWebcam, setEditingWebcam] = useState(null);

  useEffect(() => {
    const loadWebcams = async () => {
      const fetchedWebcams = await fetchWebcams();
      setWebcams(fetchedWebcams);
    };
    loadWebcams();
  }, []);

  const handleAddWebcam = async (webcam) => {
    const newWebcam = await createWebcam(webcam);
    setWebcams([...webcams, newWebcam]);
  };

  const handleUpdateWebcam = async (id, updatedWebcam) => {
    await updateWebcam(id, updatedWebcam);
    setWebcams(webcams.map(webcam => webcam.id === id ? updatedWebcam : webcam));
  };

  const handleDeleteWebcam = async (id) => {
    await deleteWebcam(id);
    setWebcams(webcams.filter(webcam => webcam.id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <WebcamForm onSubmit={editingWebcam ? handleUpdateWebcam : handleAddWebcam} initialData={editingWebcam} />
      <div>
        {webcams.map(webcam => (
          <div key={webcam.id}>
            <h2>{webcam.name}</h2>
            <button onClick={() => setEditingWebcam(webcam)}>Edit</button>
            <button onClick={() => handleDeleteWebcam(webcam.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
