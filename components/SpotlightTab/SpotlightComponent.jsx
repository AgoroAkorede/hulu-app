import React, { useState,useEffect,useRef } from 'react'
import classes from './SpotlightComponent.module.css'
import './SpotlightComponent.module.css'

function SpotlightComponent() {

    const ref = useRef(setBackground(`linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url("https://www.hulu.com/static/hitch/s3/attachments/ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg")`))
    
    const [ background, setBackground ] = useState(
        ` linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url("https://www.hulu.com/static/hitch/s3/attachments/ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg")`)
    
    const [ styleText, setStyleText ] = useState("header_child")
    const [ position, setPosition ] = useState('17%')
    const [width, setWidth]=useState('5.5rem')
    const [ article, setArticle ] = useState('Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.')
    const [title, setTitle]=useState('Live Sport')
 
    useEffect(() => {
        
    }, [])
    const backgroundImage = [
        {
            label: 'background1',
            link:` linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url("https://www.hulu.com/static/hitch/s3/attachments/ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg")`
        },
        {
            label: 'background2',
            link:`linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url("https://www.hulu.com/static/hitch/s3/attachments/ckzyp4x986iio1k7rkj43368r-ckuh9mwg007ws1v4zm8i4kk07-ckqiozsqemxsf1u3mw3ihh0ti-news-1600x850-2x-full.jpg")`
        },
        {
            label: 'background2',
            link:`linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url("https://www.hulu.com/static/hitch/s3/attachments/ckzyp5obb6ijq1k7rdave9sam-ckuh9mwj308re1v24oa5phjn9-ckqip2n0m9n5t1u2zln68cft8-biggest-events-1600x850-2x-full.jpg")`
        }
    ]

    const SetBorderStyle = (p,w) => {
        setPosition(p)
        setWidth(w)
    }
   

    return (
        <div className={ classes.container } style={{backgroundImage:background}}>
            
            <div className={ classes.header }>
                <ul className={ classes.headerParent }>
                    
                    <li onClick={ () => {
                        setBackground(backgroundImage[ 0 ].link)
                        SetBorderStyle('17%','5.5rem')
                        setArticle('Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.')
                        setTitle("Live Sport")

                    } } id="1" className={ classes.header_child }>live sports</li>
                    
                    <li  onClick={ () => {
                        setBackground(backgroundImage[ 1 ].link)
                        SetBorderStyle('43%', '8rem')
                        setArticle("Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.")
                        setTitle("Breaking News")
                        
                    } } className={ classes.header_child } >breaking news</li>
                    
                    <li onClick={ () => {
                        setBackground(backgroundImage[ 2 ].link)
                        SetBorderStyle('75%', '5.5rem')
                        setArticle("Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.")
                        setTitle("Big Events")

                    } } className={ classes.header_child }>big events</li>
                    
                </ul>
                <div style={ { left: position, width: width } } className={ classes.border }></div>
                
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        {title}
                    </h2>
                    <article>
                   {article}
                    </article>
                </div>
            </div>
        </div>
    )
}

export default SpotlightComponent
