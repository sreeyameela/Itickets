
import React, { useState } from "react";
import "../styles/styles.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a successful FAQ Page?",
      answer: "This many!",
      open: false
    },
    {
        question: "How many programmers does it take to screw a lightbulb?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
        open: true
      },
      {
        question: "Who is the most awesome person?",
        answer: "You! The viewer!",
        open: false
      },
      {
        question:
          "How many questions does it take to makes a successful FAQ Page?",
        answer: "This many!",
        open: false
      }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="container">
        <div className="row rowclass">
            <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="faqs">
                {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
                </div>
            </div>
            {/* <div className="container" > */}
            <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border:'1px ', color:'black'}}>
                <h3 className='headerlogin'>Still got queries?</h3>
                <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input
                                type="Name"
                                id="Name"
                                placeholder="Name "
                                required
                            />
                </div>
                <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                required
                            />
                </div>
                <div className="form-group">
                    <label htmlFor="Subject">Subject</label>
                    <textarea
                        rows="10"
                        cols="50"
                        id="Subject"
                        placeholder="Enter your message here"
                    ></textarea>
                </div>
                <div className="form-group">   
                <input type="submit" value="Submit" className="query" />
                
                </div>
            </div>
            </div>
        </div>
    // </div>
  );
};

export default FAQPage;