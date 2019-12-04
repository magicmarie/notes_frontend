import React from 'react';

export const Input = ({ label, type, name, value, onChange }) => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        required
        className="form-control"
      />
    </div>
  );

export const Form = ({ formFields, onChange }) =>
  formFields.map(field => (
    <Input
      key={field.name}
      label={field.label}
      name={field.name}
      type={field.type}
      value={field.value}
      onChange={onChange}
    />
  ));
