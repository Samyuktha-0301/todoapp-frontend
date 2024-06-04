import axios from 'axios'

const baseUrl = 'https://todoapp-backend-zes9.onrender.com/'

export const getAllToDo = async (setToDo) => {
    try {
        const response = await axios.get(baseUrl);
        console.log('data --->', response.data);
        setToDo(response.data);
    }
    catch (err) {
        console.log(err);
    }
}
export const addTodo=async (text,setText,setTodos)=>{
    try{
        const response = await axios.post(`${baseUrl}save`, { text });
        console.log(response.data);
        setText("");
        getAllToDo(setTodos);
    }
    catch(err){
        console.log(err);
    }
}
export const editTodo=async(_id,text,setTodos,setText,setIsUpdate)=>{
    try{
        const response=await axios.put(`${baseUrl}update`,{_id,text});
        console.log(response.data);
        setText("");
        setIsUpdate(false);
        getAllToDo(setTodos);
    }
    catch(err){
        console.log(err);
    }
}
export const deleteTodo=async(_id,setTodos)=>{
    try{
        const response=await axios.delete(`${baseUrl}delete`,{
            data: { _id }
          });
        
        console.log(response.data);
        getAllToDo(setTodos);
    }
    catch(err){
        console.log(err);
    }
}
