import React, { useState } from 'react';
import Timeline from './components/Timeline';
import Icon from './assets/username-icon-hd.png';
import PostIcon from './assets/post.png';

const App = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [chirps, setChirps] = useState([
    {
      username: 'Sonic',
      message: 'I like chili dogs!',
      createdAt: `${new Date('2021-02-27T05:30:15.284Z').toLocaleString()}`,
    },
    {
      username: 'Mario',
      message: 'Wahooo!',
      createdAt: `${new Date('2021-02-27T05:30:15.284Z').toLocaleString()}`,
    },
    {
      username: 'PAC-MAN',
      message: 'Wakka wakka!',
      createdAt: `${new Date('2021-02-22T13:33:15.284Z').toLocaleString()}`,
    },
  ]);

  let submitChirp = () => {
    let d = new Date;

    let newChirp = {
      username: newUsername,
      message: newMsg,
      createdAt: d.toLocaleString(),
    };

    setChirps([...chirps, newChirp]);
    emptyInputs();
  };

  let emptyInputs = () => {
    setNewUsername('');
    setNewMsg('');
  };

  let myChirps = chirps.map((chirp, id) => <Timeline key={id} chirp={chirp} />);

  return (
    <>
      <div className="row-lg-12 mb-4 p-3 bg-light">
        <h1>Chirpr</h1>
      </div>

      <div className="row-md m-6 d-flex align-items-start">
        <div id="input-box" className="col-md-3 p-4 bg-light shadow">
          <div className="input-group input-group-sm">
            <span className="input-group-text">
              <img id="felix" src={Felix} alt="" />
            </span>
            <input
              className="form-control"
              type="text"
              id="un-input"
              value={newUsername}
              placeholder="Username"
              onChange={(e) => setNewUsername(e.target.value)}
            ></input>
          </div>

          <div className="input-group input-group-sm">
            <span className="input-group-text">
              <img id="post" src={PostIcon} alt="" />
            </span>

            <textarea
              className="form-control"
              type="text"
              id="msg-input"
              value={newMsg}
              placeholder="What's on your mind?"
              onChange={(e) => setNewMsg(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={submitChirp}>
            Submit chirp
          </button>
        </div>
        <div id="chirp-box" className="col-md-4 rounded shadow">
          {myChirps}
        </div>
      </div>
    </>
  );
};

export default App;
