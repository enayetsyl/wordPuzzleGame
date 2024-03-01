const Demo = () => {
  const style = `     
    .container{
      width: 350px;
      height: 500px;
      background-color: black;
      position: relative;
    }
    input{
      width:100%;
      height: 40px;
      margin-bottom: 20px;
    }
    button{
      border:none;
      background-color: #00a3c4;
      padding: 7px;
      width: 120px;
      border-radius: 5px;
      cursor: pointer;
      position: absolute;
      bottom: 0;
  
    }
    button:hover{
      left: 63%;
    }
  
   
    
    `;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: <style>${style}</style> }}></div>
      <div className="container">
        <form action="">
          <input type="text" />
          <button>Click Here</button>
        </form>
      </div>
    </div>
  );
};

export default Demo;
