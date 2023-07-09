import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>Partiendo de una lista de datos permitir que estos se carguen en una página
        y luego 2 componentes {"(modal y datagrid)"} de la misma página puedan consultarlos y modificarlos,
      </h1>
      <a href='/useState'> Go to useState</a>
      <a href='/useContext'> Go to useContext</a>
      <a href='/useReducer'> Go to useReducer</a>
    </main>
  )
}
