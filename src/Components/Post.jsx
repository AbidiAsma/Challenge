import './Post.css'
import Button from './Button'
function Post({postName="No Title", postBody="No body"}) {
  return (
    <>
    <div className={'container'}>
      <h2 className={'title'}>{postName}</h2>
      <hr />
      <p className={'parag'}> {postBody} </p>
      <Button />
    </div>
    </>
  )
}

export default Post