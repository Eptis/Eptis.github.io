import * as React from "react";
import "../css/style.sass";
import "../css/fonts.scss";

import twitterIcon from "../images/twitter.svg";
import linkedinIcon from "../images/linkedin.svg";
import githubIcon from "../images/github.svg";
import elixirLogo from "../images/elixir-logo.jpg";
import typescriptLogo from "../images/typescript-logo.jpg";
import rubyLogo from "../images/ruby-logo.jpg";
import kotlinLogo from "../images/kotlin-logo.jpg";
import clojureLogo from "../images/clojure-logo.jpg";
import reasonmlLogo from "../images/reasonml-logo.jpg";
import sketchLogo from "../images/sketch-logo.jpg";
import whimsicalLogo from "../images/whimsical-logo.jpg";
import twitterBlack from "../images/twitter-black.svg";
import linkedinBlack from "../images/linkedin-black.svg";
import githubBlack from "../images/github-black.svg";

// markup
const IndexPage = () => {
  return (
    <main>
      {/* <body> */}
      <div className="main">
        <header className="header">
          <h1 className="name">Dennis Tel</h1>
          <h2 className="job-title">
            Fullstack <br />
            Engineer
          </h2>
          <p className="intro">
            I enjoy building high quality products with a focus on
            <strong>usability</strong>, <strong>maintainability</strong> and
            <strong>simplicity</strong> &mdash; in both implementation and
            design.
          </p>

          <div className="socials">
            <a className="twitter" href="https://twitter.com/dennistel90">
              <img alt="Twitter logo" src={twitterIcon} />
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/dennistel/"
            >
              <img alt="LinkedIn logo" src={linkedinIcon} />
            </a>
            <a href="https://github.com/eptis">
              <img src={githubIcon} alt="Github logo" />
            </a>
          </div>
        </header>

        <section className="toolkit-section">
          <h1 className="some-title">My Toolkit of Choice</h1>
          <div className="toolkit">
            <article>
              <img src={elixirLogo} alt="Elixir logo" />
              <div>
                <h2>Elixir</h2>
                <p>
                  My go-to language. Its simple, flexible and makes concurrent
                  solutions &mdash; like real-time interfaces &mdash; easy to
                  build. It's
                  <a href="https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop">
                    REPL
                  </a>
                  provides a fast feedback loop that helps build solutions
                  <em>fast</em> and makes it a joy to work with.
                </p>
              </div>
            </article>

            <article>
              <img src={typescriptLogo} alt="Typescript logo" />
              <div>
                <h2>TypeScript</h2>
                <p>
                  When working on frontend applications my language of choice is
                  TypeScript &mdash; for now. It provides access to the vast
                  JavaScript ecosystem while at the same time help make
                  JavaScript's idiosyncrasies more manageable through it's
                  typesystem.
                </p>
              </div>
            </article>

            <article>
              <img src={rubyLogo} alt="Ruby logo" />
              <div>
                <h2>Ruby</h2>
                <p>
                  The first programming language I learned and still the one I
                  find the most wonderful to write. For any scripting or simple
                  data processing Ruby remains my go-to.
                </p>
              </div>
            </article>

            <article>
              <img src={kotlinLogo} alt="Kotlin logo" />
              <div>
                <h2>Kotlin</h2>
                <p>
                  A mostly Object-Oriented language but highly influenced by
                  functional languages like Scala, Erlang and ML which help with
                  some of the shortcomings of Object Oriented programming. It's
                  a swiss army knife and sometimes feels like Ruby, which makes
                  it a pleasure to work with.
                </p>
              </div>
            </article>

            <article>
              <img src={clojureLogo} alt="Clojure logo" />
              <div>
                <h2>Clojure</h2>
                <p>
                  What attracts me the most to Clojure are the philosophy of the
                  language and the ideas that come from its community. Its
                  <a href="https://www.youtube.com/watch?v=oytL881p-nQ">
                    challenging the way you think about programming
                  </a>
                  which leads you to create simpler and more sophisticated
                  solutions. It can also run in many different environments like
                  the JVM, JavaScript and .NET which means you can write it
                  pretty much everywhere.
                </p>
              </div>
            </article>

            <article>
              <img src={reasonmlLogo} alt="ReasonML logo" />
              <div>
                <h2>ReasonML</h2>
                <p>
                  The number one language that is most likely to replace
                  TypeScript in my toolkit. It has an
                  <a href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">
                    extremely nice type system
                  </a>
                  which is sound and gives it the feel of writing a dynamic
                  language, simply because it figures out the types for you. And
                  its compile times put other compile-to-js languages to shame.
                </p>
              </div>
            </article>

            <article>
              <img src={sketchLogo} alt="Sketch logo" />
              <div>
                <h2>Sketch</h2>
                <p>
                  Even though my main focus is on programming, I actually have a
                  background in design. Because of this I can easily work with
                  designers and help translate their ideas to code. For
                  sketching out ideas and designs not a lot comes close to
                  Sketch and its features.
                </p>
              </div>
            </article>

            <article>
              <img src={whimsicalLogo} alt="Whimsical logo" />
              <div>
                <h2>Whimsical</h2>
                <p>
                  For all your the diagramming, flowcharting and mindmapping
                  needs look no further.
                  <a href="https://whimsical.co">Whimsical</a> is the tool that
                  gets out of the way and lets you focus on structuring your
                  thoughts instead of fiddling with knobs and dials. Useful
                  regardless if you're a designer or developer.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="writing">
          <h1 className="some-title">Some of my writing:</h1>
          <ul className="writing-container">
            <li>
              <article>
                <h2>Agile als bijvoeglijk naamwoord</h2>
                <time dateTime="2020-03-12">March 12th, 2020</time>
                <a href="https://aiden.cx/nl/blog/agile-als-bijvoeglijk-naamwoord">
                  Read More
                </a>
              </article>
            </li>
          </ul>
        </section>
      </div>
      <div className="white">
        <div className="main">
          <section className="history">
            <h1 className="some-title">My Career</h1>
            <article className="item">
              <div className="item-header">
                <div className="line">
                  <div className="bar"></div>
                  <h2>
                    <span>Aiden</span>
                  </h2>
                </div>
                <time dateTime="P365D">2019 - now</time>
              </div>
              <p>
                I'm currently a Fullstack Developer at
                <a href="https://aiden.cx">Aiden</a>, building solutions for
                clients our homegrown platform that enables companies to give
                their clients complex financial advice. I also coach the team
                during the sprints and retrospectives and facilitate an agile
                culture.
              </p>
            </article>

            <article className="item">
              <div className="item-header">
                <div className="line">
                  <div className="bar"></div>
                  <h2>
                    <span>Betty Blocks</span>
                  </h2>
                </div>
                <time dateTime="P730D">2017 - 2019</time>
              </div>
              <p>
                <a href="https://bettyblocks.com">Betty Blocks</a> is developing
                a no-code platform to help non-developers build business
                applications. I contributed to the migration from Ruby to Elixir
                and train new developers in Elixir. Another part of my
                responsibilities were increasing the release frequency of
                features by streamlining our Git strategy and migrate the
                platform to Kubernetes on Azure.
              </p>
            </article>

            <article className="item">
              <div className="item-header">
                <div className="line">
                  <div className="bar"></div>
                  <h2>
                    <span>Wakoopa</span>
                  </h2>
                </div>
                <time dateTime="P1460D">2013 - 2017</time>
              </div>
              <p>
                At <a href="http://wakoopa.com/">Wakoopa</a> I got my first job
                out of University. After doing my internship and thesis here, I
                became responsible for the frontend of its SaaS offering. I
                collaborated with UX Designers to design and implement single
                page applications using <a href="https://emberjs.com/">Ember</a>{" "}
                and
                <a href="https://reactjs.org/">React</a>. I also worked on the
                rest API built with
                <a href="https://rubyonrails.org/">Ruby on Rails</a>. In my
                final year I worked on an iOS and Android app to help research
                participants install Wakoopa's software, built with
                <a href="https://reactnative.dev/">React Native</a>.
              </p>
            </article>

            <article className="item">
              <div className="item-header">
                <div className="line">
                  <div className="bar"></div>
                  <h2>
                    <span>Amsterdam: University of Applied Sciences</span>
                  </h2>
                </div>
                <time dateTime="P1060D">2010 - 2014</time>
              </div>
              <p>
                At the University of Applied Sciences I studied
                <a href="https://www.hva.nl/opleiding/communication-and-multimedia-design/communication-and-multimedia-design.html">
                  Communication and Multimedia design
                </a>
                . The study is focussed on User Experience design, Interaction
                design and Frontend development. Most of my elective courses
                where focussed on Interaction design, information architecture
                and philosophy and ethics. I was a teachers assistent and helped
                teach HTML, CSS and JavaScript to fellow students.
              </p>
            </article>

            <article className="item">
              <div className="item-header">
                <div className="line">
                  <div className="bar"></div>
                  <h2>
                    <span>Graphic Design School of Utrecht</span>
                  </h2>
                </div>
                <time dateTime="P365D">2008 - 2010</time>
              </div>
              <p>
                At the
                <a href="https://glu.nl">Graphic Design School of Utrecht</a> I
                studied All-round Desktop Publishing. I learned to prepare
                documents and books for print and which printing techniques to
                use. I had a few classes in typography and webdesign which
                influenced the rest of my career path.
              </p>
            </article>
          </section>
        </div>
      </div>
      <footer className="main">
        <h1 className="some-title">Drop me a line</h1>
        <p>Always up for a chat. Not interested in job offers though ;)</p>
        <div className="socials-footer">
          <a href="https://twitter.com/dennistel90">
            <img src={twitterBlack} alt="Twitter logo" />
          </a>
          <a href="https://www.linkedin.com/in/dennistel/">
            <img src={linkedinBlack} alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/eptis">
            <img src={githubBlack} alt="Github logo" />
          </a>
        </div>
      </footer>
    </main>
  );

  {
    /* <!-- <script src="/js/highlight.pack.js" type="text/javascript"></script> -->
    <!-- <script>
      hljs.initHighlightingOnLoad();
    </script> --> */
  }
  {
    /* <script src="/js/scripts.js" type="text/javascript"></script> */
  }
};

export default IndexPage;
