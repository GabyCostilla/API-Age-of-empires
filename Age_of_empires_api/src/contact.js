import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'; // Importa el archivo CSS personalizado

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    phone: '',
    message: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Puedes mostrar un mensaje de aprobación aquí
    toast.success('Mensaje enviado con éxito');

    // Puedes restablecer el formulario después del envío si es necesario
    setFormData({
      name: '',
      mail: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre *</label>
        <input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Mail *</label>
        <input
          name="mail"
          type="email"
          required
          value={formData.mail}
          onChange={handleChange}
        />
        <br />
        <label>Teléfono</label>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <label>Mensaje *</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {/* Agrega el ToastContainer al final del componente */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
