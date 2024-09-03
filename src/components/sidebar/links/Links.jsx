import React from 'react'

function Links() {
    const items = [
        "Home",
        "Education",
        "Skills",
        "Projects",
        "Experience",
        "Contact"
    ]
    return (
        <div className='links'>
            {items.map((item, index) => (
                <a key={index} href="">{item}</a>
            ))}
        </div>
    )
}

export default Links