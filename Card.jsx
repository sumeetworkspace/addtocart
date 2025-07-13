import './Card.css'

const Card = ({image,title,price,rating,info,onAddtoCart}) =>{



    return(
        <div className='All'>
            <div className='Pic'>
            <img src={image} alt={title} className='CarImg' />
            </div>
            <div className='info'>
               <h2> {title} </h2>
                <h4>{price} </h4>
               <h4> {rating} </h4>
               <p> {info} </p>
            </div>
               <button onClick={()=>onAddtoCart({image,title,price,rating,info})}>Add to cart</button>
        </div>
    )
}

export default Card;
