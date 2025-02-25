
import "../style.scss";
import { Link } from "react-router-dom";
const ForumImg = () => {
    const images = [
        { src: "/images/Legends.jpg",id:"Legends", alt: "都市傳說",link:"/Forum"  },
        { src: "/images/Horror.jpg",id:"Horror", alt: "恐怖獵奇",link:"/Forum" },
        { src: "/images/Exorcism.jpg",id:"Exorcism", alt: "驅邪收驚",link:"/Forum"  },
        { src: "/images/Creeps.jpg", id:"Creeps",alt: "恐怖作品",link:"/Forum"  },
        { src: "/images/Ruins.jpg", id:"Ruins",alt: "廢墟探險",link:"/Forum" },
    ];
    return (
        <div className="forum-gallery">

            {images.map((image, index) => (

                <div id={image.id}  key={index} >
                    <Link to={image.link} className="image-link">
                        <img src={image.src} alt={image.alt} />
                        <span className="text-link">{image.alt}</span>
                    </Link>
                    
                </div>
            ))}
        </div>
    )

}
export default ForumImg