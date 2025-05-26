import React from 'react';
import { FieldConfig } from '@conform-to/react'; // o el tipo que uses

type FormInputFieldProps = {
  name: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  validators?: FieldConfig<any>['validators'];
};

export const FormInputField = ({
  name,
  type = 'text',
  placeholder,
  icon,
  validators,
}: FormInputFieldProps) => {
  return (
    <form.Field name={name} validators={validators}>
      {(field) => (
        <>
          <div className="login-field">
            {icon && <span className="login-field-icon">{icon}</span>}
            <input
              id={name}
              className="login-input"
              type={type}
              placeholder={placeholder}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
          {field.state.meta.errors?.length > 0 && (
            <span className="error-message">{field.state.meta.errors[0]}</span>
          )}
        </>
      )}
    </form.Field>
  );
};
