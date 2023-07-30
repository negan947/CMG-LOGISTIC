import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="imgUrl"/>
          <div className="proj-txtx">
            <h4><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}