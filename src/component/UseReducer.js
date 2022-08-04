import React, { useState, useReducer } from 'react'
import { reducer } from './reducer';
const bookDatas =[
    {id:1, name:"WHERE THE CRAWDADS SING"},
    {id:2, name:"IT ENDS WITH US"},
    {id:3, name:"UGLY LOVE"},
]

// const reducer =(state, action)=>{
//         if(action.type==="Add"){
//             const allBooks=[...state.books,action.payload];
//             return{
//                 ...state,
//                 books:allBooks,
//                 isModal:true,
//                 ModalText:"book is added"
//             }
//         }
//         if(action.type==="REMOVE"){
//             const filteredBooks = [...state.books].filter(book => book.id !== action.payload);
//             return{
//                 ...state,
//                 books:filteredBooks,
//                 isModal:true,
//                 ModalText:"book is remove"
//             }
//         }
//     return state;
// }
const initialstate = {
    books: bookDatas,
    isModal:false,
    ModalText:""
}

export default function UseReducer() {
// const [books, setBook] = useState(bookDatas);
// const [isModal, setIsModal] = useState(false);
// const [ModalText, setModalText] = useState("");

const [bookstate, dispatch] = useReducer(reducer,initialstate)
const [bookName, setBookName] = useState("");

const handleSubmit=(e)=>{
e.preventDefault();
const newBooks = {id:new Date().getTime().toString(), name: bookName}
dispatch({type:"Add", payload:newBooks})
// setBook((privour)=>{
//     const newBooks = {id:new Date().getTime().toString(), name: bookName}
//     return[...privour,newBooks]
// })
// setBookName("");
// setIsModal(true);
// setModalText("book is added")
setBookName("");
}

const Modal=({ModalText})=>{
    return <p>{ModalText}</p>
}
const removeBook=(id)=>{
    // alert(id)
    dispatch({type:"REMOVE", payload:id})
}
  return (
    <div className='App'>
        <h3>Book List</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookname">Book Name: </label>
            <input type="text" name="bookname" id='bookname' value={bookName} onChange={(e)=>setBookName(e.target.value)}  />
            <button className='add-btn' type='submit'>Add book</button>
        </form>
        {bookstate.isModal && <Modal ModalText={bookstate.ModalText}/>}
        {bookstate.books.map((book)=>{
            const{id,name} = book;
            return <li  key={id}>{name} <button className='remove-btn' onClick={()=>{removeBook(id)}}>Remove</button></li>
        })}
    </div>
  )
}
