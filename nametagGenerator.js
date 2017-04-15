let NameTag = (props) => {
  return (
    <div 
      onClick={props.onClick} 
      id={props.id}
      style={styles.tag}>
        <h1 style={styles.heading}>HELLO</h1>
        <h1 style={styles.text}>my name is:</h1>
        <h1 style={styles.nameArea}>{props.name}</h1>
    </div>
  )
};


ReactDOM.render(
  <NameTag />,
  document.getElementById('root')
);
