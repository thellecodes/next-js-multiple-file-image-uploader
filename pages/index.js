import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../components/Wrapper";
import FileReaderInput from "react-file-reader-input";
import { useSelector, connect } from "react-redux";
import { Button } from "react-bootstrap";

/* REDUX actions */
import { uploadAction, sendAction } from "../store/actions/mediaActions";

const Index = ({ uploadAction, sendAction }) => {
  const handleChange = (e, results) => {
    results.forEach((result) => {
      const [e, file] = result;
      uploadAction(e, file);
    });
  };

  return (
    <Wrapper>
      <div className="upload-cover">
        <div className="upload-top">
          <FileReaderInput
            as="binary"
            id="my-file-input"
            onChange={handleChange}
            multiple={true}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src="/upload.svg" />
          </FileReaderInput>
        </div>
        <div className="upload-bottom">
          <div className="lists">
            <div className="boxes">
              <div className="box">
                <img src="/house/house1.jpg" />
              </div>
              <div className="box">
                <img src="/house/house2.jpg" />
              </div>
              <div className="box">
                <img src="/house/house3.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="send-btn">
          <Button onClick={sendAction}>Send</Button>
        </div>
      </div>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  media: state.media,
});

export default connect(mapStateToProps, { uploadAction, sendAction })(Index);
