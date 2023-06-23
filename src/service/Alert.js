import { toast } from 'react-toastify';

export const displaySuccessMessage = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const displayErrorMessage = (message) => {
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const displayServerErrorMessage = (err) => {
  var message = "";
  if (!err.response) {
    message = err.toString()
  } else if(err.response.data && err.response.data.error) {
    message = err.response.data.error
  } else {
    message = err.response.data
  }
  
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}