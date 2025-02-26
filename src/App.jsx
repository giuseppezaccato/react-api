//task hooks import
import { useState, useEffect } from 'react'
//* import axios from "axios"; 


function App() {

  //task setting array vuoto reattivo
  const [posts, setPosts] = useState([]);

  //task funzione (api fetch)
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error(err));
  }

  //task funzione (api axios) {run terminal => "npm i axios"} 
  //? piu comodo come metodo perchè incorpora il json parse, e strumenti aggiuntivi di sicurezza
  //* function axiosPosts() {
  //*   axios.get("http://localhost:3000/posts") 
  //*     .then((res) => setPosts(res.data))
  //* }

  //Task useEffect al caricamento della pagina con chiamata api che modifica direttamente l'array reattivo [posts]
  useEffect((fetchPosts), [])

  //* useEffect((axiosPosts), []) 

  return (
    <>
      {/* <h1>TEST</h1> */}

      <div className="table-responsive px-5 mt-5">
        <table className="table">
          <thead>

            {
              posts.map(p => {
                return (
                  <th
                    className='text-danger text-center align-middle p-1 '
                    key={p.id}>
                    <h3 className='text-danger'>
                      {p.titolo}
                    </h3>
                  </th>
                )
              })
            }
          </thead>
          <tbody>
            <tr>
              {posts.map(p => {
                return (
                  <td className='text-success' key={p.id}>
                    <h3>
                      {p.contenuto}
                    </h3>
                    <span className='text-primary align-middle'><marquee>#{p.tags.join(" #")} </marquee></span>
                  </td>
                )
              })
              }
            </tr>
          </tbody>
        </table>
      </div>


    </>
  )
}

export default App
