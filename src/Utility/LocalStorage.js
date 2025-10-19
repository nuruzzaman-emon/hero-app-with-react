import { toast } from "react-toastify";

const getFromLC = () => {
    const StoredData = localStorage.getItem("appData");
    if (StoredData) {
        const data = JSON.parse(StoredData);
        return data;
    }
    return [];
}

const addToLC = (id) => {
    const data = getFromLC();
    console.log(data)

    if (data.includes(id)) {
        return toast.info("Already Installed", {
            position: "top-center",
         })

    }
    else {
        
        data.push(id);
        const stringData = JSON.stringify(data);
        console.log(stringData)
        localStorage.setItem("appData", stringData);
        toast.success("App Installed Successfully");
    }

}


export { addToLC,getFromLC };