import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div>
      <h1>
        <Title name={props.name} />
      </h1>
      <p>
        <Description text={props.text} />
      </p>
    </div>
  );
};

export default Content;
