import React from 'react'
import Model from './Model.jsx'
import { Formik, Form, Field } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/Firebase.js';
import { toast } from 'react-toastify';

const AddContact = ({ onClose, isOpen, isUpdate, contact }) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose()
            toast.success("Contact addeded Successfully");
        } catch (error) {
            console.log(error)
        }
    };

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose()
            toast.success("Contact Updated Successfully");
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div>
            <Model onClose={onClose} isOpen={isOpen} >
                <Formik
                    initialValues={isUpdate ? {
                        name: contact.name,
                        email: contact.email,
                    } : {
                        name: "",
                        email: "",
                    }}
                    onSubmit={(val) => {
                        console.log(val)
                        isUpdate ? updateContact(val, contact.id) : addContact(val)
                    }}
                >

                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="h-10 border" />
                            {/* <div className=" text-xs text-red-500">
                                    { <ErrorMessage name="name" />}
                                </div> */}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field name="email" className="h-10 border" />
                            {/* <div className=" text-xs text-red-500">
                                    { <ErrorMessage name="email" /> }
                                </div> */}
                        </div>

                        <button className="self-end border bg-orange px-3 py-1.5">
                            {isUpdate ? "Edit" : "Add"} </button>

                    </Form>
                </Formik>
            </Model>
        </div>

    );
};

export default AddContact

