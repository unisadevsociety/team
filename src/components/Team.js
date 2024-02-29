import React from "react";
import TestImg from "./images/test.png";
import Akonaho from "./images/Akonaho Muneri.jpeg";
import Meacian from "./images/Meacian Fransman.jpeg";
import Thobani from "./images/Thobani Mlangeni.jpg";
import Ditshego from "./images/ditshego malepe.jpg";
import Puselotso from "./images/puselotso1.jpg";
import Lerato from "./images/lerato.jpg";
import Elton from "./images/Elton2.jpg";
import "./styles/Teams.css";

function Team() {
  return (
    <div className="Team">
      <div className="homebuttoncontainer">
        <a
          href="https://unisadevsociety.github.io/site"
          className="homebuttontext"
        >
          <div className="homebutton">Home</div>
        </a>
      </div>
      <div className="teamtext">Meet Our Team</div>
      <div className="container">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <input type="radio" name="dot" id="three" />
        <input type="radio" name="dot" id="four" />

        <div className="main-card">
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Elton} />
                </div>
                <div className="details">
                  <div className="name">Elton Maruthulle</div>
                  <div className="job">Chairperson</div>
                </div>
                <div className="media-icons">
                  <a
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BjG2SDeNvQR2p204EAKJu1w%3D%3D"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/elton-maruthulle" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://elton-maruthulle.github.io/My_Portfolio/"
                    target="_blank"
                  >
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="mailto:eltonmaruthulle@gmail.com" target="_blank">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Second Card Begins Here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={TestImg} />
                </div>
                <div className="details">
                  <div className="name">Quinton Nkuna</div>
                  <div className="job">Vice Chairperson</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Third Card begins here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={TestImg} />
                </div>
                <div className="details">
                  <div className="name">Mafia</div>
                  <div className="job"> Deputy Chairperson</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* first row cards ends here here */}
          {/* Second row begins here */}
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Puselotso} />
                </div>
                <div className="details">
                  <div className="name"> Puseletso Mafuma </div>
                  <div className="job"> Secretary</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Second Card Begins Here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Meacian} />
                </div>
                <div className="details">
                  <div className="name">Meacian Fransman</div>
                  <div className="job"> Public Relations Officer</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Third Card begins here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Thobani} />
                </div>
                <div className="details">
                  <div className="name">Thobani Mlangeni</div>
                  <div className="job">Treasure</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* thrird row starts here */}
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Ditshego} />
                </div>
                <div className="details">
                  <div className="name">Ditshego Malepe</div>
                  <div className="job">Outreach Coordinator</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Second Card Begins Here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Lerato} />
                </div>
                <div className="details">
                  <div className="name">Lerato Ratos</div>
                  <div className="job">Mentorship Coordinator</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Third Card begins here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={TestImg} />
                </div>
                <div className="details">
                  <div className="name">Mongezi Radebe </div>
                  <div className="job">Webmaster</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* forthrowstarts here */}
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={TestImg} />
                </div>
                <div className="details">
                  <div className="name">Sulaimaan Mohamed</div>
                  <div className="job">Event Coodinator</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Second Card Begins Here */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={Akonaho} />
                </div>
                <div className="details">
                  <div className="name">Akonaho Muneri</div>
                  <div className="job">Data&Operations Coordinator</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Third Card begins here */}
            <div className="card">
              {/* <div className="content">
                <div className="img">
                  <img src={TestImg} />
                </div>
                <div className="details">
                  <div className="name">Akonaho Muneri</div>
                  <div className="job">Web Developer</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="button">
          <label for="one" className="one active"></label>
          <label for="two" className="two"></label>
          <label for="three" className="three"></label>
          <label for="four" className="four"></label>
        </div>
        <div className="dotdot">
          <div className="dotdotwrapper">
            <div className="dotdottext"></div>
          </div>
        </div>
        <div className="taptonaivigate">
          Tap the bubble to navigate through.
        </div>
      </div>
    </div>
  );
}

export default Team;
