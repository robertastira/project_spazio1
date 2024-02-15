import { Col, Card } from 'react-bootstrap'
import Result from '../interfaces/article'


interface ArticleProps {
  articleData: Result
}

const Article = ({ articleData }: ArticleProps) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={articleData.image_url} />
        <Card.Body>
          <Card.Title>{articleData.title}</Card.Title>
          <Card.Text>{articleData.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Article