// Suggested code may be subject to a license. Learn more: ~LicenseLog:425843401.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3557997558.
import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      {/* Formulario de inicio de sesión */}
      <form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
