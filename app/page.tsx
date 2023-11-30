import Image from "next/image";
import styles from "./page.module.css";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/data/jmdict-eng-common-3.5.0.json",
    "utf8",
  );
  const data = JSON.parse(file);

  console.log(data.words[0].kanji[0].text);

  return (
    <>
      <h1>Hello</h1>
      <h2>{data.words[0].kanji[0].text}</h2>
    </>
  );
}
