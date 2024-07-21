import './Banner.css'

interface BannerProps {
    imgSrc: string
    imgAlt?: string
}

const Banner = ({ imgSrc, imgAlt }: BannerProps) => {
    return (
        <header className="banner">
            <img src={imgSrc} alt={imgAlt} />
        </header>
    )
}

export default Banner