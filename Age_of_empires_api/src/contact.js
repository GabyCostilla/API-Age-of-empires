import React, { useState } from 'react';
import axios from 'axios';

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

    axios
      .post('https://my-json-server.typicode.com/fedevirgolini-itr/api_practico5/claims', formData)
      .then(response => {
        if (response.status === 201) {
          window.alert('Mensaje enviado');
        }
      })
      .catch(error => {
        window.alert('Error al enviar el mensaje');
      });
  };

  return (
    <div>
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
    </div>
  );
}

export default Contact;
