import styles from "@/styles/Home.module.css";


export function Headline(props) {
  console.log(props);

  return (
    <div>
      <h1>{props.title}</h1>
      <div className={styles.description}>
        <p>
          Let's g et started by editing&nbsp;
          {props.children}
          {/* <code className={styles.code}>pages/{props.title}.js</code> */}
        </p>

      </div>
    </div>
  );
}
