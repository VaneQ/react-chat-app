import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../firebase/firebase';

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
}

export const SendMessage = ({scroll}) => {

    const [input, setInput] = useState('');

    const onInputchange = (value) => {
        setInput(value)
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();

        if( !input.length > 0 ) {
            alert('Please, at least type something')
            return;
        };

        const { uid, displayName } = auth.currentUser;
        await addDoc( collection(db, 'messages'),{
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        });
        setInput('');
        scroll.current.scrollIntoView({behavior:'smooth'});
    }

    return (
        <form onSubmit={onSubmitForm} className={style.form}>
            <input value={input} onChange={ (e) => onInputchange(e.target.value) }  className={style.input} type="text" placeholder='Type your thoughs...'/>
            <button className={style.button} type='submit'>Send</button>
        </form>
  )
}
