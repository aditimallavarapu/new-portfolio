import React from "react";
import axios from 'axios'
import "./stars.scss";

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
      }
    }
  
    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://localhost:3002/aditi-portfolio/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
         // alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
  
    resetForm(){
       this.setState({name: '', email: '', message: ''})
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
      this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
      this.setState({message: event.target.value})
      }
  
  render() {
    return (
      <section
        className="paralax-mf footer-paralax sect-mt4 route subskill background"
                /*style={{ backgroundImage: "url(" + imageOverlay + ")" }}*/
      >
        
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                   {/*</div> <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          id="contact-form"
                          onSubmit={this.handleSubmit.bind(this)}
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                  value={this.state.name} 
                                  onChange={this.onNameChange.bind(this)}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                  value={this.state.email} 
                                  onChange={this.onEmailChange.bind(this)}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            {/*<div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                           </div> */}
                          
                          {/* <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  id="message"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                  value={this.state.message} 
                                  onChange={this.onMessageChange.bind(this)}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                          </div>
                          </div>*/}
                    <div className="col-md-12">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply send me an email.
                        </p>
                         <ul className="list-ico">
                                <li><a href="mailto:amalla5@uic.edu"><span className="ion-email"></span> amalla5@uic.edu</a></li>
                          </ul> 
                          </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/aditimallavarapu"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://linkedin.com/in/aditi-mallavarapu-1a691658"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright-footer"> <p>Copyright &copy; 2020
        Created By Aditi Mallavarapu </p></div> 
      </section>
     
    );
   }
    
  
}

export default Contact;
