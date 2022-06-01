import Flux from "../../components/_BasicComponent/Flux";

const { Row, Col } = Flux;

export default {
  title: "Component/Flux",
  component: Flux,
};

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: "#44b",
        width: "100%",
        height: 18,
        color: "white",
        textAlign: "center",
        borderRadius: 8,
      }}
    >
      Box
    </div>
  );
};

export const Default = () => {
  return (
    <Row gutter={[2, 4]}>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={8}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
    </Row>
  );
};