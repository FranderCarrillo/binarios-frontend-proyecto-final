import { toast } from 'react-toastify';
import { defaultToastOptions } from './toastConfig';

export function handleApiError(error: any, fallbackMessage = 'Ocurrió un error inesperado.') {
  const status = error?.response?.status;
  const message = error?.response?.data?.message;

  switch (status) {
    case 401:
      toast.error(message || 'Correo o contraseña incorrectos.', defaultToastOptions);
      break;
    case 403:
      toast.error('No tienes permisos para acceder.', defaultToastOptions);
      break;
    case 409:
      toast.error(message || 'No llame, nosotros lo llamamos', defaultToastOptions);
      break;
    default:
      toast.error(message || fallbackMessage, defaultToastOptions);
  }
}
