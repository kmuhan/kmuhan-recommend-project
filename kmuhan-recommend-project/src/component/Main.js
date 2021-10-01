import { useEffect, useState } from 'react';
import {getUser} from '../firebase/getUser'

function Main() {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        init()
    }, [])

    async function init() {
        const user = await getUser('admin')
        setUserList(user)
    }

    console.log(userList)


    return (
        <div className="main-container">
            <div className="main-title">
                <p>Recommend</p>
            </div>

            <div className="main-description">
                <p>당신만의 추천 리스트를 만들어 보세요</p>
            </div>
        </div>
    )
}

export default Main