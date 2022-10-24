import { useState } from "react"

export const AddCatergory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
    
        setInputValue( target.value );

    }

    const onSubmit = (v) =>{
        v.preventDefault();

        if( inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder=" Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            
            />
        </form>
    )
}
