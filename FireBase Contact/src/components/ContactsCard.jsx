import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiSolidTrash } from "react-icons/bi";
import { TbEditCircle } from "react-icons/tb";
import { deleteDoc, doc, } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { toast } from "react-toastify";
import useDisclose from '../hooks/useDisclose';
import AddContact from './AddContact';


const Contacts = ({ contact }) => {
    const { isOpen, onClose, onOpen } = useDisclose();


    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Successfully");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div
                key={contact.id}
                className='bg-yellow rounded-lg items-center p-2 flex justify-between'>

                <div className='flex gap-1 m-t-3'>
                    <HiOutlineUserCircle className='text-4xl text-orange' />
                    <div className=''>
                        <h2 className='font-medium'>{contact.name}</h2>
                        <h2 className='text-sm'>{contact.email}</h2>
                    </div>
                </div>
                <div className='flex text-3xl'>
                    <TbEditCircle
                        onClick={onOpen}
                        className='cursor-pointer '
                    />
                    <BiSolidTrash className='text-orange cursor-pointer '
                        onClick={() => deleteContact(contact.id)}

                    />
                </div>
            </div>
            <AddContact isUpdate isOpen={isOpen} onClose={onClose}  contact={contact}/>
        </>
    );
};

export default Contacts

