import { Link } from "react-router-dom";

function Aboutsec({testpername, testnum}){
  console.log(testpername, testnum);
  return(
    <div>
      <h1>About Page Content</h1>
      <h2>{testpername}</h2><p>sani no: {testnum}</p>
      <Link to={"/"}>Click to home</Link><br></br>
      <a href="/">test</a>
    </div>
  );
}
export default Aboutsec;