import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import InputForm from './InputForm';

const Lawyers = props => {
    const [lawyer, setLawyer] = useState(null);

    // firestoreに格納したデータのうち、"speciality"項目が、props.issue(親コンポから渡した値)のやつを取得する
    const getLawyerFromFirestore = async () => {
        const lawyerListArray = await firebase.firestore().collection('lawyers').where("speciality", "==", (props.issue) )
            .get(); 
        const lawyerArray = lawyerListArray.docs.map(x => {
            return {
                id: x.id,
                data: x.data(),
            }
        })
        setLawyer(lawyerArray);
        return lawyerArray;
        
    }

    useEffect(() => {
        const result = getLawyerFromFirestore();
    }, [props])

    return (
        //ここで専門分野をフィルタするための三項演算子をいれてみる？
        <div>
            <ul>
                {
                    lawyer?.map((x, index) =>
                    <li key={index} id={x.id}>
                        <p>氏名: {x.data.name}</p>
                        <p>年齢: {x.data.age}</p>
                        <p>経歴: {x.data.background}</p>
                        <p>自己PR: {x.data.PR}</p>
                        <p>連絡先: {x.data.contact}</p>
                    </li>
                    )
                }
            </ul>
        </div>
    );


//   return (
//     <div>
//       <p>this is {props.issue} list component</p>
//     </div>
//   );
}
export default Lawyers;