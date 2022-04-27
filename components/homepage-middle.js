 import classes from './homepage-middle.module.css'
import ImageCard from '../components/image-card/image-card'
import ScrollDown from '../components/scrollDown/scrollDown.component'

function HomepageMiddle() {
    return (
        <div className={ classes.main }>
            <div className={ classes.top }>
                <p  className={ classes.text }>INCLUDED IN ALL PLANS</p>
                <h1 className={classes.title}>All the TV you love</h1>
            </div>
            <p className={ classes.normal_text }>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
            <div className={classes.image_library} >
                <ImageCard className={ classes.images }
                    text='Past and Current Seasons'
                    title='Tv Shows'
                    image='https://www.hulu.com/static/hitch/s3/attachments/ckzix4ce0m28n1k7rwhwjufa7-ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x-full.jpg' />
                <ImageCard
                    text='News & Classic'
                    title='Movies'
                    image='https://www.hulu.com/static/hitch/s3/attachments/ckzix6os0m2cl1k7rmtowojwd-cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1-full.jpg' />
                <ImageCard
                    text='GroundBreaking'
                    title='Hulu Originals'
                    image='https://www.hulu.com/static/hitch/s3/attachments/ckzix9rkis6t31v5mteb3tnon-ckzix7nm8s6q01v5mrhx8mjms-cktarx0vs0o9q1w7av35olnl8-nine-perfect-strangers-category-poster-tile-294x450-2x-full-full.jpg' />
                <ImageCard
                     text='Add on'
                    title='Premiums'
                    image='https://www.hulu.com/static/hitch/s3/attachments/ckzixaonhhgrc1k6w2bn2vte1-cktaw41ct0trg1v5yjb2aysun-billions-category-poster-tile-v1-294x450-2x-full.jpg' />
            </div>

            <div>
                <p className={ classes.text }>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+</p>
                <p className={ classes.title }>Live TV Makes It Better</p>
                <p className={ classes.normal_text }>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</p>

                <p className={classes.small_text}>18+ only. Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately and access ESPN+ content via Hulu. Location data required to watch certain content. Offer valid for eligible subscribers only. 
                Unlimited DVR recording is not available for on-demand shows.
                </p>
                <div className={ classes.special_text }>view channels in your area</div>
                
                {/* <ScrollDown /> */}
            </div>
            
        </div>
    )
}


export default HomepageMiddle