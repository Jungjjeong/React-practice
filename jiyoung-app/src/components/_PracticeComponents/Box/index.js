const Box = ({ width = 100, height = 100, backgroundColor = "tomato" }) => {
  const style = {
    width,
    height,
    backgroundColor,
  };

  return <div style={style}></div>;
};

export default Box;
