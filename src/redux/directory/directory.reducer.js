import vlogImage from "../../assets/images/vlog.png";
import galleryImage from "../../assets/images/gallery.png";
import aboutImage from "../../assets/images/about.png";
import shopImage from "../../assets/images/store.png";
import promptsImage from "../../assets/images/prompts.png";
import commissionsImage from "../../assets/images/commissions.png";
import repeatCupcake from "../../assets/images/repeatCupcake.png";
import corner from "../../assets/images/corner.png";

const INITIAL_STATE = {
  sections: [
    {
      title: "vlog",
      imageUrl: `url(${vlogImage})`,
      id: 1,
      linkUrl: "vlog",
    },
    {
      title: "gallery",
      imageUrl: `url(${galleryImage})`,
      id: 2,
      linkUrl: "gallery",
    },
    {
      title: "about",
      imageUrl: `url(${aboutImage})`,
      id: 3,
      linkUrl: "about",
    },
    {
      title: "shop",
      imageUrl: `url(${shopImage}) center no-repeat, 
                url(${corner}) left top, 
                url(${corner}) left bottom, 
                url(${corner}) right top, 
                url(${corner}) right bottom`,
      size: "large",
      id: 4,
      linkUrl: "shop",
    },
    {
      title: "generator",
      imageUrl: `url(${promptsImage}) center no repeat, 
            url(${corner}) left top, 
            url(${corner}) left bottom, 
            url(${corner}) right top, 
            url(${corner}) right bottom`,
      size: "large",
      id: 5,
      linkUrl: "prompts",
    },
    {
      title: "commissions",
      imageUrl: `url(${commissionsImage}), url(${repeatCupcake})`,
      size: "full",
      id: 6,
      linkUrl: "commissions",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
