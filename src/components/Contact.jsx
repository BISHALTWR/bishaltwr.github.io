import { useState } from 'react';
import { IoMailOutline, IoCallOutline } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formSubmitUrl = "https://formsubmit.co/8db3a79c4af65af7772bf66a6ab7cadf";
    
    try {
      const formData = new FormData(form);
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        // alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.2818972616071!2d85.33362821502716!3d27.695707143533728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1735065704227!5m2!1sen!2snp"
            width="400" 
            height="300" 
            loading="lazy">
          </iframe>
        </figure>
      </section>

      <section className="contact-form">
        {/* <h3 className="h3 form-title">Contact Form</h3> */}

        <form 
          className="form" 
          onSubmit={handleSubmit} 
          data-form
          action="https://formsubmit.co/your.email@example.com" 
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Contact from Portfolio!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yoursite.com/thanks" />

          <div className="input-wrapper">
            <input 
              type="text"
              name="name"
              className="form-input"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
              data-form-input
            />

            <input 
              type="email"
              name="email"
              className="form-input"
              placeholder="Your email/phone number"
              required
              value={formData.email}
              onChange={handleChange}
              data-form-input
            />
          </div>

          <textarea 
            name="message"
            className="form-input"
            placeholder="Your message"
            required
            value={formData.message}
            onChange={handleChange}
            data-form-input
          />

          <button 
            className="form-btn"
            type="submit"
            disabled={isSubmitting}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;