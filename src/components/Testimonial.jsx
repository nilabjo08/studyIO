import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'XYZ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ultricies neque. Sed tincidunt eleifend odio, vel convallis metus tempor sed.',
    },
    {
      id: 2,
      name: 'XYZ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ultricies neque. Sed tincidunt eleifend odio, vel convallis metus tempor sed.',
    },
    {
      id: 3,
      name: 'XYZ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ultricies neque. Sed tincidunt eleifend odio, vel convallis metus tempor sed.',
    },
    {
      id: 4,
      name: 'XYZ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ultricies neque. Sed tincidunt eleifend odio, vel convallis metus tempor sed.'
    },

  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      {testimonials.map(test => (
        <div key={test.id} className="testimonial">
          <p>{test.content}</p>
          <p> ~{test.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;
