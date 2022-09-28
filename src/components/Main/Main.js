import Header from './Header/Header';
import styles from './Main.module.css';
import Meals from './Meals/Meals';

const Main = props =>{
  return(
    <main className={styles.main}>
      <Header />
      <Meals />
    </main>
  )
}

export default Main