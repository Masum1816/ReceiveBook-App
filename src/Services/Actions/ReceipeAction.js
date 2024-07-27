import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"
import generateUniqueId from "generate-unique-id";

export const GetBooks = (data) => {

    console.log("Hello.....! ", data);

    return{
        type : "GET_BOOKS",
        payload : data
    }
}

export const UpdateBooks = () => {
    return {
        type : "UPDATE_BOOKS",
        payload : "data"
    }
}

export const DeleteBooks = () =>{
    return{
        type : "DELETE_BOOKS",
        payload : "id"
    }
}

export const GetData = () => {

    return (dispatch) => {

        axios.get('http://localhost:3000/Books').then((res) => {
            console.log("Data : ", res.data);
            dispatch(GetBooks(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }



}

export const PostData = (data) => {

    data.id = generateUniqueId({
        length: 4,
        useLetters: false
    });
    
    console.log("Datasssss : ", data);

    return (dispatch) => {
        
        axios.get('http://localhost:3000/Books', data).then((res) => {
            console.log("Datas : ", res.data);  
            dispatch(GetData(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }



}

export const SingleRecordData = (id) => {

    return (dispatch) => {
    
        axios.get(`http://localhost:3000/Books/${id}`).then((res) => {
            console.log("Data : ", res.data);
            dispatch(UpdateBooks());
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const UpdatedData = (data) => {

    return (dispatch) => {

        axios.put(`http://localhost:3000/Books/${data.id}`, data).then((res) => {
            console.log("Data : ", res.data);
            dispatch(GetData(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })
    }

}

export const DeleteData = (id) => {

    return (dispatch) => {

        axios.delete(`http://localhost:3000/Books/${id}`).then((res) => {
            console.log("Data : ", res.data);
            dispatch(DeleteBooks(id));
            dispatch(GetData(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })
    }

}



 







