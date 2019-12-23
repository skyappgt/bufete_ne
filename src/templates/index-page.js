import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import logo from '../img/Norma Esquivel Mendoza-logo-white.png'
import addToMailchimp from 'gatsby-plugin-mailchimp'



export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  // mainpitch,
  description,
  intro,
}) => {
  const [ email, setEmail] = useState('');
  const [ suscrito, setSuscrito ] = useState(false);

  const handleSubmit = e =>{
    e.preventDefault();
     addToMailchimp(email) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
      if(data.result =='error'){
        alert('El usuario '+email+' ya está suscrito!')
        setEmail('')     
      }else if(data.result =='success'){
        alert('Gracias por Suscribirse!!')
        setSuscrito(data)
        setEmail(' ')
      }
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }
  console.log(suscrito)
  
    return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          // backgroundPosition: `top left`,
          // backgroundAttachment: `fixed`,
          textAlign:'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              // boxShadow:
              //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              // backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          > 
            <img className="indeximg" src={logo} alt="Norma Esquivel" />
  
            <div className="suscribe-container">
              <form onSubmit={handleSubmit} className='suscribe-form' >
              {!suscrito &&
                <div className="suscribe">    
                    <input class="email" onChange={e => setEmail(e.target.value)} type="email" value={email} name="EMAIL" id="mce-EMAIL" placeholder=" e-mail" required/> 
                    <input class="suscribe-button" type="submit" value="Suscribirse" name="suscribirse" id="mc-embedded-subscribe" />
                </div>
              }
              </form>
              
            </div>
            
          </h1>
          {/* <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3> */}
          
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {/* <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div> */}
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  {/* <Features gridItems={intro.blurbs} /> */}
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/servicios">
                        Ver los Servicios
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Ultimos Posts
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Leer más..
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        // intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`
