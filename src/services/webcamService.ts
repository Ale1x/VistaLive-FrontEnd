import axios from "axios";

interface Webcam {
  id: number;
  name: string;
  description: string;
  stream_url: string;
  image_url: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Use environment variable for API base URL

export async function fetchWebcams(): Promise<Webcam[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/webcams`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch webcams. Please try again later.");
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw new Error("Error fetching webcams.");
  }
}

export async function createWebcam(webcam: Webcam): Promise<Webcam> {
  try {
    const response = await axios.post(`${API_BASE_URL}/webcams`, webcam);
    return response.data;
  } catch (error) {
    console.error("Failed to create webcam. Please try again later.");
    throw new Error("Error creating webcam.");
  }
}

export async function updateWebcam(id: number, webcam: Webcam): Promise<Webcam> {
  try {
    const response = await axios.put(`${API_BASE_URL}/webcams/${id}`, webcam);
    return response.data;
  } catch (error) {
    console.error("Failed to update webcam. Please try again later.");
    throw new Error("Error updating webcam.");
  }
}

export async function deleteWebcam(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/webcams/${id}`);
  } catch (error) {
    console.error("Failed to delete webcam. Please try again later.");
    throw new Error("Error deleting webcam.");
  }
}
