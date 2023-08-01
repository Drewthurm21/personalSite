import styles from './buttons.module.scss'

export default function OutlinedButton({ children, onClick }) {

  return (
    <>
      <button
        className={styles.outlinedButton}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}