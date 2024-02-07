import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>

      <main >
        <h1>about</h1>
        <Headline num={111} array={[1, 2, 3, 4]}
        obj={{foo:1, bar:2}}
        comp={<div>foo</div>} 
        code={<code className={styles.code}>pages/about.js</code>}
        />
        <Links />

      </main>
    </>
  );
}
