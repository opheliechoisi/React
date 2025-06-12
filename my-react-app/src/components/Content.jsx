import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div>
      <Title name={props.name} />

      <Description text={props.text} />
    </div>
  );
};

export default Content;
