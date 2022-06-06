import useKey from '../../hooks/useKey';

export default {
  title: 'Hook/useKey',
};

export const Default = () => {
  useKey('keydown', 'f', () => {
    alert('f keydown Event!');
  });

  useKey('keyup', 'q', () => {
    alert('q keyup Event!');
  });
  return <>useKey</>;
};
