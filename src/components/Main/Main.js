import Header from './Header/Header';
import styles from './Main.module.css';

const Main = props =>{
  return(
    <main className={styles.main}>
      <Header />
    </main>
  )
}

export default Main