// create your App component here
import { useEffect, useState } from "react";

function App() {
 const [dogs, setDogs] = useState(null)
 const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data =>{
            setDogs(data.message)
            setLoading(false)
        })
    }, [])  

    if (loading) {
        return <p>Loading...</p>;
      } else {
        return <img src={dogs} alt="A Random Dog" />;
      }
    
}

export default App;