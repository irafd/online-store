import React from 'react'

type CategChoos = { 
    chooseCategory: (category: string) => void
}
const Categories: React.FC<CategChoos>  = ({chooseCategory}) => {
    const categories: Array<{ key: string; name:string}> = [
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'bracelets',
            name: 'Браслети'
        },
        {
            key: 'coulomb',
            name: 'Підвіски'
        },
        {
            key: 'earrings',
            name: 'Сережки'
        },
        {
            key: 'ring',
            name: 'Каблучки'
        },
        {
            key: 'clock',
            name: 'Годинники'
        }
    ]
    
  
    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
            ))}
        
        </div>
    )
}


export default Categories

