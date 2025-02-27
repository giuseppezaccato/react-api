//task hooks import
import { useState, useEffect } from 'react'

//task axios import
import axios from "axios";


function App() {

  //task (import.meta.env) => importo le variabili d'ambiente dal'oggetto import.meta
  // const apiUrl = import.meta.env.VITE_BASE_API_URL;

  //task setting array vuoto reattivo
  const [posts, setPosts] = useState([]);

  //* inizializzo un oggetto VUOTO da usare come punto di partenza per il form!
  const emptyDataForm = {
    name: '',
    image: '',
    ingredients: [],
  };

  //task useState oggetto dinamico reattivo
  const [dataForm, setDataForm] = useState(emptyDataForm)


  // task funzione (api axios) {run terminal first => "npm i axios"} 
  //? piu comodo come metodo perchè incorpora il json parse, e strumenti aggiuntivi di sicurezza
  function fetchPosts() {
    axios.get("http://localhost:3000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }



  //task funzione GET (api fetch)
  // const fetchPosts = () => {
  //   fetch("http://localhost:3000/api/posts")
  //     .then((res) => res.json())
  //     .then(setPosts)
  //     .catch((err) => console.error(err));
  // }

  //task funzione delete post(id elemento da eliminare)
  const handleDeletePost = (idPDaEliminare) => {

    axios.delete(`${"http://localhost:3000/api/posts"}/${idPDaEliminare}`)
      .then(
        setPosts(posts.filter(p => p.id !== idPDaEliminare))
        // (() => fetchPosts())
      )
      .catch((err) => console.error(err));
  };








  //Task useEffect al caricamento della pagina con chiamata api che modifica direttamente l'array reattivo [posts]
  useEffect(fetchPosts, [])


  return (
    <>
      {/* <h1>TEST</h1> */}

      <div className="table-responsive px-5 mt-5">
        <table className="table">
          <thead>
            {
              posts.map((post) => {
                return (
                  <th
                    className='text-danger text-center align-middle p-1 '
                    key={post.id}>
                    <h3 className='text-danger'>
                      {post.titolo}
                    </h3>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      delete
                    </button>
                  </th>
                )
              })
            }
          </thead>
          <tbody>
            <tr>
              {posts.map(post => {
                return (
                  <td className='text-success' key={post.id}>
                    <h3>
                      {post.contenuto}
                    </h3>
                    <span className='text-primary align-middle'>#{post.tags.join(" #")}</span>
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
