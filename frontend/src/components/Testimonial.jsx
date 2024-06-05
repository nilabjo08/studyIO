import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      content: 'The e-learning platform helped me acquire new skills and advance in my career. The courses were comprehensive and engaging.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'I was impressed by the quality of instruction on this platform. The instructors were knowledgeable and supportive, making my learning experience enjoyable.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      content: 'As a working professional, I found the flexibility of the courses invaluable. I could learn at my own pace and balance my studies with my job.',
    },
    {
      id: 4,
      name: 'Emily Brown',
      content: 'The platform offers a wide range of courses catering to various interests and skill levels. It helped me broaden my knowledge and explore new subjects.',
    },
  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonial-container">
        {testimonials.map(test => (
          <div key={test.id} className="testimonial">
            <p className="testimonial-content">{test.content}</p>
            <p className="testimonial-author">- {test.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
