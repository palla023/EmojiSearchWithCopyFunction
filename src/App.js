import React,{useEffect, useState} from 'react'
import EmojiData from './emoji.json';       //EmojiData is our own Preferred name

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
    //converts Json data title to lower case and also user input data(search) also set to be in lower and if user input data
    //matches with the Json title or not that will be also checked, if matches stored in newData
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div className='container shadow mt-5 p-2'>
      <center>

        <h2 > Emoji Search</h2>
        <input size="20" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>

        {data.map(emoji =>
          <div className="card" key={emoji.title}> 
          {/*for copying :  navigator.clipboard.writeText()*/}
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copied")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
      
    </div>
  )
}

export default App