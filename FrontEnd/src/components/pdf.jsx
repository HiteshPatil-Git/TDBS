import ShowPassComponent from './ShowPassComponent'
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import { Component, useRef } from 'react';
import jsPDF from "jspdf";
import { Redirect } from 'react-router';
import '../css/button.css'


class pdf extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  componentDidMount() {
    const Example = () => {
      const componentRef = useRef();
      const handlePrint =  useReactToPrint({
        content: () => componentRef.current,
        
      }

      );

      return (

        <div>

          <span style={{ color: "green" }}></span>
          <button onClick={this.logout} class='btn btn-success pull-right'>Logout</button>
             
         
          <ShowPassComponent ref={componentRef} />
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          
          <div className="form-group" >
          <button onClick={handlePrint} class="btn" style={{ width: "50%" }}><i class="fa fa-download"></i> Download E-Pass</button>
          <a style={{ width: "50%" }} class="btn " href="/devotee-scope" role="button">Home</a>
                   
     </div>

        </div>
      );

    };


    render(<Example />, document.querySelector("#root")
    
    
    );
  }
  render() {

    return (
      <div>

      </div>
    );
  }
}

export default pdf;