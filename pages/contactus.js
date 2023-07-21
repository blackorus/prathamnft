import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

const contactus = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🗺 ADDRESS</h3>
              <p>
                421202, Thakurwadi, Dombivli(west), Mumbai, India
              </p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>💌 EMAIL</h3>
              <p>realprathamsingh@gmail.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>☎ PHONE</h3>
              <p>+91-0123456789</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🌏 SOCIALS</h3>
              <a href="https://www.facebook.com/realprathamsingh?mibextid=ZbWKwL">
                <TiSocialFacebook />
              </a>
              <a href="https://www.linkedin.com/in/pratham-singh-7321b41b3/">
                <TiSocialLinkedin />
              </a>
              <a href="https://www.instagram.com/realprathamsingh/">
                <TiSocialInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UCrOihalh3Hg9sFIHBABLI1Q">
                <TiSocialYoutube />
              </a>
              <a href="https://twitter.com/infostationco">
                <TiSocialTwitter />
              </a>
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default contactus;
