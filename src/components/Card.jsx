import { useState } from "react"



const Card = ({ name, img, statistics }) => {

    const [showImg, setShowImg] = useState(true)

    return (

        <div
            onMouseEnter={() => setShowImg(false)}
            onMouseLeave={() => setShowImg(true)}
            style={{ cursor: 'pointer' }}

            className="card mt-4 mx-auto"
        >

            {showImg
                ? (<img src={img} alt="" width={200} />)
                : (<div className="text mx-auto ">
                    {statistics.map((item, index) => (
                        <p key={index}>🏀 {item}</p>
                ))}

                </div>)}

            <h5 className="mx-auto mt-auto">{name}</h5>

        </div>

    )


}

export default Card