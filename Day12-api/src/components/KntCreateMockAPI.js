import axios from 'axios';
import React, {useState} from 'react'

export default function KntCreateMockAPI() {
    const [name, getName] = useState('');
    const [age, getAge] = useState(0);
    const [is_active, getActive] = useState(true);

    const createAPI = "https://67d8d81100348dd3e2a86846.mockapi.io/knt-2310900094/MockData";

    const knthandleSubmit = (ev) => {
        ev.preventDefault();
        let KntNewUser = {name: name, age: age, is_active: is_active}
        console.log(KntNewUser);
        axios
            .post(createAPI, KntNewUser)
            .then((knt_response)=>{

            })
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm user</h2>
        <hr/>
        <form onSubmit={knthandleSubmit}>
            <div className='mb-1'>
                <label className='form-label'>FullName</label>
                <input type='text' name='name' id='kntFullName' value={name} onChange={(ev=>getName(ev.target.value))}/>
            </div>
            <div className='mb-1'>
                <label className='form-label'>Age</label>
                <input type='number' name='age' id='KntAge' value={age} onChange={(ev=>getAge(ev.target.value))}/>
            </div>
            <div className='mb-1'>
                <label className='form-label'>Active?</label>
                <input type='radio' name='is_active' value={'true'} onChange={(ev=>getActive(ev.target.value))}/>
                <label>Hoạt động
                </label>
                <input type='radio' name='is_active' value={'false'} onChange={(ev=>getActive(ev.target.value))}/>
                <label>khóa

                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
