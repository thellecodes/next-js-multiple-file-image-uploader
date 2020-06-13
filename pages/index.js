import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../components/Wrapper";
import Link from "next/link";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  return (
    <Wrapper>
      <div className="upload-cover">
        <div className="upload-top">
          <img src="/upload.svg" />
        </div>
        <div className="upload-bottom">
          <div className="lists">
            <div className="boxes">
              <div class="box">
                <img src="/house/house1.jpg" />
              </div>
              <div class="box">
                <img src="/house/house2.jpg" />
              </div>
              <div class="box">
                <img src="/house/house3.jpg" />
              </div>
              <div class="box">
                <img src="/house/house4.jpg" />
              </div>
              <div class="box">
                <img src="/house/house5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
