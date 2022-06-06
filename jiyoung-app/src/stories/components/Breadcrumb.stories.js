import Breadcrumb from '../../components/base/Breadcrumb';

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>item1</Breadcrumb.Item>
      <Breadcrumb.Item>item2</Breadcrumb.Item>
      <Breadcrumb.Item>item3</Breadcrumb.Item>
    </Breadcrumb>
  );
};
