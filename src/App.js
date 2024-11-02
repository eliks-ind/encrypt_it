import logo_html from "./html.png";
import logo_css from "./css.png";
import logo_js from "./js.png";
import logo_react from "./logo.svg";
import logo_copy from "./copy.png";
import "./App.css";

function App() {
  const encrypt = () => {
    let text = document.getElementsByClassName("input_text")[0].value;
    let len = text.length;
    var result_array = [];
    for (let i = 0; i < len; i++) {
      let b = String.fromCharCode(text.charCodeAt(i) + 2);
      result_array.push(b);
    }
    if (text !== "") {
      document.getElementsByClassName("p_output")[0].innerText =
        result_array.join("");
      document.getElementsByClassName("isCopied")[0].style.display = "none";
    } else {
      document.getElementsByClassName("p_output")[0].innerText =
        "Please enter your text in the input field!";
    }
  };

  const decrypt = () => {
    let text = document.getElementsByClassName("input_text")[0].value;
    let len = text.length;
    var result_array = [];
    for (let i = 0; i < len; i++) {
      let b = String.fromCharCode(text.charCodeAt(i) - 2);
      result_array.push(b);
    }
    if (text !== "") {
      document.getElementsByClassName("p_output")[0].innerText =
        result_array.join("");
      document.getElementsByClassName("isCopied")[0].style.display = "none";
    } else {
      document.getElementsByClassName("p_output")[0].innerText =
        "Please enter your text in the input field!";
    }
  };

  const copy = () => {
    let text_output = document.getElementsByClassName("p_output")[0].innerText;
    navigator.clipboard.writeText(text_output);
    document.getElementsByClassName("isCopied")[0].style.display = "block";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">encrypt it</h1>
      </header>

      <main className="main">
        <input
          type="textarea"
          className="input_text"
          name="text"
          placeholder="Enter the text..."
        />
        <br></br>
        <div className="buttons">
          <button className="encrypt_button" type="button" onClick={encrypt}>
            Encrypt
          </button>
          <button className="decrypt_button" type="button" onClick={decrypt}>
            Decrypt
          </button>
        </div>

        <div className="text_output_container">
          <div className="copy_panel">
            <p className="isCopied">Copied succesfully!</p>
            <button className="copy_btn" onClick={copy}>
              <img src={logo_copy} className="copy_img" alt="copy" />
            </button>
          </div>

          <div className="text_output">
            <p className="p_output">
              Encrypted or decrypted text will appear here...
            </p>
          </div>
        </div>
      </main>

      <footer>
        <h5 className="made_using">Made using</h5>
        <div className="made_using_icons">
          <img src={logo_html} className="html" alt="html" />
          <img src={logo_css} className="css" alt="css" />
          <img src={logo_js} className="js" alt="js" />
          <img src={logo_react} className="React" alt="react" />
        </div>
      </footer>
    </div>
  );
}

export default App;
