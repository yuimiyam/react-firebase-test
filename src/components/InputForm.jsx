// InputForm.jsx
import React, { useState } from 'react';
import firebase from '../firebase';

const InputForm = ({ getLawyerFromFirestore }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [background, setBackground] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [PR, setPR] = useState('');
  const [contact, setContact] = useState('');

  // Firestoreにデータを送信する関数
  const postDataToFirestore = async (collectionName, postData) => {
    const addedData = await firebase.firestore().collection(collectionName).add(postData);
    return addedData;
  }

  // submitボタンクリック時の処理
  const submitData = async () => {
    if (name === '' || age === '' || speciality === '' || background === '' || PR === '' || contact === '') { return false };
    const postData = {
      name: name,
      age: age,
      speciality: speciality,
      background: background,
      PR: PR,
      contact: contact,
    }
    const addedData = await postDataToFirestore('lawyers', postData);
    setName('');
    setAge('');
    setSpeciality('');
    setBackground('');
    setPR('');
    setContact('');
    // getLawyerFromFirestore();
  }

  return (
    <form action="">
      <ul>
        <li>
          <label htmlFor="name">お名前：</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="age">年齢：</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="speciality">得意分野：</label>
          <input
            type="text"
            id="speciality"
            value={speciality}
            onChange={e => setSpeciality(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="background">経歴：</label>
          <input
            type="text"
            id="background"
            value={background}
            onChange={e => setBackground(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="PR">自己PR：</label>
          <input
            type="text"
            id="PR"
            value={PR}
            onChange={e => setPR(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="contact">連絡先：</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
        </li>
        <li>
          <button
            type="button"
            onClick={submitData}
          >submit</button>
        </li>
      </ul>
    </form>
  )
}

export default InputForm;