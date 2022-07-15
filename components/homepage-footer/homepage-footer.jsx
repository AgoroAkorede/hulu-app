import React from 'react'
import classes from './homepage-footer.module.scss'

function HomepageFooter() {
    return (
        <div className={classes.homepage_footer}>
            <div className={classes.homepage_footer_content}>
                <ul>
                    BROWSE
                    <li className={ classes.homepage_footer_link }>Streaming Library</li>
                    <li className={ classes.homepage_footer_link }>Live TV</li>
                    <li className={ classes.homepage_footer_link }>Live News</li>
                    <li className={ classes.homepage_footer_link }>Live Sports</li>
                </ul>
                <ul>
                   
                    <li className={ classes.homepage_footer_link }>Tv Shows</li>
                    <li className={ classes.homepage_footer_link }>Movies</li>
                    <li className={ classes.homepage_footer_link }>Originals</li>
                    <li className={ classes.homepage_footer_link }>Networks</li>
                    <li className={ classes.homepage_footer_link }>Kids</li>
                    <li className={ classes.homepage_footer_link }>FX</li>
                </ul>
                <ul>
                   
                    <li className={ classes.homepage_footer_link }>HBO Max</li>
                    <li className={ classes.homepage_footer_link }>Cinemax</li>
                    <li className={ classes.homepage_footer_link }>Showtime</li>
                    <li className={ classes.homepage_footer_link }>STARZ</li>
                </ul>

                <ul>
                    <li className={ classes.homepage_footer_link }>Hulu, Disney+, and ESPN+</li>
                    <li className={ classes.homepage_footer_link }>Hulu(No Ads)</li>
                    <li className={ classes.homepage_footer_link }>Disney+, and ESPN</li>
                    <li className={ classes.homepage_footer_link }>Student Discount</li>
                </ul>

                <ul>
                    HELP
                    <li className={ classes.homepage_footer_link }>Account & Billing</li>
                    <li className={ classes.homepage_footer_link }>Plans & Pricing</li>
                    <li className={ classes.homepage_footer_link }>Supported Devices</li>
                    <li className={ classes.homepage_footer_link }>Accessbility</li>
                </ul>

                <ul>
                    ABOUT US
                    <li className={ classes.homepage_footer_link }>Shop Hulu</li>
                    <li className={ classes.homepage_footer_link }>Press</li>
                    <li className={ classes.homepage_footer_link }>Jobs</li>
                    <li className={ classes.homepage_footer_link }>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default HomepageFooter
