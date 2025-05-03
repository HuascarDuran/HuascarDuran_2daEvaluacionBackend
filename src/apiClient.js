const axios = require('axios');
require('dotenv').config();

const API_URL = process.env.API_URL;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

let token = null;

async function login() {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email: USERNAME,
      password: PASSWORD
    });
    token = response.data.access_token;
    console.log("🔐 Token recibido:", token); // 💥 Debería imprimir esto
  } catch (error) {
    console.error("❌ Error al hacer login:");
    console.error(error.response?.data || error.message);
  }
}


async function getUsers() {
  if (!token) {
    await login();
  }

  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("✅ Datos recibidos desde FastAPI:", response.data);
    return response.data;

  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error.message);
    if (error.response) {
      console.error("📦 Response:", error.response.data);
    } else {
      console.error("📦 Error completo:", error);
    }
    throw error; // re-lanzamos el error para que GraphQL lo maneje
  }
}


module.exports = { getUsers };
