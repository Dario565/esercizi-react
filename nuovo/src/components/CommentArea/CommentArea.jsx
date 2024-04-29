import { useEffect, useState } from 'react'
import CommentList from '../CommentList/CommentList.jsx'
import AddComment from '../AddComment/AddComment.jsx'
import Loading from '../Loading/Loading.jsx'
import Error from '../errormessage/Error.jsx'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/books/:asin/comments/' + asin,
          {
            headers: {
              Authorization: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI3OTU1Zjk2ODE1ZDAwMTkwODI1ZmQiLCJpYXQiOjE3MTM4ODA4MDYsImV4cCI6MTcxNTA5MDQwNn0.VS7t3SyqxFHo2pmMNKiDKJmquaJNHndpmsGcnKj-S_s",
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
