import Header from './Header';

function Template(props) {
  const defaultStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
  };

  return (
    <div style={defaultStyle}>
      <Header />
      {props.children}
    </div>
  );
}

export default Template;
