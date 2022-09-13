import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SeeFi: Trade web3 domain assets freely</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <div className="wrapper">
              <a href="/" className="StyledLinkLogo">
                <img src="/images/seefi.png" alt="SeeFi"/>
                <strong>SeeFi</strong>
              </a>
            
            <div className="rightContainer">
                <a href="https://twitter.com/SeefiGlobal" target="blank" className="socialmedia">
                  <img src="/images/twitter.png" alt="Twitter" className="socialmedia-logo"/>
                  <span className="logo-text">Twitter</span>
                </a>
                <a href="https://discord.com/invite/g6KQWNR9MD" target="blank" className="community">
                  <img src="/images/discord.png" alt="Discord" className="community-logo"/>
                  <span className="logo-text">Discord</span>
                </a>
            </div>
          </div>
          
        </header>
        <section>
          <article>
            <div className="bluecube">
              <img src="/images/bluecube.png"></img>
            </div>
            
            <div className="project-intro">
              <h2 className="intro-title">SeeFi</h2>
              <p className="intro-detail">A universal name service network connects people,information,and assets across all blockchains and dapps</p>
            </div>
          </article>
        </section>
        
      </main>

      <footer>
        <a href="/" target="_blank">
          Powered by{' '}
          <img src="/images/seefi.png" alt="SeeFi" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          display: flex;
          justify-content: space-around;
          box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px;
          height: 60px;
          width: 100%;
          top: 0px;
          position: fixed;
          align-items: center;
          background: rgb(255, 255, 255);
          z-index: 1000;
        }
        .wrapper {
          width: 100%;
          display: flex;
          height: 100%;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          max-width: 1150px;
        }
        .StyledLinkLogo {
          font-size: 0px;
        }
        .rightContainer {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          position: relative;
        }
        .socialmedia {
          min-width: 120px;
          cursor: pointer;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .socialmedia-logo {
          height: 28px;
          width: 28px;
          margin-right: 10px;
        }
        .logo-text {
          color: #333333;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          
        }
        .community {
          margin-left: 48px;
          cursor: pointer;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .community-logo {
          height: 30px;
          width: 30px;
          margin-right: 10px;
        }
        section {
          margin-top: 60px;
          display: flex;
          width: 100vw;
          max-width: 1150px;
          justify-content: space-between;
          align-self: center;
          flex: 1 1 auto;
        }
        article {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .bluecube {
          object-fit: cover;
        }
        .project-intro {
          margin: 0px;
        }
        .intro-title {
          font-weight: 700;
          font-size: 55px;
          line-height: 77px;
          color: #000000;
        }
        .intro-detail {
          font-weight: 500;
          font-size: 22px;
          line-height: 33px;
          color: #333333;
          margin-bottom: 29px;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        
        .logo {
          height: 1.5em;
        }
        
        ::-moz-placeholder { color: ##999999; font-size: 18px; }
        ::-webkit-input-placeholder { color: #999999;font-size: 18px; }
        :-ms-input-placeholder { color:#999999;font-size: 18px; }
        @media (max-width: 600px) {
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          header {
            display: flex;
            justify-content: space-around;
            box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px;
            height: 60px;
            width: 100%;
            top: 0px;
            position: fixed;
            align-items: center;
            background: rgb(255, 255, 255);
            z-index: 1000;
          }
          .wrapper {
            width: 100%;
            display: flex;
            height: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            max-width: 1150px;
          }
          .StyledLinkLogo {
            font-size: 0px;
          }
          .rightContainer {
            display: flex;
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
            position: relative;
          }
          .socialmedia {
            min-width: 120px;
            cursor: pointer;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .socialmedia-logo {
            height: 28px;
            width: 28px;
            margin-right: 10px;
          }
          .logo-text {
            color: #333333;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
          }
          .community {
            margin-left: 48px;
            cursor: pointer;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .community-logo {
            height: 30px;
            width: 30px;
            margin-right: 10px;
          }
          section {
            margin-top: 60px;
            display: flex;
            width: 100vw;
            max-width: 1150px;
            justify-content: space-between;
            align-self: center;
            flex: 1 1 auto;
          }
          article {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .bluecube {
            object-fit: cover;
          }
          .project-intro {
            margin: 0px;
          }
          .intro-title {
            font-weight: 700;
            font-size: 55px;
            line-height: 77px;
            color: #000000;
          }
          .intro-detail {
            font-weight: 500;
            font-size: 22px;
            line-height: 33px;
            color: #333333;
            margin-bottom: 29px;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          footer img {
            margin-left: 0.5rem;
          }
  
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo {
            height: 1.5em;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
