import './Post.css'
import Button from './Button'
function Post() {
  return (
    <>
    <div className={'container'}>
      <h1 className={'title'}>This is the post title</h1>
      <hr />
      <p className={'parag'}>This is the post body</p>
      <Button />
    </div>
    </>
  )
}

export default Post