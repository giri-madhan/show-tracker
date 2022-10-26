import {toast} from 'react-toastify'

export const successToast = (arg) => {

    toast.success(`🦄 ${arg || 'Operation Success'}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export const failToast = (arg) => {
    toast.error(`😈${arg || 'Operation Failed'}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}