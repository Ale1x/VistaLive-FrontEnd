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
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    throw new Error("Error fetching webcams.");
  }
}
