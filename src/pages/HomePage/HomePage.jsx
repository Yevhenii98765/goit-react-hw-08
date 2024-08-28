import Container from "../../components/Container/Container";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <Container>
      <div className={s.wrap}>
        <h1>Task manager welcome 🥱</h1>
      </div>
    </Container>
  );
};
export default HomePage;
