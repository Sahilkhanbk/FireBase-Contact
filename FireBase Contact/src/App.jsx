import { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import './App.css'
import Navbar from './components/Navbar'
import { collection, getDocs, onSnapshot, } from 'firebase/firestore';
import { db } from './config/Firebase';
import ContactsCard from './components/ContactsCard'
import useDisclose from './hooks/useDisclose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FaCirclePlus } from "react-icons/fa6";
import AddContact from './components/AddContact';



const App = () => {
  const [contacts, setContacts] = useState([])

  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactRef = collection(db, "contacts");
        // const contactSnap = await getDocs(contactRef);
        // its change things in real world
        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          });
          setContacts(contactLists)
          return contactLists
        })
      } catch (error) {
        console.log(error)
      }
    };
    getContact();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");
    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });

      const serchetnow = contactLists.filter((searched) =>
        searched.name.toLowerCase().includes(value.toLowerCase())
      )
      setContacts(serchetnow)
      return serchetnow
    })
  }

  return (
    <>
      <div className='mx-auto max-w-[370px] px-4'>
        <Navbar />
        <div className='flex gap-2 '>
          <div className='flex relative items-center flex-grow'>
            <IoSearch className='text-3xl text-white ml-1 absolute' />
            <input type="text "
              onChange={filterContacts}
              className='bg-transparent text-white 
             border-white border rounded-md h-10 pl-9 flex-grow'
            />
          </div>
          <FaCirclePlus onClick={onOpen} className='cursor-pointer text-white text-4xl ' />
        </div>

        <div className='mt-5 flex flex-col gap-3'>
          {contacts.map((contact) => (
            <ContactsCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <AddContact onClose={onClose} isOpen={isOpen} />

      <ToastContainer position='bottom-center' />

    </>
  )
}

export default App
