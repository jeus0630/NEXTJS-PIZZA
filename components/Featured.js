import styles from '/styles/Featured.module.scss';
import Image from "next/image";

const Featured = () => {

    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ]

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}}>
                <Image src={"/img/arrowl.png"} layout={"fill"}></Image>
            </div>
            <div className={styles.wrapper}>
                {
                    images.map((image, idx) => (
                        <div className={styles.imgContainer} key={idx}>
                            <Image src={image} layout="fill"></Image>)
                        </div>
                    ))
                }
            </div>
            <div className={styles.arrowContainer} style={{right: 0}}>
                <Image src={"/img/arrowr.png"} layout={"fill"}></Image>
            </div>
        </div>
    );
};

export default Featured;