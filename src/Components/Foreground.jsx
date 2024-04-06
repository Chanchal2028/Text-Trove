import React, { useRef, useState } from 'react'
import Card from './Card';

const Foreground = () => {
    const ref=useRef(null);


    const data = [
        {
            desc: "This is the background color of the data page",
            filesize: "1.2mb", // Changed filesize
            close: true,
            tag: { isOpen: true, tagTitle: "Get it now", tagColor: "green" } // Changed tag properties
        },
        {
            desc: "This is the background color of the data page",
            filesize: "0.7mb", // Changed filesize
            close: true, // Changed close value
            tag: { isOpen: false, tagTitle: "Download Here", tagColor: "blue" } // Changed tag properties
        },
        {
            desc: "This is the background color of the data page",
            filesize: "1.5mb", // Changed filesize
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" } // Changed tag properties
        }
    ];
    return (
        <div>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
                {data.map((item, index) => (
                    <Card data={item} reference={ref}/>
                ))}
            </div>
        </div>
    )
}

export default Foreground