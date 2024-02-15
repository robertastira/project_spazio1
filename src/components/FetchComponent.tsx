import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Article from './Articles'
import Result from '../interfaces/article'

const FetchComponent = () => {
  const [articles, setArticles] = useState<Result[]>([])


  const fetchArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles'
      )
      if (response.ok) {
        const arrayOfArticles = await response.json()
        console.log(arrayOfArticles)
        setArticles(arrayOfArticles)
      } else {
        throw new Error('ERRORE!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Articoli spaziali:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((singleArticle) => (
          <Article articleData={singleArticle} key={singleArticle.id} />
        ))}
      </Row>
    </Container>
  )

}

export default FetchComponent