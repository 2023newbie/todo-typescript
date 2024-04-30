import { toast, Bounce } from "react-toastify";

type Fetch = 'POST' | 'DELETE' | 'PUT'

type Status = 'info' | 'success'

const showSuccessMessage = (method: Fetch) => {
    let content = ''
    let status: Status = 'success'

    switch (method) {
        case 'DELETE':
            content = 'Delete buy item completed!'
            status = 'info'
            break
        case 'POST':
            content = 'Add buy item completed!'
            status = 'success'
            break
        default:
            break
    }

    toast[status](content, {
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