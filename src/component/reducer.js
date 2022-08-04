export const reducer =(state, action)=>{
    if(action.type==="Add"){
        const allBooks=[...state.books,action.payload];
        return{
            ...state,
            books:allBooks,
            isModal:true,
            ModalText:"book is added"
        }
    }
    if(action.type==="REMOVE"){
        const filteredBooks = [...state.books].filter(book => book.id !== action.payload);
        return{
            ...state,
            books:filteredBooks,
            isModal:true,
            ModalText:"book is remove"
        }
    }
return state;
}