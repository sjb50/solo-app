import React, {Component} from "react"


class Test extends Component{
  state={
    date:"",
  }

  find(){
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Client ID:FDtE3qcTutnAmURklIU1yZ/iyDS3tEUuqv1o08DfswM=");
myHeaders.append("Cookie", "Lenovo_SessionID=4r3n1uy3p0e4pvxah0o5g3tvi1b_7mjbejulca7u72zjga2");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://supportapi.lenovo.com/v2.5/warranty?Serial=P204VAWC", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  render () {
    return (
    <div>
      <div> is the test page</div>
      <button type="checkbox" onClick={this.find}>Search</button>
      <p>{this.state.date}</p>
    </div>
  );
  }
}

export default Test;
