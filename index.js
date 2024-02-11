const Box = props => {
  //  Write your code here.
  const {className, name} = props
  return (
    <div className={className}>
      <h1 className='name'>{name}</h1>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <div>
      <h1 className='main-heading'>Boxes</h1>
      <ul className='box-card'>
        <Box className='box box1' name='Small' />
        <Box className='box box2' name='Medium' />
        <Box className='box box3' name='Large' />
      </ul>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
