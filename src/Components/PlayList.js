const PlayList = (props) => {
  console.log(props.text)

  return (
    <div>
      <playlist>{props.text}</playlist>
    </div>
  )
}

export default PlayList
