import styles from "./page.module.scss";
import Table from "./components/Table/Table";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Heading from "./components/ui/Heading/Heading";

export default function Home() {
  return (
    <div className={styles.page}>
      <Heading size={30} text={"Select Suppliers"} />
      <Table />
      <Heading size={20} text={"Progress"} />
      <ProgressBar />
    </div>
  );
}
