import './ReviewItem.css'

const ReviewItem = ({name,date,image,comment}) =>{
    return(
        <div className="rvItem">
            <img  className="rvImgCont" src={`./${image}`} alt={`${image}`}/>
            <img className="rvStars" src="./stars.png"/>
            <span className="rvName"> {name}</span>
            <span className="rvDate">{date}</span>
            <p className="rvComment">{comment}</p>
        </div>


    )
}

export default ReviewItem;