import React from 'react'
import { useHistory } from 'react-router-dom'
const NotFound = () => {
    let history = useHistory()
    const handleClickBtn = () =>{
        history.push('/')
    }
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h5>Không tìm thấy trang này</h5>
            <button className='btn-primary' onClick={handleClickBtn}>Trở lại trang chủ</button>

        </div>
    )
}

export default NotFound
