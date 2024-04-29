import { toast, Bounce } from "react-toastify";

const showSuccessMessage = () => {
    toast.success('Add todo successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
}

export default showSuccessMessage