import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommitteePage () {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('http://localhost:1337/api/comittees')
        .then((res) => {
            setData(res.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    return (
        <div>
            {console.log(Object.values(data))}
        </div>
    )
}


// export default function CommitteePage() {
//   const { committees, error, loading } = useFetch(
//     "http://localhost:1337/api/comittees"
//   );
//   if (loading) return <p> Loading... </p>;
//   if (error) return <p> Error :( </p>;
//   console.log(committees[1])
//   return (

//     <div className="committees">
//       <section>
//         <p>Hello World</p>
//       </section>
//     </div>
//   );
// }
