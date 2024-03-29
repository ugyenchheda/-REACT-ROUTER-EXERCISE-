import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Blogs = () => {
  const languagesData = [
    {
      id: 1,
      title: 'JavaScript',
      header: 'JavaScript Programming',
      content: "JavaScript is a programming language that enables interactive web pages and dynamic content.",
      className: 'bg-success bg-gradient', 
    },
    {
      id: 2,
      title: 'Python',
      header: 'Python Programming',
      content: "Python is a high-level programming language known for its simplicity and readability.",
    },
    {
      id: 3,
      title: 'Java',
      header: 'Java Programming',
      content: "Java is a widely used programming language for building enterprise-scale applications.",
      className: 'bg-success bg-gradient', 
    },
    {
      id: 4,
      title: 'React',
      header: 'React.js Framework',
      content: "React.js is a JavaScript library for building user interfaces, often used for single-page applications.",
    },
    {
      id: 5,
      title: 'Ruby',
      header: 'Ruby Programming',
      content: "Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity.",
      className: 'bg-success bg-gradient', 
    },
    {
      id: 6,
      title: 'C#',
      header: 'C# Programming',
      content: "C# is a versatile programming language developed by Microsoft, commonly used for building Windows applications and web services.",
    },
    {
      id: 7,
      title: 'PHP',
      header: 'PHP Programming',
      content: "PHP is a server-side scripting language widely used for web development and creating dynamic web pages.",
      className: 'bg-success bg-gradient', 
    },
    {
      id: 8,
      title: 'Swift',
      header: 'Swift Programming',
      content: "Swift is a powerful and intuitive programming language created by Apple for developing iOS, macOS, watchOS, and tvOS apps.",
    },
    {
      id: 9,
      title: 'Go',
      header: 'Go Programming',
      content: "Go, also known as Golang, is a statically typed, compiled programming language designed for simplicity, efficiency, and concurrency.",
      className: 'bg-success bg-gradient', 
    },
    {
      id: 10,
      title: 'TypeScript',
      header: 'TypeScript Programming',
      content: "TypeScript is a superset of JavaScript that adds static types to the language, making it easier to scale and maintain large JavaScript codebases.",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  
  return (
    <div>
      <Card className="text-info">
        <Card.Header className="font-weight-bold">Programming Languages</Card.Header>
        <Card.Body>
          <Card.Title className="font-weight-bold">Learn about different programming languages</Card.Title>
          <Card.Text>Explore various programming languages and their features. Learn one which suits you the most.</Card.Text>
        </Card.Body>
      </Card>

      <Accordion>
        {languagesData.map((language) => (
          <Accordion.Item key={language.id} eventKey={language.id.toString()}  className={language.className} // Assign custom class name
          >
            <Accordion.Header
              onClick={() => handleAccordionChange(language.id)}  className=" bg-info bg-gradient">
              {language.title}
            </Accordion.Header>
            <Accordion.Body>
              <Card>
                <Card.Header  className="text-info">{language.header}</Card.Header>
                <Card.Body>
                  <Card.Text>{language.content}</Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Blogs;