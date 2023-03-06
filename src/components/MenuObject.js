import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { IMAGE_CDN_URL } from "../constant";

const MenuObject = ({ itemObject }) => {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return <div className="w-[500px] my-2 border-t-2 border-solid bg-pink-50">
        <div className="flex flex-row justify-around">
            <h4 className='mx-2'>{itemObject.name}</h4>
            <img className="w-[100px]" src={`${IMAGE_CDN_URL}${itemObject.cloudinaryImageId}`} />
        </div>
        <button className="p-2 m-5 w-[200px] h-[50px] justify-center bg-green-100" onClick={() => handleAddItem(itemObject.name)}>AddItem</button>
        </div>
}

        export default MenuObject;