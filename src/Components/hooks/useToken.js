import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        console.log(user)
        const email = user?.user?.email;

        const currentUser = { email: email }

        if (email) {
            fetch(`https://calm-taiga-28787.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const token = data.token
                    localStorage.setItem('accesstoken', token)
                    setToken(token)
                })
        }
    }, [user])

    return [token]
}

export default useToken