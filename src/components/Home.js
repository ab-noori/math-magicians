import algorithm from '../assets/algorithm.gif';

function Home() {
  return (
    <div className="home">
      <div className="intro-frame">
        <h2>Welcome to our page!</h2>
        <p className="text">
          <b>Math magicians</b>
          {' '}
          is a website for all fans of mathematics.
          <br />
          It is a Single Page App (SPA) that allows users to:
        </p>
        <ul>
          <li className="listItem">Make simple calculations.</li>
          <li className="listItem">Read a random design-related quote.</li>
        </ul>
        <p>
          The app is developed using
          {' '}
          <i>React,</i>
          {' '}
          and styled through the
          {' '}
          <i>React basic styling (pre-processed CSS file).</i>
          {' '}
          Navigation is made possible through
          {' '}
          <i>React Router.</i>
        </p>
      </div>

      <div className="algo-frame">
        <img src={algorithm} alt="algoritm" />
      </div>
    </div>
  );
}
export default Home;
