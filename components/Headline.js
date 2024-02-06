import styles from "@/styles/Home.module.css";


export default function Headline(props) {
  return (
    <div>
  
        <h1>{props.title}</h1>
        <div className={styles.description}>
          <p>
            Let's g et started by editing&nbsp;
            <code className={styles.code}>pages/{props.title}.js</code>
          </p>
        </div>
    </div>
  );
}
