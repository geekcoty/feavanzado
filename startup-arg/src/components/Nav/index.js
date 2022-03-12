import Search from "./Search"
function Nav(props) {
  function handleCallback(value) {
    props.onChange(value);
  }

  return (
    <nav>
      <Search onChange={handleCallback} />
    </nav>
  );
}

export default Nav