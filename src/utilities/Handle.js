import axios from 'axios'

const baseUrl = 'https://backend-todo-app-t3l1.onrender.com/route/'

export const getAllToDo = async (userId, setToDo) => {
    try {
        
        const response = await axios.post(`${baseUrl}`, { _id: userId });
        console.log('Response data:', response.data);
        setToDo(response.data.list);
    } catch (err) {
        console.error('Error fetching todos:', err);
    }
};
export const addTodo=async (userId,text,email,setText,setTodos)=>{
    try{
        console.log('UserID:', email);
        console.log('Base URL:', `${baseUrl}save`);
        const response = await axios.post(`${baseUrl}save`, { email:email , text:text});
        console.log(response.data);
        setText("");
        getAllToDo(userId,setTodos);
    }
    catch(err){
        console.log(err);
    }
}
export const editTodo=async(userId,_id,email,text,setTodos,setText,setIsUpdate)=>{
    try{
        const response=await axios.put(`${baseUrl}update`,{_id,email,text});
        console.log(response.data);
        setText("");
        setIsUpdate(false);
        getAllToDo(userId,setTodos);
    }
    catch(err){
        console.log(err);
    }
}
export const deleteTodo = async (userId, _id, email, setTodos) => {
    try {
        const response = await axios.delete(`${baseUrl}delete`, {
            params: {
                _id,
                email
            }
        });
        console.log(response.data);
        getAllToDo(userId, setTodos);
    } catch (err) {
        console.log(err);
    }
}
