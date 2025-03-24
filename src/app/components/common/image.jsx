import Image from "next/image";

const Img = ({ src, alt = "icon", width = 1000, height = 1000, className }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
}

export default Img;