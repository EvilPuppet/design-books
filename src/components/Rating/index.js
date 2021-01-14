import React, {useMemo} from "react";
import { StarIcon } from './starIcon';
import './index.css';


function RatingIcon(props) {
    const {index, rating, hoverRating, onMouseEnter, onMouseLeave,onSaveRating} = props;
    const fill = useMemo(() => {
        if (hoverRating >= index) {
          return '#564C04';
        } else if (!hoverRating && rating >= index) {
          return '#564C04';
        }
        return '#E7CF1C';
      }, [rating, hoverRating, index]);
    return (
        <div 
        key={index}
        className="cursor-pointer"
        onMouseEnter={() => onMouseEnter(index)} 
        onMouseLeave={() => onMouseLeave()} 
        onClick={() => onSaveRating(index)}>
        <StarIcon fill={fill} />
      </div>
    );
  }
  
  export default RatingIcon;